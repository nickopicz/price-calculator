import { combineReducers } from "redux";
import { SET_PRICE, SET_DURATION, SET_USER_COUNT, SET_NAMES } from "./actions";

const priceRed = (priceRed = { price: "" }, action) => {
  switch (action.type) {
    case SET_PRICE:
      return { price: action.price };
    default:
      return priceRed;
  }
};

const durationRed = (durationRed = { duration: "" }, action) => {
  switch (action.type) {
    case SET_DURATION:
      return { duration: action.duration };
    default:
      return durationRed;
  }
};

const userCountRed = (userCountRed = { userCount: "" }, action) => {
  switch (action.type) {
    case SET_USER_COUNT:
      return { userCount: action.userCount };
    default:
      return userCountRed;
  }
};
const namesRed = (namesRed = { names: [] }, action) => {
  switch (action.type) {
    case SET_NAMES:
      return { names: action.names };
    default:
      return namesRed;
  }
};

const reducers = combineReducers({
  priceRed,
  durationRed,
  userCountRed,
  namesRed,
});

export default reducers;
