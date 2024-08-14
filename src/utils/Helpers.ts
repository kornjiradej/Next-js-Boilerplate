export const getBaseUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    return `https://${process.env.NEXT_PUBLIC_URL}`;
  }

  if (process.env.NEXT_PUBLIC_URL) {
    return process.env.NEXT_PUBLIC_URL;
  }

  return 'http://localhost:3000';
};
