import { createStore, applyMiddleware } from "redux";

import reducers from "./Reducers/index";
import thunk from "redux-thunk";

export default createStore(reducers, undefined, applyMiddleware(thunk));
