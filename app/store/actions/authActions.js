import { LOGIN_DETAILS } from "../types";

export const getLoginDetailsAction = (param) => (dispatch) => {
  dispatch({ type: LOGIN_DETAILS, payload: param });
};
