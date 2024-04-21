import type { Post } from "@/types/Post";
import { PostsActions } from "../types/postActions";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  // CREATE_POST_REQUEST,
  // CREATE_POST_SUCCESS,
  // CREATE_POST_FAILURE,
  // UPDATE_POST_REQUEST,
  // UPDATE_POST_SUCCESS,
  // UPDATE_POST_FAILURE,
  // DELETE_POST_REQUEST,
  // DELETE_POST_SUCCESS,
  // DELETE_POST_FAILURE,
} from "../actionTypes";

export type PostsState = {
  posts: Post[];
  isLoading: boolean;
  error: null | string;
};

const initialState: PostsState = {
  posts: [],
  isLoading: false,
  error: null,
};

export const postsReducer = (
  state = initialState,
  action: PostsActions
): PostsState => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
