import { combineReducers } from "redux";

import { postsReducer } from "../reducers/postReducer";

const rootReducer = combineReducers({
    posts: postsReducer,
  });
  export default rootReducer;