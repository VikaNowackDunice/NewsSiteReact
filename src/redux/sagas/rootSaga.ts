import { all } from 'redux-saga/effects';
import { watchLoginUser, watchRegisterUser } from './userSaga';

export default function* rootSaga(){
    yield all([
        watchRegisterUser(),
        watchLoginUser()
    ])
}