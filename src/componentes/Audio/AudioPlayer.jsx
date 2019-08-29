import React from 'react'
// Audios dev
const mp3 = require('./AudioAssets/josecaos-j71g1gj7-soundcloud.edit.mp3')
const ogg = require('./AudioAssets/josecaos-j71g1gj7-soundcloud.edit.ogg')

export default class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (

      <div>
        <audio id="AudioPlayer" controls>
          <source src={mp3} type="audio/mpeg" />
          <source src={ogg} type="audio/ogg" />
          El navegador no soporta HTML5
        </audio>
      </div>

    );
  }
}

export class JPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  playerHTML() {
    return (
      <div className="JPlayer">
        {/* play/pause: */}
        <span id="PlayToggle" />
        {/*  track: */}
        <span id="Timeline">
          <span id="Loading" />
          <span id="Handle" className="ui-slider-handle" />
        </span>
        <span id="TimeLeft" />
      </div>
    )
  }

  //
  render() {
  return (
    this.playerHTML()
  );
}
}
