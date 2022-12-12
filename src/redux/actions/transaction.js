import { ActionType } from "redux-promise-middleware";
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

const userAction = {
    addCartFulfilled,
    deleteCartFulfilled,
    checkoutFulfilled
};

export default userAction;