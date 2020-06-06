import { LOG_OUT } from '../actions/types';
import { setStartLoader, setToken } from '../actions';
import { takeEvery, call, put } from 'redux-saga/effects';
import logoutApi from '../api/logout.api';
import errorHandler from './error-handler';

function* worker() {
  try {
    yield put(setStartLoader(true));
    yield call(logoutApi);
    yield put(setToken(null));
  } catch (e) {
    yield errorHandler(e);
  } finally {
    yield put(setStartLoader(false));
  }
}

export default function* watchLogout() {
  yield takeEvery(LOG_OUT, worker);
}
