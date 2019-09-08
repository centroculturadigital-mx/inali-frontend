import React, {Component} from 'react'
//
const AudioContext = window.AudioContext || window.webkitAudioContext//vintage browsers
const audioContext = new AudioContext()//crea contexto de audio
const vol = audioContext.createGain();
const audioTag = document.createElement('audio')//crea tag audio
//player custom
export class JPlayer extends Component {

  constructor(props) {
    super(props)
    this.src = this.src
    this.volumeControl = React.createRef()
    this.playButton = React.createRef()
    this.progressBar = React.createRef()
    //bind object to method or function
    this.volume = this.volume.bind(this)
    this.play = this.play.bind(this)
    this.seek = this.seek.bind(this)
  }

  load() {

    const track = audioContext.createMediaElementSource(audioTag)// pasa el tag al contexto de audio
    audioTag.setAttribute('src', this.props.src)//agrega atributos y pasa el audio
    audioTag.setAttribute('type','audio/mpeg')
    audioTag.setAttribute('className','JPlayerTrack')
    track.connect(vol).connect(audioContext.destination)//conecta al output

  }
  // play(elemento,conexion,contexto,audioelement,fileURL,gain,progressbar) {
  play() {
    let button = this.playButton.current
    let prog
    if (audioContext.state === 'suspended') {
      audioContext.resume()
    }
    //
    if (button.dataset.playing === 'false') {
      audioTag.play()
      button.dataset.playing = 'true'
      prog = setInterval(()=>{//sequencia la barra de progreso
          console.log('Progress ON');
          this.progress(this.progressBar.current,audioTag)
        },1000)
      console.log("play")
    } else if (button.dataset.playing === 'true') {
      audioTag.pause()
      button.dataset.playing = 'false'
      clearInterval(prog)
      console.log('Progress OFF');
      console.log("Pausa")
    }
  }

  volume() {
    let currentVal = this.volumeControl.current.valueAsNumber
    return vol.gain.value = currentVal;
  }

  seek(e) {// componer seek
    let el = this.progressBar.current
    var percent = el.offsetHeight / el.clientWidth
    audioTag.currentTime = percent * audioTag.duration//aplica tiempo seleccionado
    this.progressBar.current.value = percent * 100
    return console.log(e)
  }

  progress(progressbar,audioelement) {
    let long = progressbar.clientWidth
    let point = audioelement.currentTime / long
    let res = point*100
    progressbar.value = res
  }

  playerHTML() {

    return (
      <section>
        {this.load()}
        <h1>Player custom :</h1>
        <div className="JPlayer">
          <button id="togglePlay" ref={this.playButton} onClick={this.play} data-playing="false" role="switch" aria-checked="false">
            Play/Stop
          </button>
          <p>Volumen: </p>
          <input id="volumen" ref={this.volumeControl} onChange={this.volume} type="range" min="0" max="1" step="0.01" />
          <br/>
          <progress id="progressBar" ref={this.progressBar} onClick={this.seek} min="0" max="100" value="0"></progress>
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
//player default HTML
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
