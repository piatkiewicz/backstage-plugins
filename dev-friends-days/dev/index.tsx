import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { DevFriendsDayCard, devFriendsDaysPlugin } from '../src/plugin';

createDevApp()
  .registerPlugin(devFriendsDaysPlugin)
  .addPage({
    element: <DevFriendsDayCard />,
    title: 'Root Page',
    path: '/devfriendsday',
  })
  .render();
