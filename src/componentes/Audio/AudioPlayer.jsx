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
//player custom
export class JPlayer extends React.Component {
constructor(props) {
  super(props)
  this.props = this.props
}

playerHTML() {
  const audioTag = document.createElement('audio')
  const audioContext = new AudioContext()//crea contexto de audio
  const track = audioContext.createMediaElementSource(audioTag)// pasa el tag al contexto de audio
  const playButton = document.querySelector('button')

  audioTag.setAttribute('src', mp3,)//agrega atributo y pasa el audio
  audioTag.setAttribute('type','audio/mpeg')
  audioTag.setAttribute('className','JPlayerTrack')
  track.connect(audioContext.destination)

// // play event
// playButton.addEventListener('click', function() {
// //
// // revisa si se encuentra en estado de suspencion (autoplay policy)
// if (audioContext.state === 'suspended') {
// audioContext.resume();
// }
// // play or pause dependiendo del estado
// if (this.dataset.playing === 'false') {
// audioTag.play();
// this.dataset.playing = 'true';
// } else if (this.dataset.playing === 'true') {
//   audioTag.pause();
//   this.dataset.playing = 'false';
// }
// }, false)
console.log(playButton)

  return (
    <section>
      <h1>Player custom</h1>
      <div className="JPlayer">
        {/* play/pause: */}
        <button data-playing="false" role="switch" aria-checked="false">
          <span>Play/Pause</span>
        </button>
        {/*  track: */}
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
