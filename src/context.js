import React, { useState, useCallback, useEffect } from "react";
import { getRepoIssues } from "./api/api";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("facebook");
  const [repo, setRepo] = useState("create-react-app");
  const [issues, setIssues] = React.useState([]);

  const getIssues = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getRepoIssues(username, repo);
      data ? setIssues(data) : setIssues([]);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, [username, repo]);

  useEffect(() => {
    getIssues();
  }, [username, repo]);

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

export { AppContext, AppProvider };
