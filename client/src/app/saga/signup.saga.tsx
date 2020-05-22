import { call, put, takeEvery } from 'redux-saga/effects';
import register from '../api/register.api';
import { Action, SIGN_UP, Credentials } from '../actions/types';
import { addNotification } from '../actions';
function* workerRegister(action: Action<Credentials>) {
  try {
    const result = yield call(register, action.payload!);
    yield put(addNotification('success', result.message));
    console.log(result);
  } catch (e) {
    console.log(e);
  } finally {
  }
}

export function* watchSignUp() {
  yield takeEvery(SIGN_UP, workerRegister);
}
