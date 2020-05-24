import { combineReducers } from 'redux';
import tokenReducer from './token.reducer';
import notificationsReducer from './notification.reducer';
import startLoaderReducer from './startloader.reducer';

export const rootReducer = combineReducers({
  token: tokenReducer,
  notification: notificationsReducer,
  startLoader: startLoaderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
