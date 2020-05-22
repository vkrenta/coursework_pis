import {
  Notification,
  Action,
  ADD_NOTIFICATION,
  PURGE_NOTIFICATION,
} from '../actions/types';

export default function notificationsReducer(
  state: Notification | null = null,
  action: Action<Notification>
) {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return action.payload;
    case PURGE_NOTIFICATION:
      return null;
    default:
      return state;
  }
}
