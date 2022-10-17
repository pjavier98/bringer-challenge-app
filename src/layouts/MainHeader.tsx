// @mui
import { AppBar, Stack, Button, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

export default function MainHeader() {
  const theme = useTheme();

  return (
    <AppBar
      sx={{
        bgcolor: theme.palette.grey[0],
        height: 50,
        justifyContent: 'center',
      }}
    >
      <Stack direction={'row'} spacing={2} justifyContent={'space-evenly'}>
        <Button component={Link} to="/generate-jwt" variant="contained">
          Generate JWT
        </Button>
        <Button component={Link} to="/track-events" variant="contained">
          Track Events
        </Button>
      </Stack>
    </AppBar>
  );
}
