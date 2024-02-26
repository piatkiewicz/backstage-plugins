import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { devFriendsDaysPlugin } from '../src/plugin';

createDevApp()
  .registerPlugin(devFriendsDaysPlugin)
  .render();
