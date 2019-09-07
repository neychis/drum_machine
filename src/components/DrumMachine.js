import React from "react";
import { pads } from "./DrumPads";
import "../styles/drumMachine.scss";

export default class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.onPadClick = this.onPadClick.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keyup", event => {
      const pressedPad = pads.filter(pad => pad.keyCode === event.keyCode)[0];
      if (pressedPad) {
        this.handleCheckedButton({
          text: pressedPad.id,
          audioId: pressedPad.key
        });
      }
    });
  }
  onPadClick(event) {
    this.handleCheckedButton({
      text: event.target.id,
      audioId: event.target.value
    });
  }
  handleCheckedButton({ text, audioId }) {
    this.display.textContent = text;
    document.getElementById(audioId).play();
  }
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
          onClick={this.onPadClick}
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
        <div id="display" ref={ref => (this.display = ref)} />
        <div className="drum-pad-container">{this.getPads()}</div>
      </div>
    );
  }
}
