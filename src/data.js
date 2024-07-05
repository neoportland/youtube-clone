/* eslint-disable no-unused-vars */
export const API_KEY = "AIzaSyAVVM7cbobKKiDqFdhuJrMeQlL9BFBsrT4";

export const valu_conventor = (value) => {
  if (value > 1000000) {
    return Math.floor(value / 100000) + "M";
  } else if (value > 1000) {
    return Math.floor(value / 1000) + "K";
  } else return value;
};
