import React from 'react';
import { Typography } from '@material-ui/core';
import {
  InfoCard
} from '@backstage/core-components';

const currentDate = new Date();

// TODO: show this amazing software architecture solution to your colleagues
// TODO: add more days
// TODO: handle multiple events at the same day
const isProgrammerDay = () => (
    //256th day of the year, 13th of Sept in leap year, 12th in regular
    (currentDate.getFullYear()%4==0 && currentDate.getMonth() == 8 && currentDate.getDate() == 13) ||
    (currentDate.getFullYear()%4!=0 && currentDate.getMonth() == 8 && currentDate.getDate() == 12)
);

const isTesterDay = () =>
    // Sept 9th
    (currentDate.getMonth() == 8 && currentDate.getDate() == 9);

const isSysAdminDay = () =>
    // Last friday of July
    (currentDate.getDay() == 5 && currentDate.getMonth() == 6 && currentDate.getDate()+7>daysInThisMonth(currentDate));

const dayOwnerText = 
    isProgrammerDay() ? "Programmer Day" :
    isTesterDay() ? "Tester Day" :
    isSysAdminDay() ? "SysAdmin Day" :
    "";

const dayText = dayOwnerText ? "Today is the " + dayOwnerText + "!" : "No special day today";

export const DevFriendsDayCard = () => (
    <InfoCard title="Special day">
    <Typography variant="body1">
      {dayText}
    </Typography>
  </InfoCard>
);

function daysInThisMonth(now : Date) {
    return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
  }