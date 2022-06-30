import React from "react";

export default function Synonyms(props) {
  if (props.synonyms?.length > 0) {
    return (
      <div className="Synonyms">
        <h4>Synonyms </h4>
        {props.synonyms.map(function (synonym, index) {
          return (
            <span className="SynonymTag" key={index}>
              {synonym} {"   .  "}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
