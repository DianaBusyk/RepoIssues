import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import { getRepoIssues } from "../../api/api";

const SearchForm = () => {
  const [inputUsername, setInputUsername] = useState("facebook");
  const [inputRepo, setInputRepo] = useState("create-react-app");

  const {
    username,
    repo,
    setUsername,
    setRepo,
    setLoading,
    setShownIssues,
    setRepoLabels,
    setRepoAssignees,
    getFilteredIssues
  } = useContext(AppContext);

  const handleSubmit = () => {
    setLoading(true);
    setUsername(inputUsername);
    setRepo(inputRepo);
    getFilteredIssues(inputUsername,inputRepo)
  };

  return (
    <div className="d-flex">
      <input
        className="form-control me-sm-2"
        type="search"
        placeholder="username"
        onChange={(e) => setInputUsername(e.target.value)}
        value={inputUsername}
      />
      <input
        className="form-control me-sm-2"
        type="search"
        placeholder="repo"
        onChange={(e) => setInputRepo(e.target.value)}
        value={inputRepo}
      />
      <button
        className="btn btn-secondary my-2 my-sm-0"
        onClick={() => handleSubmit()}
      >
        search
      </button>
    </div>
  );
};

export default SearchForm;
