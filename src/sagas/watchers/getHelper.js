import { put, takeLatest, call } from 'redux-saga/effects';

import { GET_NEW_DECK, SET_REQUEST_TOKEN, DRAW_CARDS_FROM_DECK } from '../../constants';
import { getNewDeck, saveRequestToken, drawCardsFromDeck } from '../../lib/api';
import { setNewDeck, setDealCards, setGameStatus } from '../../actions';

function* workerGetDeckSaga() {
  const deck = yield call(getNewDeck);
  yield put(setNewDeck(deck))
  yield put(setGameStatus(true))
}

function* workerDealSaga(action) {
  const cards = yield call(drawCardsFromDeck, action.deckId);
  yield put(setDealCards(cards))
}

export default function* watchGetHelperSaga() {
  yield takeLatest(GET_NEW_DECK, workerGetDeckSaga);
  yield takeLatest(DRAW_CARDS_FROM_DECK, workerDealSaga);
}
