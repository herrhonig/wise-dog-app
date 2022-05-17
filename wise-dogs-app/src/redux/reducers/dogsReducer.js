import { initState } from "../init/initState";
import { ADD_DOG_TO_FAV, DEL_DOG_CARD, GET_WISE_DOGS } from "../types/dogTypes";
import { GET_DOGGO_TIP } from "../types/dogTypes";

export const dogsReducer = (state = initState, action) => {
  const {type, payload } = action;
  
  switch (type) {
    case GET_WISE_DOGS:
      return {...state, dogList: [...state.dogList, ...payload]};
      
      case GET_DOGGO_TIP:
      return {...state, tips: `${payload} Woof!`};
    
    case DEL_DOG_CARD:
      console.log(state);
      return {...state, dogList: state.dogList.filter((dog) => dog.id !== payload)};

    case ADD_DOG_TO_FAV:
      return {...state, dogList: state.dogList.map((dog) => dog.id === payload ? {...dog, isLiked: !dog.isLiked } : dog)};

    default:
      return state;
  }
}
