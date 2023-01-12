import React, { useContext } from "react";
import Issue from "../issue/issue";
import Loading from "../loading/loading";
import { AppContext } from "../../context";
import './issues-list.css'

function IssuesList() {
  const { issues, loading } = useContext(AppContext);

  return (
    <div >
      {loading && (
        <div className="main-list">
          <Loading />
        </div>
      )}
      
      {!loading && (
        <div  className="main-list">
          { issues.length > 0 ? issues.map((item) => {
            const { id, title, labels, assignees, comments, created_at,number } = item;
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
          }) : <h5>No issues in this repo</h5> }
        </div>
      )}
    </div>
  );
}

export default IssuesList;
