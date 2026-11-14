import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ArrowUp, Sun, Moon } from 'lucide-react';
import { useColorMode } from '../theme';
import ThemeToggle from './ThemeToggle';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDark } = useColorMode();

  const handleNav = (target) => {
    if (target.startsWith('/')) {
      navigate(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (location.pathname !== '/') {
        navigate('/' + target);
      } else {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: isDark ? '#0e0e12' : '#f5f5f7',
        pt: { xs: 8, md: 10 },
        pb: 6,
        borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
        transition: 'background-color 0.25s ease, border-color 0.25s ease',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 6 }} sx={{ mb: 6 }}>
          {/* Col 1: Brand & Bio */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              onClick={() => handleNav('/')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.25,
                mb: 2,
                cursor: 'pointer',
              }}
            >
              <Box
                component="svg"
                viewBox="0 0 44 44"
                sx={{
                  width: 22,
                  height: 22,
                  display: 'block',
                  color: isDark ? '#f5f5f7' : '#1d1d1f',
                  transition: 'color 0.25s ease',
                }}
              >
                <polygon points="22,3 39,13 39,31 22,41 5,31 5,13" stroke="currentColor" strokeWidth="2.2" fill="none" />
                <path d="M15,16 L15,28 M29,16 L29,28 M15,22 L29,22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </Box>

              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: '1rem',
                  letterSpacing: '-0.02em',
                  color: isDark ? '#f5f5f7' : '#1d1d1f',
                }}
              >
                HanthanaLabs
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: isDark ? '#a1a1a6' : '#515154',
                lineHeight: 1.7,
                mb: 3,
                maxWidth: 360,
                fontSize: '0.85rem',
              }}
            >
              An independent applied mechatronics and electronics research laboratory in Sri Lanka.
              Developing deployable foldable solar arrays, autonomous commercial &amp; personal drones, embedded silicon, and precision industrial systems.
            </Typography>

            <Typography
              variant="caption"
              sx={{
                display: 'block',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.72rem',
                color: isDark ? '#6e6e73' : '#86868b',
                letterSpacing: '0.04em',
              }}
            >
              HEADQUARTERS &amp; LAB // CENTRAL SRI LANKA
            </Typography>
          </Grid>

          {/* Col 2: Navigation */}
          <Grid size={{ xs: 6, sm: 4, md: 2.5 }}>
            <Typography
              variant="overline"
              sx={{
                color: isDark ? '#f5f5f7' : '#1d1d1f',
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 600,
                letterSpacing: '0.06em',
                display: 'block',
                mb: 2,
                fontSize: '0.75rem',
              }}
            >
              NAVIGATION
            </Typography>
            <Stack spacing={1.2}>
              {[
                { label: 'Overview', href: '/' },
                { label: 'Foldable Solar Systems', href: '#solar' },
                { label: 'Autonomous Drones', href: '#drones' },
                { label: 'Core R&D Domains', href: '#domains' },
                { label: 'Company & Founders', href: '/company' },
                { label: 'Terms & Policies', href: '/company#policies' },
                { label: 'Contact Engineering', href: '#contact' },
              ].map((link) => (
                <Typography
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  sx={{
                    color: isDark ? '#a1a1a6' : '#515154',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    '&:hover': { color: isDark ? '#ffffff' : '#1d1d1f' },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Col 3: Research Domains */}
          <Grid size={{ xs: 6, sm: 4, md: 3 }}>
            <Typography
              variant="overline"
              sx={{
                color: isDark ? '#f5f5f7' : '#1d1d1f',
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 600,
                letterSpacing: '0.06em',
                display: 'block',
                mb: 2,
                fontSize: '0.75rem',
              }}
            >
              R&amp;D DISCIPLINES
            </Typography>
            <Stack spacing={1.2}>
              {[
                'Foldable Photovoltaic Mechanics',
                'Autonomous Multirotor UAV Systems',
                'Embedded Firmware & Multi-layer PCB',
                'High-Efficiency MPPT Power Stages',
                'Smart Battery Management (BMS)',
                'Precision CNC & Rapid Prototyping',
              ].map((item, idx) => (
                <Typography
                  key={idx}
                  variant="body2"
                  sx={{ color: isDark ? '#a1a1a6' : '#515154', fontSize: '0.85rem' }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Col 4: Founding Leadership */}
          <Grid size={{ xs: 12, sm: 4, md: 2.5 }}>
            <Typography
              variant="overline"
              sx={{
                color: isDark ? '#f5f5f7' : '#1d1d1f',
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 600,
                letterSpacing: '0.06em',
                display: 'block',
                mb: 2,
                fontSize: '0.75rem',
              }}
            >
              CO-FOUNDERS
            </Typography>
            <Stack spacing={1.2}>
              {[
                { name: 'Tharuka De Silva', title: 'CEO & Co-Founder' },
                { name: 'Kevin Dawson', title: 'President & Co-Founder' },
                { name: 'Lahiru Herath', title: 'VP Mechatronics' },
                { name: 'Chathuni', title: 'VP Energy & Electronics' },
              ].map((f, idx) => (
                <Box
                  key={idx}
                  onClick={() => handleNav('/company')}
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      '& .name': { color: isDark ? '#ffffff' : '#1d1d1f' },
                    },
                  }}
                >
                  <Typography
                    className="name"
                    variant="body2"
                    sx={{
                      color: isDark ? '#a1a1a6' : '#515154',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {f.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: isDark ? '#6e6e73' : '#86868b', fontSize: '0.72rem' }}>
                    {f.title}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)', mb: 4 }} />

        {/* Bottom bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: isDark ? '#6e6e73' : '#86868b',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.75rem',
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            © {new Date().getFullYear()} HanthanaLabs. All Rights Reserved. Engineered in Sri Lanka.
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <ThemeToggle size="small" />

            <Button
              size="small"
              startIcon={<ArrowUp size={14} />}
              onClick={scrollToTop}
              sx={{
                color: isDark ? '#f5f5f7' : '#1d1d1f',
                fontSize: '0.75rem',
                fontFamily: "'JetBrains Mono', monospace",
                textTransform: 'none',
                border: isDark ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(0, 0, 0, 0.12)',
                borderRadius: '999px',
                px: 2,
                py: 0.5,
                '&:hover': {
                  borderColor: isDark ? '#ffffff' : '#1d1d1f',
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              Back to Top
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
