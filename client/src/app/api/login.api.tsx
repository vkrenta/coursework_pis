import { Login } from '../actions/types';
import sendRequest from './send-request';

export default function logIn(credentials: Login) {
  const { password, remember } = credentials;
  return sendRequest(
    '/api/auth/login',
    'POST',
    {
      'Content-Type': 'application/json',
    },
    JSON.stringify({
      login: credentials.login,
      password,
      remember,
    })
  );
}
