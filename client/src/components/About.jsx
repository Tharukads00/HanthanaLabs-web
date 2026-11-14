import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { SectionTitle, AnimatedCard, GlowIcon } from './common';
import PeopleIcon from '@mui/icons-material/People';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import HubIcon from '@mui/icons-material/Hub';
import HandymanIcon from '@mui/icons-material/Handyman';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const statsData = [
  {
    value: '4',
    unit: 'Founders',
    label: 'Multidisciplinary Leadership',
    sub: 'Leadership across Mechatronics, Energy & Systems',
    color: 'cyan',
    icon: <PeopleIcon />,
  },
  {
    value: '2',
    unit: 'Active Flagships',
    label: 'Ongoing Flagship Projects',
    sub: 'Foldable Solar Arrays & Autonomous Commercial Drones',
    color: 'lime',
    icon: <RocketLaunchIcon />,
  },
  {
    value: '4',
    unit: 'Research Domains',
    label: 'Core R&D Competencies',
    sub: 'Energy, Electronics, Mechatronics & Industrial Fabrication',
    color: 'orange',
    icon: <HubIcon />,
  },
  {
    value: '100%',
    unit: 'Custom',
    label: 'In-House Prototyping',
    sub: 'End-to-end design, simulation, assembly and verification',
    color: 'cyan',
    icon: <HandymanIcon />,
  },
];

const highlights = [
  'Holistic Hardware & Software Co-Design for Complex Mechatronic Systems',
  'Rapid Turnaround Prototyping from CAD Schematics to Functional Field Hardware',
  'Pioneering Clean Energy Generation via Origami-Engineered Foldable Solar Tech',
  'Commercial Aerial Platforms with High-Payload Autonomy & Fail-Safe Navigation',
  'Custom Industrial Automation Jigs & Precision Electronic Control Modules',
];

export default function About() {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: '#0a0e17',
        position: 'relative',
        borderTop: '1px solid rgba(42, 52, 68, 0.3)',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <SectionTitle
          overline="WHO WE ARE // MISSION & CAPABILITIES"
          title="DIVERSIFIED INNOVATION AT SCALE"
          subtitle="HanthanaLabs is a technology incubator and mechatronics research lab dedicated to solving real-world physical and electrical challenges."
          accentColor="cyan"
        />

        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="stretch">
          {/* Left Column: Mission & Narrative */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    color: '#e8eaed',
                    fontWeight: 700,
                    mb: 2.5,
                    fontSize: { xs: '1.4rem', sm: '1.75rem' },
                    lineHeight: 1.3,
                  }}
                >
                  Bridging the Gap Between Concept, Silicon, and Mechanical Motion.
                </Typography>
                <Typography variant="body1" sx={{ color: '#8b95a5', mb: 2.5, lineHeight: 1.7 }}>
                  At <strong>HanthanaLabs</strong>, we do not simply build individual circuits or
                  standalone mechanisms. We engineer interconnected, high-performance physical-digital
                  ecosystems. Founded by four passionate engineers and technologists, our laboratory
                  operates across four deeply integrated domains: <strong>Energy</strong>,{' '}
                  <strong>Electronics</strong>, <strong>Mechatronics</strong>, and{' '}
                  <strong>Industrial Fabrications</strong>.
                </Typography>
                <Typography variant="body1" sx={{ color: '#8b95a5', mb: 3.5, lineHeight: 1.7 }}>
                  Currently, our R&amp;D efforts are spearheading two revolutionary flagship initiatives:
                  an ultra-compact, high-efficiency <strong>Foldable Solar System</strong> designed for
                  emergency and mobile power, and a versatile fleet of{' '}
                  <strong>Commercial and Personal Drones</strong> engineered for autonomous aerial surveys,
                  precision inspection, and recreation.
                </Typography>
              </Box>

              {/* Highlight Checklist */}
              <Box
                sx={{
                  p: 3,
                  borderRadius: '12px',
                  backgroundColor: 'rgba(17, 24, 39, 0.7)',
                  border: '1px solid rgba(0, 229, 255, 0.2)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                }}
              >
                <Typography
                  variant="overline"
                  sx={{ color: '#00e5ff', display: 'block', mb: 1.5, letterSpacing: '1.5px' }}
                >
                  LABORATORY TENETS
                </Typography>
                <Stack spacing={1.5}>
                  {highlights.map((text, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                      <CheckCircleIcon sx={{ color: '#76ff03', fontSize: 20, mt: 0.3 }} />
                      <Typography variant="body2" sx={{ color: '#e8eaed', fontWeight: 500 }}>
                        {text}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Grid>

          {/* Right Column: 2x2 Stats Grid */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={2.5}>
              {statsData.map((stat, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                  <AnimatedCard
                    index={index}
                    accentColor={stat.color}
                    sx={{
                      height: '100%',
                      backgroundColor: 'rgba(17, 24, 39, 0.85)',
                      transition: 'all 0.35s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: `0 12px 30px rgba(0, 229, 255, 0.12)`,
                      },
                    }}
                  >
                    <Box sx={{ mb: 2 }}>
                      <GlowIcon icon={stat.icon} color={stat.color} size="sm" />
                    </Box>
                    <Typography
                      variant="h2"
                      sx={{
                        fontFamily: "'Orbitron', sans-serif",
                        fontWeight: 900,
                        fontSize: { xs: '2.4rem', sm: '2.8rem' },
                        color: stat.color === 'lime' ? '#76ff03' : stat.color === 'orange' ? '#ff6d00' : '#00e5ff',
                        lineHeight: 1,
                        mb: 0.5,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="overline"
                      sx={{
                        display: 'block',
                        color: '#e8eaed',
                        fontWeight: 700,
                        letterSpacing: '1.2px',
                        mb: 0.5,
                      }}
                    >
                      {stat.label}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: '#8b95a5', fontSize: '0.85rem', lineHeight: 1.5 }}
                    >
                      {stat.sub}
                    </Typography>
                  </AnimatedCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
