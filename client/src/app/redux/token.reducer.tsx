import { Action, SET_TOKEN } from '../actions/types';

export default function tokenReducer(
  state: string | null = null,
  action: Action<string>
) {
  switch (action.type) {
    case SET_TOKEN:
      return action.payload;
    default:
      return state;
  }
}
