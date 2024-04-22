import { Action } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import type { Post, CreatePostDto } from "@/types/Post";
import { getPostsRequest, createPostRequest } from "@/api/api";
import { FETCH_POSTS_REQUEST, CREATE_POST_REQUEST, } from "../actionTypes";
import {
  createPostFailure,
  fetchPostsRequest,
  createPostSuccess,
  fetchPostsSuccess,
  fetchPostsFailure,
} from "../actions/postActions";

function* fetchPostsWorker(_action: Action<typeof FETCH_POSTS_REQUEST>) {
  try {
    const response = (yield call(getPostsRequest)) as Post[];
    yield put(fetchPostsSuccess(response));
  } catch (error) {
    yield put(fetchPostsFailure((error as string) ?? "Error loading posts"));
  }
}


function* createPostWorker(
  action: Action<typeof CREATE_POST_REQUEST> & { payload: CreatePostDto }
) {
  try {
    yield call(createPostRequest, action.payload); // отправили запрос на сервер
    yield put(createPostSuccess()); // обновили состояние
    yield put(fetchPostsRequest()); // перезапросили новые посты
  } catch (error) {
    yield put(createPostFailure((error as string) ?? "Ошибка загрузки постов"));
  }
}

export function* postsSagaWatcher() {
  yield takeLatest(FETCH_POSTS_REQUEST, fetchPostsWorker);
  yield takeLatest(CREATE_POST_REQUEST, createPostWorker);

  // раскомментировать, когда сделаю остальные операции
  // yield takeLatest(UPDATE_POST_REQUEST, updatePostWorker);
  // yield takeLatest(DELETE_POST_REQUEST, deletePostWorker);
}
