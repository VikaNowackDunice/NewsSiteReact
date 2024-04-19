import { applyMiddleware, compose, legacy_createStore as createStore } from "redux"; //2.4K (gzipeed: 1K)
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';
import { rootReducer } from './rootReducer';

const sagaMiddleware=createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =createStore(rootReducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
)
sagaMiddleware.run(rootSaga)
export default store