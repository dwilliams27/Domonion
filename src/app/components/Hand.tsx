import React, { Component, ReactNode } from 'react';
import Card from './Card';
import { CardInfo } from './CardInfo';
import './Hand.css';

class Hand extends Component<{ cards: Array<CardInfo> }, {}> {
  render(): ReactNode {
    return <div className='hand'>
      {this.props.cards.map((card) => {
        return <Card info={card} />
      })}
    </div>;
  }
}

export default Hand;