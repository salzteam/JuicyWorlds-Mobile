import { ActionType } from "redux-promise-middleware";
import { actionStrings } from "../actions/actionStrings";

const initialState = {
  Favorite: [],
  Product_Promo: [],
  isLoading: false,
  isError: false,
  isFulfilled: false,
  err: null,
  confirms: false,
};

const productReducer = (prevState = initialState, { payload, type }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const {getFavorite, authLogout, getProductPromo} = actionStrings;
  switch (type) {
 // =============== LOGOUT ================ 
    case authLogout.concat("_", Fulfilled):
      return {
        Favorite: [],
        Product_Promo: [],
        isLoading: false,
        isError: false,
        isFulfilled: false,
        err: null,
        confirms: false,
      };
  // ================= END ================

  // =============== FAVORITE ============= 
    case getFavorite.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getFavorite.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error,
      };
    case getFavorite.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        Favorite: payload.data
      };
  // ================== END ================

  // ================= PROMO ===============
  case getProductPromo.concat("_", Pending):
    return {
      ...prevState,
      isLoading: true,
      isError: false,
      isFulfilled: false,
    };
  case getProductPromo.concat("_", Rejected):
    return {
      ...prevState,
      isLoading: false,
      isError: true,
      isFulfilled: false,
      err: payload.error,
    };
  case getProductPromo.concat("_", Fulfilled):
    return {
      ...prevState,
      isLoading: false,
      isError: false,
      isFulfilled: true,
      Product_Promo: payload.data
    };
  // ================= END =================
    default:
      return prevState;
  }
};

export default productReducer;