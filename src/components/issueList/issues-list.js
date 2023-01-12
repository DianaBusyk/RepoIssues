import React, { useContext, useState } from "react";
import Issue from "../issue/issue";
import Loading from "../loading/loading";
import { AppContext } from "../../context";
import "./issues-list.css";
import IssuesFilter from "../issues-filter/issues-filter";

function IssuesList() {
  const { loading, shownIssues, sortDirection } = useContext(AppContext);

  const sortCreatedDateAsc = (a, b) => {
    const aCreatedDate = Date.parse(a.created_at);
    const bCreatedDate = Date.parse(b.created_at);
    if (aCreatedDate < bCreatedDate) {
      return -1;
    }
    if (aCreatedDate > bCreatedDate) {
      return 1;
    }
    return 0;
  };

  const sortCreatedDateDesc = (a, b) => {
    const aCreatedDate = Date.parse(a.created_at);
    const bCreatedDate = Date.parse(b.created_at);
    if (aCreatedDate > bCreatedDate) {
      return -1;
    }
    if (aCreatedDate < bCreatedDate) {
      return 1;
    }
    return 0;
  };
  console.log(shownIssues, "shownIssues");
  return (
    <div>
      {loading && (
        <div className="main-list">
          <Loading />
        </div>
      )}

      {!loading && (
        <div className="issues-container">
          <IssuesFilter />
          <div className="main-list">
            {shownIssues.length > 0 ? (
              shownIssues
                .sort(
                  sortDirection === "asc"
                    ? sortCreatedDateAsc
                    : sortCreatedDateDesc
                )
                .map((item) => {
                  console.log(item);
                  const {
                    id,
                    title,
                    labels,
                    assignees,
                    comments,
                    created_at,
                    number,
                  } = item;
                  return (
                    <Issue
                      id={id}
                      key={id}
                      title={title}
                      labels={labels}
                      assignees={assignees}
                      comments={comments}
                      created_at={created_at}
                      number={number}
                    />
                  );
                })
            ) : (
              <h5>No issues in this repo</h5>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default IssuesList;
