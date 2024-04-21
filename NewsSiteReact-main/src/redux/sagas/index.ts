import { all, fork } from "redux-saga/effects";
import { postsSagaWatcher } from "./postsSaga";

// добавляем группы саг (авторизация, посты)
export function* rootSaga() {
  yield all([fork(postsSagaWatcher)]);
  // yield all([fork(authSagaWatcher)]);
}
