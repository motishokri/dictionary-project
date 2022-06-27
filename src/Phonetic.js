import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <input
          class="fluid"
          type="image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Speaker_Icon_gray.svg/800px-Speaker_Icon_gray.svg.png"
          alt="Listen"
        />
      </a>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
