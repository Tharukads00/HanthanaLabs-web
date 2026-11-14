import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// ═══════════════════════════════════════════════════════════════════
// HanthanaLabs — Day & Night Responsive Design System
// Minimalist, high-legibility, hardware-focused Apple aesthetic.
// ═══════════════════════════════════════════════════════════════════

export const lightTokens = {
  canvas: '#ffffff',
  surface: '#ffffff',
  surfaceSubtle: '#f5f5f7',
  surfaceHover: '#fafafa',

  border: 'rgba(0, 0, 0, 0.08)',
  borderHover: 'rgba(0, 0, 0, 0.18)',

  textPrimary: '#1d1d1f',
  textSecondary: '#515154',
  textMuted: '#86868b',

  accent: '#0071e3',
  accentSubtle: 'rgba(0, 113, 227, 0.08)',

  btnBg: '#1d1d1f',
  btnText: '#ffffff',
  btnHover: '#333336',

  navBg: 'rgba(255, 255, 255, 0.82)',
  navScrolled: 'rgba(255, 255, 255, 0.94)',
};

export const darkTokens = {
  canvas: '#0a0a0c',
  surface: '#121216',
  surfaceSubtle: '#141418',
  surfaceHover: '#191920',

  border: 'rgba(255, 255, 255, 0.1)',
  borderHover: 'rgba(255, 255, 255, 0.22)',

  textPrimary: '#f5f5f7',
  textSecondary: '#a1a1a6',
  textMuted: '#6e6e73',

  accent: '#2997ff',
  accentSubtle: 'rgba(41, 151, 255, 0.12)',

  btnBg: '#f5f5f7',
  btnText: '#000000',
  btnHover: '#ffffff',

  navBg: 'rgba(10, 10, 12, 0.82)',
  navScrolled: 'rgba(10, 10, 12, 0.94)',
};

export const getTheme = (mode = 'light') => {
  const isDark = mode === 'dark';
  const tokens = isDark ? darkTokens : lightTokens;

  let theme = createTheme({
    palette: {
      mode: isDark ? 'dark' : 'light',
      primary: {
        main: tokens.textPrimary,
        contrastText: isDark ? '#000000' : '#ffffff',
      },
      secondary: {
        main: tokens.accent,
        contrastText: '#ffffff',
      },
      background: {
        default: tokens.canvas,
        paper: tokens.surface,
      },
      text: {
        primary: tokens.textPrimary,
        secondary: tokens.textSecondary,
        disabled: tokens.textMuted,
      },
      divider: tokens.border,
      custom: tokens,
    },

    typography: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif",

      h1: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 800,
        letterSpacing: '-0.035em',
        lineHeight: 1.08,
        color: tokens.textPrimary,
      },
      h2: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 700,
        letterSpacing: '-0.03em',
        lineHeight: 1.15,
        color: tokens.textPrimary,
      },
      h3: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 700,
        letterSpacing: '-0.025em',
        lineHeight: 1.25,
        color: tokens.textPrimary,
      },
      h4: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 600,
        letterSpacing: '-0.015em',
        lineHeight: 1.3,
        color: tokens.textPrimary,
      },
      h5: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 600,
        letterSpacing: '-0.01em',
        lineHeight: 1.35,
        color: tokens.textPrimary,
      },
      h6: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 600,
        letterSpacing: '-0.005em',
        lineHeight: 1.4,
        color: tokens.textPrimary,
      },
      subtitle1: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontSize: '1.1rem',
        lineHeight: 1.6,
        color: tokens.textSecondary,
      },
      subtitle2: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
        fontSize: '0.925rem',
        color: tokens.textSecondary,
      },
      body1: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.7,
        color: tokens.textSecondary,
      },
      body2: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: 1.65,
        color: tokens.textSecondary,
      },
      button: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 600,
        letterSpacing: '-0.01em',
        textTransform: 'none',
        fontSize: '0.875rem',
      },
      caption: {
        fontFamily: "'JetBrains Mono', monospace",
        fontWeight: 400,
        fontSize: '0.75rem',
        letterSpacing: '0.04em',
        color: tokens.textMuted,
      },
      overline: {
        fontFamily: "'JetBrains Mono', monospace",
        fontWeight: 500,
        fontSize: '0.75rem',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: tokens.textMuted,
      },
    },

    shape: {
      borderRadius: 16,
    },

    shadows: Array(25).fill('none'),

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            scrollBehavior: 'smooth',
          },
          body: {
            backgroundColor: tokens.canvas,
            color: tokens.textPrimary,
            overflowX: 'hidden',
            textRendering: 'optimizeLegibility',
            transition: 'background-color 0.25s ease, color 0.25s ease',
          },
        },
      },

      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: tokens.navBg,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: `1px solid ${tokens.border}`,
            boxShadow: 'none',
            color: tokens.textPrimary,
            transition: 'all 0.25s ease',
          },
        },
      },

      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '999px',
            padding: '8px 22px',
            fontWeight: 600,
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          },
          containedPrimary: {
            backgroundColor: tokens.btnBg,
            color: tokens.btnText,
            border: `1px solid ${tokens.btnBg}`,
            '&:hover': {
              backgroundColor: tokens.btnHover,
              borderColor: tokens.btnHover,
            },
          },
          outlinedPrimary: {
            borderColor: tokens.borderHover,
            color: tokens.textPrimary,
            backgroundColor: 'transparent',
            '&:hover': {
              borderColor: tokens.textPrimary,
              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)',
            },
          },
        },
      },

      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: tokens.surface,
            border: `1px solid ${tokens.border}`,
            borderRadius: '16px',
            transition: 'background-color 0.25s ease, border-color 0.2s ease',
            '&:hover': {
              borderColor: tokens.borderHover,
            },
          },
        },
      },

      MuiChip: {
        styleOverrides: {
          root: {
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.72rem',
            fontWeight: 500,
            borderRadius: '999px',
            height: '26px',
            backgroundColor: tokens.surfaceSubtle,
            border: `1px solid ${tokens.border}`,
            color: tokens.textSecondary,
          },
        },
      },

      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.95rem',
              backgroundColor: tokens.surfaceSubtle,
              color: tokens.textPrimary,
              borderRadius: '10px',
              '& fieldset': {
                borderColor: tokens.border,
                transition: 'border-color 0.2s ease',
              },
              '&:hover fieldset': {
                borderColor: tokens.borderHover,
              },
              '&.Mui-focused fieldset': {
                borderColor: tokens.textPrimary,
                borderWidth: '1.5px',
              },
            },
            '& .MuiInputLabel-root': {
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9rem',
              color: tokens.textMuted,
              '&.Mui-focused': {
                color: tokens.textPrimary,
              },
            },
          },
        },
      },

      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: tokens.border,
          },
        },
      },
    },
  });

  return responsiveFontSizes(theme, {
    breakpoints: ['sm', 'md', 'lg'],
    factor: 2.2,
  });
};

// Default export is the light theme for static SSR / fallback
export const colors = lightTokens;
export default getTheme('light');
