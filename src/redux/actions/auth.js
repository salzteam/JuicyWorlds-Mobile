import { ActionType } from "redux-promise-middleware";
import { register, login, forgot, reset, logout } from "../../utils/auth";
import { getProfile } from "../../utils/user";
import { actionStrings } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

// ==================== LOGIN ===========================
const loginPending = () => ({
  type: actionStrings.authLogin.concat("_", Pending),
});
const loginRejected = (error) => ({
  type: actionStrings.authLogin.concat("_", Rejected),
  payload: { error },
});
const loginFulfilled = (data) => ({
  type: actionStrings.authLogin.concat("_", Fulfilled),
  payload: { data },
});
// ==================== END ===========================

// ================== LOGOUT ===========================
const logoutPending = () => ({
  type: actionStrings.authLogout.concat("_", Pending),
});
const logoutRejected = (error) => ({
  type: actionStrings.authLogout.concat("_", Rejected),
  payload: { error },
});
const logoutFulfilled = (data) => ({
  type: actionStrings.authLogout.concat("_", Fulfilled),
  payload: { data },
});
const getProfileFulfilled = (data) => ({
  type: actionStrings.getProfile.concat("_", Fulfilled),
  payload: { data },
});
// ==================== END ===========================

// =================== REGISTER =====================
const registerPending = () => ({
  type: actionStrings.authRegister.concat("_", Pending),
});
const registerRejected = (error) => ({
  type: actionStrings.authRegister.concat("_", Rejected),
  payload: { error },
});
const registerFulfilled = (data) => ({
  type: actionStrings.authRegister.concat("_", Fulfilled),
  payload: { data },
});
// ===================== END =======================

  const loginThunk = (body, cbSuccess, cbDenied) => {
    return async dispatch => {
      try {
        dispatch(loginPending());
        const result = await login(body);
        const profile = await getProfile(result.data.data.token);
        dispatch(loginFulfilled(result.data));
        dispatch(getProfileFulfilled(profile.data));
        typeof cbSuccess === "function" && cbSuccess();
      } catch (error) {
        dispatch(loginRejected(error.response.data.message));
        console.log(error);
        typeof cbDenied === "function" && cbDenied(error.response.data.message);
      }
    };
  };

  const logoutThunk = (token, cbSuccess, cbDenied) => {
    return async dispatch => {
      try {
        dispatch(logoutPending())
        await logout(token);
        dispatch(logoutFulfilled())
        typeof cbSuccess === "function" && cbSuccess();
      } catch (error) {
        dispatch(logoutRejected(error));
        console.log(error);
        typeof cbDenied === "function" && cbDenied(error.response.data.msg);
      }
    }
  }

  const registerThunk = (body, cbSuccess, cbDenied) => {
    return async dispatch => {
      try {
        dispatch(registerPending())
        await register(body);
        dispatch(registerFulfilled())
        typeof cbSuccess === "function" && cbSuccess("Register Success, Login Here !");
      } catch (error) {
        dispatch(registerRejected(error.response.data.message || error.response.data.msg));
        console.log(error);
        typeof cbDenied === "function" && cbDenied(error.response.data.message || error.response.data.msg);
      }
    }
  }

  const authAction = {
    loginThunk,
    logoutThunk,
    registerThunk
  };
  
  export default authAction;