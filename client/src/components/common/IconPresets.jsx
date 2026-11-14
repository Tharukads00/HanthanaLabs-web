/**
 * HanthanaLabs Clean Icon Presets
 * Pre-configured clean icons for domains and technical sections.
 */

import React from 'react';
import GlowIcon from './GlowIcon';

// MUI Icons
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import MemoryIcon from '@mui/icons-material/Memory';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import FactoryIcon from '@mui/icons-material/Factory';
import FlightIcon from '@mui/icons-material/Flight';
import BoltIcon from '@mui/icons-material/Bolt';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

// ── Domain Icons ──────────────────────────────────────────────────
export const EnergyIcon = (props) => (
  <GlowIcon icon={<SolarPowerIcon />} {...props} />
);

export const ElectronicsIcon = (props) => (
  <GlowIcon icon={<MemoryIcon />} {...props} />
);

export const MechatronicsIcon = (props) => (
  <GlowIcon icon={<PrecisionManufacturingIcon />} {...props} />
);

export const FabricationIcon = (props) => (
  <GlowIcon icon={<FactoryIcon />} {...props} />
);

// ── Project Icons ────────────────────────────────────────────────
export const SolarProjectIcon = (props) => (
  <GlowIcon icon={<SolarPowerIcon />} size="lg" {...props} />
);

export const DroneProjectIcon = (props) => (
  <GlowIcon icon={<FlightIcon />} size="lg" {...props} />
);

// ── Accent Icons ─────────────────────────────────────────────────
export const PowerIcon = (props) => (
  <GlowIcon icon={<BoltIcon />} {...props} />
);

export const InnovationIcon = (props) => (
  <GlowIcon icon={<RocketLaunchIcon />} {...props} />
);

export const EngineeringIcon = (props) => (
  <GlowIcon icon={<SettingsSuggestIcon />} {...props} />
);

export {
  SolarPowerIcon,
  MemoryIcon,
  PrecisionManufacturingIcon,
  FactoryIcon,
  FlightIcon,
  BoltIcon,
  SettingsSuggestIcon,
  RocketLaunchIcon,
  EmailIcon,
  LocationOnIcon,
  PhoneIcon,
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
};
