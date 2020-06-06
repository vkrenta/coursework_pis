import { Event, Action, SET_ORDER_EVENT } from '../actions/types';

export default function orderEventReducer(
  state: Event | null = null,
  action: Action<Event>
) {
  return action.type === SET_ORDER_EVENT ? action.payload : state;
}
