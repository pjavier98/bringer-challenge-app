// @mui
import { Box, AppBar, Toolbar, Container, Stack, Button } from '@mui/material';
import { ThemeContext } from '@emotion/react';
import { Link } from 'react-router-dom';

export default function MainHeader() {
  return (
    <AppBar
      sx={{
        bgcolor: 'transparent',
        height: 50,
        justifyContent: 'center',
      }}
    >
      <Stack direction={'row'} spacing={2} justifyContent={'space-evenly'}>
        <Button component={Link} to="/generate-token" variant="contained">
          Generate Token
        </Button>
        <Button component={Link} to="/track-events" variant="contained">
          Track Events
        </Button>
      </Stack>
    </AppBar>
  );
}
