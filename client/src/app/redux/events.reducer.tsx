import { Event, Action, SET_EVENTS } from '../actions/types';

export default function eventsReducer(
  state: Event[] = [],
  action: Action<Event[]>
) {
  return action.type === SET_EVENTS ? action.payload : state;
}
