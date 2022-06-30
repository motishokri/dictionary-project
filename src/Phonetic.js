import React from "react";
import "./Phonetic.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
  const audio = new Audio(props.phonetic.audio);

  function playAudio() {
    audio.play();
  }

  function renderText() {
    if (!props.phonetic.text) {
      return null;
    }

    return <span>[{props.phonetic.text}]</span>;
  }

  function renderAudio() {
    if (!props.phonetic.audio) {
      return null;
    }

    return (
      <button type="button" onClick={playAudio}>
        <FontAwesomeIcon icon={faVolumeHigh} />
      </button>
    );
  }

  return (
    <div className="Phonetic">
      {renderText()}
      {renderAudio()}
    </div>
  );
}
