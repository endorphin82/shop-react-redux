import * as R from "ramda";
import {
  FETCH_PHONES_SUCESS,
  LOAD_MORE_PHONES_SUCCESS
} from "../actionTypes";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PHONES_SUCESS:
    const newValue = R.indexBy(R.prop("id"), payload);
    return R.merge(state, newValue);
    case LOAD_MORE_PHONES_SUCCESS:
      const moreValues = R.indexBy(R.prop("id"), payload);
      return R.merge(state, moreValues);
    default:
      return state;
  }
}