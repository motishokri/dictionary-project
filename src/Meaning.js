import React, { useState } from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  const numberOfDefinitions = props.meaning.definitions.length;
  const limit = 3;

  const [showMore, setShowMore] = useState(false);

  let filteredDefinitions = props.meaning.definitions;
  if (!showMore) {
    filteredDefinitions = props.meaning.definitions.slice(0, limit);
  }

  function renderShowMore() {
    return (
      <div className="ShowMore">
        {!showMore ? (
          <button onClick={() => setShowMore(true)}>▾more</button>
        ) : (
          <button onClick={() => setShowMore(false)}>▴less</button>
        )}
      </div>
    );
  }

  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech} </h4>

      {filteredDefinitions.map(function (definition, index) {
        return (
          <div key={index}>
            <ul>
              <li>{definition.definition}</li>
              <em>{definition.example}</em>
            </ul>
          </div>
        );
      })}

      {numberOfDefinitions > limit ? renderShowMore() : null}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
