import { watchSignUp } from './signup.saga';
import { watchSignIn } from './signin.saga';
import { watchGetUserData } from './userdata.saga';

export const watchers = [watchSignUp, watchSignIn, watchGetUserData];
