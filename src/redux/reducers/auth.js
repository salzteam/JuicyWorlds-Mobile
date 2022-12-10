import { ActionType } from "redux-promise-middleware";
import { actionStrings } from "../actions/actionStrings";

const initialState = {
  userData: { email: null, role: null, token: null, user_id: null },
  isLoading: false,
  isError: false,
  isFulfilled: false,
  err: null,
  confirms: false,
};

const authReducer = (prevState = initialState, { payload, type }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const {
    authLogin,
    authLogout,
    authRegister
  } = actionStrings;
  switch (type) {
//  ============== LOGIN ===============
    case authLogin.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case authLogin.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error,
      };
    case authLogin.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        userData: {
          email: payload.data.data.email,
          role: payload.data.data.role,
          token: payload.data.data.token,
          user_id: payload.data.data.id,
        },
      };
//  =============== END ================

//  ============== LOGIN ===============
    case authRegister.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case authRegister.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error,
      };
    case authRegister.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
      };
//  =============== END ================

//  ============== LOGOUT ===============
    case authLogout.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case authLogout.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.response?.data.message,
      };
    case authLogout.concat("_", Fulfilled):
      return {
        userData: { email: null, role: null, token: null, user_id: null },
        isLoading: false,
        isError: false,
        isFulfilled: false,
        err: null,
        confirms: false,
      };
//  =============== END ================
    default:
      return prevState;
  }
};

export default authReducer;