import React, { Component } from 'react';
import Food from './Images/grilled.jpg';

export default class ImageSection extends Component {
  render() {
    return (
      <div>
        <img src={Food}/>
      </div>
    )
  };
}

