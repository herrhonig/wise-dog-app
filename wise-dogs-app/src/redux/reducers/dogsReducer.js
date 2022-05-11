import { initState } from "../init/initState";
import { GET_WISE_DOGS } from "../types/dogTypes";
import { GET_DOGGO_TIP } from "../types/dogTypes";

export const dogsReducer = (state = initState, action) => {
  const {type, payload } = action;
  
  switch (type) {
    case GET_WISE_DOGS:
      return {...state, dogList: payload};

    case GET_DOGGO_TIP:
      return {...state, tips: payload};
    default:
      return state;
  }
}
