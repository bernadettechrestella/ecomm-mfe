import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createRoot } from 'react-dom/client';

const mount = (el) => {
  createRoot(el).render (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" sx={{ bgcolor: "black", color: "white" }}>
        <Toolbar sx={{ ml : 30 }}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            Ecomm
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-navbar");
  if (el) {
    mount(el);
  }
}

export { mount };