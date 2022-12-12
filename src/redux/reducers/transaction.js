import { ActionType } from "redux-promise-middleware";
import { actionStrings } from "../actions/actionStrings";

const initialState = {
  cart: [],
  isLoading: false,
  isError: false,
  isFulfilled: false,
  err: null,
  confirms: false,
};

const transactionReducer = (prevState = initialState, { payload, type }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const {addCart,deleteCart,authLogout, toCheckout} = actionStrings;
  switch (type) {
    // =============== LOGOUT ================ 
    case authLogout.concat("_", Fulfilled):
    return {
        cart: [],
        isLoading: false,
        isError: false,
        isFulfilled: false,
        err: null,
        confirms: false,
    };
// ================= END ================

 // =============== ADD CART ================ 
    case addCart.concat("_", Fulfilled):
      return {
        ...prevState,
        cart: [{
            "id_product" : payload.data.id,
            "name_product" : payload.data.name_product,
            "price": payload.data.price,
            "image": payload.data.image,
            "size": payload.data.size,
            "promo_id": payload.data.promo
        }],
      };
  // ================= END ================

//=================== CHECK OUT ===============
    case toCheckout.concat("_", Fulfilled):
      return {
        ...prevState,
        cart: [payload.data],
      };
// ===================== END ================== 
 
// =============== DELETE CART ================ 
    case deleteCart.concat("_", Fulfilled):
      return {
        ...prevState,
        cart: []
      };
  // ================= END ================
    default:
      return prevState;
  }
};

export default transactionReducer;