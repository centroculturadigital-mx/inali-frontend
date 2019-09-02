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
//
//
//player custom
export class JPlayer extends React.Component {

constructor(song) {
  this.song = song

}

//
load() {
const audioTag = document.createElement('audio')//crea tag audio
const audioContext = new AudioContext()//crea contexto de audio
const track = audioContext.createMediaElementSource(audioTag)// pasa el tag al contexto de audio
let out = ""
audioTag.setAttribute('src', mp3,)//agrega atributos y pasa el audio
audioTag.setAttribute('type','audio/mpeg')
audioTag.setAttribute('className','JPlayerTrack')
out = track.connect(audioContext.destination)//conecta al output


return out

}

play() {

  // if (this.load.state === 'suspended') {
  //   this.load.resume();
  //   console.log("Adentro")
  // }

  //   if (this.dataset.playing === 'false') {
  //   audioTag.play();
  //   this.dataset.playing = 'true';
  // } else if (this.dataset.playing === 'true') {
  //   audioTag.pause();
  //   this.dataset.playing = 'false';
  // }

  return console.log("PLAY")

}

playerHTML() {

  return (
    <section>
      <h1>Player custom</h1>
      <div className="JPlayer">
        <button onClick={this.play} data-playing="false" role="switch" aria-checked="false">
          <span>Play/Stop</span>
        </button>
        <span id="Timeline">
          <span id="Loading" />
          <span id="Handle" className="ui-slider-handle" />
        </span>
        <span id="TimeLeft" />
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
