import React, { Component } from 'react';
import './css/Images.css';
import Food from './Images/grilled.jpg';

export default class ImageSection extends Component {
  render() {
    return (
      <div className='Img'>
        <img src={Food} alt='Img'/>
      </div>
    )
  };
}

