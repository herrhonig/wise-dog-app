import { initState } from "../init/initState";
import { GET_WISE_DOGS } from "../types/dogTypes";

export const dogsReducer = (state = initState, action) => {
  const {type, payload } = action;
  
  switch (type) {
    case GET_WISE_DOGS:
      return payload;
  
    default:
      return state;
  }
}
