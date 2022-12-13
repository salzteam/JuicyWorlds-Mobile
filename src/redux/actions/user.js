import { ActionType } from "redux-promise-middleware";
import { getProfile, editProfile } from "../../utils/user";
import { actionStrings } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

const getProfilePending = () => ({
  type: actionStrings.getProfile.concat("_", Pending),
});
const getProfileRejected = (error) => ({
  type: actionStrings.getProfile.concat("_", Rejected),
  payload: { error },
});
const getProfileFulfilled = (data) => ({
  type: actionStrings.getProfile.concat("_", Fulfilled),
  payload: { data },
});

const editProfilePending = () => ({
  type: actionStrings.editProfile.concat("_", Pending),
});
const editProfileRejected = (error) => ({
  type: actionStrings.editProfile.concat("_", Rejected),
  payload: { error },
});
const editProfileFulfilled = (data) => ({
  type: actionStrings.editProfile.concat("_", Fulfilled),
  payload: { data },
});

  const getProfileThunk = (token) => {
    return async dispatch => {
      try {
        dispatch(getProfilePending());
        const result = await getProfile(token);
        dispatch(getProfileFulfilled(result.data));
      } catch (error) {
        dispatch(getProfileRejected(error.response.data.message || error.response.data.msg));
        console.log(error);
      }
    };
  };

  const editProfileThunk = (body, token, cbSuccess, cbDeny) => {
    return async dispatch => {
      try {
        dispatch(getProfilePending());
        const result = await editProfile(body, token);
        const resultProfile = await getProfile(token);
        dispatch(getProfileFulfilled(resultProfile.data));
        typeof cbSuccess === "function" && cbSuccess();
      } catch (error) {
        dispatch(getProfileRejected(error.response.data.message || error.response.data.msg));
        console.log(error);
        typeof cbDeny === "function" && cbDeny(error.response.data.message || error.response.data.msg);
      }
    };
  }

  const userAction = {
    getProfileThunk,
    editProfileThunk
  };
  
  export default userAction;