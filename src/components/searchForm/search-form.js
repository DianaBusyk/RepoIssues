import React, { useContext, useState } from "react";
import { AppContext } from "../../context";



const SearchForm = () => {
  const { setUsername, setRepo} = useContext(AppContext);
  const [inputUsername, setInputUsername] = useState('');
  const [inputRepo, setInputRepo] = useState('');

  const handleSubmit = () => {
    setUsername(inputUsername);
    setRepo(inputRepo);
  }

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
