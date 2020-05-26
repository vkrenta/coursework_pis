import { Action, SET_OPEN_MENU } from '../actions/types';

export default function isMenuOpenedReducer(
  state: boolean = false,
  action: Action<boolean>
) {
  return action.type === SET_OPEN_MENU ? action.payload : state;
}
