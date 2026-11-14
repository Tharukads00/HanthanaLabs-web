import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { SectionTitle } from './common';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ScienceIcon from '@mui/icons-material/Science';
import SpeedIcon from '@mui/icons-material/Speed';
import ShieldIcon from '@mui/icons-material/Shield';

const foundersList = [
  {
    name: 'Tharuka De Silva',
    role: 'Chief Executive Officer',
    badge: 'CEO',
    discipline: 'Systems Architecture & Technical Strategy',
    bio: 'Tharuka leads corporate vision, client engagements, and capital allocation across all research tracks. His engineering background centers on systems thinking, uniting electrical, mechanical, and software engineers into a cohesive rapid-development cycle. Under his direction, HanthanaLabs prioritizes deployable physical prototypes over theoretical exercises.',
    noteTitle: 'Note from the CEO: Building for the Physical World',
    noteText: [
      'In an era heavily dominated by software and virtual products, physical infrastructure remains the true foundation of human civilization. Clean energy must be harvested from real sunlight, and goods or inspections must move through physical air.',
      'We founded HanthanaLabs with a clear mandate: to prove that world-class mechatronics and advanced electronics can be conceived, engineered, and fabricated directly from Sri Lanka. Our focus is relentlessly practical. Whether we are shaving 50 grams off a drone chassis or improving folding hinge longevity on a solar array, we measure our success by field durability and measurable engineering metrics, not buzzwords.',
    ],
  },
  {
    name: 'Kevin Dawson',
    role: 'President',
    badge: 'President',
    discipline: 'Operations, Fabrication & Quality Assurance',
    bio: 'Kevin directs lab operations, procurement of engineering-grade materials, and manufacturing partner relationships. With a career rooted in precision manufacturing and supply chain resilience, he ensures that concepts designed in CAD transition smoothly into CNC machining, PCB fabrication, and rigorous environmental stress screening.',
    noteTitle: 'Note from the President: The Discipline of Execution',
    noteText: [
      'An elegant schematic or a pristine 3D CAD render is only the beginning. The real engineering happens on the workbench — when tolerance stack-ups challenge your tolerances, or when heat dissipation behaves differently than your simulation predicted.',
      'My commitment at HanthanaLabs is operational rigor. We invest heavily in our testing infrastructure, from thermal chambers to vibration testbenches. When an enterprise or partner trusts us with a custom mechatronic challenge, they receive hardware designed for predictable, repeatable manufacture, not fragile laboratory one-offs.',
    ],
  },
  {
    name: 'Lahiru Herath',
    role: 'Vice President, Mechatronics',
    badge: 'VP Mechatronics',
    discipline: 'Kinematics, UAV Aerodynamics & Actuation',
    bio: 'Lahiru heads the mechatronics and robotics research unit. His technical focus spans aerodynamic efficiency, carbon-fiber composite structural analysis, brushless motor optimization, and autonomous flight dynamics. He oversees the drone development platform for commercial surveys and personal flight.',
    noteTitle: 'Note from VP Mechatronics: Solving Aerodynamic Realities',
    noteText: [
      'Aerial robotics allows zero margin for sloppy engineering. Gravity and wind turbulence expose every compromise in weight distribution, structural resonance, or motor response latency.',
      'Our current drone platform is built around modular utility. By isolating sensor payloads from structural airframe vibrations and writing deterministic flight stabilization routines, we allow commercial operators to conduct complex inspections with the same confidence and ease that an enthusiast enjoys during personal recreational flight.',
    ],
  },
  {
    name: 'Chathuni',
    role: 'Vice President, Energy & Electronics',
    badge: 'VP Energy & Electronics',
    discipline: 'Power Electronics, Photovoltaics & Embedded Hardware',
    bio: 'Chathuni directs the clean energy division and high-speed electronic hardware design. Her research focuses on high-yield solar cell encapsulation, multi-stage maximum power point tracking (MPPT) circuit topologies, safe lithium battery management systems (BMS), and low-power embedded sensor networks.',
    noteTitle: 'Note from VP Energy: Decentralized, Reliable Power',
    noteText: [
      'Solar energy is limitless, but our ability to transport, deploy, and convert it efficiently has lagged behind. Rigid glass panels are too fragile for rapid mobile deployments, while flimsy roll-up panels degrade quickly in high heat.',
      'Our Foldable Solar System bridges this divide. By combining high-yield monocrystalline silicon with composite origami hinges and an integrated smart MPPT controller, we are delivering truly portable, industrial-grade power for disaster response teams, remote commercial stations, and everyday personal adventurers.',
    ],
  },
];

const labPillars = [
  {
    icon: <ScienceIcon sx={{ fontSize: 22, color: '#f8fafc' }} />,
    title: 'First-Principles Engineering',
    desc: 'We solve engineering problems from physical fundamentals rather than copying existing catalog designs.',
  },
  {
    icon: <PrecisionManufacturingIcon sx={{ fontSize: 22, color: '#f8fafc' }} />,
    title: 'In-House Rapid Prototyping',
    desc: 'From high-density PCB SMD assembly to CNC milling and 3D composite printing under one roof.',
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 22, color: '#f8fafc' }} />,
    title: 'Hardware-in-the-Loop Testing',
    desc: 'Every firmware iteration and motor controller is validated against automated physical hardware test fixtures.',
  },
  {
    icon: <ShieldIcon sx={{ fontSize: 22, color: '#f8fafc' }} />,
    title: 'Client IP Ownership',
    desc: 'Client-commissioned projects come with 100% intellectual property ownership transfer upon completion.',
  },
];

export default function Company() {
  return (
    <Box
      id="company"
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: '#090a0d',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <SectionTitle
          overline="ORGANIZATION & LEADERSHIP // ABOUT HANTHANALABS"
          title="Company & Founders"
          subtitle="A multidisciplinary research and development studio headquartered in Sri Lanka, dedicated to advancing clean energy systems, autonomous flight, and precision mechatronics."
        />

        {/* Company Narrative Overview */}
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ mb: 10 }} alignItems="stretch">
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ pr: { md: 4 } }}>
              <Typography
                variant="overline"
                sx={{ color: '#64748b', display: 'block', mb: 1.5 }}
              >
                OUR HERITAGE &amp; MISSION
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: '#f8fafc',
                  fontWeight: 700,
                  fontSize: { xs: '1.4rem', sm: '1.8rem' },
                  lineHeight: 1.3,
                  mb: 2.5,
                }}
              >
                Founded on the belief that impactful technology is built on physical hardware.
              </Typography>
              <Typography variant="body1" sx={{ color: '#94a3b8', mb: 2, lineHeight: 1.75 }}>
                HanthanaLabs takes its name from the rugged, enduring mountain range of Hanthana in central
                Sri Lanka — a symbol of resilience, elevation, and exploration. The company was founded by four
                engineers who recognized that regional R&amp;D needed a focused physical laboratory capable of
                taking concepts all the way from initial mathematical simulation to fully fabricated, ruggedized field hardware.
              </Typography>
              <Typography variant="body1" sx={{ color: '#94a3b8', lineHeight: 1.75 }}>
                Today, our lab operates four integrated research streams: <strong>Energy</strong>,{' '}
                <strong>Electronics</strong>, <strong>Mechatronics</strong>, and{' '}
                <strong>Industrial Fabrication</strong>. Our ongoing flagship projects — our Foldable Solar
                Arrays and Autonomous UAV Systems — demonstrate our commitment to building products that serve
                both heavy-duty commercial enterprises and everyday personal users.
              </Typography>
            </Box>
          </Grid>

          {/* Core Lab Tenets */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Card
              sx={{
                height: '100%',
                backgroundColor: '#111318',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                p: { xs: 2.5, sm: 3.5 },
              }}
            >
              <Typography
                variant="overline"
                sx={{ color: '#94a3b8', display: 'block', mb: 2 }}
              >
                LABORATORY OPERATING STANDARDS
              </Typography>
              <Stack spacing={2.5}>
                {labPillars.map((p, idx) => (
                  <Box key={idx} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
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
                      {p.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: '#f8fafc', fontWeight: 600, mb: 0.3 }}
                      >
                        {p.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.5 }}
                      >
                        {p.desc}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', my: { xs: 6, md: 8 } }} />

        {/* Section Header: Founders & Notes */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="overline"
            sx={{ color: '#64748b', display: 'block', mb: 1 }}
          >
            THE LEADERSHIP TEAM
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: '#f8fafc',
              fontWeight: 700,
              fontSize: { xs: '1.6rem', md: '2.2rem' },
            }}
          >
            Founders &amp; Leadership Notes
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#94a3b8', maxWidth: 680, mx: 'auto', mt: 1.5 }}
          >
            Direct perspectives from the four co-founders on our research objectives, engineering ethics, and long-term trajectory.
          </Typography>
        </Box>

        {/* Founders Cards + Notes */}
        <Stack spacing={6}>
          {foundersList.map((founder, idx) => (
            <Card
              key={founder.name}
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
                <Grid container spacing={{ xs: 3, md: 4 }}>
                  {/* Left Column: Founder Identity & Bio */}
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Avatar
                        sx={{
                          width: 56,
                          height: 56,
                          backgroundColor: '#1a1e27',
                          color: '#f8fafc',
                          fontFamily: "'JetBrains Mono', monospace",
                          fontWeight: 600,
                          fontSize: '1.1rem',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                        }}
                      >
                        {founder.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </Avatar>
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            color: '#f8fafc',
                            fontWeight: 700,
                            fontSize: '1.25rem',
                            lineHeight: 1.2,
                          }}
                        >
                          {founder.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: '#94a3b8',
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.75rem',
                          }}
                        >
                          {founder.role}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: '6px',
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        mb: 2,
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#64748b',
                          display: 'block',
                          textTransform: 'uppercase',
                          fontSize: '0.68rem',
                          letterSpacing: '0.05em',
                          mb: 0.5,
                        }}
                      >
                        FOCUS DISCIPLINE
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: '#cbd5e1', fontSize: '0.85rem', fontWeight: 500 }}
                      >
                        {founder.discipline}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.65 }}
                    >
                      {founder.bio}
                    </Typography>
                  </Grid>

                  {/* Vertical Divider on MD+ */}
                  <Grid size={{ xs: 12, md: 8 }}>
                    <Box
                      sx={{
                        height: '100%',
                        p: { xs: 2.5, md: 3.5 },
                        borderRadius: '6px',
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                        <FormatQuoteIcon sx={{ color: '#64748b', fontSize: 20 }} />
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 700,
                            color: '#f8fafc',
                            fontSize: '0.95rem',
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {founder.noteTitle}
                        </Typography>
                      </Box>

                      {founder.noteText.map((paragraph, pIdx) => (
                        <Typography
                          key={pIdx}
                          variant="body2"
                          sx={{
                            color: '#cbd5e1',
                            fontSize: '0.9rem',
                            lineHeight: 1.7,
                            mb: pIdx < founder.noteText.length - 1 ? 1.5 : 0,
                            fontStyle: 'italic',
                          }}
                        >
                          "{paragraph}"
                        </Typography>
                      ))}

                      <Box sx={{ mt: 2, pt: 1.5, borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                        <Typography
                          variant="caption"
                          sx={{
                            color: '#64748b',
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.72rem',
                          }}
                        >
                          — {founder.name}, {founder.role}
                        </Typography>
                      </Box>
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
