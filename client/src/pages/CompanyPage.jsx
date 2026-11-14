import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { 
  Shield, 
  FileText, 
  Plane, 
  Sun, 
  Lock, 
  Compass, 
  Wrench
} from 'lucide-react';
import { useColorMode } from '../theme';

const founders = [
  {
    name: 'Tharuka De Silva',
    role: 'Chief Executive Officer',
    badge: 'CEO & Co-Founder',
    discipline: 'Systems Architecture & Technical Strategy',
    bio: 'Tharuka leads organizational direction, commercial partnerships, and multidisciplinary research roadmaps at HanthanaLabs. With a foundational background in cross-domain systems engineering, he unites mechanical, electronic, and software specialists into a fast-turnaround hardware laboratory. Under his direction, HanthanaLabs prioritizes deployable physical prototypes over theoretical exercises.',
    noteHeading: 'Letter from the CEO',
    noteSubtitle: 'The Imperative of Physical Innovation',
    noteText: [
      'In an era dominated by software and virtual products, it is easy to forget that the physical world is where civilization actually functions. Real energy must be harvested from real sunlight, and physical objects must navigate aerodynamic turbulence.',
      'We founded HanthanaLabs with an uncompromising commitment to physical execution. We don\'t measure our progress through marketing slide decks or software simulations alone. We measure it by the mechanical fatigue tolerance of our solar hinges after thousands of cycles, the thermal stability of our motor controllers under continuous load, and the field reliability of our autonomous flight systems.',
      'Our door is always open to enterprises, researchers, and partners who share our respect for tangible engineering.',
    ],
  },
  {
    name: 'Kevin Dawson',
    role: 'President',
    badge: 'President & Co-Founder',
    discipline: 'Operations, Precision Fabrication & Quality Assurance',
    bio: 'Kevin manages the laboratory\'s fabrication infrastructure, supply chain relationships, and quality management protocols. With extensive experience in precision tooling, CNC machining, and production tolerances, he ensures that concepts designed in 3D CAD transition into robust, repeatable physical hardware without losing fidelity.',
    noteHeading: 'Letter from the President',
    noteSubtitle: 'The Discipline of Execution',
    noteText: [
      'An elegant schematic or a beautiful 3D render is only the hypothesis. The real engineering happens on the granite inspection table and the environmental test bench.',
      'When tolerance stack-ups challenge your mechanical linkages or when real ambient heat exceeds simulation bounds, operational rigor is what separates a toy from an industrial tool. At HanthanaLabs, our goal is to build hardware that our clients can deploy in the field with total confidence.',
    ],
  },
  {
    name: 'Lahiru Herath',
    role: 'Vice President, Mechatronics',
    badge: 'VP Mechatronics & Co-Founder',
    discipline: 'Kinematics, UAV Aerodynamics & Flight Autonomy',
    bio: 'Lahiru heads the mechatronics and robotics research stream, overseeing aerodynamic modeling, structural carbon-fiber optimization, motor actuation, and autonomous flight controller algorithms. He is the principal architect of HanthanaLabs\' commercial and personal drone platforms.',
    noteHeading: 'Letter from VP Mechatronics',
    noteSubtitle: 'Confronting Aerodynamic Realities',
    noteText: [
      'Aerial robotics offers zero room for compromise. Gravity and wind shear expose every vibration flaw, every gram of excess mass, and every microsecond of actuator latency.',
      'We designed our drone architecture around a dual premise: heavy-duty commercial utility and intuitive, refined personal handling. By isolating our sensor payload mounts from frame resonance and engineering low-latency deterministic firmware, we deliver an aerial platform that operates as reliably during industrial infrastructure surveys as it does during high-speed personal cinematography.',
    ],
  },
  {
    name: 'Chathuni',
    role: 'Vice President, Energy & Electronics',
    badge: 'VP Energy & Electronics & Co-Founder',
    discipline: 'Power Electronics, Photovoltaics & Embedded Systems',
    bio: 'Chathuni directs research into clean energy generation, deployable solar architectures, intelligent battery management systems (BMS), and multi-layer high-speed electronic circuit boards. She is the lead designer behind the electrical architecture of the Foldable Solar System.',
    noteHeading: 'Letter from VP Energy',
    noteSubtitle: 'Decentralized Energy, Anywhere on Earth',
    noteText: [
      'Solar energy is universally available, but our tools for harvesting it on the move have historically been inadequate. Bulky glass panels cannot be easily transported to emergency sites, and fragile flexible films degrade rapidly under intense tropical sun.',
      'Our Foldable Solar System is engineered to eliminate that dilemma. By pairing high-yield monocrystalline silicon with durable composite hinges and an on-board smart MPPT controller, we deliver lightweight, dependable power for disaster response, commercial field deployments, and personal off-grid living.',
    ],
  },
];

const policyTabs = [
  {
    id: 'rd-terms',
    label: 'R&D Engagement Terms',
    icon: <FileText size={16} />,
    title: 'Research & Development Engagement Terms',
    date: 'Version 2.4 // HanthanaLabs Engineering Governance',
    sections: [
      {
        title: '1. Statement of Work & Prototype Milestones',
        content: 'All custom mechatronic, electronic, or power hardware developed by HanthanaLabs is governed by bespoke Statements of Work (SOW). Projects advance through formal validation gates: (a) Architectural Concept & Feasibility, (b) Schematic Design & 3D CAD Modeling, (c) Physical Assembly & In-House Bench Testing, and (d) Final Demonstration & Telemetry Delivery.',
      },
      {
        title: '2. Prototyping Standards & Operating Envelope',
        content: 'Deliverables classified as "Prototype" or "Pre-Production Unit" are engineered to industrial standards (IPC-A-610 for electronics, ISO precision tolerances for mechanical parts). Prototypes must be operated within the defined operating parameters provided in the accompanying technical documentation.',
      },
      {
        title: '3. Acceptance & Warranty',
        content: 'Upon demonstration of milestone acceptance criteria in our lab or field test corridor, the client verifies functional compliance. HanthanaLabs provides 90-day technical support for all custom firmware and electronic hardware delivered.',
      },
    ],
  },
  {
    id: 'ip-ownership',
    label: 'Intellectual Property (IP)',
    icon: <Shield size={16} />,
    title: 'Client Intellectual Property & Confidentiality Policy',
    date: '100% Client Ownership Standard for Custom Hardware',
    sections: [
      {
        title: '1. Complete Transfer of Custom Foreground IP',
        content: 'Upon completion of milestone compensation, 100% of all Foreground Intellectual Property generated specifically for the client — including electrical schematics, PCB Gerber layouts, 3D CAD step files, embedded firmware binaries and source code — is transferred exclusively to the client.',
      },
      {
        title: '2. Background Technology Licensing',
        content: 'Where HanthanaLabs incorporates proprietary internal modular firmware drivers or baseline fabrication jigs ("Background IP"), the client receives a perpetual, worldwide, irrevocable, royalty-free license to commercialize and distribute the resulting product.',
      },
      {
        title: '3. Mutual Non-Disclosure Agreement (NDA)',
        content: 'All proprietary CAD files, client market strategies, sensor specifications, and test data are treated as strictly confidential under binding bilateral Non-Disclosure Agreements.',
      },
    ],
  },
  {
    id: 'drone-aviation',
    label: 'UAV Aviation Compliance',
    icon: <Plane size={16} />,
    title: 'Drone & Aviation Safety Compliance Standards',
    date: 'Civil Aviation & Field Flight Safety Protocols',
    sections: [
      {
        title: '1. Flight Corridors & Geofencing',
        content: 'All outdoor flight testing of our commercial and personal drone platforms occurs exclusively within authorized test corridors in central Sri Lanka. Flight controllers are hard-programmed with altitude ceilings (120m AGL), virtual geofences, and autonomous return-to-home (RTH) protocols upon telemetry loss.',
      },
      {
        title: '2. Redundancy & Fail-Safe Mechanisms',
        content: 'Our UAV platforms utilize dual-frequency telemetry, low-voltage auto-landing sequences, and structural drop-impact simulation to eliminate risks during field operations.',
      },
      {
        title: '3. Lithium Battery Safety Protocols',
        content: 'High-energy drone battery packs undergo UN38.3 vibration and thermal testing, and are stored in fire-resistant climate-controlled enclosures.',
      },
    ],
  },
  {
    id: 'solar-safety',
    label: 'Solar & Electrical Safety',
    icon: <Sun size={16} />,
    title: 'Clean Energy & Electrical Safety Standards',
    date: 'High-Voltage DC & Environmental Ingress Standards',
    sections: [
      {
        title: '1. Silicon-Level Circuit Protection',
        content: 'Our foldable solar arrays and battery charging stages incorporate reverse-polarity protection diodes, transient voltage suppression, and short-circuit protection at the hardware level.',
      },
      {
        title: '2. IP67 Weatherproofing Validation',
        content: 'Every solar assembly undergoes environmental chamber testing, including dust-tight particulate exposure and pressurized water immersion to certify full IP67 environmental durability.',
      },
      {
        title: '3. Thermal Runaway Mitigation',
        content: 'Our smart Battery Management Systems (BMS) integrate multi-point temperature sensors with hardware-level cutoff switches to prevent thermal runaway even under high tropical solar irradiance.',
      },
    ],
  },
  {
    id: 'telemetry-privacy',
    label: 'Data Privacy & Telemetry',
    icon: <Lock size={16} />,
    title: 'Data Privacy & Diagnostics Policy',
    date: 'Zero Data Broker Standard // Pure Technical Diagnostics',
    sections: [
      {
        title: '1. Engineering Diagnostics Only',
        content: 'Telemetry data collected during prototype flights or solar testing is used exclusively by our engineering team to tune algorithms and verify hardware efficiency. We do not monetize or share operational data with any third party.',
      },
      {
        title: '2. Secure Local Storage',
        content: 'All client project files, firmware source code, and telemetry logs are encrypted and maintained on secure local laboratory storage systems.',
      },
    ],
  },
];

export default function CompanyPage() {
  const [activePolicyTab, setActivePolicyTab] = useState(0);
  const location = useLocation();
  const { isDark } = useColorMode();

  useEffect(() => {
    if (location.hash === '#policies') {
      const el = document.getElementById('policies');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <Box
      sx={{
        pt: { xs: 14, md: 18 },
        pb: 16,
        backgroundColor: 'background.default',
        color: 'text.primary',
        transition: 'background-color 0.25s ease, color 0.25s ease',
      }}
    >
      <Container maxWidth="lg">
        {/* Editorial Page Hero */}
        <Box sx={{ maxWidth: 840, mx: 'auto', textAlign: 'center', mb: { xs: 10, md: 14 } }}>
          <Box sx={{ mb: 2 }}>
            <Box component="span" className="apple-pill">
              COMPANY OVERVIEW &amp; LEADERSHIP
            </Box>
          </Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.6rem', sm: '3.8rem', md: '4.6rem' },
              fontWeight: 800,
              letterSpacing: '-0.035em',
              lineHeight: 1.08,
              color: isDark ? '#f5f5f7' : '#1d1d1f',
              mb: 3,
            }}
          >
            Inside HanthanaLabs.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: { xs: '1.1rem', sm: '1.3rem' },
              color: isDark ? '#a1a1a6' : '#515154',
              lineHeight: 1.6,
              maxWidth: 700,
              mx: 'auto',
            }}
          >
            A dedicated applied research and development laboratory in Sri Lanka.
            Bridging theoretical physics, mechanical kinematics, and silicon engineering to build hardware that endures.
          </Typography>
        </Box>

        {/* Editorial Story / Laboratory Heritage */}
        <Box
          sx={{
            p: { xs: 3.5, sm: 5, md: 6 },
            borderRadius: '20px',
            backgroundColor: isDark ? '#141418' : '#f5f5f7',
            border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
            mb: { xs: 10, md: 14 },
            transition: 'all 0.25s ease',
          }}
        >
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="overline"
                sx={{
                  color: isDark ? '#6e6e73' : '#86868b',
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  display: 'block',
                  mb: 1.5,
                }}
              >
                OUR HERITAGE
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.6rem', sm: '2rem' },
                  fontWeight: 700,
                  letterSpacing: '-0.025em',
                  color: isDark ? '#f5f5f7' : '#1d1d1f',
                  lineHeight: 1.25,
                  mb: 2.5,
                }}
              >
                Born from the rugged highlands of central Sri Lanka.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: isDark ? '#a1a1a6' : '#515154', lineHeight: 1.75, mb: 2, fontSize: '0.95rem' }}
              >
                HanthanaLabs draws its name and resolve from the Hanthana mountain range — a landscape renowned for its resilience, elevation, and demanding terrain. Founded by four engineers, our laboratory was established with a singular focus: to prove that high-performance physical hardware can be researched, prototyped, and brought to life locally with world-class precision.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: isDark ? '#a1a1a6' : '#515154', lineHeight: 1.75, fontSize: '0.95rem' }}
              >
                Rather than treating hardware as an afterthought to software, we approach every challenge through mechanical kinematics, power thermodynamics, and deterministic firmware.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  p: 3.5,
                  borderRadius: '16px',
                  backgroundColor: isDark ? '#1a1a22' : '#ffffff',
                  border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: isDark ? 'none' : '0 2px 10px rgba(0, 0, 0, 0.02)',
                  transition: 'all 0.25s ease',
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: isDark ? '#f5f5f7' : '#1d1d1f',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    letterSpacing: '0.08em',
                    display: 'block',
                    mb: 2.5,
                  }}
                >
                  LABORATORY PILLARS
                </Typography>
                <Stack spacing={2.5}>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Compass size={20} color={isDark ? '#2997ff' : '#0071e3'} style={{ marginTop: 2, flexShrink: 0 }} />
                    <Box>
                      <Typography variant="subtitle2" sx={{ color: isDark ? '#f5f5f7' : '#1d1d1f', fontWeight: 600 }}>
                        First-Principles Engineering
                      </Typography>
                      <Typography variant="body2" sx={{ color: isDark ? '#a1a1a6' : '#515154', fontSize: '0.85rem' }}>
                        Deriving solutions from physical fundamentals rather than assembling generic off-the-shelf modules.
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Wrench size={20} color={isDark ? '#2997ff' : '#0071e3'} style={{ marginTop: 2, flexShrink: 0 }} />
                    <Box>
                      <Typography variant="subtitle2" sx={{ color: isDark ? '#f5f5f7' : '#1d1d1f', fontWeight: 600 }}>
                        Integrated Prototyping Facility
                      </Typography>
                      <Typography variant="body2" sx={{ color: isDark ? '#a1a1a6' : '#515154', fontSize: '0.85rem' }}>
                        High-density SMD assembly, precision CNC machining, and composite curing in one coordinated workflow.
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Shield size={20} color={isDark ? '#2997ff' : '#0071e3'} style={{ marginTop: 2, flexShrink: 0 }} />
                    <Box>
                      <Typography variant="subtitle2" sx={{ color: isDark ? '#f5f5f7' : '#1d1d1f', fontWeight: 600 }}>
                        100% Client Intellectual Property
                      </Typography>
                      <Typography variant="body2" sx={{ color: isDark ? '#a1a1a6' : '#515154', fontSize: '0.85rem' }}>
                        Every custom schematic, CAD solid model, and firmware binary belongs completely to the client.
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Section Header: Founders & Personal Letters */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Box component="span" className="apple-pill" sx={{ mb: 1.5 }}>
            FOUNDING LEADERSHIP
          </Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.8rem' },
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: isDark ? '#f5f5f7' : '#1d1d1f',
              mb: 1.5,
            }}
          >
            The Founders &amp; Executive Notes.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: isDark ? '#a1a1a6' : '#515154', maxWidth: 620, mx: 'auto', fontSize: '1rem' }}
          >
            Direct perspectives from the four co-founders on our engineering philosophy, our active projects, and our vision for HanthanaLabs.
          </Typography>
        </Box>

        {/* Founders Profiles & Letters */}
        <Stack spacing={6} sx={{ mb: { xs: 12, md: 16 } }}>
          {founders.map((founder) => (
            <Box
              key={founder.name}
              sx={{
                p: { xs: 3.5, sm: 5, md: 6 },
                borderRadius: '20px',
                backgroundColor: isDark ? '#141418' : '#ffffff',
                border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: isDark ? 'none' : '0 2px 14px rgba(0, 0, 0, 0.03)',
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.25s ease',
                '&:hover': {
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.16)',
                },
              }}
            >
              <Grid container spacing={{ xs: 4, md: 6 }}>
                {/* Left Column: Identity & Bio */}
                <Grid size={{ xs: 12, md: 4.5 }}>
                  <Box sx={{ mb: 2.5 }}>
                    <Box component="span" className="apple-pill" sx={{ mb: 1.5 }}>
                      {founder.badge}
                    </Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: { xs: '1.6rem', sm: '1.9rem' },
                        fontWeight: 700,
                        letterSpacing: '-0.025em',
                        color: isDark ? '#f5f5f7' : '#1d1d1f',
                        lineHeight: 1.15,
                        mb: 0.5,
                      }}
                    >
                      {founder.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: isDark ? '#6e6e73' : '#86868b', fontWeight: 500, fontSize: '0.85rem' }}
                    >
                      {founder.discipline}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{ color: isDark ? '#a1a1a6' : '#515154', lineHeight: 1.7, fontSize: '0.9rem' }}
                  >
                    {founder.bio}
                  </Typography>
                </Grid>

                {/* Right Column: Founder's Note (Apple Editorial Letter) */}
                <Grid size={{ xs: 12, md: 7.5 }}>
                  <Box
                    sx={{
                      p: { xs: 3, sm: 4 },
                      borderRadius: '16px',
                      backgroundColor: isDark ? '#191920' : '#f5f5f7',
                      border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.06)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    <Box>
                      <Typography
                        variant="overline"
                        sx={{
                          color: isDark ? '#6e6e73' : '#86868b',
                          fontWeight: 600,
                          fontSize: '0.72rem',
                          letterSpacing: '0.08em',
                          display: 'block',
                          mb: 0.5,
                        }}
                      >
                        {founder.noteHeading}
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: '1.15rem',
                          fontWeight: 700,
                          color: isDark ? '#f5f5f7' : '#1d1d1f',
                          letterSpacing: '-0.015em',
                          mb: 2.5,
                        }}
                      >
                        "{founder.noteSubtitle}"
                      </Typography>

                      <Stack spacing={2}>
                        {founder.noteText.map((p, pIdx) => (
                          <Typography
                            key={pIdx}
                            variant="body2"
                            sx={{
                              color: isDark ? '#c8c8cf' : '#424245',
                              lineHeight: 1.75,
                              fontSize: '0.9rem',
                            }}
                          >
                            {p}
                          </Typography>
                        ))}
                      </Stack>
                    </Box>

                    <Box sx={{ mt: 3, pt: 2, borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)' }}>
                      <Typography
                        variant="caption"
                        sx={{
                          color: isDark ? '#6e6e73' : '#86868b',
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.75rem',
                          fontWeight: 500,
                        }}
                      >
                        — {founder.name}, {founder.role}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Stack>

        <Divider sx={{ borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)', my: { xs: 8, md: 12 } }} />

        {/* Section: Company Terms & Policies */}
        <Box id="policies" sx={{ scrollMarginTop: 90 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Box component="span" className="apple-pill" sx={{ mb: 1.5 }}>
              LEGAL &amp; COMPLIANCE
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', sm: '2.8rem' },
                fontWeight: 700,
                letterSpacing: '-0.03em',
                color: isDark ? '#f5f5f7' : '#1d1d1f',
                mb: 1.5,
              }}
            >
              Company Terms &amp; Policies.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: isDark ? '#a1a1a6' : '#515154', maxWidth: 620, mx: 'auto', fontSize: '1rem' }}
            >
              Transparent operating policies governing research engagements, client intellectual property, flight aviation safety, and power electronics validation.
            </Typography>
          </Box>

          {/* Clean Segmented Tab Navigation */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
              mb: 5,
            }}
          >
            <Tabs
              value={activePolicyTab}
              onChange={(e, val) => setActivePolicyTab(val)}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              sx={{
                '& .MuiTabs-indicator': {
                  backgroundColor: isDark ? '#f5f5f7' : '#1d1d1f',
                  height: 2,
                },
                '& .MuiTab-root': {
                  color: isDark ? '#6e6e73' : '#86868b',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  textTransform: 'none',
                  minHeight: 48,
                  px: 2.5,
                  transition: 'color 0.2s ease',
                  '&.Mui-selected': {
                    color: isDark ? '#f5f5f7' : '#1d1d1f',
                    fontWeight: 600,
                  },
                },
              }}
            >
              {policyTabs.map((tab) => (
                <Tab
                  key={tab.id}
                  icon={tab.icon}
                  iconPosition="start"
                  label={tab.label}
                />
              ))}
            </Tabs>
          </Box>

          {/* Active Policy Content Card */}
          <Box
            sx={{
              p: { xs: 3.5, sm: 5, md: 6 },
              borderRadius: '20px',
              backgroundColor: isDark ? '#141418' : '#f5f5f7',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
              transition: 'all 0.25s ease',
            }}
          >
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="overline"
                sx={{
                  color: isDark ? '#6e6e73' : '#86868b',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.75rem',
                  letterSpacing: '0.06em',
                  display: 'block',
                  mb: 1,
                }}
              >
                {policyTabs[activePolicyTab].date}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: isDark ? '#f5f5f7' : '#1d1d1f',
                  fontWeight: 700,
                  fontSize: { xs: '1.4rem', sm: '1.8rem' },
                  letterSpacing: '-0.02em',
                }}
              >
                {policyTabs[activePolicyTab].title}
              </Typography>
            </Box>

            <Divider sx={{ borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)', mb: 4 }} />

            <Stack spacing={4}>
              {policyTabs[activePolicyTab].sections.map((sec, sIdx) => (
                <Box key={sIdx}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: isDark ? '#f5f5f7' : '#1d1d1f',
                      fontWeight: 600,
                      fontSize: '1rem',
                      mb: 1,
                    }}
                  >
                    {sec.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? '#a1a1a6' : '#515154',
                      lineHeight: 1.75,
                      fontSize: '0.9rem',
                    }}
                  >
                    {sec.content}
                  </Typography>
                </Box>
              ))}
            </Stack>

            <Box
              sx={{
                mt: 6,
                pt: 3,
                borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', sm: 'center' },
                gap: 2,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: isDark ? '#6e6e73' : '#86868b',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.75rem',
                }}
              >
                LEGAL INQUIRIES // legal@hanthanalabs.com
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: isDark ? '#6e6e73' : '#86868b',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.75rem',
                }}
              >
                HANTHANALABS R&amp;D GOVERNANCE // SRI LANKA
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
