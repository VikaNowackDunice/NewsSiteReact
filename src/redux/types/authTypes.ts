import { Action } from "redux";

import { Author, CreateAuthorDto, LoginAuthor } from "@/types/types";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE
} from "../actionTypes";

export interface FetchUserRequestActionInterface
extends Action<typeof FETCH_USER_REQUEST> {
  type: typeof FETCH_USER_REQUEST
}

export interface FetchUserSuccessActionInterface
  extends Action<typeof FETCH_USER_SUCCESS> {
  type: typeof FETCH_USER_SUCCESS;
  payload: Author[];
}

export interface FetchUserFailureActionInterface
  extends Action<typeof FETCH_USER_FAILURE> {
  type: typeof FETCH_USER_FAILURE;
  payload: string;
}

export interface CreateUserRequestActionInterface
  extends Action<typeof CREATE_USER_REQUEST> {
  type: typeof CREATE_USER_REQUEST;
  payload: CreateAuthorDto; // Данные нового пользователя
}

export interface CreateUserSuccessActionInterface
  extends Action<typeof CREATE_USER_SUCCESS> {
  type: typeof CREATE_USER_SUCCESS;
  payload: LoginAuthor; // Новый пользователь, возвращенный сервером после успешного создания
}

export interface CreateUserFailureActionInterface
  extends Action<typeof CREATE_USER_FAILURE> {
  type: typeof CREATE_USER_FAILURE;
  payload: string; // Сообщение об ошибке
}

export type UserActions =
  | FetchUserRequestActionInterface
  | FetchUserSuccessActionInterface
  | FetchUserFailureActionInterface;

export type CreateUserActions =
  | CreateUserRequestActionInterface
  | CreateUserSuccessActionInterface
  | CreateUserFailureActionInterface;