import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { type MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_KEYS } from '~/shared/constants/keys.ts';

const pages = [
  { label: 'Home', path: ROUTER_KEYS.ROOT },
  { label: 'Calendar', path: ROUTER_KEYS.CALENDAR },
];

export function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CalendarMonthRoundedIcon sx={{ display: { xs: 'none', sm: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to={pages[0].path}
            sx={{
              mr: 2,
              display: { xs: 'none', sm: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Logo
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', sm: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Typography
                    component={Link}
                    to={page.path}
                    sx={{
                      textAlign: 'left',
                      textDecoration: 'none',
                      color: 'inherit',
                      width: '100%',
                    }}
                  >
                    {page.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/*<CalendarMonthRoundedIcon sx={{ display: { xs: 'flex', sm: 'none' }, mr: 1 }} />*/}
          {/*<Typography*/}
          {/*  variant="h5"*/}
          {/*  noWrap*/}
          {/*  component={Link}*/}
          {/*  to={pages[0].path}*/}
          {/*  sx={{*/}
          {/*    mr: 2,*/}
          {/*    display: { xs: 'flex', sm: 'none' },*/}
          {/*    flexGrow: 1,*/}
          {/*    fontFamily: 'monospace',*/}
          {/*    fontWeight: 700,*/}
          {/*    letterSpacing: '.3rem',*/}
          {/*    color: 'inherit',*/}
          {/*    textDecoration: 'none',*/}
          {/*  }}*/}
          {/*>*/}
          {/*  Calendar*/}
          {/*</Typography>*/}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                component={Link}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
