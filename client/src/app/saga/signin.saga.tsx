import { call, put, takeEvery } from 'redux-saga/effects';
import { Action, SIGN_IN, Login } from '../actions/types';
import { getUserData, setQuerying } from '../actions';
import errorHandler from './error-handler';
import logIn from '../api/login.api';
function* workerRegister(action: Action<Login>) {
  try {
    yield put(setQuerying(true));
    yield call(logIn, action.payload!);
    yield put(getUserData());
  } catch (e) {
    yield errorHandler(e);
  } finally {
    yield put(setQuerying(false));
  }
}

export function* watchSignIn() {
  yield takeEvery(SIGN_IN, workerRegister);
}
