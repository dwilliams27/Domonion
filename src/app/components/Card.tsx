import React, { Component, ReactNode } from 'react';
import { MdCropPortrait, MdBrightness1, MdBrightness2 } from 'react-icons/md';
import { useDrag } from 'react-dnd'
import { CardInfo } from './CardInfo';

import './Card.css';

class Card extends Component<{ info: CardInfo }, { resizing: boolean, size: number }> {
  constructor(props: any) {
    super(props);
    this.state = {
      resizing: false,
      size: 1
    }
  }

  render(): ReactNode {
    return <div>
      <div className='card'>
        <div className='value'>
          {this.props.info.initialValue}
        </div>
      </div>
    </div>;
  }
}

export default Card;