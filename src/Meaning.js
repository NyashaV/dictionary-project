import React from "react";
import Synonyms from "./Synonyms";
// import Example from "./Example";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div>
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div>
              <strong>Definition: </strong> {definition.definition}
              <br />
              <strong> Example: </strong> {definition.example}
              <br />
              <Synonyms synonyms={definition.synonyms} />{" "}
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
}

// <p>{props.meaning.definitions[0].definition}</p>;
//<Example example={definition.example} />
