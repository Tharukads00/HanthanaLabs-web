import React from 'react';
import Box from '@mui/material/Box';

/**
 * Clean Icon Frame — Minimal, precision hardware aesthetic
 * Replaces glowing neon with subtle matte borders and slate tones.
 */
const sizeMap = {
  sm: { frame: 40, icon: 20 },
  md: { frame: 48, icon: 24 },
  lg: { frame: 64, icon: 32 },
};

export default function GlowIcon({ icon, size = 'md' }) {
  const dims = sizeMap[size] || sizeMap.md;

  return (
    <Box
      sx={{
        width: dims.frame,
        height: dims.frame,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'border-color 0.2s ease, background-color 0.2s ease',
        '&:hover': {
          borderColor: 'rgba(255, 255, 255, 0.2)',
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
        },
      }}
    >
      {React.cloneElement(icon, {
        sx: {
          fontSize: dims.icon,
          color: '#f8fafc',
          ...icon.props?.sx,
        },
      })}
    </Box>
  );
}
