import React from 'react';
import { Container, Typography, Box, LinearProgress, Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faBootstrap, faJs, faReact, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import TailwindCSS from "./assets/tailwind-css-svgrepo-com.svg";
import TypeScript from "./assets/typescript-icon-svgrepo-com.svg";
import Redux from "./assets/redux-svgrepo-com.svg";

const technologies = [
    { name: 'HTML', icon: faHtml5, color: '#e34f26', progress: 85 },
    { name: 'CSS', icon: faCss3, color: '#2965f1', progress: 85 },
    { name: 'Bootstrap 5', icon: faBootstrap, color: '#702cf6', progress: 85 },
    { name: 'Tailwind CSS', icon: TailwindCSS, color: '#38b2ac', progress: 75, isImage: true },
    { name: 'JavaScript', icon: faJs, color: '#f7df1e', progress: 80 },
    { name: 'TypeScript', icon: TypeScript, color: '#007acc', progress: 70, isImage: true },
    { name: 'React Js', icon: faReact, color: '#00d8ff', progress: 75 },
    { name: 'Redux, Redux Toolkit', icon: Redux, color: '#764abc', progress: 70, isImage: true },
    { name: 'Git', icon: faGitAlt, color: '#fc6d26', progress: 70 }
  ];
  
  const TechnologiesSection = () => {
    return (
      <section id="technologies">
        <Container sx={{ py: 5 }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
            Technologies
          </Typography>
          <Box sx={{ mt: 4 }}>
            {technologies.map((tech, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                    {tech.isImage ? (
                      <img src={tech.icon} alt={tech.name} style={{ width: '24px', height: '24px', marginRight: '8px' }} />
                    ) : (
                      <FontAwesomeIcon icon={tech.icon} style={{ color: tech.color, marginRight: '8px', fontSize: '24px' }} />
                    )}
                    {tech.name}
                  </Typography>
                  <Typography sx={{ color: 'white' }}>{tech.progress}%</Typography>
                </Stack>
                <LinearProgress
                  variant="determinate"
                  value={tech.progress}
                  sx={{ mt: 1, height: '8px', borderRadius: '5px', background: 'linear-gradient(to top, #2196f3, #00bcd4)' }}
                />
              </Box>
            ))}
          </Box>
        </Container>
      </section>
    );
  };
  
  export default TechnologiesSection;