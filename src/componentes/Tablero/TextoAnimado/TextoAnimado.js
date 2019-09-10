import React, { Component } from 'react'

export default class TextoAnimado extends Component {

  render() {
    return (
      <svg viewBox="0 0 500 500">
        <path id="curve" d={this.props.camino} />
        <text width="500" height="500">
          <textPath alignmentBaseline="bottom" xlinkHref="#curve">
            Dangerous Curves Ahead
          </textPath>
        </text>
      </svg>
    )
  }
}
