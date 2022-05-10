import React from 'react'
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

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

const Navbar = () => {
  const navigate = useNavigate();

  const favPageOpen = () => {
    navigate('/favorites');
  }
  return (
    <>
    <Box 
    sx={{ 
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    }}>
      <AppBar 
      position="static"
      color="transparent"
      >
        <Toolbar>
          <Typography variant="h5" color="inherit" component="div" color="#0a0a23"
          onClick={() => navigate('/')}>
            Wise dog App
          </Typography>
            <FavBtn onClick={favPageOpen}> Favorites : 
              <Badge color="secondary" badgeContent={0} showZero>
                <MailIcon />
              </Badge>
            </FavBtn>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Navbar
