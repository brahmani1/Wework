import { SET_NEW_DECK, SET_DEAL_CARDS, SET_GAME_STATUS, RESET_GAME, CHANGE_CARD_DISPLAY } from '../constants';
import _ from 'lodash';

const initialState = { 
	deck: undefined,
	gameStatus: false,
	no_players: 2,
	players: {
		player1: {
			id: 'player1',
			cards: []
		},
		player2: {
			id: 'player2',
			cards: []
		}
	}
};

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
  	case CHANGE_CARD_DISPLAY:
  		let finalState = _.cloneDeep(state)
  		let player = _.find(state.players, { id: action.data.player })
  		player.cards = _.map(player.cards, (c) => { 
  			if(c.code == action.data.code) c.cardDisplayState = !c.cardDisplayState
  			return c
  		})
  		finalState.players[action.data.player] = player;
  		return finalState
  	case RESET_GAME:
  		return initialState
    case SET_GAME_STATUS:
      return {
        ...state,
        gameStatus: action.gameStatus
      };
    case SET_NEW_DECK:
      return {
        ...state,
        deck: action.deck
      };
    case SET_DEAL_CARDS:
      let cards = action.cards.cards;
      let newState = _.cloneDeep(state)
      // Iterate over the players and assign cards to each of them
      _.each(cards, (c, i) => {
      	c.cardDisplayState = false
      	newState.players[`player${i+1}`].cards.push(c)
      })
      return newState
    default:
      return state;
  }
}
