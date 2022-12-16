import { ActionType } from "redux-promise-middleware";
import { getFavorite, getPromo, getProduct } from "../../utils/product";
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

// =================== GET PRODUCT ==================
const getProductPending = () => ({
  type: actionStrings.getProducts.concat("_", Pending),
});
const getProductRejected = (error) => ({
  type: actionStrings.getProducts.concat("_", Rejected),
  payload: { error },
});
const getProductFulfilled = (data, next) => ({
  type: actionStrings.getProducts.concat("_", Fulfilled),
  payload: { data, next },
});

const resetProductsFulfilled = () => ({
  type: actionStrings.resetProducts.concat("_", Fulfilled),
});
// ========================= END ==========================

// =================== GET FILTER ==================
const getFilterPending = () => ({
  type: actionStrings.getFilter.concat("_", Pending),
});
const getFilterRejected = (error) => ({
  type: actionStrings.getFilter.concat("_", Rejected),
  payload: { error },
});
const getFilterFulfilled = (data, next) => ({
  type: actionStrings.getFilter.concat("_", Fulfilled),
  payload: { data, next },
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

  const getProductsThunk = (text) => {
    return async dispatch => {
      try {
        dispatch(getProductPending())
        const result = await getProduct(text)
        let data = []
        result.data.data.data.forEach((item)=>{
          if (item.product_name !== "none") data.push(item)
        })
        console.log(result);
        dispatch(getProductFulfilled(data, result.data.data.next))
      } catch (error) {
        dispatch(getProductRejected(error.response.data.message || error.response.data.msg));
        console.log(error);
      }
    }
  }

  const getFilterThunk = (text) => {
    return async dispatch => {
      try {
        dispatch(getFilterPending())
        const result = await getProduct(text)
        let data = []
        result.data.data.data.forEach((item)=>{
          if (item.product_name !== "none") data.push(item)
        })
        console.log(result);
        dispatch(getFilterFulfilled(data, result.data.data.next))
      } catch (error) {
        dispatch(getFilterRejected(error.response.data.message || error.response.data.msg));
        console.log(error);
      }
    }
  }

  const productAction = {
    getFavoriteThunk,
    getPromoThunk,
    getProductsThunk,
    resetProductsFulfilled,
    getFilterThunk
  };
  
  export default productAction;