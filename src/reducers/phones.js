import * as R from "ramda";
import { FETCH_PHONES_SUCESS } from "../actionTypes";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PHONES_SUCESS:
    const newValue = R.indexBy(R.prop("id"), payload);
    return R.merge(state, newValue);
    default:
      return state;
  }
}