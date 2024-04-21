import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "../reducers";
import { rootSaga } from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type RootDispatch = typeof store.dispatch;
