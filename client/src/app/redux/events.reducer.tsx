import { Event, Action, SET_EVENTS } from '../actions/types';

export default function events(state: Event[] = [], action: Action<Event[]>) {
  return action.type === SET_EVENTS ? action.payload : state;
}
