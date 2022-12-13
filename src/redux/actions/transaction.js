import { ActionType } from "redux-promise-middleware";
import { history } from "../../utils/transaction";
import { actionStrings } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

const addCartFulfilled = (data) => ({
  type: actionStrings.addCart.concat("_", Fulfilled),
  payload: { data },
});

const deleteCartFulfilled = () => ({
    type: actionStrings.deleteCart.concat("_", Fulfilled)
})

const checkoutFulfilled = (data) => ({
    type: actionStrings.toCheckout.concat("_", Fulfilled),
    payload: { data }
})

// =================== GET HISTORY ==================
const getHistoryPending = () => ({
    type: actionStrings.getHistory.concat("_", Pending),
  });
  const getHistoryRejected = (error) => ({
    type: actionStrings.getHistory.concat("_", Rejected),
    payload: { error },
  });
  const getHistoryFulfilled = (data) => ({
    type: actionStrings.getHistory.concat("_", Fulfilled),
    payload: { data },
  });
  // ========================= END ==========================

const getHistoryThunk = (paginasi,token, cbConcat) => {
    return async dispatch => {
      try {
        dispatch(getHistoryPending())
        const result = await history(paginasi,token)
        dispatch(getHistoryFulfilled(result.data.data))
        typeof cbConcat === "function" && cbConcat(result.data.data.data)
      } catch (error) {
        dispatch(getHistoryRejected(error.response.data.message || error.response.data.msg));
        console.log(error);
      }
    }
  }

const transactionAction = {
    addCartFulfilled,
    deleteCartFulfilled,
    checkoutFulfilled,
    getHistoryThunk
};

export default transactionAction;