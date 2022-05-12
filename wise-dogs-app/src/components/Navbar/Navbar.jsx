import React from 'react'
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
    <Box 
    sx={{ 
      display: 'flex',
      flexWrap: 'wrap',
    }}>
      <AppBar 
      position="static"
      color="transparent"
      >
        <Toolbar>
          <Typography variant="h5" color="inherit" component="div" color="#0a0a23"
          onClick={() => navigate('/')}>
            Wise dog app
          </Typography>
            
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Navbar
