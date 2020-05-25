import { Action, SET_PAGE_NAME } from '../actions/types';

export default function pageNameReducer(
  state: string = '',
  action: Action<string>
) {
  return action.type === SET_PAGE_NAME ? action.payload : state;
}
