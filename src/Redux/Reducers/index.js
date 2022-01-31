import { combineReducers } from "redux";

import HouseClickReducer, { PgClickReducer } from "./Reducer";

const reducers = combineReducers({
  House: HouseClickReducer,
  Pg: PgClickReducer,
});

export default reducers;
