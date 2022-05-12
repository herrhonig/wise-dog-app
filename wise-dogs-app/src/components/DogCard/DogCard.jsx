import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addToFav, delCard, getTipThunk } from '../../redux/actions/dogsAction';
// modal window imports from MUI:
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

//Styled comp:
const Card = styled.div `
  height: 567px;
  width: 350px;
  box-shadow: 0px 8.48242px 25.4473px rgba(29, 29, 27, 0.24);
  border-radius: 4.24121px;
  margin: 30px;
  background-color:#4a4a66;

  &:hover {
    transform: scale(1.1);
    transition: .4s;
  }
`;
const TipButton = styled.button `
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
// modal window style obj:
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// COMPONENT:
const DogCard = (props) => {
  const [isLiked, setIsliked] = useState(false);
  const doggoTip = useSelector(state => state.dogs.tips);
  const dispatch = useDispatch();

  // Modal window handlers:
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setTimeout(() => {
    dispatch(getTipThunk());
    }, 800);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //Handlers:
  const likeHandler = () => {
    setIsliked(prev => !prev);
    dispatch(addToFav(props.id));
  };
  const dislikeHandler = () => {
    dispatch(delCard(props.id));
  };

  return (
    <>
    {open
    ?
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Doggo tip:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {doggoTip.length === 0 ? <CircularProgress /> : doggoTip}
          </Typography>
        </Box>
      </Modal>
    </div>
    :
    null
    }
    <Card>
      <DogPic src={props.image}/>
      <LikeField>
        <LikeBtn onClick={likeHandler}> {isLiked ? <ThumbUpIcon /> : 'like'}</LikeBtn>
        <DislikeBtn onClick={dislikeHandler}>dislike</DislikeBtn>
      </LikeField>
      <TipButton onClick={handleOpen}>The dog says...</TipButton>
    </Card>
    </>
  )
}

export default DogCard
