import { call, put, takeEvery } from 'redux-saga/effects';
import register from '../api/register.api';
import { Action, SIGN_UP, Credentials } from '../actions/types';
import { addNotification, setQuerying } from '../actions';
import errorHandler from './error-handler';
function* workerRegister(action: Action<Credentials>) {
  try {
    yield put(setQuerying(true));
    const result = yield call(register, action.payload!);
    yield put(addNotification('success', result.message));
  } catch (e) {
    yield errorHandler(e);
  } finally {
    yield put(setQuerying(false));
  }
}

export function* watchSignUp() {
  yield takeEvery(SIGN_UP, workerRegister);
}
