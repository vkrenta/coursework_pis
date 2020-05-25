import { watchSignUp } from './signup.saga';
import { watchSignIn } from './signin.saga';
import { watchGetUserData, watchGetUserInfo } from './userdata.saga';

export const watchers = [
  watchSignUp,
  watchSignIn,
  watchGetUserData,
  watchGetUserInfo,
];
