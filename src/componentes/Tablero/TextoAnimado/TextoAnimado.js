import React, { Component } from 'react'

class TextoAnimado extends Component {

  render() {
    return (
      <>
        <path d={this.props.camino} />
        <text width="500">
          <textPath alignment-baseline="top" xlink:href="#curve">
            Dangerous Curves Ahead
          </textPath>
        </text>
      </>
    )
  }
}
