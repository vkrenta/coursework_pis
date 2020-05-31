import { watchSignUp } from './signup.saga';
import { watchSignIn } from './signin.saga';
import { watchGetUserData, watchGetUserInfo } from './userdata.saga';
import watchAllEvents from './allevents.saga';

export const watchers = [
  watchSignUp,
  watchSignIn,
  watchGetUserData,
  watchGetUserInfo,
  watchAllEvents,
];
