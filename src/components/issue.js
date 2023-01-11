import React from "react";
import "./issue.css";
import { Link } from 'react-router-dom';
import dayjs from "dayjs";

export default function Issue({id, title, labels, assignees, comments, created_at }) {
  
  return (
      <div className="card border-secondary mb-3">
        <div className="card-header">Created: {dayjs(created_at).format("DD MMM YYYY | HH:mm")} </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            labels: {labels != 0 ? labels.map((label, key) => {
               return <span key={key} className="card-text">{label.name}; </span>
            }): 'no labels'}
          </p>
          <p className="card-text">
            assignees: { assignees != 0 ? assignees.map((assignee, key) => {
              return <span key={key} className="card-text">{assignee.login}</span>
            }) : 'no assignees'}
          </p>
          <p className="card-text">
            comments: {comments}
          </p>
          <Link to={`/issue/${id}`}>
          Read details
        </Link>
        </div>
      </div>
  );
}
