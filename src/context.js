import React, { useContext, useState, useCallback, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("facebook");
  const [repo, setRepo] = useState("create-react-app");
  const [issues, setIssues] = React.useState([]);

  const getRepoIssues = `https://api.github.com/repos/${username}/${repo}/issues`;

  const fetchIssues = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${getRepoIssues}`);
      const data = await response.json();
      console.log(data);
      
      if (data) {
        const newIssues = data.map((item) => {
          const { id, title, labels, assignees, comments, created_at } = item;

          return {
            id,
            title,
            labels,
            assignees,
            comments,
            created_at,
          };
        });

        setIssues(newIssues);
      } else {
        setIssues([]);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [username, repo]);

  useEffect(() => {
    fetchIssues();
  }, [username, repo, fetchIssues]);

  return (
    <AppContext.Provider
      value={{
        loading,
        username,
        setUsername,
        repo,
        setRepo,
        issues,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
