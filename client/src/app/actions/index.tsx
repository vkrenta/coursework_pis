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

export const setStartLoader = (payload: boolean): Action<boolean> => ({
  type: SET_START_LOADER,
  payload,
});
