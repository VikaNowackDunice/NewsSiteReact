import { Post, CreatePostDto, Tag } from "@/types/Post";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
} from "../actionTypes";

export const fetchPostsRequest = () =>
  ({
    type: FETCH_POSTS_REQUEST,
  } as const);

export const fetchPostsSuccess = (data: Post[]) =>
  ({
    type: FETCH_POSTS_SUCCESS,
    payload: data,
  } as const);

export const fetchPostsFailure = (error: string) =>
  ({
    type: FETCH_POSTS_FAILURE,
    payload: error,
  } as const);

export const createPostRequest = (data: CreatePostDto) =>
  ({
    type: CREATE_POST_REQUEST,
    payload: data,
  } as const);

export const createPostSuccess = () =>
  ({
    type: CREATE_POST_SUCCESS,
  } as const);

export const createPostFailure = (error: string) =>
  ({
    type: CREATE_POST_FAILURE,
    payload: error,
  } as const);

