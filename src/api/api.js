import React from "react";
import axios from "axios";

const getRepoIssues = async (username, repo) => {
  const { data } = await axios.get(
    `https://api.github.com/repos/${username}/${repo}/issues`
  );
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
  return newIssues;
};

export { getRepoIssues };
