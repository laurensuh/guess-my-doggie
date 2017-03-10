import React, { Component } from 'react';

class MatchImages extends Component {
  render() {
    const image = this.props.image;

    return (
      <div>
        <img src={image}/>
      </div>
    )
  }
}

export default MatchImages;
