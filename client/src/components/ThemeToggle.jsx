import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Sun, Moon } from 'lucide-react';
import { useColorMode } from '../theme';

/**
 * Apple-inspired Day / Night Mode Toggle
 * Clean, tactile, and accessible switch between Day (Light) and Night (Dark) mode.
 */
export default function ThemeToggle({ size = 'medium', showLabel = false }) {
  const { mode, isDark, toggleColorMode } = useColorMode();

  return (
    <Tooltip title={isDark ? 'Switch to Day mode' : 'Switch to Night mode'} arrow>
      <IconButton
        onClick={toggleColorMode}
        aria-label={isDark ? 'Switch to Day mode' : 'Switch to Night mode'}
        sx={{
          width: size === 'small' ? 34 : 38,
          height: size === 'small' ? 34 : 38,
          borderRadius: '999px',
          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
          border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.08)',
          color: isDark ? '#f5f5f7' : '#1d1d1f',
          transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&:hover': {
            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.16)' : 'rgba(0, 0, 0, 0.08)',
            transform: 'scale(1.05)',
          },
          '&:active': {
            transform: 'scale(0.95)',
          },
        }}
      >
        {isDark ? (
          <Sun size={size === 'small' ? 16 : 18} strokeWidth={1.8} />
        ) : (
          <Moon size={size === 'small' ? 16 : 18} strokeWidth={1.8} />
        )}
        {showLabel && (
          <Box
            component="span"
            sx={{
              ml: 1,
              fontSize: '0.82rem',
              fontWeight: 500,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {isDark ? 'Day Mode' : 'Night Mode'}
          </Box>
        )}
      </IconButton>
    </Tooltip>
  );
}
