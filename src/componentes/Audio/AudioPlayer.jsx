import React from 'react'
//
//player custom
export class JPlayer extends React.Component {

  constructor(src) {
    super(src)
    this.src = src
  }

  play(elemento,conexion,contexto,audioelement,fileURL,gain,progressbar) {


    // const AudioContext = window.AudioContext || window.webkitAudioContext
    // const audioContext = new AudioContext()//crea contexto de audio
    // const audioTag = document.createElement('audio')//crea tag audio
    // const track = audioContext.createMediaElementSource(audioTag)// pasa el tag al contexto de audio
    // audioTag.setAttribute('src', ogg,)//agrega atributos y pasa el audio
    // audioTag.setAttribute('type','audio/mpeg')
    // audioTag.setAttribute('className','JPlayerTrack')
    // track.connect(audioContext.destination)//conecta al output


    // if (this.load.state === 'suspended') {
    //   this.load.resume();
    //   console.log("Adentro")
    // }
    //
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
        <h1>Player custom :</h1>
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
//player HTML
export default class AudioPlayer extends React.Component {

constructor(src) {
  super(src)
  this.src = src
}

  render() {
    return (
      <div>
        <h3>Player Default: </h3>
        <audio id="AudioPlayer" controls>
          <source src={this.props.src} type="audio/mpeg" />
          <source src={this.props.src} type="audio/ogg" />
          'El navegador no soporta HTML5'
        </audio>
      </div>
    );
  }
}
