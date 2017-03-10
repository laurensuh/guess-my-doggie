import React, { Component } from 'react';
import Title from './title';
import MatchImages from './match-images';
import Button from './button.js';
import Person1 from './assets/Lauren_Suh.jpg'
import Dog1 from './assets/lauren_dog.png'



class Doggo extends Component {
  render() {
    return (
      <div>
        <Title />
        <MatchImages image={Person1} />
        <MatchImages image={Dog1} />
        <Button>YES</Button>
        <Button>NO</Button>
      </div>
    )
  }
}

export default Doggo;
