import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { SectionTitle } from './common';
import GavelIcon from '@mui/icons-material/Gavel';
import ShieldIcon from '@mui/icons-material/Shield';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import LockIcon from '@mui/icons-material/Lock';

const policySections = [
  {
    id: 'rd-terms',
    label: 'R&D Terms of Service',
    icon: <GavelIcon sx={{ fontSize: 18 }} />,
    title: 'Research & Development Engagement Terms',
    effectiveDate: 'Effective Date: November 2026 // Version 2.1',
    clauses: [
      {
        heading: '1. Scope of Custom Engineering Engagements',
        body: 'All research, prototyping, and engineering feasibility studies conducted by HanthanaLabs ("the Laboratory") are defined under bespoke Statement of Work (SOW) documents. The Laboratory develops functional physical proofs-of-concept (PoC), alpha/beta engineering units, and pre-production hardware assemblies according to client-approved engineering specifications.',
      },
      {
        heading: '2. Iterative Milestones & Technical Acceptance',
        body: 'Physical mechatronic and electronic development is executed in iterative milestones: (a) Mathematical Modelling & Schematic Design, (b) Simulation & PCB/CAD Layout, (c) Physical Assembly & Bench Testing, and (d) Field Validation & Telemetry Delivery. Client acceptance is documented in writing upon successful demonstration of milestone acceptance criteria.',
      },
      {
        heading: '3. Prototype Warranty & Operational Limits',
        body: 'Deliverables marked as "Prototype", "Alpha Unit", or "Experimental Apparatus" are engineered for research, evaluation, and design qualification. While HanthanaLabs adheres to rigorous IPC-A-610 electronic assembly and ISO mechanical standards, experimental prototypes must not be operated outside the mutually agreed operating envelope specified in the technical handover manual.',
      },
      {
        heading: '4. Limitation of Liability',
        body: 'In no event shall HanthanaLabs or its founders be held liable for secondary or consequential damages arising from the unapproved field deployment or modification of prototype hardware. Maximum financial liability is strictly capped at the total fees received under the relevant SOW.',
      },
    ],
  },
  {
    id: 'ip-policy',
    label: 'Intellectual Property (IP)',
    icon: <ShieldIcon sx={{ fontSize: 18 }} />,
    title: 'Client Intellectual Property & Confidentiality Policy',
    effectiveDate: 'Strict NDA & Ownership Transfer Standard',
    clauses: [
      {
        heading: '1. 100% Client Ownership of Custom Foreground IP',
        body: 'Upon receipt of final milestone compensation, all Foreground Intellectual Property generated specifically for the client — including proprietary schematics, PCB Gerber files, CAD solid models, firmware source code, and bill of materials (BOM) — is assigned exclusively to the client without ongoing royalty claims.',
      },
      {
        heading: '2. Background Intellectual Property',
        body: 'HanthanaLabs retains ownership of its pre-existing core R&D platforms, modular internal firmware libraries, and proprietary fabrication jigs ("Background IP"). Where Background IP is embedded in a client deliverable, the client is granted a perpetual, non-exclusive, irrevocable, royalty-free license to use and commercialize such IP.',
      },
      {
        heading: '3. Mutual Non-Disclosure Agreement (NDA)',
        body: 'All technical drawings, business plans, performance targets, and test datasets exchanged between client and HanthanaLabs are treated as strictly confidential. Lab access is restricted, and team members operate under binding non-disclosure agreements.',
      },
    ],
  },
  {
    id: 'drone-safety',
    label: 'Drone & Aviation Safety',
    icon: <FlightTakeoffIcon sx={{ fontSize: 18 }} />,
    title: 'Autonomous UAV & Flight Testing Standards',
    effectiveDate: 'Civil Aviation & Operational Safety Compliance',
    clauses: [
      {
        heading: '1. Flight Test Corridors & Geofencing',
        body: 'All outdoor flight testing of commercial and personal drone platforms is conducted strictly within authorized rural test corridors in central Sri Lanka. Flight controllers are hard-programmed with virtual geofences, maximum altitude ceilings (120m AGL), and automated return-to-home (RTH) failsafes upon telemetry loss or low battery voltage.',
      },
      {
        heading: '2. Regulatory Compliance',
        body: 'Our airframes, telemetry frequencies (2.4 GHz / 5.8 GHz / 915 MHz), and pilot procedures comply with applicable Civil Aviation Authority regulations. Prototypes undergo structural drop-impact simulation and motor thrust-loss redundancy testing prior to outdoor aerial operations.',
      },
      {
        heading: '3. Lithium Battery Transport & Storage',
        body: 'High-capacity LiPo / Li-ion battery packs utilized in drone flight testing are stored in flame-retardant enclosures at controlled temperatures (18°C – 22°C) and shipped under UN38.3 hazardous materials transportation compliance standards.',
      },
    ],
  },
  {
    id: 'solar-energy',
    label: 'Energy & Electrical Safety',
    icon: <SolarPowerIcon sx={{ fontSize: 18 }} />,
    title: 'Solar System & Electrical Safety Protocols',
    effectiveDate: 'High-Voltage DC & Environmental Standards',
    clauses: [
      {
        heading: '1. High-Voltage DC & Reverse Polarity Protection',
        body: 'Foldable solar system prototypes and MPPT power stages are engineered with reverse-polarity blocking diodes, over-voltage clamping, and short-circuit protection at the hardware silicon level to prevent electric shock or equipment damage during field connection.',
      },
      {
        heading: '2. Weatherproofing & IP67 Environmental Testing',
        body: 'Our foldable solar arrays and battery enclosures undergo rigorous ingress protection validation, including dust-tight particulate testing and continuous water spray / immersion testing to certify an IP67 rating for demanding commercial and outdoor expedition use.',
      },
      {
        heading: '3. Thermal Runaway Mitigation in Battery Storage',
        body: 'Custom Battery Management Systems (BMS) integrate multi-point NTC thermistor monitoring, individual cell balance balancing, and hardware-level MOSFET disconnects to guarantee zero thermal runaway during rapid solar charging under tropical ambient conditions.',
      },
    ],
  },
  {
    id: 'privacy',
    label: 'Privacy & Telemetry',
    icon: <LockIcon sx={{ fontSize: 18 }} />,
    title: 'Data Privacy & Prototype Telemetry Policy',
    effectiveDate: 'Zero Data Broker Monetization Standard',
    clauses: [
      {
        heading: '1. Diagnostic Telemetry Only',
        body: 'Telemetry logs recorded during prototype testing (e.g. solar yield logs, flight gyroscope data, motor temperature logs) are stored exclusively on secure local lab servers for performance tuning and verification. We never sell, lease, or monetize client or prototype data.',
      },
      {
        heading: '2. Website Inquiry Confidentiality',
        body: 'Inquiries submitted through the HanthanaLabs website are encrypted in transit and accessible solely to authorized executive and engineering leads. We do not engage third-party marketing tracking cookies.',
      },
    ],
  },
];

export default function TermsAndPolicies() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const currentPolicy = policySections[selectedTab];

  return (
    <Box
      id="policies"
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
          overline="GOVERNANCE & COMPLIANCE // HANTHANALABS"
          title="Terms & Operating Policies"
          subtitle="Transparent operating guidelines governing intellectual property, research engagements, aviation compliance, and clean energy safety."
        />

        {/* Policy Navigation Tabs */}
        <Box
          sx={{
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            mb: 5,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: '#ffffff',
                height: 2,
              },
              '& .MuiTab-root': {
                color: '#64748b',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: '0.875rem',
                textTransform: 'none',
                minHeight: 48,
                px: { xs: 2, sm: 3 },
                transition: 'color 0.2s ease',
                '&.Mui-selected': {
                  color: '#f8fafc',
                },
                '&:hover': {
                  color: '#cbd5e1',
                },
              },
            }}
          >
            {policySections.map((item, idx) => (
              <Tab
                key={item.id}
                icon={item.icon}
                iconPosition="start"
                label={item.label}
              />
            ))}
          </Tabs>
        </Box>

        {/* Selected Policy Content */}
        <Card
          sx={{
            backgroundColor: '#111318',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '8px',
            p: { xs: 3, sm: 4, md: 5 },
          }}
        >
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="overline"
              sx={{ color: '#64748b', display: 'block', mb: 1 }}
            >
              {currentPolicy.effectiveDate}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: '#f8fafc',
                fontWeight: 700,
                fontSize: { xs: '1.4rem', sm: '1.8rem' },
                lineHeight: 1.3,
              }}
            >
              {currentPolicy.title}
            </Typography>
          </Box>

          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', mb: 4 }} />

          <Stack spacing={4}>
            {currentPolicy.clauses.map((clause, cIdx) => (
              <Box key={cIdx}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: '#f8fafc',
                    fontWeight: 600,
                    fontSize: '1rem',
                    mb: 1,
                  }}
                >
                  {clause.heading}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#94a3b8',
                    lineHeight: 1.75,
                    fontSize: '0.9rem',
                  }}
                >
                  {clause.body}
                </Typography>
              </Box>
            ))}
          </Stack>

          <Box
            sx={{
              mt: 5,
              pt: 3,
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'center' },
              gap: 1.5,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: '#64748b',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.72rem',
              }}
            >
              LEGAL INQUIRIES // legal@hanthanalabs.com
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#64748b',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.72rem',
              }}
            >
              HANTHANALABS R&amp;D GOVERNANCE // SRI LANKA
            </Typography>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
