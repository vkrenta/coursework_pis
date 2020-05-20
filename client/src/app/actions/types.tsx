export type Action<T = any> = {
  type: string;
  payload?: T | null;
};

export const SET_TOKEN = 'SET_TOKEN';
