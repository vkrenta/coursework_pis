import { Action, SET_QUERYING } from '../actions/types';

export default function isQueryingReducer(
  state: boolean = false,
  action: Action<boolean>
) {
  return action.type === SET_QUERYING ? action.payload : state;
}
