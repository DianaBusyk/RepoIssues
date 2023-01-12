import React, { useContext } from "react";
import { AppContext } from "../../context";
import "./issue-details.css";
import { Link } from "react-router-dom";

export default function IssueDetails() {
  const { issueInfo } = useContext(AppContext);
  const { title, labels, assignee, comments, state, body } = issueInfo;
  console.log("INFO", issueInfo);
  return (
    <div className="detail-container">
      <h4>Details of Issue</h4>
      <table className="table table-hover detail-table">
        <tbody>
          <tr>
            <th scope="row">Title</th>
            <td>{title ? title : "No title"}</td>
          </tr>
          <tr>
            <th scope="row">Labels</th>
            <td>
              {labels?.length != 0
                ? labels?.map((label, key) => {
                    return <div key={key}>{label.name}</div>;
                  })
                : "No labels"}
            </td>
          </tr>
          <tr>
            <th scope="row">Assignee</th>
            <td>{assignee ? assignee.login : "No assignee"}</td>
          </tr>
          <tr>
            <th scope="row">Number of comments</th>
            <td>{comments}</td>
          </tr>
          <tr>
            <th scope="row">Status</th>
            <td>{state}</td>
          </tr>
        </tbody>
      </table>
      <div className="issue-detail-body">{body ? body : "No body"}</div>
      <div className="div-back-btn">
        <button className="btn btn-primary back-btn">
          <Link className="back-btn-link" to="/">
            Back to all issues
          </Link>
        </button>
      </div>
    </div>
  );
}
