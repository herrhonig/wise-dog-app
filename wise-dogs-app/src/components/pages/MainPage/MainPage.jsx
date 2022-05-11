import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogsThunk } from '../../../redux/actions/dogsAction';
import styled from 'styled-components';
import DogCard from '../../DogCard/DogCard';
import CircularProgress from '@mui/material/CircularProgress';





//Styled comp:
const FlexContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

//COMPONENT:
const MainPage = () => {

  
  const dispatch = useDispatch();
  const dogs = useSelector(state => state.dogs.dogList);
  const tip = useSelector(state => state.dogs.tips);
  
  useEffect(() => {

        dispatch(getDogsThunk()); 

  }, [dispatch])
  
  if (dogs?.length === 0) {
    return <CircularProgress />
  }
  
  return (
    <>
      <FlexContainer>
        {dogs.length && dogs.map((dog) => <DogCard key={dog.id} image={dog.url}/>)}
      </FlexContainer>
    </>
  )
  
}

export default MainPage
