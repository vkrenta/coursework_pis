import sendRequest from './send-request';

export default function getUser() {
  return sendRequest('/api/user', 'GET', {}, null);
}
