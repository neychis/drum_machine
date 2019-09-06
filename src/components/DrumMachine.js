import React from "react";
import { pads } from "./DrumPads";
import "../styles/drumMachine.scss";

export default class DrumMachine extends React.Component {
  getPads() {
    let result = [];
    for (let i = 0; i < pads.length; i++) {
      result.push(
        <button
          id={pads[i].id}
          key={i}
          type="button"
          value={pads[i].key}
          className="drum-pad"
        >
          {pads[i].key}
          <audio id={pads[i].key} className="clip" src={pads[i].url} controls />
        </button>
      );
    }
    return result;
  }
  render() {
    return (
      <div id="drum-machine">
        <div id="display" />
        <div className="drum-pad-container">{this.getPads()}</div>
      </div>
    );
  }
}
