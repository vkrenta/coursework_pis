export type Action<T = any> = {
  type: string;
  payload?: T | null;
};

export type Credentials = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
};

export type Notification = {
  id: number;
  variant?: 'default' | 'error' | 'success' | 'warning' | 'info';
  message: string;
};

export type Login = {
  login: string;
  password: string;
  remember?: boolean;
};

export const SET_TOKEN = 'SET_TOKEN';
export const SIGN_UP = 'SIGN_UP';
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const PURGE_NOTIFICATION = 'PURGE_NOTIFICATION';
export const SIGN_IN = 'SIGN_IN';
export const GET_USER_DATA = 'GET_USER_DATA';
export const SET_START_LOADER = 'SET_START_LOADER';
