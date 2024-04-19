import { combineReducers } from "redux";

const test = (state = {}) => {
  return state;
}

const reducer = combineReducers({
  test,
});

export default reducer;