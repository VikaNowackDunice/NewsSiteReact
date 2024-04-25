import { CREATE_USER_REQUEST, FETCH_USER_REQUEST } from "@/redux/actionTypes";

export const reducer = (
  state = {
    formData: null,
  },
  action
) => {
  console.log("action >>", action.payload);

  switch (action.type) {
    case CREATE_USER_REQUEST: {
      console.log("registrationData >>", action.payload);
      return {
        ...state,
        registrationData: action.payload.formData,
      };
    }
    case FETCH_USER_REQUEST: {
      console.log("loginData >>", action.payload.formData);
      return {
        ...state,
        loginData: action.payload.formData,
      };
    }
    default:
      return state;
  }
};
