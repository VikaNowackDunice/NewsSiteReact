import { Author, CreateAuthorDto, LoginAuthor } from "@/types/types";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE
} from "../actionTypes";
import {
  CreateUserFailureActionInterface,
  CreateUserRequestActionInterface,
  CreateUserSuccessActionInterface,
  FetchUserFailureActionInterface,
  FetchUserRequestActionInterface,
  FetchUserSuccessActionInterface
} from "../types/authTypes";

export const fetchUserRequest = (): FetchUserRequestActionInterface =>
  ({
    type: FETCH_USER_REQUEST,
  } as const)

export const fetchUserSuccess = (data: Author[]): FetchUserSuccessActionInterface =>
  ({
    type: FETCH_USER_SUCCESS,
    payload: data,
  } as const)

  export const fetchUserFailure = (error: string): FetchUserFailureActionInterface => 
    ({
      type: FETCH_USER_FAILURE,
      payload: error,
    } as const)

export const createrUserRequest = (data: CreateAuthorDto): CreateUserRequestActionInterface =>
  ({
    type: CREATE_USER_REQUEST,
    payload: data,
  } as const)

  export const createUserSuccess = (data: LoginAuthor): CreateUserSuccessActionInterface =>
    ({
      type: CREATE_USER_SUCCESS,
      payload: data,
    } as const)

  export const createUserFailure =(error: string): CreateUserFailureActionInterface =>
    ({
      type: CREATE_USER_FAILURE,
      payload: error,
    } as const)