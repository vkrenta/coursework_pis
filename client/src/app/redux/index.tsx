import { combineReducers } from 'redux';
import tokenReducer from './token.reducer';
import notificationsReducer from './notification.reducer';
import startLoaderReducer from './startloader.reducer';
import isQueryingReducer from './isQuerying.reducer';
import userInfoReducer from './userInfo.reducer';
import pageNameReducer from './pagename.reducer';
import isMenuOpenedReducer from './isMenuOpened.reducer';
import eventsReducer from './events.reducer';
import orderEventReducer from './orderevent.reducer';

export const rootReducer = combineReducers({
  token: tokenReducer,
  notification: notificationsReducer,
  startLoader: startLoaderReducer,
  isQuerying: isQueryingReducer,
  userInfo: userInfoReducer,
  pageName: pageNameReducer,
  isMenuOpened: isMenuOpenedReducer,
  events: eventsReducer,
  orderEvent: orderEventReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
