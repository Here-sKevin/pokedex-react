import { redirect } from 'react-router-dom';

export const authLoader = async () => {
  const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated') || 'false');

  if (!isAuthenticated) {
    return redirect('/');
  }

  return null;
};