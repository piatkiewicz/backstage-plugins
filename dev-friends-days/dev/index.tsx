import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { devFriendsDaysPlugin, DevFriendsDaysPage } from '../src/plugin';

createDevApp()
  .registerPlugin(devFriendsDaysPlugin)
  .addPage({
    element: <DevFriendsDaysPage />,
    title: 'Root Page',
    path: '/dev-friends-days'
  })
  .render();
