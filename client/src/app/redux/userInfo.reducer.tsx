import { UserInfo, Action, SET_USER_INFO } from '../actions/types';

export default function userInfoReducer(
  state: UserInfo = null,
  action: Action<UserInfo>
) {
  return action.type === SET_USER_INFO ? action.payload : state;
}
