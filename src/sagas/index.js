import { all, fork } from 'redux-saga/effects';

import watchGetUsersSaga from './watchers/getUsers';
import watchGetHelperSaga from './watchers/getHelper';

export default function* root() {
  yield all([
    fork(watchGetUsersSaga),
    fork(watchGetHelperSaga),
  ]);
}
