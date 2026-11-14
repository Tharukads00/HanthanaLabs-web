import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useColorMode } from '../theme';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isDark, mode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleNav = (target) => {
    setMobileOpen(false);
    if (target.startsWith('/')) {
      navigate(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (location.pathname !== '/') {
        navigate('/' + target);
      } else {
        const el = document.querySelector(target);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const navLinks = [
    { label: 'Overview', target: '/' },
    { label: 'Foldable Solar', target: '#solar' },
    { label: 'Autonomous Drones', target: '#drones' },
    { label: 'R&D Domains', target: '#domains' },
    { label: 'Company & Founders', target: '/company' },
    { label: 'Terms & Policies', target: '/company#policies' },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled
            ? isDark
              ? 'rgba(10, 10, 12, 0.94)'
              : 'rgba(255, 255, 255, 0.92)'
            : isDark
            ? 'rgba(10, 10, 12, 0.82)'
            : 'rgba(255, 255, 255, 0.82)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: 'none',
          transition: 'all 0.25s ease',
          zIndex: 1100,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 52, md: 54 }, justifyContent: 'space-between' }}>
            {/* Logo */}
            <Box
              onClick={() => handleNav('/')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.25,
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              {/* Clean Vector Mark using currentColor for perfect Day/Night matching */}
              <Box
                component="svg"
                viewBox="0 0 44 44"
                sx={{
                  width: 22,
                  height: 22,
                  display: 'block',
                  color: isDark ? '#f5f5f7' : '#1d1d1f',
                  transition: 'color 0.25s ease',
                }}
              >
                <polygon points="22,3 39,13 39,31 22,41 5,31 5,13" stroke="currentColor" strokeWidth="2.2" fill="none" />
                <path d="M15,16 L15,28 M29,16 L29,28 M15,22 L29,22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </Box>

              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.98rem',
                  letterSpacing: '-0.02em',
                  color: isDark ? '#f5f5f7' : '#1d1d1f',
                  transition: 'color 0.25s ease',
                }}
              >
                HanthanaLabs
              </Typography>
            </Box>

            {/* Desktop Navigation Links */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 3.5,
              }}
            >
              {navLinks.map((item) => {
                const isActive =
                  item.target === '/'
                    ? location.pathname === '/'
                    : item.target === '/company'
                    ? location.pathname === '/company'
                    : false;

                return (
                  <Typography
                    key={item.label}
                    onClick={() => handleNav(item.target)}
                    sx={{
                      color: isActive ? (isDark ? '#f5f5f7' : '#1d1d1f') : (isDark ? '#a1a1a6' : '#6e6e73'),
                      fontSize: '0.84rem',
                      fontWeight: isActive ? 600 : 500,
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                      '&:hover': {
                        color: isDark ? '#ffffff' : '#1d1d1f',
                      },
                    }}
                  >
                    {item.label}
                  </Typography>
                );
              })}
            </Box>

            {/* Right Side: Day/Night Toggle + Inquire CTA + Mobile Menu */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              {/* Day / Night Mode Switch */}
              <ThemeToggle size="small" />

              <Button
                variant="contained"
                onClick={() => handleNav('#contact')}
                sx={{
                  py: 0.6,
                  px: 2,
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  backgroundColor: isDark ? '#f5f5f7' : '#1d1d1f',
                  color: isDark ? '#000000' : '#ffffff',
                  borderRadius: '999px',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: isDark ? '#ffffff' : '#333336',
                  },
                }}
              >
                Inquire
              </Button>

              {/* Mobile Menu Icon */}
              <IconButton
                aria-label="Toggle menu"
                onClick={handleDrawerToggle}
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  color: isDark ? '#f5f5f7' : '#1d1d1f',
                  p: 0.5,
                }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            backgroundColor: isDark ? '#0a0a0c' : '#ffffff',
            borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
            pt: 8,
            pb: 4,
            px: 3,
            transition: 'background-color 0.25s ease',
          },
        }}
      >
        <List sx={{ mt: 1 }}>
          {navLinks.map((item) => (
            <ListItem disablePadding sx={{ mb: 1 }} key={item.label}>
              <ListItemButton onClick={() => handleNav(item.target)}>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: isDark ? '#f5f5f7' : '#1d1d1f',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}

          <Divider sx={{ my: 2, borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)' }} />

          {/* Mobile Theme Toggle Row */}
          <ListItem disablePadding sx={{ mb: 2 }}>
            <ListItemButton
              onClick={toggleColorMode}
              sx={{
                py: 1.2,
                px: 2,
                borderRadius: '12px',
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: isDark ? '#f5f5f7' : '#1d1d1f',
                }}
              >
                {isDark ? 'Night Mode Active' : 'Day Mode Active'}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: isDark ? '#2997ff' : '#0071e3' }}>
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                <Typography sx={{ fontSize: '0.8rem', fontWeight: 600 }}>
                  Switch to {isDark ? 'Day' : 'Night'}
                </Typography>
              </Box>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleNav('#contact')}
              sx={{
                py: 1.2,
                fontSize: '0.9rem',
                fontWeight: 600,
                backgroundColor: isDark ? '#f5f5f7' : '#1d1d1f',
                color: isDark ? '#000000' : '#ffffff',
                borderRadius: '999px',
                textTransform: 'none',
              }}
            >
              Contact Engineering
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
