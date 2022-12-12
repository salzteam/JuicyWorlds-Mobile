import { ActionType } from "redux-promise-middleware";
import { actionStrings } from "../actions/actionStrings";

const initialState = {
    profile: {
        displayName: null,
        firstName: null,
        lastName: null,
        noTelp: null,
        image: null,
        born: null,
        adress: null,
        gender: null
        },
  isLoading: false,
  isError: false,
  isFulfilled: false,
  err: null,
  confirms: false,
};

const userReducer = (prevState = initialState, { payload, type }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const {
    getProfile,
    authLogout
  } = actionStrings;
  switch (type) {
    case authLogout.concat("_", Fulfilled):
      return {
        profile: {
          displayName: null,
          firstName: null,
          lastName: null,
          noTelp: null,
          image: null,
          born: null,
          adress: null,
          gender: null
        },
        isLoading: false,
        isError: false,
        isFulfilled: false,
        err: null,
        confirms: false,
      };
    case getProfile.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getProfile.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.response?.data.message,
      };
    case getProfile.concat("_", Fulfilled):
        console.log(payload.data.data);
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        profile: {
            displayName: payload.data.data.profileUser[0].display_name,
            firstName: payload.data.data.profileUser[0].firstname,
            lastName: payload.data.data.profileUser[0].lastname,
            noTelp: payload.data.data.profileData[0].phone,
            image: payload.data.data.profileUser[0].displaypicture,
            born: payload.data.data.profileUser[0].tanggal_lahir,
            adress: payload.data.data.profileUser[0].adress,
            gender: payload.data.data.profileUser[0].gender
        },
      };
    default:
      return prevState;
  }
};

export default userReducer;