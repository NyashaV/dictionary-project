import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <form onSubmit={search} className="search text-center">
        <input
          type="search"
          autoFocus={true}
          onChange={handleKeywordChange}
          placeholder="Search your word here"
        />
      </form>
    </div>
  );
}
