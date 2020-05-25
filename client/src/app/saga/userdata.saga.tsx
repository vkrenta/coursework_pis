import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_USER_DATA, GET_USER_INFO } from '../actions/types';
import errorHandler from './error-handler';
import getUser from '../api/user.api';
import { setToken, setStartLoader, setUserInfo, setQuerying } from '../actions';
function* worker() {
  try {
    yield put(setStartLoader(true));
    const result = yield call(getUser);
    yield put(setToken('exists'));
    yield put(setUserInfo(result));
  } catch (e) {
    yield errorHandler(e);
  } finally {
    yield put(setStartLoader(false));
  }
}

function* workerInfo() {
  try {
    yield put(setQuerying(true));
    const result = yield call(getUser);
    yield put(setUserInfo(result));
  } catch (e) {
    yield errorHandler(e);
  } finally {
    yield put(setQuerying(false));
  }
}

export function* watchGetUserData() {
  yield takeEvery(GET_USER_DATA, worker);
}

export function* watchGetUserInfo() {
  yield takeEvery(GET_USER_INFO, workerInfo);
}
