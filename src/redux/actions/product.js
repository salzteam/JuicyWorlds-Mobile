import { ActionType } from "redux-promise-middleware";
import { getFavorite, getPromo } from "../../utils/product";
import { actionStrings } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;


// ================= GET FAVORITE ======================
const getFavoritePending = () => ({
  type: actionStrings.getFavorite.concat("_", Pending),
});
const getFavoriteRejected = (error) => ({
  type: actionStrings.getFavorite.concat("_", Rejected),
  payload: { error },
});
const getFavoriteFulfilled = (data) => ({
  type: actionStrings.getFavorite.concat("_", Fulfilled),
  payload: { data },
});
// ======================= END =========================

// =================== GET PRODUCT PROMO ==================
const getProductPromoPending = () => ({
  type: actionStrings.getProductPromo.concat("_", Pending),
});
const getProductPromoRejected = (error) => ({
  type: actionStrings.getProductPromo.concat("_", Rejected),
  payload: { error },
});
const getProductPromoFulfilled = (data) => ({
  type: actionStrings.getProductPromo.concat("_", Fulfilled),
  payload: { data },
});
// ========================= END ==========================

  const getFavoriteThunk = () => {
    return async dispatch => {
      try {
        dispatch(getFavoritePending());
        const result = await getFavorite();
        dispatch(getFavoriteFulfilled(result.data.data.data));
      } catch (error) {
        dispatch(getFavoriteRejected(error.response.data.message || error.response.data.msg));
        console.log(error);
      }
    };
  };

  const getPromoThunk = () => {
    return async dispatch => {
      try {
        dispatch(getProductPromoPending())
        const result = await getPromo()
        dispatch(getProductPromoFulfilled(result.data.data.data))
      } catch (error) {
        dispatch(getProductPromoRejected(error.response.data.message || error.response.data.msg));
        console.log(error);
      }
    }
  }

  const productAction = {
    getFavoriteThunk,
    getPromoThunk
  };
  
  export default productAction;