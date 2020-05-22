import { Credentials } from '../actions/types';
import sendRequest from './send-request';

const register = (credentials: Credentials) => {
  const { firstName, lastName, password, email, phone } = credentials;
  return sendRequest(
    '/api/auth/register',
    'POST',
    {
      'Content-Type': 'application/json',
    },
    JSON.stringify({
      fullName: `${firstName} ${lastName}`,
      email,
      password,
      phone,
    })
  );
};

export default register;
