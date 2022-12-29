'use strict';

const date = new Date(2021, 4, 10);

const addDays = (dateObj, days = 0) => {
    const daysToMs = days * 864_00_000;
    return new Date(dateObj.getTime() + daysToMs);
  };

console.log(`International Family Day is on ${addDays(date, 5)}`);
