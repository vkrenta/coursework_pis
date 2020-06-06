import sendRequest from './send-request';

export default function logOutApi() {
  return sendRequest('/api/auth/logout', 'GET', {});
}
