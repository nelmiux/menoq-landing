import AsyncComponentLoader from '@/components/AsyncComponentLoader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Home]: {
    component: AsyncComponentLoader(() => import('@/pages/Landing')),
    path: '/',
    title: 'Home',
  },
  [Pages.Facebook]: {
    component: () => {
      window.location.href = 'https://m.facebook.com/groups/bloomerbrigade';
      return null;
    },
    path: '/',
    title: 'Facebook',
  },
};

export default routes;
