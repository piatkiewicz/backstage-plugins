import { createPlugin, createComponentExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const devFriendsDaysPlugin = createPlugin({
  id: 'dev-friends-days',
  routes: {
    root: rootRouteRef,
  },
});

export const DevFriendsDayCard = devFriendsDaysPlugin.provide(
  createComponentExtension({
    name: 'DevFriendsDayCard',
    component: {
      lazy: () => import('./components/DevFriendsDayCard').then(m => m.DevFriendsDayCard),
    },
  }),
);