import { ActionType } from "redux-promise-middleware";
import { history, deleteHistory } from "../../utils/transaction";
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

const resetHistoryFulfilled = (data) => ({
    type: actionStrings.resetHistory.concat("_", Fulfilled),
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

// =================== DELETE HISTORY ==================
const deleteHistoryPending = () => ({
    type: actionStrings.deleteHistory.concat("_", Pending),
  });
  const deleteHistoryRejected = (error) => ({
    type: actionStrings.deleteHistory.concat("_", Rejected),
    payload: { error },
  });
  const deleteHistoryFulfilled = (id) => ({
    type: actionStrings.deleteHistory.concat("_", Fulfilled),
    payload: { id },
  });
  // ========================= END ==========================

const getHistoryThunk = (paginasi,token) => {
    return async dispatch => {
      try {
        dispatch(getHistoryPending())
        const result = await history(paginasi,token)
        dispatch(getHistoryFulfilled(result.data.data))
      } catch (error) {
        dispatch(getHistoryRejected(error.response.data.message || error.response.data.msg));
        console.log(error);
      }
    }
  }

const deleteHistoryThunk = (id, token, close, errors) => {
  return async dispatch => {
    try {
      dispatch(deleteHistoryPending())
      await deleteHistory(id,token)
      dispatch(deleteHistoryFulfilled(id))
      typeof close === "function" && close()
    } catch (error) {
      dispatch(deleteHistoryRejected(error.response.data.message || error.response.data.msg));
      console.log(error);
      typeof errors === "function" && errors()
    }
  }
}

const transactionAction = {
    addCartFulfilled,
    deleteCartFulfilled,
    checkoutFulfilled,
    getHistoryThunk,
    deleteHistoryThunk,
    resetHistoryFulfilled
};

export default transactionAction;