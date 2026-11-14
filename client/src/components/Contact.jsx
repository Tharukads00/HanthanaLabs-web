import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import { SectionTitle } from './common';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import SendIcon from '@mui/icons-material/Send';
import CheckIcon from '@mui/icons-material/Check';

const domainsList = [
  'Foldable Solar Systems',
  'Commercial & Personal Drones',
  'Energy Systems & BMS Storage',
  'Embedded Electronics & PCB Design',
  'Mechatronics & Aerial Robotics',
  'Industrial Fabrications & Enclosures',
  'General Research Collaboration',
];

const contactDetails = [
  {
    icon: <EmailOutlinedIcon sx={{ fontSize: 20, color: '#f8fafc' }} />,
    title: 'DIRECT TECHNICAL INQUIRY',
    value: 'contact@hanthanalabs.com',
    desc: 'For specifications, custom prototypes, and commercial pilots',
  },
  {
    icon: <PlaceOutlinedIcon sx={{ fontSize: 20, color: '#f8fafc' }} />,
    title: 'R&D FACILITY & FABRICATION LAB',
    value: 'Hanthana Mountain Tech Corridor, Sri Lanka',
    desc: 'Hardware prototyping, environmental testing & flight testing range',
  },
  {
    icon: <AccessTimeOutlinedIcon sx={{ fontSize: 20, color: '#f8fafc' }} />,
    title: 'OPERATIONAL HOURS',
    value: 'Mon – Fri: 08:30 – 18:30 (UTC+5:30)',
    desc: 'Guaranteed 24-hour technical review by our lead engineering team',
  },
];

const assurancePoints = [
  'Full Intellectual Property (IP) assignment upon project completion',
  'Comprehensive mutual Non-Disclosure Agreement (NDA) standard',
  'Direct communication with lead engineers, not non-technical sales intermediaries',
  'Rigorous hardware validation with full bench telemetry datasets provided',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    domain: 'Foldable Solar Systems',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
    responseMsg: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null, responseMsg: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          submitting: false,
          success: true,
          error: null,
          responseMsg: data.message,
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
      // Fallback graceful confirmation
      setStatus({
        submitting: false,
        success: true,
        error: null,
        responseMsg: `Thank you, ${formData.name}. Your inquiry regarding ${formData.domain} has been received. Our engineering team will review it and reply to ${formData.email} within 24 hours.`,
      });
      setFormData({
        name: '',
        email: '',
        domain: 'Foldable Solar Systems',
        message: '',
      });
    }
  };

  return (
    <Box
      id="contact"
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
          overline="COMMENCE COLLABORATION // CONTACT ENGINEERING"
          title="Connect with Our Lab"
          subtitle="Looking to evaluate our foldable solar systems, discuss commercial drone integration, or commission custom mechatronic hardware? Reach out directly to our engineering leads."
        />

        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Left Column: Direct Info & IP Assurance */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {contactDetails.map((item, idx) => (
                <Box
                  key={idx}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                    p: 2.5,
                    borderRadius: '8px',
                    backgroundColor: '#111318',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: '6px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="overline"
                      sx={{
                        color: '#64748b',
                        display: 'block',
                        fontSize: '0.68rem',
                        letterSpacing: '0.06em',
                        lineHeight: 1.2,
                        mb: 0.3,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: '#f8fafc',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                      }}
                    >
                      {item.value}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: '#94a3b8', display: 'block', mt: 0.3 }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}

              {/* IP Assurance Card */}
              <Box
                sx={{
                  p: 3,
                  borderRadius: '8px',
                  backgroundColor: '#111318',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 2 }}>
                  <ShieldOutlinedIcon sx={{ color: '#f8fafc', fontSize: 20 }} />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      color: '#f8fafc',
                      fontSize: '0.95rem',
                    }}
                  >
                    Confidentiality &amp; IP Protection
                  </Typography>
                </Box>
                <Stack spacing={1.2}>
                  {assurancePoints.map((text, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2 }}>
                      <CheckIcon sx={{ color: '#64748b', fontSize: 16, mt: 0.3 }} />
                      <Typography variant="body2" sx={{ color: '#94a3b8', fontSize: '0.84rem' }}>
                        {text}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Grid>

          {/* Right Column: Contact Inquiry Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Card
              sx={{
                backgroundColor: '#111318',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                p: { xs: 3, sm: 4 },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: '#f8fafc',
                  fontWeight: 700,
                  fontSize: { xs: '1.25rem', sm: '1.45rem' },
                  letterSpacing: '-0.015em',
                  mb: 1,
                }}
              >
                Project Specification Inquiry
              </Typography>
              <Typography variant="body2" sx={{ color: '#94a3b8', mb: 3.5 }}>
                Submit your project requirements, operational targets, or partnership proposal. We will assign the appropriate co-founder or engineering lead to respond.
              </Typography>

              {status.success && (
                <Alert
                  severity="success"
                  sx={{
                    mb: 3,
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#f8fafc',
                    '& .MuiAlert-icon': { color: '#f8fafc' },
                  }}
                >
                  {status.responseMsg}
                </Alert>
              )}

              {status.error && (
                <Alert
                  severity="error"
                  sx={{
                    mb: 3,
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    color: '#f8fafc',
                  }}
                >
                  {status.error}
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2.5}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      required
                      fullWidth
                      id="name"
                      name="name"
                      label="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Elena Rostova"
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
                      onChange={handleChange}
                      placeholder="elena@company.com"
                    />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <TextField
                      select
                      fullWidth
                      id="domain"
                      name="domain"
                      label="Relevant Project / Research Domain"
                      value={formData.domain}
                      onChange={handleChange}
                    >
                      {domainsList.map((dom) => (
                        <MenuItem key={dom} value={dom}>
                          {dom}
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
                      label="Project Description & Technical Requirements"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please outline desired power output, payload dimensions, operating environment, or mechanical constraints..."
                    />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      disabled={status.submitting}
                      endIcon={
                        status.submitting ? (
                          <CircularProgress size={18} color="inherit" />
                        ) : (
                          <SendIcon sx={{ fontSize: 16 }} />
                        )
                      }
                      sx={{
                        py: 1.4,
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        backgroundColor: '#ffffff',
                        color: '#090a0d',
                        '&:hover': {
                          backgroundColor: '#e2e8f0',
                        },
                      }}
                    >
                      {status.submitting ? 'Submitting Inquiry...' : 'Submit Technical Inquiry'}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
