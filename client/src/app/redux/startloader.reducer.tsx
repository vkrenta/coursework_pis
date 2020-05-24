import { Action, SET_START_LOADER } from '../actions/types';

export default function startLoaderReducer(
  state: boolean = false,
  action: Action<boolean>
) {
  return action.type === SET_START_LOADER ? action.payload! : state;
}
