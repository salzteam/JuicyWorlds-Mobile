import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth";
import userReducer from "./user";
import productReducer from "./product";

export default combineReducers({
    auth: authReducer,
    profile: userReducer,
    product: productReducer
});