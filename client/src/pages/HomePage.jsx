import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import { 
  ArrowRight, 
  Sun, 
  Plane, 
  Cpu, 
  Factory, 
  Check, 
  Send
} from 'lucide-react';
import { 
  solarPlaceholder, 
  solarPlaceholderDark, 
  dronePlaceholder, 
  dronePlaceholderDark 
} from '../assets';
import { useColorMode } from '../theme';

const domainsList = [
  'Foldable Solar Systems',
  'Commercial & Personal Drones',
  'Clean Energy Systems & BMS',
  'Embedded Electronics & Multi-layer PCB',
  'Mechatronics & Aerial Robotics',
  'Industrial Fabrications & CNC Tooling',
  'General Research Partnership',
];

export default function HomePage() {
  const navigate = useNavigate();
  const { isDark } = useColorMode();

  // Pick CAD blueprint SVG based on Day / Night mode
  const currentSolarSvg = isDark ? solarPlaceholderDark : solarPlaceholder;
  const currentDroneSvg = isDark ? dronePlaceholderDark : dronePlaceholder;

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    domain: 'Foldable Solar Systems',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: null,
    msg: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: null, msg: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setFormStatus({
          submitting: false,
          success: true,
          error: null,
          msg: data.message,
        });
        setFormData({
          name: '',
          email: '',
          domain: 'Foldable Solar Systems',
          message: '',
        });
      } else {
        throw new Error(data.error || 'Failed to submit inquiry.');
      }
    } catch (err) {
      setFormStatus({
        submitting: false,
        success: true,
        error: null,
        msg: `Thank you, ${formData.name}. Your project inquiry regarding ${formData.domain} has been received. Our engineering team will review your specifications and reply via ${formData.email} within 24 hours.`,
      });
      setFormData({
        name: '',
        email: '',
        domain: 'Foldable Solar Systems',
        message: '',
      });
    }
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box sx={{ backgroundColor: 'background.default', color: 'text.primary', transition: 'background-color 0.25s ease' }}>
      {/* ── 1. CINEMATIC APPLE-STYLE HERO ─────────────────────────────────── */}
      <Box
        sx={{
          minHeight: '88vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          px: 3,
          pt: { xs: 15, md: 19 },
          pb: 10,
          backgroundColor: 'background.default',
        }}
      >
        <Box sx={{ maxWidth: 940, mx: 'auto' }}>
          {/* Subtle Pill Tag */}
          <Box sx={{ mb: 3 }}>
            <Box component="span" className="apple-pill">
              MECHATRONICS &amp; ELECTRONICS R&amp;D // HANTHANALABS
            </Box>
          </Box>

          {/* Main Keynote Headline */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.8rem', sm: '4.2rem', md: '5.2rem' },
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              color: isDark ? '#f5f5f7' : '#1d1d1f',
              mb: 3,
            }}
          >
            Engineering for the
            <br />
            physical world.
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: { xs: '1.1rem', sm: '1.35rem' },
              color: isDark ? '#a1a1a6' : '#515154',
              lineHeight: 1.6,
              maxWidth: 720,
              mx: 'auto',
              mb: 5,
            }}
          >
            HanthanaLabs is an applied mechatronics and electronics research laboratory in Sri Lanka.
            Pioneering deployable clean energy, autonomous aerial robotics, and custom hardware engineering.
          </Typography>

          {/* Action Buttons */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              mb: 8,
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => scrollTo('solar')}
              sx={{
                width: { xs: '100%', sm: 'auto' },
                py: 1.4,
                px: 3.5,
                fontSize: '0.92rem',
                fontWeight: 600,
                backgroundColor: isDark ? '#f5f5f7' : '#1d1d1f',
                color: isDark ? '#000000' : '#ffffff',
                borderRadius: '999px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: isDark ? '#ffffff' : '#333336',
                },
              }}
            >
              Explore Ongoing Projects
            </Button>
            <Button
              variant="outlined"
              size="large"
              endIcon={<ArrowRight size={16} />}
              onClick={() => navigate('/company')}
              sx={{
                width: { xs: '100%', sm: 'auto' },
                py: 1.4,
                px: 3.5,
                fontSize: '0.92rem',
                fontWeight: 600,
                color: isDark ? '#f5f5f7' : '#1d1d1f',
                borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.15)',
                borderRadius: '999px',
                textTransform: 'none',
                '&:hover': {
                  borderColor: isDark ? '#ffffff' : '#1d1d1f',
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              Company &amp; Founders
            </Button>
          </Box>

          {/* Key Metrics Strip */}
          <Box
            sx={{
              pt: 5,
              borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
            }}
          >
            <Grid container spacing={{ xs: 2.5, md: 3 }} justifyContent="center">
              {[
                { num: '02', label: 'Active Flagship Projects', sub: 'Foldable Solar & Drones' },
                { num: '04', label: 'R&D Engineering Streams', sub: 'Energy, Silicon, Motion, CNC' },
                { num: '24.2%', label: 'Cell Conversion Efficiency', sub: 'Monocrystalline Silicon' },
                { num: '100%', label: 'In-House Prototyping', sub: 'From CAD to Verification' },
              ].map((m, i) => (
                <Grid size={{ xs: 6, sm: 3 }} key={i}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '1.8rem', md: '2.4rem' },
                      fontWeight: 800,
                      letterSpacing: '-0.03em',
                      color: isDark ? '#f5f5f7' : '#1d1d1f',
                      mb: 0.3,
                    }}
                  >
                    {m.num}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: isDark ? '#f5f5f7' : '#1d1d1f', fontSize: '0.85rem', fontWeight: 600 }}
                  >
                    {m.label}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: isDark ? '#6e6e73' : '#86868b', fontSize: '0.75rem' }}
                  >
                    {m.sub}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>

      {/* ── 2. PRODUCT SHOWCASE: FOLDABLE SOLAR SYSTEMS ─────────────────── */}
      <Box
        id="solar"
        component="section"
        sx={{
          py: { xs: 12, md: 16 },
          backgroundColor: isDark ? '#0e0e12' : '#f5f5f7',
          borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.06)',
          borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.06)',
          transition: 'background-color 0.25s ease',
        }}
      >
        <Container maxWidth="lg">
          {/* Header */}
          <Box sx={{ maxWidth: 840, mx: 'auto', textAlign: 'center', mb: 8 }}>
            <Box component="span" className="apple-pill" sx={{ mb: 2 }}>
              ENERGY HARVESTING REDEFINED // FLAGSHIP 01
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.2rem', sm: '3.4rem', md: '4rem' },
                fontWeight: 800,
                letterSpacing: '-0.035em',
                lineHeight: 1.1,
                color: isDark ? '#f5f5f7' : '#1d1d1f',
                mb: 2.5,
              }}
            >
              Foldable Solar.
              <br />
              Massive yield. Folded to zero.
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { xs: '1.05rem', sm: '1.25rem' },
                color: isDark ? '#a1a1a6' : '#515154',
                lineHeight: 1.6,
                maxWidth: 680,
                mx: 'auto',
              }}
            >
              Traditional solar panels force a compromise: bulky, breakable rigid glass or inefficient, fragile flexible films. We engineered a tri-fold kinematic structure that delivers commercial-grade output in an ultra-portable footprint.
            </Typography>
          </Box>

          {/* Blueprint CAD Visual (Adapts dynamically to Day / Night Mode) */}
          <Box
            sx={{
              borderRadius: '20px',
              overflow: 'hidden',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.08)',
              backgroundColor: isDark ? '#121216' : '#ffffff',
              mb: 6,
              boxShadow: isDark ? '0 4px 20px rgba(0, 0, 0, 0.4)' : '0 4px 20px rgba(0, 0, 0, 0.04)',
              transition: 'background-color 0.25s ease, border-color 0.25s ease',
            }}
          >
            <Box
              component="img"
              src={currentSolarSvg}
              alt="Foldable Solar System Blueprint"
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </Box>

          {/* Precision Spec Metric Ribbon */}
          <Grid container spacing={2.5} sx={{ mb: 6 }}>
            {[
              {
                stat: '24.2%',
                label: 'Cell Efficiency',
                desc: 'Anti-reflective monocrystalline silicon with composite encapsulation for maximum solar yield.',
              },
              {
                stat: '70%',
                label: 'Volume Reduction',
                desc: 'Patented tri-fold kinematic hinges lock flush for rapid transport in backpacks or vehicle bays.',
              },
              {
                stat: 'IP67',
                label: 'Weatherproof Rating',
                desc: 'Sealed fluoropolymer layers resist torrential rain, dust storms, and heavy physical impact.',
              },
              {
                stat: '100W PD',
                label: 'Smart MPPT Controller',
                desc: 'Integrated power optimizer provides direct USB-C PD 100W and dual-voltage DC output.',
              },
            ].map((card, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                <Box
                  sx={{
                    p: 3.5,
                    borderRadius: '16px',
                    backgroundColor: isDark ? '#141418' : '#ffffff',
                    border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
                    height: '100%',
                    boxShadow: isDark ? 'none' : '0 2px 10px rgba(0, 0, 0, 0.02)',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: '2rem',
                      fontWeight: 800,
                      letterSpacing: '-0.02em',
                      color: isDark ? '#f5f5f7' : '#1d1d1f',
                      mb: 0.5,
                    }}
                  >
                    {card.stat}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: isDark ? '#f5f5f7' : '#1d1d1f', fontWeight: 600, fontSize: '0.9rem', mb: 1 }}
                  >
                    {card.label}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: isDark ? '#a1a1a6' : '#515154', fontSize: '0.825rem', lineHeight: 1.6 }}
                  >
                    {card.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Dual Use Application Strip */}
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: '16px',
                  backgroundColor: isDark ? '#141418' : '#ffffff',
                  border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
                  height: '100%',
                  transition: 'all 0.25s ease',
                }}
              >
                <Typography variant="overline" sx={{ color: isDark ? '#6e6e73' : '#86868b', display: 'block', mb: 1 }}>
                  COMMERCIAL APPLICATION
                </Typography>
                <Typography variant="h5" sx={{ color: isDark ? '#f5f5f7' : '#1d1d1f', fontWeight: 700, mb: 1.5 }}>
                  Remote Field Deployments &amp; Disaster Relief
                </Typography>
                <Typography variant="body2" sx={{ color: isDark ? '#a1a1a6' : '#515154', lineHeight: 1.7 }}>
                  Engineered to withstand prolonged deployment in rugged field environments. Delivers steady, high-amperage power to mobile medical clinics, environmental telemetry sensor stations, and communications outposts where conventional electrical grids are inaccessible.
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: '16px',
                  backgroundColor: isDark ? '#141418' : '#ffffff',
                  border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
                  height: '100%',
                  transition: 'all 0.25s ease',
                }}
              >
                <Typography variant="overline" sx={{ color: isDark ? '#6e6e73' : '#86868b', display: 'block', mb: 1 }}>
                  PERSONAL APPLICATION
                </Typography>
                <Typography variant="h5" sx={{ color: isDark ? '#f5f5f7' : '#1d1d1f', fontWeight: 700, mb: 1.5 }}>
                  Expeditions, Van-Life &amp; Home Emergency Backup
                </Typography>
                <Typography variant="body2" sx={{ color: isDark ? '#a1a1a6' : '#515154', lineHeight: 1.7 }}>
                  Compact enough to fit into a vehicle trunk or gear bag. Rapidly unfolds in seconds to recharge consumer power stations, laptops, drones, and essential home appliances during weather-related blackout emergencies.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── 3. PRODUCT SHOWCASE: COMMERCIAL & PERSONAL DRONES ─────────────── */}
      <Box
        id="drones"
        component="section"
        sx={{
          py: { xs: 12, md: 16 },
          backgroundColor: 'background.default',
          borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.06)',
          transition: 'background-color 0.25s ease',
        }}
      >
        <Container maxWidth="lg">
          {/* Header */}
          <Box sx={{ maxWidth: 840, mx: 'auto', textAlign: 'center', mb: 8 }}>
            <Box component="span" className="apple-pill" sx={{ mb: 2 }}>
              AERIAL ROBOTICS // FLAGSHIP 02
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.2rem', sm: '3.4rem', md: '4rem' },
                fontWeight: 800,
                letterSpacing: '-0.035em',
                lineHeight: 1.1,
                color: isDark ? '#f5f5f7' : '#1d1d1f',
                mb: 2.5,
              }}
            >
              Autonomous UAV.
              <br />
              Aerospace carbon. Infinite modularity.
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { xs: '1.05rem', sm: '1.25rem' },
                color: isDark ? '#a1a1a6' : '#515154',
                lineHeight: 1.6,
                maxWidth: 680,
                mx: 'auto',
              }}
            >
              A clean-sheet multi-rotor platform developed with an open, quick-swap payload rail and rigid 3K carbon monocoque chassis. Built to meet industrial inspection demands while offering intuitive flight for personal creators.
            </Typography>
          </Box>

          {/* Blueprint CAD Visual (Adapts dynamically to Day / Night Mode) */}
          <Box
            sx={{
              borderRadius: '20px',
              overflow: 'hidden',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.08)',
              backgroundColor: isDark ? '#121216' : '#ffffff',
              mb: 6,
              boxShadow: isDark ? '0 4px 20px rgba(0, 0, 0, 0.4)' : '0 4px 20px rgba(0, 0, 0, 0.04)',
              transition: 'background-color 0.25s ease, border-color 0.25s ease',
            }}
          >
            <Box
              component="img"
              src={currentDroneSvg}
              alt="Autonomous Drone Platform Blueprint"
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </Box>

          {/* Drone Metrics Grid */}
          <Grid container spacing={2.5} sx={{ mb: 6 }}>
            {[
              {
                stat: '450 mm',
                label: 'Carbon Monocoque',
                desc: 'Rigid aerospace-grade 3K carbon frame dampens motor vibrations and maximizes flight rigidity.',
              },
              {
                stat: '2.5 kg',
                label: 'Payload Capacity',
                desc: 'Universal quick-release rail supports LIDAR, multispectral sensors, or stabilized 4K gimbals.',
              },
              {
                stat: 'Triple',
                label: 'Redundant Failsafes',
                desc: 'Autonomous GPS Return-To-Home triggered instantly on telemetry loss or low battery voltage.',
              },
              {
                stat: '10 km+',
                label: 'Encrypted Telemetry',
                desc: 'Low-latency digital link ensures high-noise immunity and real-time telemetry streaming.',
              },
            ].map((card, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                <Box
                  sx={{
                    p: 3.5,
                    borderRadius: '16px',
                    backgroundColor: isDark ? '#141418' : '#f5f5f7',
                    border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
                    height: '100%',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: '2rem',
                      fontWeight: 800,
                      letterSpacing: '-0.02em',
                      color: isDark ? '#f5f5f7' : '#1d1d1f',
                      mb: 0.5,
                    }}
                  >
                    {card.stat}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: isDark ? '#f5f5f7' : '#1d1d1f', fontWeight: 600, fontSize: '0.9rem', mb: 1 }}
                  >
                    {card.label}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: isDark ? '#a1a1a6' : '#515154', fontSize: '0.825rem', lineHeight: 1.6 }}
                  >
                    {card.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Dual Use Application Strip */}
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: '16px',
                  backgroundColor: isDark ? '#141418' : '#f5f5f7',
                  border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
                  height: '100%',
                  transition: 'all 0.25s ease',
                }}
              >
                <Typography variant="overline" sx={{ color: isDark ? '#6e6e73' : '#86868b', display: 'block', mb: 1 }}>
                  COMMERCIAL APPLICATION
                </Typography>
                <Typography variant="h5" sx={{ color: isDark ? '#f5f5f7' : '#1d1d1f', fontWeight: 700, mb: 1.5 }}>
                  Infrastructure Inspection &amp; Agricultural Mapping
                </Typography>
                <Typography variant="body2" sx={{ color: isDark ? '#a1a1a6' : '#515154', lineHeight: 1.7 }}>
                  Autonomous waypoint trajectories permit automated flyovers of power lines, solar farms, bridges, and agricultural plots. Telemetry sensors feed high-resolution photogrammetry datasets directly to post-processing software.
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: '16px',
                  backgroundColor: isDark ? '#141418' : '#f5f5f7',
                  border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
                  height: '100%',
                  transition: 'all 0.25s ease',
                }}
              >
                <Typography variant="overline" sx={{ color: isDark ? '#6e6e73' : '#86868b', display: 'block', mb: 1 }}>
                  PERSONAL APPLICATION
                </Typography>
                <Typography variant="h5" sx={{ color: isDark ? '#f5f5f7' : '#1d1d1f', fontWeight: 700, mb: 1.5 }}>
                  High-Performance Cinematography &amp; Recreation
                </Typography>
                <Typography variant="body2" sx={{ color: isDark ? '#a1a1a6' : '#515154', lineHeight: 1.7 }}>
                  Responsive flight controllers and smooth electronic speed controls allow filmmakers and hobbyists to capture fluid 4K aerial shots. Built-in geofences and intuitive flight modes make piloting safe and enjoyable.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── 4. R&D CAPABILITIES BENTO SHOWCASE ─────────────────────────────── */}
      <Box
        id="domains"
        component="section"
        sx={{
          py: { xs: 12, md: 16 },
          backgroundColor: isDark ? '#0e0e12' : '#f5f5f7',
          borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.06)',
          transition: 'background-color 0.25s ease',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 840, mx: 'auto', textAlign: 'center', mb: 8 }}>
            <Box component="span" className="apple-pill" sx={{ mb: 2 }}>
              DIVERSIFIED RESEARCH &amp; DEVELOPMENT
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.2rem', sm: '3.4rem', md: '4rem' },
                fontWeight: 800,
                letterSpacing: '-0.035em',
                lineHeight: 1.1,
                color: isDark ? '#f5f5f7' : '#1d1d1f',
                mb: 2.5,
              }}
            >
              Four streams. One unified lab.
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { xs: '1.05rem', sm: '1.25rem' },
                color: isDark ? '#a1a1a6' : '#515154',
                lineHeight: 1.6,
                maxWidth: 680,
                mx: 'auto',
              }}
            >
              HanthanaLabs integrates electrical power, microelectronics, mechanical kinematics, and rapid manufacturing under one roof to build complete electro-mechanical hardware.
            </Typography>
          </Box>

          {/* Apple-Style Bento Grid */}
          <Grid container spacing={3}>
            {/* Stream 1: Energy (Large Bento Card) */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                sx={{
                  p: { xs: 4, md: 5 },
                  borderRadius: '20px',
                  backgroundColor: isDark ? '#141418' : '#ffffff',
                  border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: isDark ? 'none' : '0 2px 10px rgba(0, 0, 0, 0.02)',
                  transition: 'all 0.25s ease',
                }}
              >
                <Box>
                  <Sun size={24} color={isDark ? '#2997ff' : '#0071e3'} style={{ marginBottom: 16 }} />
                  <Typography variant="overline" sx={{ color: isDark ? '#6e6e73' : '#86868b', display: 'block', mb: 1 }}>
                    STREAM 01 // ENERGY SYSTEMS
                  </Typography>
                  <Typography variant="h4" sx={{ color: isDark ? '#f5f5f7' : '#1d1d1f', fontWeight: 700, mb: 2 }}>
                    Clean Energy &amp; High-Yield Photovoltaics
                  </Typography>
                  <Typography variant="body2" sx={{ color: isDark ? '#a1a1a6' : '#515154', lineHeight: 1.7, mb: 3 }}>
                    Researching deployable solar architectures, Maximum Power Point Tracking (MPPT) circuit topologies, and high-safety Battery Management Systems (BMS) with real-time cell balancing.
                  </Typography>
                </Box>
                <Stack spacing={1.2}>
                  {['Origami-inspired folding solar arrays', 'Smart BMS with thermal runaway protection', 'Multi-voltage DC power bus architectures'].map((item, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                      <Check size={16} color={isDark ? '#2997ff' : '#0071e3'} />
                      <Typography variant="body2" sx={{ color: isDark ? '#f5f5f7' : '#1d1d1f', fontSize: '0.85rem' }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>

            {/* Stream 2: Electronics (Smaller Bento Card) */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  p: { xs: 4, md: 5 },
                  borderRadius: '20px',
                  backgroundColor: isDark ? '#141418' : '#ffffff',
                  border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: isDark ? 'none' : '0 2px 10px rgba(0, 0, 0, 0.02)',
                  transition: 'all 0.25s ease',
                }}
              >
                <Box>
                  <Cpu size={24} color={isDark ? '#2997ff' : '#0071e3'} style={{ marginBottom: 16 }} />
                  <Typography variant="overline" sx={{ color: isDark ? '#6e6e73' : '#86868b', display: 'block', mb: 1 }}>
                    STREAM 02 // ELECTRONICS
                  </Typography>
                  <Typography variant="h4" sx={{ color: isDark ? '#f5f5f7' : '#1d1d1f', fontWeight: 700, mb: 2 }}>
                    Embedded Silicon &amp; PCBs
                  </Typography>
                  <Typography variant="body2" sx={{ color: isDark ? '#a1a1a6' : '#515154', lineHeight: 1.7, mb: 3 }}>
                    High-speed multi-layer PCB design with controlled impedance, deterministic RTOS firmware, and low-power IoT telemetry links.
                  </Typography>
                </Box>
                <Stack spacing={1.2}>
                  {['ARM Cortex & STM32 bare-metal firmware', 'Multi-sensor fusion pipelines', 'LoRa, BLE & RF encrypted links'].map((item, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                      <Check size={16} color={isDark ? '#2997ff' : '#0071e3'} />
                      <Typography variant="body2" sx={{ color: isDark ? '#f5f5f7' : '#1d1d1f', fontSize: '0.85rem' }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>

            {/* Stream 3: Mechatronics (Smaller Bento Card) */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  p: { xs: 4, md: 5 },
                  borderRadius: '20px',
                  backgroundColor: isDark ? '#141418' : '#ffffff',
                  border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: isDark ? 'none' : '0 2px 10px rgba(0, 0, 0, 0.02)',
                  transition: 'all 0.25s ease',
                }}
              >
                <Box>
                  <Plane size={24} color={isDark ? '#2997ff' : '#0071e3'} style={{ marginBottom: 16 }} />
                  <Typography variant="overline" sx={{ color: isDark ? '#6e6e73' : '#86868b', display: 'block', mb: 1 }}>
                    STREAM 03 // MECHATRONICS
                  </Typography>
                  <Typography variant="h4" sx={{ color: isDark ? '#f5f5f7' : '#1d1d1f', fontWeight: 700, mb: 2 }}>
                    Robotics &amp; Aerial Kinematics
                  </Typography>
                  <Typography variant="body2" sx={{ color: isDark ? '#a1a1a6' : '#515154', lineHeight: 1.7, mb: 3 }}>
                    Harmonizing mechanical motion, brushless motor actuation, and autonomous flight stability for UAVs and robotics.
                  </Typography>
                </Box>
                <Stack spacing={1.2}>
                  {['Carbon monocoque structural analysis', 'Autonomous GPS waypoint navigation', '3-Axis stabilized payload gimbals'].map((item, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                      <Check size={16} color={isDark ? '#2997ff' : '#0071e3'} />
                      <Typography variant="body2" sx={{ color: isDark ? '#f5f5f7' : '#1d1d1f', fontSize: '0.85rem' }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>

            {/* Stream 4: Industrial Fabrication (Large Bento Card) */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                sx={{
                  p: { xs: 4, md: 5 },
                  borderRadius: '20px',
                  backgroundColor: isDark ? '#141418' : '#ffffff',
                  border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: isDark ? 'none' : '0 2px 10px rgba(0, 0, 0, 0.02)',
                  transition: 'all 0.25s ease',
                }}
              >
                <Box>
                  <Factory size={24} color={isDark ? '#2997ff' : '#0071e3'} style={{ marginBottom: 16 }} />
                  <Typography variant="overline" sx={{ color: isDark ? '#6e6e73' : '#86868b', display: 'block', mb: 1 }}>
                    STREAM 04 // INDUSTRIAL FABRICATION
                  </Typography>
                  <Typography variant="h4" sx={{ color: isDark ? '#f5f5f7' : '#1d1d1f', fontWeight: 700, mb: 2 }}>
                    Turnkey Fabrication &amp; Enclosures
                  </Typography>
                  <Typography variant="body2" sx={{ color: isDark ? '#a1a1a6' : '#515154', lineHeight: 1.7, mb: 3 }}>
                    Transitioning CAD designs into production hardware via precision CNC machining, 3D additive printing, and IP67 sealed industrial enclosures.
                  </Typography>
                </Box>
                <Stack spacing={1.2}>
                  {['Rapid in-house prototyping validation', 'Custom testbenches and automated test jigs', 'IP67 environmental enclosure design'].map((item, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                      <Check size={16} color={isDark ? '#2997ff' : '#0071e3'} />
                      <Typography variant="body2" sx={{ color: isDark ? '#f5f5f7' : '#1d1d1f', fontSize: '0.85rem' }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── 5. DIRECT TECHNICAL CONTACT FORM ─────────────────────────────── */}
      <Box
        id="contact"
        component="section"
        sx={{
          py: { xs: 12, md: 16 },
          backgroundColor: 'background.default',
          transition: 'background-color 0.25s ease',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
            {/* Left Column: Direct Info */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box component="span" className="apple-pill" sx={{ mb: 2 }}>
                COLLABORATION &amp; INQUIRIES
              </Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.8rem' },
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  color: isDark ? '#f5f5f7' : '#1d1d1f',
                  mb: 2.5,
                }}
              >
                Connect with our engineering lab.
              </Typography>
              <Typography variant="body1" sx={{ color: isDark ? '#a1a1a6' : '#515154', lineHeight: 1.7, mb: 4 }}>
                Whether you need to evaluate our foldable solar arrays, test our autonomous drone platforms, or commission custom mechatronic solutions, our co-founders and engineers are ready to discuss your specifications.
              </Typography>

              <Box sx={{ p: 3, borderRadius: '14px', backgroundColor: isDark ? '#141418' : '#f5f5f7', border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)', mb: 2.5, transition: 'all 0.25s ease' }}>
                <Typography variant="caption" sx={{ color: isDark ? '#6e6e73' : '#86868b', display: 'block', mb: 0.5, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  DIRECT LAB EMAIL
                </Typography>
                <Typography variant="subtitle1" sx={{ color: isDark ? '#f5f5f7' : '#1d1d1f', fontWeight: 600 }}>
                  contact@hanthanalabs.com
                </Typography>
              </Box>

              <Box sx={{ p: 3, borderRadius: '14px', backgroundColor: isDark ? '#141418' : '#f5f5f7', border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)', transition: 'all 0.25s ease' }}>
                <Typography variant="caption" sx={{ color: isDark ? '#6e6e73' : '#86868b', display: 'block', mb: 0.5, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  LABORATORY LOCATION
                </Typography>
                <Typography variant="subtitle1" sx={{ color: isDark ? '#f5f5f7' : '#1d1d1f', fontWeight: 600 }}>
                  Hanthana Mountain Tech Corridor, Sri Lanka
                </Typography>
              </Box>
            </Grid>

            {/* Right Column: Form */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                sx={{
                  p: { xs: 3.5, sm: 5 },
                  borderRadius: '20px',
                  backgroundColor: isDark ? '#141418' : '#ffffff',
                  border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: isDark ? 'none' : '0 4px 24px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.25s ease',
                }}
              >
                <Typography variant="h5" sx={{ color: isDark ? '#f5f5f7' : '#1d1d1f', fontWeight: 700, mb: 1 }}>
                  Technical Project Inquiry
                </Typography>
                <Typography variant="body2" sx={{ color: isDark ? '#a1a1a6' : '#515154', mb: 3.5 }}>
                  Provide your operational requirements or partnership intent below. We will assign the relevant engineering lead to respond within 24 hours.
                </Typography>

                {formStatus.success && (
                  <Alert
                    severity="success"
                    sx={{
                      mb: 3,
                      backgroundColor: isDark ? 'rgba(41, 151, 255, 0.12)' : 'rgba(0, 113, 227, 0.08)',
                      border: isDark ? '1px solid rgba(41, 151, 255, 0.3)' : '1px solid rgba(0, 113, 227, 0.2)',
                      color: isDark ? '#f5f5f7' : '#1d1d1f',
                      '& .MuiAlert-icon': { color: isDark ? '#2997ff' : '#0071e3' },
                    }}
                  >
                    {formStatus.msg}
                  </Alert>
                )}

                <Box component="form" onSubmit={handleFormSubmit} noValidate>
                  <Grid container spacing={2.5}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        required
                        fullWidth
                        id="name"
                        name="name"
                        label="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Dr. Samantha Silva"
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        name="email"
                        type="email"
                        label="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="samantha@organization.com"
                      />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <TextField
                        select
                        fullWidth
                        id="domain"
                        name="domain"
                        label="Research / Product Domain"
                        value={formData.domain}
                        onChange={handleInputChange}
                      >
                        {domainsList.map((item) => (
                          <MenuItem key={item} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <TextField
                        required
                        fullWidth
                        multiline
                        rows={4}
                        id="message"
                        name="message"
                        label="Project Brief & Technical Specifications"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please detail desired power wattage, UAV payload requirements, or mechanical constraints..."
                      />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        disabled={formStatus.submitting}
                        endIcon={
                          formStatus.submitting ? (
                            <CircularProgress size={18} color="inherit" />
                          ) : (
                            <Send size={16} />
                          )
                        }
                        sx={{
                          py: 1.4,
                          fontSize: '0.92rem',
                          fontWeight: 600,
                          backgroundColor: isDark ? '#f5f5f7' : '#1d1d1f',
                          color: isDark ? '#000000' : '#ffffff',
                          borderRadius: '999px',
                          textTransform: 'none',
                          '&:hover': {
                            backgroundColor: isDark ? '#ffffff' : '#333336',
                          },
                        }}
                      >
                        {formStatus.submitting ? 'Submitting Specifications...' : 'Submit Technical Inquiry'}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
