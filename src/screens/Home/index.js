import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Table } from 'semantic-ui-react';
import _ from 'lodash';

import { resetGameSaga, getDeckSaga, drawCardsFromDeck, changeCardDisplay, setRequestToken} from '../../actions';
import styles from './styles';
import {Hand} from './hand';

class Home extends Component {
  constructor() {
    super();
    this.handleBtnOnClick = this.handleBtnOnClick.bind(this);
    this.handleOnDealClick = this.handleOnDealClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.onCardClick = this.onCardClick.bind(this);
  }

  componentWillMount() {
  }

  handleResetClick(){
    this.props.resetGameSaga()
  }

  handleBtnOnClick() {
    this.props.getDeckSaga();
  }

  handleOnDealClick() {
    this.props.drawCardsFromDeck(this.props.deck.deck_id);
  }

  onCardClick(e) {
    this.props.changeCardDisplay({ code: e.split(' ')[0], player: e.split(' ')[1]})
  }

  render() {
    return (
      <div className='ui container'>
        <div className=''>
          <div className='sixteen wide column'>
          { this.props.gameStatus ?
            <Button
              color="teal"
              style={{ marginTop: '10px' }}
              onClick={this.handleResetClick}
            >Reset</Button> : 
            <Button
              color="teal"
              style={{ marginTop: '10px' }}
              onClick={this.handleBtnOnClick}
            >Start</Button>
          }

          { this.props.gameStatus ?
            <Button
              color="teal"
              style={{ marginTop: '10px' }}
              onClick={this.handleOnDealClick}
            >Deal</Button> : null
          }

          </div>
          <div className='sixteen wide column'>
            <Hand data={this.props.players['player1']} onClick={this.onCardClick} />
            <Hand data={this.props.players['player2']} onClick={this.onCardClick} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  deck: state.helperReducer.deck,
  players: state.helperReducer.players,
  gameStatus: state.helperReducer.gameStatus
});

const mapDispatchToProps = dispatch => ({
  getDeckSaga: () => dispatch(getDeckSaga()),
  resetGameSaga: () => dispatch(resetGameSaga()),
  drawCardsFromDeck: (id) => dispatch(drawCardsFromDeck(id)),
  changeCardDisplay: (data) => dispatch(changeCardDisplay(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
