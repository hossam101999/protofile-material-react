import React from 'react';
import { Container, Typography, Button, Card, CardContent, CardMedia, Box, Link, Grid } from '@mui/material';
import Ecommerce from './assets/ecommerce.png';
import ExamGate from './assets/Exam Gate.png';
import Elzero from './assets/elzero.png';
import Bondi from './assets/bondi.png';

const projects = [
  {
    title: 'E-commerce',
    image: Ecommerce,
    description: 'Responsive React Js App with APIs about E-commerce',
    livePreview: 'https://angular-e-com-c48r.vercel.app',
    github: 'https://github.com/hossam101999/angular-E-com.git'
  },
  {
    title: 'Exam Gate',
    image: ExamGate,
    description: 'Exam Automated an Offers Application Web Responsive',
    github: 'https://github.com/hossam101999/exam_.git'
  },
  {
    title: 'pizaproject',
    image: Elzero,
    description: 'Responsive HTML/CSS layout for landing page with animation',
    drive: 'https://drive.google.com/drive/folders/1AyP7HRwTIox0yMrTFQNfpVw1b3nySv3e'
  },
  {
    title: 'protofolio Project',
    image: Bondi,
    description: 'This is an Angular portfolio',
    livePreview: 'https://profile-in-angular.vercel.app',
    github: 'https://github.com/hossam101999/profile_in_angular.git'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <Container sx={{ py: { xs: 6, sm: 12 } }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: '2rem', mb: 4, textAlign: 'center' }}>
          Projects
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={6}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={projects[0].image}
                alt={projects[0].title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ display: 'flex', flexDirection: 'column', p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {projects[0].title}
                </Typography>
                <Typography sx={{ mt: 2, color: 'text.secondary' }}>
                  {projects[0].description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                  {projects[0].livePreview && (
                    <Link href={projects[0].livePreview} target="_blank" sx={{ flex: 1 }}>
                      <Button
                        fullWidth
                        variant="contained"
                        sx={{
                          background: 'linear-gradient(135deg, #2196f3, #00bcd4)',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #1976d2, #00acc1)',
                          },
                        }}
                      >
                        Live Preview
                      </Button>
                    </Link>
                  )}
                  {projects[0].github && (
                    <Link href={projects[0].github} target="_blank" sx={{ flex: 1 }}>
                      <Button
                        fullWidth
                        variant="outlined"
                        sx={{
                          borderColor: 'blue',
                          color: 'blue',
                          '&:hover': {
                            borderColor: 'blue',
                            color: 'blue',
                          },
                        }}
                      >
                        GitHub
                      </Button>
                    </Link>
                  )}
                  {projects[0].drive && (
                    <Link href={projects[0].drive} target="_blank" sx={{ flex: 1 }}>
                      <Button
                        fullWidth
                        variant="outlined"
                        sx={{
                          borderColor: 'blue',
                          color: 'blue',
                          '&:hover': {
                            borderColor: 'blue',
                            color: 'blue',
                          },
                        }}
                      >
                        Drive
                      </Button>
                    </Link>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={projects[1].image}
                alt={projects[1].title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ display: 'flex', flexDirection: 'column', p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {projects[1].title}
                </Typography>
                <Typography sx={{ mt: 2, color: 'text.secondary' }}>
                  {projects[1].description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                  {projects[1].livePreview && (
                    <Link href={projects[1].livePreview} target="_blank" sx={{ flex: 1 }}>
                      <Button
                        fullWidth
                        variant="contained"
                        sx={{
                          background: 'linear-gradient(135deg, #2196f3, #00bcd4)',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #1976d2, #00acc1)',
                          },
                        }}
                      >
                        Live Preview
                      </Button>
                    </Link>
                  )}
                  {projects[1].github && (
                    <Link href={projects[1].github} target="_blank" sx={{ flex: 1 }}>
                      <Button
                        fullWidth
                        variant="outlined"
                        sx={{
                          borderColor: 'blue',
                          color: 'blue',
                          '&:hover': {
                            borderColor: 'blue',
                            color: 'blue',
                          },
                        }}
                      >
                        GitHub
                      </Button>
                    </Link>
                  )}
                  {projects[1].drive && (
                    <Link href={projects[1].drive} target="_blank" sx={{ flex: 1 }}>
                      <Button
                        fullWidth
                        variant="outlined"
                        sx={{
                          borderColor: 'blue',
                          color: 'blue',
                          '&:hover': {
                            borderColor: 'blue',
                            color: 'blue',
                          },
                        }}
                      >
                        Drive
                      </Button>
                    </Link>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={projects[2].image}
                alt={projects[2].title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ display: 'flex', flexDirection: 'column', p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {projects[2].title}
                </Typography>
                <Typography sx={{ mt: 2, color: 'text.secondary' }}>
                  {projects[2].description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                  {projects[2].livePreview && (
                    <Link href={projects[2].livePreview} target="_blank" sx={{ flex: 1 }}>
                      <Button
                        fullWidth
                        variant="contained"
                        sx={{
                          background: 'linear-gradient(135deg, #2196f3, #00bcd4)',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #1976d2, #00acc1)',
                          },
                        }}
                      >
                        Live Preview
                      </Button>
                    </Link>
                  )}
                  {projects[2].github && (
                    <Link href={projects[2].github} target="_blank" sx={{ flex: 1 }}>
                      <Button
                        fullWidth
                        variant="outlined"
                        sx={{
                          borderColor: 'blue',
                          color: 'blue',
                          '&:hover': {
                            borderColor: 'blue',
                            color: 'blue',
                          },
                        }}
                      >
                        GitHub
                      </Button>
                    </Link>
                  )}
                  {projects[2].drive && (
                    <Link href={projects[2].drive} target="_blank" sx={{ flex: 1 }}>
                      <Button
                        fullWidth
                        variant="outlined"
                        sx={{
                          borderColor: 'blue',
                          color: 'blue',
                          '&:hover': {
                            borderColor: 'blue',
                            color: 'blue',
                          },
                        }}
                      >
                        Drive
                      </Button>
                    </Link>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={projects[3].image}
                alt={projects[3].title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ display: 'flex', flexDirection: 'column', p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {projects[3].title}
                </Typography>
                <Typography sx={{ mt: 2, color: 'text.secondary' }}>
                  {projects[3].description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                  {projects[3].livePreview && (
                    <Link href={projects[3].livePreview} target="_blank" sx={{ flex: 1 }}>
                      <Button
                        fullWidth
                        variant="contained"
                        sx={{
                          background: 'linear-gradient(135deg, #2196f3, #00bcd4)',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #1976d2, #00acc1)',
                          },
                        }}
                      >
                        Live Preview
                      </Button>
                    </Link>
                  )}
                  {projects[3].github && (
                    <Link href={projects[3].github} target="_blank" sx={{ flex: 1 }}>
                      <Button
                        fullWidth
                        variant="outlined"
                        sx={{
                          borderColor: 'blue',
                          color: 'blue',
                          '&:hover': {
                            borderColor: 'blue',
                            color: 'blue',
                          },
                        }}
                      >
                        GitHub
                      </Button>
                    </Link>
                  )}
                  {projects[3].drive && (
                    <Link href={projects[3].drive} target="_blank" sx={{ flex: 1 }}>
                      <Button
                        fullWidth
                        variant="outlined"
                        sx={{
                          borderColor: 'blue',
                          color: 'blue',
                          '&:hover': {
                            borderColor: 'blue',
                            color: 'blue',
                          },
                        }}
                      >
                        Drive
                      </Button>
                    </Link>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ProjectsSection;
