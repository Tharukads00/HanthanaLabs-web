import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * SectionTitle — Architectural, clean layout
 */
export default function SectionTitle({
  overline,
  title,
  subtitle,
  align = 'center',
}) {
  return (
    <Box
      sx={{
        textAlign: align,
        mb: { xs: 6, md: 8 },
        maxWidth: align === 'center' ? 760 : '100%',
        mx: align === 'center' ? 'auto' : 0,
      }}
    >
      {overline && (
        <Typography
          variant="overline"
          sx={{
            display: 'block',
            color: '#94a3b8',
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            mb: 1.5,
          }}
        >
          {overline}
        </Typography>
      )}

      <Typography
        variant="h2"
        component="h2"
        sx={{
          color: '#f8fafc',
          fontSize: { xs: '1.75rem', sm: '2.2rem', md: '2.6rem' },
          fontWeight: 700,
          letterSpacing: '-0.025em',
          lineHeight: 1.18,
          mb: subtitle ? 2 : 0,
        }}
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography
          variant="subtitle1"
          sx={{
            color: '#94a3b8',
            fontSize: { xs: '0.95rem', md: '1.05rem' },
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
