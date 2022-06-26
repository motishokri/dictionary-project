import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls />
      <br />
      {props.phonetic.text}
    </div>
  );
}
