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

export type UserInfo = null | {
  name: string;
  phone: string;
  email: string;
  orders_count: number;
  created_at: Date;
};

export type Page = null | {
  name: string;
  path: string;
};

export type Event = null | {
  event_id: number;
  event_name: string;
  begins_at: Date | string;
  stadium_id: number;
  stadium_name: string;
  free_places: number;
};

export const SET_TOKEN = 'SET_TOKEN';
export const SIGN_UP = 'SIGN_UP';
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const PURGE_NOTIFICATION = 'PURGE_NOTIFICATION';
export const SIGN_IN = 'SIGN_IN';
export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_USER_INFO = 'GET_USER_INFO';
export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_START_LOADER = 'SET_START_LOADER';
export const SET_QUERYING = 'SET_QUERYING';
export const SET_PAGE_NAME = 'SET_PAGE_NAME';
export const SET_OPEN_MENU = 'SET_OPEN_MENU';
export const GET_ALL_EVENTS = 'GET_ALL_EVENTS';
export const SET_EVENTS = 'SET_EVENTS';
export const LOG_OUT = 'LOG_OUT';
export const SET_ORDER_EVENT = 'SET_ORDER_EVENT';
