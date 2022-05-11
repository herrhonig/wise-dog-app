import axios from 'axios';
import {DOG_API} from '../api/dogsApi';
import { TIP_API } from '../api/tipsApi';
import {GET_WISE_DOGS, DEL_DOG_CARD, GET_DOGGO_TIP, ADD_DOG_TO_FAV} from '../types/dogTypes';

export const getDogs = (value) => {
  return {
    type: GET_WISE_DOGS,
    payload: value,
  }
}
export const getTips = (value) => {
  return {
    type: GET_DOGGO_TIP,
    payload: value,
  }
}
export const delCard = (id) => {
  return {
    type: DEL_DOG_CARD,
    payload: id,
  }
}
export const addToFav = (id) => {
  return {
    type: ADD_DOG_TO_FAV,
    payload: id,
  }
}

// THUNK:
export const getDogsThunk = () => async (dispatch) => {
  const dogs = await axios(DOG_API);
  const apiDogInfo = await dogs.data.map((item, index) => ({
    id: index + 1,
    image: item.image,
    url: item.url,
    isLiked: false,
  }));
  dispatch(getDogs(apiDogInfo))
}
export const getTipThunk = () => async (dispatch) => {
  const resultTip = await axios(TIP_API);
  const doggoTip = resultTip.data.slip.advice
  dispatch(getTips(doggoTip))
}




