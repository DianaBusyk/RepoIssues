import React, { useState, useCallback, useEffect } from "react";
import { getRepoIssues, getIssueDetails } from "./api/api";
import {ErrorPopup} from "./alertPopup"
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("facebook");
  const [repo, setRepo] = useState("create-react-app");
  const [issues, setIssues] = React.useState([]);

  const [issueNum, setIssueNum] = useState("12956");
  const [issueInfo, setIssueInfo] = useState("");

  const [repoLabels, setRepoLabels] = useState([]);
  const [repoAssignees, setRepoAssignees] = useState([]);
  const [shownIssues, setShownIssues] = useState([]);

  const [sortDirection, setSortDirection] = useState("asc");

  const getFilteredIssues = async (usName, usRepo) => {
    setLoading(true);

    try {
      const data = await getRepoIssues(usName, usRepo);
      const currentLabels = [
        {
          name: "all",
          id: 1,
        },
      ];
      const currentAssignees = [
        {
          login: "all",
          id: 1,
        },
      ];
      data.forEach((issue) => {
        issue.labels.forEach((label) => {
          if (
            !currentLabels.some(
              (existingLabel) => existingLabel.id === label.id
            )
          ) {
            currentLabels.push(label);
          }
        });
        issue.assignees.forEach((assignee) => {
          if (
            !currentAssignees.some(
              (existingAssignee) => existingAssignee.id === assignee.id
            )
          ) {
            currentAssignees.push(assignee);
          }
        });
      });
      setIssues(data);
      setLoading(false);
      setShownIssues(data);
      setRepoLabels(currentLabels);
      setRepoAssignees(currentAssignees);
    } catch (error) {
      ErrorPopup.ErrorPopup(error)
    }
    setLoading(false);
  };

  const getIssue = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getIssueDetails(username, repo, issueNum);
      console.log("DETAILS", data);
      data ? setIssueInfo(data) : setIssueInfo([]);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, [issueInfo]);

  useEffect(() => {
    getFilteredIssues(username, repo);
  }, []);

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
        setIssueNum,
        repoLabels,
        setRepoLabels,
        repoAssignees,
        setRepoAssignees,
        shownIssues,
        setShownIssues,
        sortDirection,
        setSortDirection,
        setLoading,
        getFilteredIssues,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
