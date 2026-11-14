import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

/**
 * Clean Card Component
 * Minimalist, high contrast, subtle border hover.
 */
export default function AnimatedCard({
  children,
  sx = {},
  contentSx = {},
  ...rest
}) {
  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        backgroundColor: '#111318',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '8px',
        transition: 'border-color 0.2s ease, background-color 0.2s ease',
        '&:hover': {
          borderColor: 'rgba(255, 255, 255, 0.18)',
          backgroundColor: '#15181f',
        },
        ...sx,
      }}
      {...rest}
    >
      <CardContent sx={{ p: { xs: 3, md: 3.5 }, ...contentSx }}>
        {children}
      </CardContent>
    </Card>
  );
}
