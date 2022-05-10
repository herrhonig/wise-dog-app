import axios from 'axios';
import {DOG_API} from '../api/dogsApi';
import { TIP_API } from '../api/tipsApi';
import {GET_WISE_DOGS} from '../types/dogTypes';

export const addDogs = (value) => {
  return {
    type: 'GET_WISE_DOGS',
    payload: value,
  }
}


// THUNK:
export const getDogsThunk = () => async (dispatch) => {
  const dogs = await axios(DOG_API);
  console.log('DOG DATA API ==>', dogs.data);
  dispatch(addDogs(dogs.data))
}
