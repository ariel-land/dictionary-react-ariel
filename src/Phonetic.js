import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonectics d-flex flex-row">
      <AudioPlayer
        src={props.phonetic.audio}
        autoPlay={false}
        customVolumeControls={[]}
        customAdditionalControls={[]}
        customProgressBarSection={[]}
        style={{ width: "80px" }}
        showJumpControls={false}
        showFilledProgress={false}
        showDownloadProgress={false}
        showSkipControls={false}
        layout="horizontal-reverse"
      />
      <span className="text"> {props.phonetic.text}</span>
    </div>
  );
}
