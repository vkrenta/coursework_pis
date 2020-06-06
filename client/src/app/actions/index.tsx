import {
  Action,
  Credentials,
  SET_TOKEN,
  SIGN_UP,
  ADD_NOTIFICATION,
  Notification,
  Login,
  SIGN_IN,
  GET_USER_DATA,
  SET_START_LOADER,
  SET_QUERYING,
  UserInfo,
  SET_USER_INFO,
  GET_USER_INFO,
  SET_PAGE_NAME,
  SET_OPEN_MENU,
  Page,
  GET_ALL_EVENTS,
  SET_EVENTS,
  LOG_OUT,
  Event,
  SET_ORDER_EVENT,
} from './types';

export const setToken = (token: string | null): Action<string> => ({
  type: SET_TOKEN,
  payload: token,
});

export const signUp = (credentials: Credentials): Action<Credentials> => ({
  type: SIGN_UP,
  payload: credentials,
});

export const addNotification = (
  variant: 'default' | 'error' | 'success' | 'warning' | 'info' | undefined,
  message: string
): Action<Notification> => ({
  type: ADD_NOTIFICATION,
  payload: {
    variant,
    message,
    id: Math.random() + Date.now(),
  },
});

export const signIn = (credentials: Login): Action<Login> => ({
  type: SIGN_IN,
  payload: credentials,
});

export const getUserData = (): Action => ({ type: GET_USER_DATA });

export const getUserInfo = (): Action => ({ type: GET_USER_INFO });

export const setStartLoader = (payload: boolean): Action<boolean> => ({
  type: SET_START_LOADER,
  payload,
});

export const setQuerying = (payload: boolean): Action<boolean> => ({
  type: SET_QUERYING,
  payload,
});

export const setUserInfo = (payload: UserInfo): Action<UserInfo> => ({
  type: SET_USER_INFO,
  payload,
});

export const setPageName = (payload: Page): Action<Page> => ({
  type: SET_PAGE_NAME,
  payload,
});

export const setOpenMenu = (payload: boolean): Action<boolean> => ({
  type: SET_OPEN_MENU,
  payload,
});

export const getAllEventsAction = (): Action => ({ type: GET_ALL_EVENTS });

export const setEvents = (payload: Event[]): Action<Event[]> => ({
  type: SET_EVENTS,
  payload,
});

export const logOut = (): Action => ({ type: LOG_OUT });

export const setOrderEvent = (payload: Event): Action => ({
  type: SET_ORDER_EVENT,
  payload,
});
