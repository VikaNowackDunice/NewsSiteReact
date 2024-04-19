import {call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {REGISTER_USER_REQUEST,LOGIN_USER} from '../actions/action'

function* registerUser(action: { payload: unknown; }) {
  try {
    const response = yield call(axios.post, "http://localhost:5004/author/register", action.payload);
    if (response.status !== 200) {
      throw new Error("Failed to register user");
    }
  } catch (error) {
   yield put({type: 'REGISTER_USER_FAILURE', error: error.message })
  }
}

function* loginUser(action:{  payload: { email: string; password: string }  }){

  try{
    const response = yield call(axios.post,"http://localhost:5004/author/login", action.payload);
    if (response.status !== 200) {
      throw new Error("Failed to register user");
    }
  }catch(error){
    yield put({ type: 'LOGIN_USER_FAILURE', error: error.message });
  }
}

export function* watchRegisterUser() {
yield takeEvery(REGISTER_USER_REQUEST,registerUser)
}

export function* watchLoginUser() {
yield takeEvery(LOGIN_USER, loginUser);
}