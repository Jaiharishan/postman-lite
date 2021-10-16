import * as React from 'react';
import {AppBar, Box, Toolbar, Typography, IconButton} from '@material-ui/core' ;
import {Menu} from '@material-ui/icons';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background: 'orange'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Postman Lite
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header
