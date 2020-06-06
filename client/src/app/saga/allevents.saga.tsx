import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_ALL_EVENTS, Event } from '../actions/types';
import getAllEvents from '../api/getAllEvents';
import errorHandler from './error-handler';
import { setQuerying, setEvents } from '../actions';

function* worker() {
  try {
    yield put(setQuerying(true));
    const { rows }: { rows: Event[] } = yield call(getAllEvents);
    yield put(setEvents(rows));
    console.log(rows);
  } catch (error) {
    yield errorHandler(error);
  } finally {
    yield put(setQuerying(false));
  }
}

export default function* watchAllEvents() {
  yield takeEvery(GET_ALL_EVENTS, worker);
}
