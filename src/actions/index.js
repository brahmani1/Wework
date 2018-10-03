import { 
	GET_USERS_SAGA,
	SET_USERS,
	GET_NEW_DECK,
	SET_NEW_DECK,
  DRAW_CARDS_FROM_DECK,
  SET_GAME_STATUS,
  SET_DEAL_CARDS,
  RESET_GAME,
  CHANGE_CARD_DISPLAY,
	SET_REQUEST_TOKEN } from '../constants';

export function resetGameSaga() {
  return {
    type: RESET_GAME
  };
}

export function changeCardDisplay(data) {
  return {
    type: CHANGE_CARD_DISPLAY,
    data
  };
}

export function setNewDeck(deck) {
  return {
    type: SET_NEW_DECK,
    deck
  };
}

export function setGameStatus(gameStatus) {
  return {
    type: SET_GAME_STATUS,
    gameStatus
  };
}

export function drawCardsFromDeck(deckId) {
  return {
    type: DRAW_CARDS_FROM_DECK,
    deckId
  };
}

export function setDealCards(cards) {
  return {
    type: SET_DEAL_CARDS,
    cards
  };
}

export function setRequestToken(requestToken) {
  return {
    type: SET_REQUEST_TOKEN,
    requestToken
  };
}

export function setUsers(users) {
  return {
    type: SET_USERS,
    users
  };
}

//Sagas
export function getUsersSaga() {
  return {
    type: GET_USERS_SAGA
  };
}

//Sagas
export function getDeckSaga() {
  return {
    type: GET_NEW_DECK
  };
}
