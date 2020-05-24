import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_USER_DATA } from '../actions/types';
import errorHandler from './error-handler';
import getUser from '../api/user.api';
import { setToken, setStartLoader } from '../actions';
function* worker() {
  try {
    yield put(setStartLoader(true));
    const result = yield call(getUser);
    yield put(setToken('exists'));
    console.log(result);
  } catch (e) {
    yield errorHandler(e);
  } finally {
    yield put(setStartLoader(false));
  }
}

export function* watchGetUserData() {
  yield takeEvery(GET_USER_DATA, worker);
}
