import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { SectionTitle, GlowIcon } from './common';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import MemoryIcon from '@mui/icons-material/Memory';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import FactoryIcon from '@mui/icons-material/Factory';
import CheckIcon from '@mui/icons-material/Check';

const domains = [
  {
    id: 'energy',
    title: 'Energy Domain & Clean Tech',
    short: 'Energy Systems',
    icon: <SolarPowerIcon />,
    description:
      'Researching deployable photovoltaic mechanics, high-efficiency power conversion topologies, smart battery management systems (BMS), and portable off-grid energy storage.',
    points: [
      'Origami-inspired foldable solar panel mechanisms and hinges',
      'Advanced multi-stage Battery Management Systems (BMS) with thermal safety',
      'High-efficiency Maximum Power Point Tracking (MPPT) circuit design',
      'Off-grid power micro-stations and multi-voltage DC power buses',
    ],
    chips: ['Foldable Solar', 'MPPT Controllers', 'BMS Engineering', 'Power Systems'],
  },
  {
    id: 'electronics',
    title: 'Advanced Electronics & Embedded',
    short: 'Electronics R&D',
    icon: <MemoryIcon />,
    description:
      'Engineering high-density multi-layer PCBs, deterministic real-time firmware, low-power telemetry links, and multi-sensor fusion for demanding physical applications.',
    points: [
      'Multi-layer high-speed PCB layout with controlled impedance',
      'Deterministic bare-metal and RTOS firmware (ARM Cortex, ESP32, STM32)',
      'Low-power wireless telemetry links (LoRa, RF, Bluetooth Low Energy, Wi-Fi)',
      'Sensor fusion pipelines (IMU, Barometer, Magnetometer, Optical Flow)',
    ],
    chips: ['Multi-layer PCB', 'Firmware RTOS', 'Sensor Fusion', 'Wireless Telemetry'],
  },
  {
    id: 'mechatronics',
    title: 'Mechatronics & Aerial Robotics',
    short: 'Mechatronics',
    icon: <PrecisionManufacturingIcon />,
    description:
      'Integrating kinematic mechanisms, brushless motor actuation, aerodynamic modeling, and autonomous control algorithms to engineer commercial and personal UAVs.',
    points: [
      'Carbon-fiber monocoque airframe optimization and structural modeling',
      'Autonomous GPS waypoint trajectory following and fail-safe RTH systems',
      'High-efficiency brushless motor drivers (ESC) and closed-loop control',
      'Active 3-axis camera and sensor gimbal stabilization mounts',
    ],
    chips: ['Drone Aerodynamics', 'Autonomous UAV', 'Motor Control', 'Gimbal Systems'],
  },
  {
    id: 'fabrication',
    title: 'Industrial Fabrications & Solutions',
    short: 'Industrial Solutions',
    icon: <FactoryIcon />,
    description:
      'Providing turnkey physical manufacturing, rapid functional prototyping, customized testing jigs, and production-ready environmental enclosures.',
    points: [
      'Rapid prototype validation from 3D CAD modeling to physical assemblies',
      'Precision CNC milling, sheet metal stamping, and additive manufacturing',
      'Custom industrial automation jigs and automated quality-assurance benches',
      'IP67 weatherproof enclosures engineered for harsh field environments',
    ],
    chips: ['Rapid Prototyping', 'CNC Machining', 'IP67 Enclosures', 'Custom Jigs'],
  },
];

export default function Services() {
  return (
    <Box
      id="services"
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
          overline="CORE RESEARCH DOMAINS // 4 STREAMS"
          title="R&D Capabilities"
          subtitle="HanthanaLabs operates across four deeply integrated physical engineering disciplines to design, simulate, and fabricate complete electro-mechanical hardware."
        />

        <Grid container spacing={{ xs: 3, md: 3.5 }}>
          {domains.map((domain) => (
            <Grid size={{ xs: 12, md: 6 }} key={domain.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#111318',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  p: { xs: 3, sm: 3.5 },
                  transition: 'border-color 0.2s ease',
                  '&:hover': {
                    borderColor: 'rgba(255, 255, 255, 0.16)',
                  },
                }}
              >
                <Box>
                  {/* Top Bar with Icon and Label */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mb: 2.5,
                    }}
                  >
                    <GlowIcon icon={domain.icon} size="md" />
                    <Box component="span" className="tech-tag">
                      {domain.short}
                    </Box>
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h4"
                    sx={{
                      color: '#f8fafc',
                      fontWeight: 700,
                      fontSize: { xs: '1.25rem', sm: '1.4rem' },
                      letterSpacing: '-0.015em',
                      mb: 1.5,
                    }}
                  >
                    {domain.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{ color: '#94a3b8', mb: 3, lineHeight: 1.65 }}
                  >
                    {domain.description}
                  </Typography>

                  {/* Bullet Points */}
                  <Stack spacing={1.2} sx={{ mb: 3 }}>
                    {domain.points.map((pt, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2 }}>
                        <CheckIcon sx={{ fontSize: 16, color: '#64748b', mt: 0.3 }} />
                        <Typography variant="body2" sx={{ color: '#cbd5e1', fontSize: '0.86rem' }}>
                          {pt}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>

                {/* Chips */}
                <Box
                  sx={{
                    pt: 2,
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 0.8,
                  }}
                >
                  {domain.chips.map((chip, idx) => (
                    <Chip
                      key={idx}
                      label={chip}
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
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
