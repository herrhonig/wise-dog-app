import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogsThunk } from '../../../redux/actions/dogsAction';
import styled from 'styled-components';
import DogCard from '../../DogCard/DogCard';


//Styled comp:
const FlexContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
/////////////////

const MainPage = () => {
  const dispatch = useDispatch();
  const dogs = useSelector(state => state.dogs);

  useEffect(() => {
    dispatch(getDogsThunk());
  }, [])
  // Handlers:
  

  return (
    <>
      <FlexContainer>
        {dogs.length && dogs.map((dog) => <DogCard key={dog.id} image={dog.url}/>)}
      </FlexContainer>
    </>
  )
  
}

export default MainPage
