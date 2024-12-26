import { createStore } from "redux";

const intialState = { counter: 0, showCounter: true };

const counterReducer = (state = intialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "increase") {
    return {
      ...state,
      counter: state.counter + (action.amount || 0),
    };
  }
  if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  if (action.type === "toggle") {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
