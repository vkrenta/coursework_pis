import { takeEvery, call } from 'redux-saga/effects';
import { GET_ALL_EVENTS, Event } from '../actions/types';
import getAllEvents from '../api/getAllEvents';

function* worker() {
  const { rows }: { rows: Event[] } = yield call(getAllEvents);
}

export default function* watchAllEvents() {
  yield takeEvery(GET_ALL_EVENTS, worker);
}
