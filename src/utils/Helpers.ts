export const getBaseUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    return process.env.APP_URL;
  }

  if (process.env.APP_URL) {
    return process.env.APP_URL;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return 'http://localhost:3000';
};
