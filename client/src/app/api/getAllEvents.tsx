import sendRequest from './send-request';

export default function getAllEvents() {
  return sendRequest('/api/events/all', 'GET', {});
}
