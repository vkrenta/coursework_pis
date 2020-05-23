import { put } from 'redux-saga/effects';
import { addNotification } from '../actions';

export default function* errorHandler(e: any) {
  const { message, code } = JSON.parse(e.message);

  if (code === 400) {
    yield put(addNotification('error', message));
  }
  console.log(e);
}
