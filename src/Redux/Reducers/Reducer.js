import { HOUSE_CLICK, PG_CLICK } from "../Actions";

let initialState = {
  houseClick: false,
  pgClick: true,
};

export default function HouseClickReducer(state = initialState, action) {
  switch (action.type) {
    case HOUSE_CLICK:
      return {
        ...state,
        houseClick: action.payload,
      };

    default:
      return state;
  }
}

export function PgClickReducer(state = initialState, action) {
  switch (action.type) {
    case PG_CLICK:
      return {
        ...state,
        pgClick: action.payload,
      };

    default:
      return state;
  }
}
