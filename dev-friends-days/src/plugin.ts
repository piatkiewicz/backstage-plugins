import { createPlugin } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const devFriendsDaysPlugin = createPlugin({
  id: 'dev-friends-days',
  routes: {
    root: rootRouteRef,
  },
});
