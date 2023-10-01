import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  console.log(props.currentDefinition);
  if (props.currentDefinition) {
    return (
      <div className="Results">
        <section className="singleSectionOne">
          <h2>{props.currentDefinition.word}</h2>
          {props.currentDefinition.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>

        {props.currentDefinition.meanings.map(function (meaning, index) {
          return (
            <section className="singleSectionTwo" key={index}>
              {" "}
              <Meaning meaning={meaning} />{" "}
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
