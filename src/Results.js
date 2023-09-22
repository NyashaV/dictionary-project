import React, { useState } from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.currentDefinition) {
    return (
      <div className="Results">
        <h2>{props.currentDefinition.word}</h2>
        {props.currentDefinition.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              {" "}
              <Meaning meaning={meaning} />{" "}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
