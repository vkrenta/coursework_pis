import { watchSignUp } from './signup.saga';
import { watchSignIn } from './signin.saga';

export const watchers = [watchSignUp, watchSignIn];
