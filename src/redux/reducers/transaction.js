import { ActionType } from "redux-promise-middleware";
import { actionStrings } from "../actions/actionStrings";

const initialState = {
  cart: [],
  history: [],
  nextHistory: "",
  isLoading: false,
  isError: false,
  isFulfilled: false,
  err: null,
  confirms: false,
};

const transactionReducer = (prevState = initialState, { payload, type }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const {addCart,deleteCart,authLogout, toCheckout, getHistory, deleteHistory, resetHistory} = actionStrings;
  switch (type) {
    // =============== GET HISTORY ================ 
    case getHistory.concat("_", Pending):
    return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
        err: null,
    };
    case getHistory.concat("_", Rejected):
    return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error,
    };
    case getHistory.concat("_", Fulfilled):
    return {
        ...prevState,
        history: prevState.history.concat(payload.data.data),
        nextHistory: payload.data.next,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        err: null,
        confirms: false,
    };
    case resetHistory.concat("_", Fulfilled):
    return {
      cart: [],
      history: [],
      nextHistory: "",
      isLoading: false,
      isError: false,
      isFulfilled: false,
      err: null,
      confirms: false,
    };
// ================= END ================

    // =============== DELETE HISTORY ================ 
    case deleteHistory.concat("_", Pending):
    return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
        err: null,
    };
    case deleteHistory.concat("_", Rejected):
    return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error,
    };
    case deleteHistory.concat("_", Fulfilled):
      const removeByAttr = function(arr, attr, value){
        var i = arr.length;
        while(i--){
           if( arr[i] 
               && arr[i].hasOwnProperty(attr) 
               && (arguments.length > 2 && arr[i][attr] === value ) ){ 
    
               arr.splice(i,1);
    
           }
        }
        // console.log(arr);
        return arr
      }
      const news = removeByAttr(prevState.history, 'transaction_id', payload.id)
    return {
        ...prevState,
        history: news,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        err: null,
        confirms: false,
    };
// ================= END ================

    // =============== LOGOUT ================ 
    case authLogout.concat("_", Fulfilled):
    return {
        cart: [],
        history: [],
        nextHistory: "",
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