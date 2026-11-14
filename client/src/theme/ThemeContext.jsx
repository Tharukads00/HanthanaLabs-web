import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getTheme, lightTokens, darkTokens } from './theme';

export const ThemeContext = createContext({
  mode: 'light',
  isDark: false,
  toggleColorMode: () => {},
  setColorMode: () => {},
});

export const useColorMode = () => useContext(ThemeContext);

const STORAGE_KEY = 'hanthana-theme';

export function ThemeContextProvider({ children }) {
  // Initialize mode from localStorage or system preference
  const [mode, setMode] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
      if (typeof window !== 'undefined' && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
    } catch (e) {
      // Fallback
    }
    return 'light';
  });

  // Keep DOM attribute, <meta name="color-scheme"> and localStorage synced
  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', mode);
      localStorage.setItem(STORAGE_KEY, mode);

      // Sync color-scheme meta tag as recommended by Modern Web Guidance
      const meta = document.querySelector('meta[name="color-scheme"]');
      if (meta) {
        meta.content = mode;
      }

      // Update theme-color meta tag for mobile browser address bars
      const themeColorMeta = document.getElementById('theme-color-meta');
      if (themeColorMeta) {
        themeColorMeta.content = mode === 'dark' ? '#0a0a0c' : '#ffffff';
      }
    } catch (e) {
      // Ignored
    }
  }, [mode]);

  // Listen to OS color scheme changes if user hasn't explicitly set a preference
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      const userStored = localStorage.getItem(STORAGE_KEY);
      if (!userStored) {
        setMode(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const setColorMode = (newMode) => {
    if (newMode === 'light' || newMode === 'dark') {
      setMode(newMode);
    }
  };

  const currentTheme = useMemo(() => getTheme(mode), [mode]);

  const contextValue = useMemo(
    () => ({
      mode,
      isDark: mode === 'dark',
      toggleColorMode,
      setColorMode,
      tokens: mode === 'dark' ? darkTokens : lightTokens,
    }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={currentTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
