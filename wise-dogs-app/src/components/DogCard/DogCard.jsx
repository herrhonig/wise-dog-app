import React from 'react'
import styled from 'styled-components';


const Card = styled.div `
  height: 567px;
  width: 350px;
  box-shadow: 0px 8.48242px 25.4473px rgba(29, 29, 27, 0.24);
  border-radius: 4.24121px;
  margin: 30px;
  background-color: #fffbfc;

  &:hover {
    transform: scale(1.1);
    transition: .4s;
  }
`;
const Button = styled.button `
  margin-top: 20px;
  width: 98%;
  height: 76.34px;
  background-color: #f0d800;
  border-radius: 4.77136px;
  border: 0;
  font-weight: 600;
  font-size: 24px;
  line-height: 20px;
  color: #0a0a23;
  margin: 3px;

  &:hover {
    background-color: #c9b821;
  }
`;
const LikeBtn = styled.button `
  width: 70px;
  height: 40px;
  top:50%;
  background-color:#b2e651;
  color: #fff;
  font-weight: 700;
  border:none;
  border-radius:10px;
  margin-left: 3px;

  &:hover {
    background-color: #609106;
  }  
`;
const DislikeBtn = styled.button `
  width: 70px;
  height: 40px;
  top:50%;
  background-color:#f06281;
  color: #fff;
  font-weight: 700;
  border:none;
  border-radius:10px;
  margin-right: 3px;

  &:hover {
    background-color: #c91038;
  }
`;
const DogPic = styled.img `
  width: 98%;
  height: 400px;
  margin: 3px;
  border-radius: 4.77136px;

`;
const LikeField = styled.div `
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff7f7;
`;
const DogCard = (props) => {

  //handlers:
  const likeHandler = () => {
    console.log('Liked!');
  }
  const dislikeHandler = () => {
    console.log('disLiked!');
  }
  return (
    <Card>
      <DogPic src={props.image}/>
      <LikeField>
        {/* <div><span onClick={likeHandler} class="material-symbols-outlined">thumb_up</span></div>
        <div><span onClick={dislikeHandler} class="material-symbols-outlined">thumb_down</span></div> */}
        <LikeBtn onClick={likeHandler}>like</LikeBtn>
        <DislikeBtn onClick={dislikeHandler}>dislike</DislikeBtn>
      </LikeField>
      <Button>The dog says...</Button>
    </Card>
  )
}

export default DogCard
