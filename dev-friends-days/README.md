# dev-friends-days

Welcome to the dev-friends-days plugin for Backstage!

## Getting started

This plugin offers `<DevFriendsDayCard />` which shows info if there is the Programmer, Tester or SysAdmin day today so you will know when to celebrate that special day with your team!

On the last Friday of July:

![image](https://github.com/piatkiewicz/backstage-plugins/assets/8793897/6b519c32-a845-4c43-940f-e2ec93a9325e)

Regular day without any Devs' friends event:

![image](https://github.com/piatkiewicz/backstage-plugins/assets/8793897/66acff85-2a7e-4a4a-b5d9-5ab41d4d4f47)

## Installation

1. Add plugin to your frontend app
```sh
# From your Backstage root directory
yarn --cwd packages/app add backstage-dev-friends-days`
```

2. Add import and place the `DevFriendsDayCard` component where you want it to display
```ts
//...
import { DevFriendsDayCard } from 'backstage-dev-friends-days';
//...
  <Grid item xs={12}>
    <DevFriendsDayCard />
  </Grid>
//...
```
