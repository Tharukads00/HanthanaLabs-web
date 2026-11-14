import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { SectionTitle } from './common';
import { solarPlaceholder, dronePlaceholder } from '../assets';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';

const projects = [
  {
    id: 'solar',
    title: 'Foldable Solar Systems',
    tagline: 'High-Efficiency Portable Photovoltaic Arrays',
    target: 'Commercial & Personal Use',
    domain: 'Energy Domain & Power Electronics',
    image: solarPlaceholder,
    overview:
      'Engineered to solve the fundamental logistical tradeoff between transportability and power output. Traditional rigid solar panels are bulky and fragile, while conventional rollable panels suffer from low conversion efficiency and poor heat dissipation. Our system utilizes a tri-fold kinematic hinge structure with high-yield monocrystalline cells and on-board MPPT power conversion.',
    specs: [
      { label: 'Cell Efficiency', value: '24.2% Monocrystalline' },
      { label: 'Form Factor Reduction', value: '70% volume reduction folded' },
      { label: 'Environmental Rating', value: 'IP67 Weatherproof enclosure' },
      { label: 'Power Conversion', value: 'Integrated Smart MPPT & USB-PD' },
    ],
    features: [
      'Origami-inspired folding geometry with reinforced mechanical locking pins',
      'Dual output capability: High-voltage commercial bus (12V/24V) & USB-C PD 100W',
      'Advanced thermal composite backing to prevent power degradation under high heat',
      'Applications: Commercial field stations, emergency relief, outdoor expeditions, and backup power',
    ],
    tags: ['Kinematic Folding', 'MPPT Optimizer', 'IP67 Sealed', 'Commercial & Personal'],
  },
  {
    id: 'drone',
    title: 'Commercial & Personal Drones',
    tagline: 'Autonomous Multi-Rotor Aerial Mechatronics',
    target: 'Commercial & Personal Use',
    domain: 'Mechatronics & Aerial Robotics',
    image: dronePlaceholder,
    overview:
      'A versatile aerial robotics platform developed with an open, modular payload bay and lightweight 3K carbon-fiber monocoque airframe. Engineered to provide the high payload capacity and waypoint autonomy demanded by commercial inspection and agricultural survey teams, while retaining the intuitive piloting and responsiveness appreciated by personal creators.',
    specs: [
      { label: 'Airframe Architecture', value: '450 mm 3K Carbon Monocoque' },
      { label: 'Payload Capacity', value: 'Up to 2.5 kg interchangeable mount' },
      { label: 'Flight Controller', value: 'Low-latency deterministic firmware' },
      { label: 'Failsafe Navigation', value: 'Triple-redundant GPS Return-To-Home' },
    ],
    features: [
      'Quick-swap payload mount supporting LIDAR, thermal cameras, and 4K optical gimbals',
      'Autonomous waypoint trajectory execution with geofencing and collision prevention',
      'Low-latency encrypted telemetry link with high-noise immunity',
      'Applications: Infrastructure inspection, land surveying, agricultural monitoring, and high-end personal flight',
    ],
    tags: ['Autonomous UAV', 'Modular Payload', 'Carbon Fiber', 'Commercial & Personal'],
  },
];

export default function Projects() {
  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: '#090a0d',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <SectionTitle
          overline="FLAGSHIP R&D // CURRENT PROTOTYPING"
          title="Active Ongoing Projects"
          subtitle="Two multidisciplinary engineering platforms currently under prototyping and validation, designed for commercial enterprises and personal applications."
        />

        <Stack spacing={8}>
          {projects.map((proj, idx) => (
            <Card
              key={proj.id}
              sx={{
                backgroundColor: '#111318',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                overflow: 'hidden',
                transition: 'border-color 0.2s ease',
                '&:hover': {
                  borderColor: 'rgba(255, 255, 255, 0.16)',
                },
              }}
            >
              <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
                <Grid container spacing={{ xs: 4, md: 5 }} alignItems="center">
                  {/* Schematic Drawing */}
                  <Grid size={{ xs: 12, md: 5 }} order={{ xs: 1, md: idx % 2 === 0 ? 1 : 2 }}>
                    <Box
                      sx={{
                        borderRadius: '6px',
                        overflow: 'hidden',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        backgroundColor: '#0c0e12',
                      }}
                    >
                      <Box
                        component="img"
                        src={proj.image}
                        alt={proj.title}
                        sx={{
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                        }}
                      />
                    </Box>
                  </Grid>

                  {/* Technical Information */}
                  <Grid size={{ xs: 12, md: 7 }} order={{ xs: 2, md: idx % 2 === 0 ? 2 : 1 }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center', mb: 1.5 }}>
                      <Box component="span" className="tech-tag">
                        {proj.target}
                      </Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#64748b',
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.75rem',
                        }}
                      >
                        // {proj.domain}
                      </Typography>
                    </Box>

                    <Typography
                      variant="h3"
                      sx={{
                        color: '#f8fafc',
                        fontWeight: 700,
                        fontSize: { xs: '1.6rem', sm: '2rem' },
                        letterSpacing: '-0.02em',
                        mb: 0.5,
                      }}
                    >
                      {proj.title}
                    </Typography>

                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: '#94a3b8',
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        mb: 2.5,
                      }}
                    >
                      {proj.tagline}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#cbd5e1',
                        fontSize: '0.9rem',
                        lineHeight: 1.7,
                        mb: 3,
                      }}
                    >
                      {proj.overview}
                    </Typography>

                    {/* Technical Specs 2x2 Table */}
                    <Grid container spacing={1.5} sx={{ mb: 3 }}>
                      {proj.specs.map((s, sIdx) => (
                        <Grid size={{ xs: 12, sm: 6 }} key={sIdx}>
                          <Box
                            sx={{
                              p: 1.5,
                              borderRadius: '6px',
                              backgroundColor: 'rgba(255, 255, 255, 0.02)',
                              border: '1px solid rgba(255, 255, 255, 0.06)',
                            }}
                          >
                            <Typography
                              variant="caption"
                              sx={{
                                color: '#64748b',
                                display: 'block',
                                fontSize: '0.7rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.04em',
                                mb: 0.3,
                              }}
                            >
                              {s.label}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{ color: '#f8fafc', fontWeight: 600, fontSize: '0.85rem' }}
                            >
                              {s.value}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>

                    {/* Feature Checkpoints */}
                    <Stack spacing={1} sx={{ mb: 3.5 }}>
                      {proj.features.map((f, fIdx) => (
                        <Box key={fIdx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2 }}>
                          <CheckIcon sx={{ color: '#94a3b8', fontSize: 16, mt: 0.3 }} />
                          <Typography variant="body2" sx={{ color: '#94a3b8', fontSize: '0.86rem' }}>
                            {f}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>

                    {/* Bottom Action & Tags */}
                    <Box
                      sx={{
                        pt: 2.5,
                        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: { xs: 'flex-start', sm: 'center' },
                        justifyContent: 'space-between',
                        gap: 2,
                      }}
                    >
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                        {proj.tags.map((tag, tIdx) => (
                          <Chip
                            key={tIdx}
                            label={tag}
                            size="small"
                            sx={{
                              fontSize: '0.7rem',
                              fontFamily: "'JetBrains Mono', monospace",
                              backgroundColor: 'rgba(255, 255, 255, 0.03)',
                              color: '#94a3b8',
                              border: '1px solid rgba(255, 255, 255, 0.08)',
                            }}
                          />
                        ))}
                      </Box>

                      <Button
                        variant="outlined"
                        size="small"
                        endIcon={<ArrowForwardIcon sx={{ fontSize: 14 }} />}
                        onClick={handleScrollToContact}
                        sx={{
                          color: '#f8fafc',
                          borderColor: 'rgba(255, 255, 255, 0.16)',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          textTransform: 'none',
                          py: 0.7,
                          px: 2,
                          '&:hover': {
                            borderColor: '#ffffff',
                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          },
                        }}
                      >
                        Inquire Details
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
