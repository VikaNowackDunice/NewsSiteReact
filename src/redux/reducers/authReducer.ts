import type { Author } from "@/types/types";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from "../actionTypes";
import { UserActions } from "../types/authTypes";

export type UserState = {
  user: Author[];
  isLoading: boolean;
  error: null | string;
}

const initialState: UserState = {
  user: [],
  isLoading: false,
  error: null,
}

export const userReducer = (
  state = initialState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        isLoading: true, 
        error: null,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload
      };
      case FETCH_USER_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
  }
};