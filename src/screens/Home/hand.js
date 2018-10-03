import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Table } from 'semantic-ui-react';
import _ from 'lodash';

import { getDeckSaga, drawCardsFromDeck, setRequestToken} from '../../actions';

import styles from './styles';

export class Hand extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
  }

  calculateSum(cards) {
    let sum = 0
    _.each(this.props.data.cards, (c) => {
        let value =  parseInt(c.code)
        if(!_.isNaN(value)) sum = sum + value
        else {
          sum = sum + (c.code[0] == 'A' ? 1 : 10)
        }
    })
    return sum
  }

  displayCards() {
    let cards = []
    _.each(this.props.data.cards, (c, i) => {
      let key = `${c.code} ${this.props.data.id}`;
      let j = 11-(Math.ceil(this.props.data.cards.length/2) - i);
      if(c.cardDisplayState) {
        // Get appropriate image
        let color = ['CLUBS','SPADES'].indexOf(c.suit) < 0 ? 'red' : 'black'
        return cards.push(
            <li key={key} onClick={() => this.props.onClick(key)} className={`card carditem-${j}`}>
              <div className='cardDisplay'> 
                <div style={{ color: color }}>{c.code[0]}
                  <img className='suit-logo' src={`${c.suit}.png`}></img>
                </div>
                <img className='suit-center' src={`${c.suit}.png`}></img>
                <div style={{ color: color }} className='turn-left'>
                  {c.code[0]}
                  <img className='suit-logo' src={`${c.suit}.png`}></img>
                </div>
              </div>
            </li>
          )  
      } else {
        return cards.push(
          <li key={key} onClick={() => this.props.onClick(key)} className={`card cardBack carditem-${j}`}></li>
          )  
      }
      
    })
    return <ul className="cardList cardfan">{cards}</ul>
  }

  render() {
    
    return (
      <div className='ui container grid'>
        <div className='ui grid' style={styles.container}>
          <div className='sixteen column' style={styles.container}>
            <div className='row total'>Name: {this.props.data.id} Total: {this.calculateSum()}</div>
            <hr/>
            <div>{this.displayCards()}</div>
          </div>
        </div>
      </div>
    );
  }
}