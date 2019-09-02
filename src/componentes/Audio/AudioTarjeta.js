import React, {Component} from 'react'
import AudioPlayer, {JPlayer} from './AudioPlayer'


export default class AudioTarjeta extends Component {

  constructor(props) {
    super(props)
    this.props = this.props
  }

  render() {
    return (
      <article>
        <h3>Nombre de canción</h3>
        <AudioPlayer/>
        <JPlayer/>
      </article>
    )
  }

}
