import React from 'react';
import { AppBar, Toolbar, Typography, Button, List, ListItem, useScrollTrigger } from '@mui/material';

// Custom hook to check if scrolling
function useCustomScrollTrigger() {
  const [scrolling, setScrolling] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrolling;
}

const Header = () => {
  const scrolling = useCustomScrollTrigger();

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        backgroundColor: scrolling ? '#333' : 'transparent',
        borderBottom: scrolling ? '1px solid #444' : 'none',
        transition: 'all 0.3s ease-in-out',
        zIndex: 20,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: scrolling ? '#fff' : '#000', transition: 'color 0.3s ease-in-out' }}>
          Hossam Salah Portfolio
        </Typography>
        <List sx={{ display: 'flex', gap: 2 }}>
          <ListItem sx={{ display: 'inline' }}>
            <Button
              color="inherit"
              href="#projects"
              sx={{
                color: scrolling ? '#fff' : '#000',
                '&:hover': {
                  color: '#00bcd4',
                  backgroundColor: 'transparent',
                },
                transition: 'color 0.3s ease-in-out',
              }}
            >
              Projects
            </Button>
          </ListItem>
          <ListItem sx={{ display: 'inline' }}>
            <Button
              color="inherit"
              href="#technologies"
              sx={{
                color: scrolling ? '#fff' : '#000',
                '&:hover': {
                  color: '#00bcd4',
                  backgroundColor: 'transparent',
                },
                transition: 'color 0.3s ease-in-out',
              }}
            >
              Technologies
            </Button>
          </ListItem>
          <ListItem sx={{ display: 'inline' }}>
            <Button
              color="inherit"
              href="#connectMe"
              sx={{
                color: scrolling ? '#fff' : '#000',
                '&:hover': {
                  color: '#00bcd4',
                  backgroundColor: 'transparent',
                },
                transition: 'color 0.3s ease-in-out',
              }}
            >
              Connect Me
            </Button>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
