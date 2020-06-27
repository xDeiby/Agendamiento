export const dateToHourString = (myDate) => `${myDate.getHours()}:${myDate.getMinutes() === 0 ? myDate.getMinutes()+'0' : myDate.getMinutes()}`;

export const dateToDateString = (myDate) => `${myDate.getFullYear()}/${myDate.getMonth()}/${myDate.getDate()}`;
