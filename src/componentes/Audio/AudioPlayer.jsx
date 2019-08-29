import React from 'react'
// Audios dev
  const mp3 = require('./AudioAssets/josecaos-j71g1gj7-soundcloud.edit.mp3')
const ogg = require('./AudioAssets/josecaos-j71g1gj7-soundcloud.edit.ogg')

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <audio controls >
          <source src={mp3} type="audio/mpeg" />
          <source src={ogg} type="audio/ogg" />
          El navegador no soporta HTML5
        </audio>
      </div>
    );
  }
}

export default AudioPlayer
