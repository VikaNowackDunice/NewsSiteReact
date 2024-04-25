import { Action } from "redux-saga";

import { Post } from "@/types/types";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "../actionTypes";

// Get
export interface FetchPostsRequestActionInterface
  extends Action<typeof FETCH_POSTS_REQUEST> {
  type: typeof FETCH_POSTS_REQUEST;
}

export interface FetchPostsSuccessActionInterface
  extends Action<typeof FETCH_POSTS_SUCCESS> {
  type: typeof FETCH_POSTS_SUCCESS;
  payload: Post[];
}

export interface FetchPostsFailureActionInterface
  extends Action<typeof FETCH_POSTS_FAILURE> {
  type: typeof FETCH_POSTS_FAILURE;
  payload: string;
}

export type PostsActions =
  | FetchPostsRequestActionInterface
  | FetchPostsSuccessActionInterface
  | FetchPostsFailureActionInterface;
