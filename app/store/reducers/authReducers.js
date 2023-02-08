import { LOGIN_DETAILS } from "../types";

const initialState = {
  getLoginDetailsData: {},
};

const authReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_DETAILS: {
      return {
        ...state,
        getLoginDetailsData: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default authReducers;
