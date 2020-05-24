import { call, put, takeEvery } from 'redux-saga/effects';
import { Action, SIGN_IN, Login } from '../actions/types';
import { addNotification } from '../actions';
import errorHandler from './error-handler';
import logIn from '../api/login.api';
function* workerRegister(action: Action<Login>) {
  try {
    const result = yield call(logIn, action.payload!);
    yield put(addNotification('success', 'token'));
    console.log(result);
  } catch (e) {
    yield errorHandler(e);
  } finally {
  }
}

export function* watchSignIn() {
  yield takeEvery(SIGN_IN, workerRegister);
}
