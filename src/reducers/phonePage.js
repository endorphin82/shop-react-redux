import * as R from "ramda";
import {
  FETCH_PHONE_BY_ID_SUCCESS
} from "../actionTypes";

const iniitialState = {
  id: null
};

export default (state = iniitialState, { type, payload }) => {
  switch (type) {
    case FETCH_PHONE_BY_ID_SUCCESS:
      return R.merge(state, {
        // id: R.prop("id", payload)
        id: payload.id
      });
    default:
      return state;
  }
}