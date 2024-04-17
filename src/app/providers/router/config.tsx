import { Navigate, RouteProps } from 'react-router';
import { RoutesPath } from '@/shared/consts';
import { Garage } from '@/pages/Garage';
import { Winners } from '@/pages/Winners';

export const ROUTER_CONFIG: RouteProps[] = [
  {
    path: RoutesPath.GARAGE,
    element: <Garage />,
  },
  {
    path: RoutesPath.WINNERS,
    element: <Winners />,
  },
  {
    path: RoutesPath.NOT_FOUND,
    element: <Navigate to={RoutesPath.GARAGE} />,
  },
];
