export const HOUSE_CLICK = "HOUSE_CLICK";
export const PG_CLICK = "PG_CLICK";

export function handleHouseClick(status) {
  return (dispatch) => {
    dispatch({
      type: HOUSE_CLICK,
      payload: status,
    });
  };
}
export function handlePgClick(status) {
  return (dispatch) => {
    dispatch({
      type: PG_CLICK,
      payload: status,
    });
  };
}
