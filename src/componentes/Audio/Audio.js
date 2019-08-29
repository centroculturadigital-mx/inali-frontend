import React, {Component} from 'react'
import AudioPlayer, {JPlayer} from './AudioPlayer'


export default class Audio extends Component {

  render() {

    return (
      <section>
        <AudioPlayer />
        <JPlayer />
      </section>
    )

  }

}
