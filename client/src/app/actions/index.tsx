import { Action, SET_TOKEN } from './types';

export const setToken = (token: string | null): Action<string> => ({
  type: SET_TOKEN,
  payload: token,
});
