import { ActionType } from "redux-promise-middleware";
import { actionStrings } from "../actions/actionStrings";

const initialState = {
  Favorite: [],
  Product_Promo: [],
  Products: [],
  nextPage: null,
  isLoading: false,
  LoadingProduct: false,
  isError: false,
  isFulfilled: false,
  err: null,
  confirms: false,
};

const productReducer = (prevState = initialState, { payload, type }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const {getFavorite, authLogout, getProductPromo, getProducts, resetProducts, getFilter} = actionStrings;
  switch (type) {
 // =============== LOGOUT ================ 
    case authLogout.concat("_", Fulfilled):
      return {
        Favorite: [],
        Product_Promo: [],
        Products: [],
        nextPage: null,
        isLoading: false,
        LoadingProduct: false,
        isError: false,
        isFulfilled: false,
        err: null,
        confirms: false,
      };
  // ================= END ================

 // =============== RESET ================ 
    case resetProducts.concat("_", Fulfilled):
      return {
        ...prevState,
        Products: [],
        Favorite: [],
        Product_Promo: [],
        nextPage: null,
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

  // ================= PRODUCT ===============
  case getProducts.concat("_", Pending):
    return {
      ...prevState,
      LoadingProduct: true,
      isError: false,
      isFulfilled: false,
    };
  case getProducts.concat("_", Rejected):
    return {
      ...prevState,
      LoadingProduct: false,
      isError: true,
      isFulfilled: false,
      err: payload.error,
    };
  case getProducts.concat("_", Fulfilled):
    return {
      ...prevState,
      LoadingProduct: false,
      isError: false,
      isFulfilled: true,
      Products: prevState.Products.concat(payload.data),
      nextPage: payload.next
    };
  // ================= END =================

  // ================= PRODUCT ===============
  case getFilter.concat("_", Pending):
    return {
      ...prevState,
      isLoading: true,
      isError: false,
      isFulfilled: false,
    };
  case getFilter.concat("_", Rejected):
    return {
      ...prevState,
      isLoading: false,
      isError: true,
      isFulfilled: false,
      err: payload.error,
    };
  case getFilter.concat("_", Fulfilled):
    return {
      ...prevState,
      isLoading: false,
      isError: false,
      isFulfilled: true,
      Products: payload.data,
      nextPage: payload.next
    };
  // ================= END =================
    default:
      return prevState;
  }
};

export default productReducer;