import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";
// import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
      </section>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">{definition.definition}</div>
            <div className="example"> {definition.example} </div>
            <Synonyms synonyms={definition.synonyms} />{" "}
          </div>
        );
      })}
      ;
    </div>
  );
}

// <p>{props.meaning.definitions[0].definition}</p>;
//<Example example={definition.example} />
// <strong>Example:</strong>
// {definition.example}
