import React from "react";
import "./issue.css";
import { Link } from 'react-router-dom';

export default function Issue({id, title, labels, assignees, comments, created_at }) {
  
  return (
      <div className="card border-secondary mb-3">
        <div className="card-header">Created: {created_at}</div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            labels: {labels != 0 ? labels.map((label) => {
               return <span className="card-text">{label.name}; </span>
            }): 'no labels'}
          </p>
          <p className="card-text">
            assignees: { assignees != 0 ? assignees.map((assignee) => {
              return <span className="card-text">{assignee.name}</span>
            }) : 'no assignees'}
          </p>
          <p className="card-text">
            comments: {comments}
          </p>
          <Link to={`/cocktail/${id}`}>
          Read details
        </Link>
        </div>
      </div>
  );
}
