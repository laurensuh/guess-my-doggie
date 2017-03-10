import React, { Component } from 'react';

class Button extends Component {
  render() {
    const children = this.props.children;

    return (
      <button>{children}</button>
    )
  }
}

export default Button;
