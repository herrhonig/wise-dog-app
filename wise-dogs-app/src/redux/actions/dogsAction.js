import axios from 'axios';
import {DOG_API} from '../api/dogsApi';
import { TIP_API } from '../api/tipsApi';
import {GET_WISE_DOGS, DEL_DOG_CARD} from '../types/dogTypes';

export const addDogs = (value) => {
  return {
    type: 'GET_WISE_DOGS',
    payload: value,
  }
}
export const addTips = (value) => {
  return {
    type: 'GET_DOGGO_TIP',
    payload: value,
  }
}
export const delCard = (id) => {
  console.log('clicked card ID to del=>', id);
  return {
    type: DEL_DOG_CARD,
    payload: id,
  }
}

// THUNK:
export const getDogsThunk = () => async (dispatch) => {
  const dogs = await axios(DOG_API);
  dispatch(addDogs(dogs.data))
}
export const getTipThunk = () => async (dispatch) => {
  console.log('STARTED TIP');
  const resultTip = await axios(TIP_API);
  const doggoTip = resultTip.data.slip.advice
  console.log(doggoTip);
  // console.log(resultTip.data.slip.advice);
  dispatch(addTips(doggoTip))
}
