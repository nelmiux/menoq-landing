export const getToken = async () => {
  // Simulate an async operation to get a token
  return new Promise<string | null>((resolve) => {
    setTimeout(() => {
      // Replace this with actual logic to retrieve the token
      resolve('token'); // or resolve(null) if no token is available
    }, 1000);
  });
};

export const apiHeadersWithAuth: (headers: Headers) => Promise<Headers> = async (headers: Headers) => {
  const token = await getToken();

  if (!token) return headers;

  headers.set('authorization', `Bearer ${token}`);

  return headers;
};
