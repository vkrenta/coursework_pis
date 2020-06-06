import { put } from 'redux-saga/effects';
import { addNotification } from '../actions';

export default function* errorHandler(e: any) {
  console.log(e);
  try {
    const { message, code } = JSON.parse(e.message);

    if (code === 404) {
      yield put(addNotification('error', '404: Content not found!'));
    }

    if (code === 400) {
      yield put(addNotification('error', message));
    }
  } catch (error) {
    yield put(addNotification('error', 'Network error'));
  }
}
