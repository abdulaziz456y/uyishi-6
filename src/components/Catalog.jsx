import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { Tooltip, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';
import { characters } from './data';
import Login from './Login';
import Register from './Register';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const drawerWidth = 240;

function Catalog(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [hoveredCharacter, setHoveredCharacter] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setHoveredCharacter(null);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: '100%', 
          zIndex: (theme) => theme.zIndex.drawer + 1, 
          bgcolor: 'white',
        }}
      >
        <Toolbar>
         
        <img  className='w-[150px] h-[30px] mr-[20px]' src="/images/logo.png" alt="" />
        <button className='w-[120px] h-[50px] outline-none bg-[#FF9910] border-none cursor-pointer rounded-[15px] hover:bg-[#FF9910] flex justify-center items-center gap-[10px]' onClick={handleDrawerToggle}>
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
         Категории
          </button>
          <input className='ml-[30px] p-1 border border-[#FF9910] rounded-lg text-black text-xl w-[500px] 'placeholder='Search product...'  type="text"  />
      <div className='flex gap-[20px] ml-[300px]' > <div > <Login  /></div>
      <div  ><Register /> </div></div>      </Toolbar>
      </AppBar>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, paddingTop: '64px' },
          }}
        >
            {characters.map((character, index) => 
          <Tooltip key={index}>
            <div 
              className={`w-[240px] h-[44px] flex justify-center items-center cursor-pointer ${hoveredCharacter === character ? 'bg-[grey] text-[orange]' : ''}`}
              onMouseEnter={() => setHoveredCharacter(character)}
            >
              {character.name}
            </div>
          </Tooltip>
        )}
      </Drawer>
      {hoveredCharacter && (
        <Box
          sx={{
            position: 'fixed',
            top: '64px',
            left: drawerWidth,
            width: '100vw',
            height: '100vh',
            padding: '20px',
            backgroundColor: '#f5f5f5',
            zIndex: 9999,
          }}
        >
          <div className='w-[500px] h-[100%]'>
          <Typography className='hover:text-[#FF9910]' variant="h6" sx={{ marginTop: 1 }}>{hoveredCharacter.name} </Typography>
          <Typography className='hover:text-[#FF9910]'  variant="body1" sx={{ marginTop: 1 }}>Height: {hoveredCharacter.height}</Typography>
          <Typography className='hover:text-[#FF9910]'  variant="body1" sx={{ marginTop: 1 }}>Gender: {hoveredCharacter.gender}</Typography>
          <Typography className='hover:text-[#FF9910]'  variant="body1" sx={{ marginTop: 1 }}>Description: {hoveredCharacter.description}</Typography>
          <Typography className='hover:text-[#FF9910]'  variant="body1" sx={{ marginTop: 1 }}>Product: {hoveredCharacter.product1}</Typography>
          <Typography className='hover:text-[#FF9910]'  variant="body1" sx={{ marginTop: 1 }}>Product: {hoveredCharacter.product2}</Typography>
          <Typography className='hover:text-[#FF9910]'  variant="body1" sx={{ marginTop: 1 }}>Product: {hoveredCharacter.product3}</Typography>
          <Typography className='hover:text-[#FF9910]'  variant="body1" sx={{ marginTop: 1 }}>Cost: {hoveredCharacter.cost}</Typography>
          
          </div>
        </Box>
      )}
    </Box>
  );
}

Catalog.propTypes = {
  window: PropTypes.func,
};

export default Catalog;
