import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div>
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>{props.meaning.definitions[0].definition}</p>
    </div>
  );
}

//  {
//    props.meaning.definitions.map(function (definition, index) {
//      return (
//        <div key={index}>
//          <p>
//            {definition.definition}
//            {/* <br />
//             <em> {definition.example} </em> */}
//          </p>
//        </div>
//      );
//    });
//  }
