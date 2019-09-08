import React, {Component} from 'react'
import AudioPlayer, {JPlayer} from './AudioPlayer'
// Audios dev
const mp3 = require('./AudioAssets/josecaos-j71g1gj7-soundcloud.edit.mp3')
// const ogg = require('./AudioAssets/josecaos-j71g1gj7-soundcloud.edit.ogg')


export default class AudioTarjeta extends Component {

  constructor(props) {
    super(props)
    this.props = this.props
  }

  render() {
    return (
      <article>
        <h3>Nombre de canción</h3>
        <AudioPlayer src={mp3}/>
        <JPlayer src={mp3}/>
      </article>
    )
  }

}
