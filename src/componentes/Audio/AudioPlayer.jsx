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


  audioScripts() {
    const audioContext = new AudioContext()//cra contexto de audio
    const audioElement = document.querySelector('.JPlayer audio')//instancia el tag audio
    const track = audioContext.createMediaElementSource(audioElement)// pasa el tag al contexto de audio

    return (String(audioContext) + ": " + JSON.stringify(audioContext))
  }

  playerHTML() {
    return (
      <section>
        <h1>Player custom</h1>
        <div className="JPlayer">
          <audio src={ogg} type="audio/mpeg"></audio>
          {/* play/pause: */}
          <span id="PlayToggle" />
          {/*  track: */}
          <span id="Timeline">
            <span id="Loading" />
            <span id="Handle" className="ui-slider-handle" />
          </span>
          <span id="TimeLeft" />
          {this.audioScripts()}
        </div>
      </section>
    )
  }


  //
  render() {
  return (
    this.playerHTML()
  );
}
}
