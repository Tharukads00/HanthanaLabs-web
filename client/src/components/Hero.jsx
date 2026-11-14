import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const keyMetrics = [
  { value: '04', label: 'Co-Founders', desc: 'Mechatronics, Energy & Systems' },
  { value: '02', label: 'Active Flagships', desc: 'Foldable Solar & Autonomous UAV' },
  { value: '04', label: 'R&D Domains', desc: 'Energy, Silicon, Motion & Fabrication' },
  { value: '100%', label: 'In-House Prototypes', desc: 'Design, CAD, Assembly & Verification' },
];

export default function Hero() {
  const handleScrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="home"
      component="section"
      className="clean-grid-bg"
      sx={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 16, md: 20 },
        pb: { xs: 10, md: 12 },
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 880, mx: 'auto', textAlign: 'center' }}>
          {/* Overline Label */}
          <Box sx={{ mb: 3 }}>
            <Box component="span" className="tech-tag">
              <Box
                component="span"
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  display: 'inline-block',
                }}
              />
              MECHATRONICS &amp; ELECTRONICS R&amp;D // HANTHANALABS
            </Box>
          </Box>

          {/* Main Title */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.6rem', md: '4.5rem' },
              fontWeight: 800,
              letterSpacing: '-0.035em',
              lineHeight: 1.08,
              color: '#f8fafc',
              mb: 3,
            }}
          >
            Engineering for the physical world.
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: { xs: '1.05rem', sm: '1.25rem' },
              color: '#94a3b8',
              lineHeight: 1.65,
              maxWidth: 720,
              mx: 'auto',
              mb: 5,
            }}
          >
            HanthanaLabs is an applied research and development laboratory in Sri Lanka.
            We engineer high-efficiency <strong>foldable solar systems</strong>, autonomous{' '}
            <strong>commercial and personal drones</strong>, custom embedded electronics, and turnkey industrial solutions.
          </Typography>

          {/* Action Buttons */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              mb: 8,
            }}
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
              onClick={() => handleScrollTo('#projects')}
              sx={{
                width: { xs: '100%', sm: 'auto' },
                py: 1.4,
                px: 3.5,
                fontSize: '0.92rem',
                fontWeight: 600,
              }}
            >
              Explore Ongoing Projects
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => handleScrollTo('#company')}
              sx={{
                width: { xs: '100%', sm: 'auto' },
                py: 1.4,
                px: 3.5,
                fontSize: '0.92rem',
                fontWeight: 600,
              }}
            >
              Company &amp; Founders
            </Button>
          </Box>

          {/* Clean Metric Grid */}
          <Box
            sx={{
              pt: 5,
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <Grid container spacing={{ xs: 2.5, md: 3 }} justifyContent="center">
              {keyMetrics.map((item, idx) => (
                <Grid size={{ xs: 6, sm: 3 }} key={idx}>
                  <Box sx={{ textAlign: 'center', px: 1 }}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: { xs: '1.8rem', md: '2.2rem' },
                        color: '#f8fafc',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.1,
                        mb: 0.5,
                      }}
                    >
                      {item.value}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: '#cbd5e1',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        lineHeight: 1.2,
                        mb: 0.3,
                      }}
                    >
                      {item.label}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#64748b',
                        fontSize: '0.75rem',
                        display: 'block',
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
