import axios from "axios";

const getRepoIssues = async (username, repo) => {
  const { data } = await axios.get(
    `https://api.github.com/repos/${username}/${repo}/issues`
  );
  console.log('ALL DATA',data)
  const newIssues = data.map((item) => {
    const { id, title, labels, assignees, comments, created_at, number } = item;
    return {
      id,
      title,
      labels,
      assignees,
      comments,
      created_at,
      number,
    };
  });
  return newIssues;
};

const getIssueDetails = async (username, repo, number ) => {
    const { data } = await axios.get(
        `https://api.github.com/repos/${username}/${repo}/issues/${number}`
      );
      return data;
}

export { getRepoIssues, getIssueDetails };
