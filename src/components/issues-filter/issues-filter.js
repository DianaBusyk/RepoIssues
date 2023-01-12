import React, { useContext } from "react";
import { AppContext } from "../../context";
import "./issues-filter.css";

const IssuesFilter = () => {
  const {
    issues,
    repoLabels,
    repoAssignees,
    setShownIssues,
    setSortDirection,
    sortDirection,
  } = useContext(AppContext);

  const filterIssues = (field, id) => {
    if (id == 1) {
      setShownIssues(issues);
    } else {
      const filteredIssues = issues.filter((issue) => {
        return issue[field].some((item) => item.id === id);
      });
      console.log(filteredIssues, "filteredIssues");
      setShownIssues(filteredIssues);
    }
  };

  const setSortingDirection = (e) => {
    const direction = e.target.value;
    setSortDirection(direction);
  };
  console.log(repoLabels, "repoLabels");
  return (
    <div className="filter-container">
      <div className="select-container">
        <select
          className="form-select"
          onChange={(e) => filterIssues("labels", parseInt(e.target.value))}
        >
          {repoLabels.map((label, key) => {
            return (
              <option key={key} value={label.id}>
                {label.name}
              </option>
            );
          })}
        </select>

        <select
          className="form-select"
          onChange={(e) => filterIssues("assignees", parseInt(e.target.value))}
        >
          {repoAssignees.map((assignee, key) => (
            <option key={key} value={assignee.id}>
              {assignee.login}
            </option>
          ))}
        </select>
        <select
          className="form-select"
          onChange={setSortingDirection}
          value={sortDirection}
        >
          <option value="desc">of the newest</option>
          <option value="asc">of the oldest</option>
        </select>
      </div>
    </div>
  );
};

export default IssuesFilter;
