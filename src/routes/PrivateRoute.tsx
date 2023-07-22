import { Fragment } from 'react';
import { Navigate } from 'react-router-dom';

import { getItem } from '../components/utils/localStorage';

export default function PrivateRoute({ children }: { children: React.ReactNode }) {
  const isLogIn = getItem('userId', null);
  console.log({ children })

  return isLogIn ? <div>{children}</div> : <Navigate to="/auth/login" />
};
