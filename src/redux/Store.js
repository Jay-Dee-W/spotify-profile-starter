import { applyMiddleware, createStore } from "redux";
import login_reducer from "./reducers/login_reducer";
import thunk from "redux-thunk";




export const store = createStore(login_reducer,applyMiddleware(thunk));