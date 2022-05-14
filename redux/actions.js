export const SET_PRICE = "SET_PRICE";
export const SET_DURATION = "SET_DURATION";
export const SET_USER_COUNT = "SET_USER_COUNT";
export const SET_NAMES = "SET_NAMES";

export const setPrice = (price) => ({ type: SET_PRICE, price });
export const setDuration = (duration) => ({ type: SET_DURATION, duration });
export const setUserCount = (userCount) => ({
  type: SET_USER_COUNT,
  userCount,
});
export const setNames = (names) => ({
  type: SET_NAMES,
  names,
});
