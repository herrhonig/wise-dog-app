import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogsThunk } from '../../../redux/actions/dogsAction';
import styled from 'styled-components';
import DogCard from '../../DogCard/DogCard';
import CircularProgress from '@mui/material/CircularProgress';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';




//Styled comp:
const FlexContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const FavBtnContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 70px;
  justify-content: center;
  align-items: center;
  /* margin-top: 5px; */
`;
const LoaderContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 70px;
  justify-content: center;
  align-items: center;
`;
const FavBtn = styled.button `
    width: 120px;
    height: 50px;
    top:50%;
    padding: 2px;
    background-color:#4a4a66;
    color: #fff;
    font-weight: 700;
    border:1px solid #0a0a38;
    border-radius: 20px;

    &:hover {
    background-color: #b2b2b6;
  }
`;

//COMPONENT:
const MainPage = () => {

  
  const dispatch = useDispatch();
  const [ favFilter, setFavFilter ] = useState(false);

  const dogs = useSelector(state => state.dogs.dogList);
  const tip = useSelector(state => state.dogs.tips);
  const likeAmount = dogs.filter((dog) => dog.isLiked === true);
  console.log(likeAmount);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getDogsThunk()); 
    }, 1500)
  }, [dispatch])

  
  return (
    <>
    {dogs?.length === 0 
    ?
    <LoaderContainer>
      <CircularProgress />
    </LoaderContainer>
    :
    <>
      <FavBtnContainer>
        <FavBtn onClick={() => setFavFilter(prev => !prev)}> Favorites : 
          <Badge color="secondary" badgeContent={likeAmount.length} showZero>
            <MailIcon />
          </Badge>
        </FavBtn>
       </FavBtnContainer>

      {favFilter ? 
      <FlexContainer>
        {dogs.length && dogs.map((dog) => dog.isLiked ? <DogCard key={dog.id} id={dog.id} image={dog.url}/> : null)}
      </FlexContainer>
      :
      <FlexContainer>
        {dogs.length && dogs.map((dog) => <DogCard key={dog.id} id={dog.id} image={dog.url}/>)}
      </FlexContainer>
      }
    </>
    }
    </>
  )
  
}

export default MainPage
