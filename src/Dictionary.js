import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [currentDefinition, setCurrentDefinition] = useState(null);

  function handleResponse(response) {
    setCurrentDefinition(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    console.log(`Searching for ${keyword}`);

    // API documentation (https://dictionaryapi.dev/)
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <form onSubmit={search} className="search text-center mt-5">
        <input
          type="search"
          autoFocus={true}
          onChange={handleKeywordChange}
          placeholder="Search your word here"
        />
      </form>
      <Results currentDefinition={currentDefinition} />
    </div>
  );
}
