const sendRequest = async (
  path: string,
  method: string,
  headers: any,
  body: string | null = null
) => {
  const response = await fetch(path, {
    method,
    headers,
    body,
  });

  const result = await response.json();

  const error = new Error();
  if (response.status === 500) {
    error.message = JSON.stringify({
      code: 500,
      message: result.message,
    });
    throw error;
  }
  if (response.status === 404) {
    error.message = JSON.stringify({
      code: 404,
      message: result,
    });
    throw error;
  }
  if (!response.ok) {
    error.message = JSON.stringify({
      code: result.code || 400,
      message: result.message,
    });
    throw error;
  }

  return result;
};

export default sendRequest;
