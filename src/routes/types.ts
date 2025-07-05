import { FC } from 'react';
import { PathRouteProps } from 'react-router-dom';

export enum Pages {
  Home,
  Facebook,
}

export type PathRouteCustomProps = {
  title?: string;
  component: FC;
  path: string;
};

export type Routes = Record<Pages, PathRouteProps & PathRouteCustomProps>;
