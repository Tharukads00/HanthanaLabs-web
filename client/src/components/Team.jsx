import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { SectionTitle, AnimatedCard } from './common';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const founders = [
  {
    name: 'Tharuka De Silva',
    role: 'CEO',
    title: 'Chief Executive Officer',
    initials: 'TD',
    color: 'cyan',
    accentColor: '#00e5ff',
    domain: 'Strategic Vision & Multidisciplinary R&D',
    bio: 'Spearheading overarching research trajectory, commercial partnerships, and aligning engineering talent across solar, drone, and industrial prototyping initiatives.',
    tags: ['Strategic Leadership', 'R&D Direction', 'Product Incubation'],
  },
  {
    name: 'Kevin Dawson',
    role: 'President',
    title: 'President & Operations',
    initials: 'KD',
    color: 'lime',
    accentColor: '#76ff03',
    domain: 'Operations & Systems Architecture',
    bio: 'Overseeing laboratory operations, systems integration, precision fabrication pipelines, and international market deployment across commercial sectors.',
    tags: ['Operations Management', 'Systems Architecture', 'Deployment'],
  },
  {
    name: 'Lahiru Herath',
    role: 'VP',
    title: 'Vice President, Mechatronics',
    initials: 'LH',
    color: 'orange',
    accentColor: '#ff6d00',
    domain: 'Mechatronics & Drone Systems',
    bio: 'Directing mechanical design, UAV kinematics, flight control algorithms, and rapid hardware-in-the-loop prototyping for autonomous aerial systems.',
    tags: ['Drone Dynamics', 'Robotics Autonomy', 'Kinematic Design'],
  },
  {
    name: 'Chathuni',
    role: 'VP',
    title: 'Vice President, Energy & Electronics',
    initials: 'C',
    color: 'cyan',
    accentColor: '#00e5ff',
    domain: 'Energy Systems & Embedded Electronics',
    bio: 'Leading clean energy research, foldable photovoltaic arrays, smart battery management (BMS), and high-speed embedded microcontroller architectures.',
    tags: ['Solar Clean Tech', 'BMS Engineering', 'Embedded Firmware'],
  },
];

export default function Team() {
  return (
    <Box
      id="team"
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: '#0a0e17',
        backgroundImage: 'radial-gradient(ellipse at 50% 100%, rgba(0, 229, 255, 0.05) 0%, transparent 60%)',
        position: 'relative',
        borderTop: '1px solid rgba(42, 52, 68, 0.3)',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <SectionTitle
          overline="FOUNDING LEADERSHIP // 4 CO-FOUNDERS"
          title="MEET OUR FOUNDERS"
          subtitle="A multidisciplinary executive team uniting mechatronics, systems engineering, energy innovation, and precision industrial execution."
          accentColor="cyan"
        />

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {founders.map((founder, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={founder.name}>
              <AnimatedCard
                index={index}
                accentColor={founder.color}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: 'rgba(17, 24, 39, 0.85)',
                  textAlign: 'center',
                  transition: 'all 0.35s ease',
                  '&:hover': {
                    borderColor: `${founder.accentColor}50`,
                    boxShadow: `0 12px 35px ${founder.accentColor}18`,
                    transform: 'translateY(-6px)',
                  },
                }}
              >
                <Box>
                  {/* Rotating Gradient Avatar Ring */}
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2.5,
                      mt: 1,
                    }}
                  >
                    <Box className="avatar-glow-ring">
                      <Avatar
                        sx={{
                          width: { xs: 80, md: 92 },
                          height: { xs: 80, md: 92 },
                          backgroundColor: '#111827',
                          color: founder.accentColor,
                          fontSize: { xs: '1.6rem', md: '1.8rem' },
                          fontFamily: "'Orbitron', sans-serif",
                          fontWeight: 800,
                          border: '2px solid rgba(10, 14, 23, 0.8)',
                          boxShadow: `inset 0 0 15px ${founder.accentColor}25`,
                        }}
                      >
                        {founder.initials}
                      </Avatar>
                    </Box>
                  </Box>

                  {/* Founder Name */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "'Rajdhani', sans-serif",
                      fontWeight: 700,
                      fontSize: '1.35rem',
                      color: '#e8eaed',
                      mb: 0.5,
                      letterSpacing: '0.5px',
                    }}
                  >
                    {founder.name}
                  </Typography>

                  {/* Role Chip */}
                  <Box sx={{ mb: 2 }}>
                    <Chip
                      label={founder.role}
                      size="small"
                      sx={{
                        fontFamily: "'Orbitron', sans-serif",
                        fontWeight: 700,
                        fontSize: '0.72rem',
                        letterSpacing: '1px',
                        backgroundColor: `${founder.accentColor}18`,
                        color: founder.accentColor,
                        border: `1px solid ${founder.accentColor}40`,
                        px: 0.5,
                      }}
                    />
                  </Box>

                  {/* Domain / Focus */}
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'block',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.75rem',
                      color: '#00e5ff',
                      fontWeight: 600,
                      letterSpacing: '0.5px',
                      mb: 1.5,
                    }}
                  >
                    {founder.domain}
                  </Typography>

                  {/* Bio */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#8b95a5',
                      fontSize: '0.85rem',
                      lineHeight: 1.55,
                      mb: 2.5,
                      textAlign: 'left',
                    }}
                  >
                    {founder.bio}
                  </Typography>
                </Box>

                <Box>
                  {/* Expertise Tags */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      gap: 0.8,
                      pt: 2,
                      borderTop: '1px solid rgba(42, 52, 68, 0.4)',
                      mb: 2,
                    }}
                  >
                    {founder.tags.map((tag, tIdx) => (
                      <Chip
                        key={tIdx}
                        label={tag}
                        size="small"
                        sx={{
                          fontSize: '0.68rem',
                          fontFamily: "'JetBrains Mono', monospace",
                          backgroundColor: 'rgba(30, 42, 58, 0.5)',
                          color: '#8b95a5',
                          height: 24,
                        }}
                      />
                    ))}
                  </Box>

                  {/* Social / Contact Icons */}
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="center"
                    sx={{
                      pt: 1,
                      borderTop: '1px solid rgba(42, 52, 68, 0.3)',
                    }}
                  >
                    <IconButton
                      size="small"
                      aria-label="LinkedIn"
                      sx={{
                        color: '#8b95a5',
                        '&:hover': { color: '#00e5ff', backgroundColor: 'rgba(0, 229, 255, 0.1)' },
                      }}
                    >
                      <LinkedInIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      aria-label="GitHub"
                      sx={{
                        color: '#8b95a5',
                        '&:hover': { color: '#76ff03', backgroundColor: 'rgba(118, 255, 3, 0.1)' },
                      }}
                    >
                      <GitHubIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      aria-label="Email"
                      sx={{
                        color: '#8b95a5',
                        '&:hover': { color: '#ff6d00', backgroundColor: 'rgba(255, 109, 0, 0.1)' },
                      }}
                    >
                      <EmailIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </Box>
              </AnimatedCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
