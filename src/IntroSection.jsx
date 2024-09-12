import React from 'react';
import { Container, Typography, Button, Box, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import myPhoto from './assets/myPhoto.png';
import myCv from './PDFs/Hossam-Salah-Khatab-CV.pdf';

const BannerImage = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden', 
  '&:before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundImage: `url('./small.png')`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '220px',
    height: '220px',
    animation: 'moveBackground1 15s linear infinite', 
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 'calc(-20px)',
    backgroundImage: `url('./large-long.png')`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '220px',
    height: '320px',
    animation: 'moveBackground2 20s linear infinite', 
  },
  '@keyframes moveBackground1': {
    '0%': {
      transform: 'translateX(0) translateY(0)',
    },
    '100%': {
      transform: 'translateX(100px) translateY(-100px)', 
    },
  },
  '@keyframes moveBackground2': {
    '0%': {
      transform: 'translateX(0) translateY(0)',
    },
    '100%': {
      transform: 'translateX(-100px) translateY(100px)', 
    },
  },
}));

const advancedFadeInOut = `
@keyframes advancedFadeInOut {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-10deg);
  }
  50% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: scale(0.8) rotate(10deg);
  }
}
`;

const IntroSection = () => {
  return (
    <section>
      <style>{advancedFadeInOut}</style>
      <Container
        sx={{
          py: { xs: 12, sm: 20 },
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 6,
          textAlign: { xs: 'center', sm: 'left' },
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: { md: '60%' },
            textAlign: 'center',
            mx: 'auto',
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: '4rem' }}>
            Hello, I'm Hossam Salah Hassan
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              fontSize: '4rem',
              mt: 1,
              background: 'linear-gradient(to top, #00bcd4, #2196f3)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              animation: 'advancedFadeInOut 5s ease-in-out infinite',
            }}
          >
            Frontend Developer
          </Typography>
          <Typography sx={{ mt: 4, color: 'text.secondary' }}>
            I am a Front-End Developer specializing in React JS, currently studying Information Technology Engineering at the Syrian Virtual University. I have strong skills in HTML, CSS, JavaScript, and modern React libraries and tools. I excel in time management and thrive in collaborative team environments. Passionate about creating user-friendly, responsive, and visually appealing web applications, I am equipped to tackle complex problems and deliver high-quality solutions efficiently.
          </Typography>
          <Link href={myCv} download="Hossam-Salah-Khatab-CV.pdf" target="_blank">
            <Button
              sx={{
                px: 8,
                py: 5,
                mt: 5,
                background: 'linear-gradient(to top, #2196f3, #00bcd4)',
                color: 'white',
                boxShadow: 2,
                borderRadius: '50px',
                '&:hover': {
                  background: 'linear-gradient(to top, #1976d2, #00acc1)',
                },
              }}
            >
              Download resume
            </Button>
          </Link>
          <Box sx={{ mt: 10, color: 'white' }}>
            <Link href="https://www.linkedin.com/in/hossam-salah-1ab717238/" sx={{ fontSize: '3rem', mr: 5 }}>
              <i className="fa-brands fa-linkedin"></i>
            </Link>
            <Link href="https://github.com/hossam101999" sx={{ fontSize: '3rem' }}>
              <i className="fa-brands fa-github"></i>
            </Link>
          </Box>
        </Box>
        <BannerImage>
          <img
            src={myPhoto}
            alt="Hossam Salah"
            style={{
              position: 'relative',
              zIndex: 10,
              width: '280px',
              margin: 'auto',
              borderRadius: '50%',
            }}
          />
        </BannerImage>
      </Container>
    </section>
  );
};

export default IntroSection;
