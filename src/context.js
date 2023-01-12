import React, { useState, useCallback, useEffect } from "react";
import { getRepoIssues, getIssueDetails} from "./api/api";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("facebook");
  const [repo, setRepo] = useState("create-react-app");
  const [issues, setIssues] = React.useState([]);

  const [issueNum, setIssueNum] = useState('12956');
  const [issueInfo, setIssueInfo] = useState('');

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


  const getIssue = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getIssueDetails(username, repo, issueNum);
      console.log('DETAILS' ,data)
      data ? setIssueInfo(data) : setIssueInfo([]);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, [issueInfo]);

  useEffect(() => {
    getIssues();
  }, [username, repo]);

  useEffect(() => {
    getIssue();
  }, [issueNum]);

  

  return (
    <AppContext.Provider
      value={{
        loading,
        username,
        setUsername,
        repo,
        setRepo,
        issues,
        issueInfo,
        setIssueNum
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
