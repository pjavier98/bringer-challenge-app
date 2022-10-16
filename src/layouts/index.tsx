import { Outlet } from 'react-router-dom';
// @mui
import { Box, Container, Stack } from '@mui/material';

// component
import MainHeader from './MainHeader';

// ----------------------------------------------------------------------

export default function MainLayout() {
  return (
    <Stack sx={{ minHeight: 1 }}>
      <MainHeader />
      <Container sx={{ mt: '50px' }}>
        <Outlet />
      </Container>

      <Box sx={{ flexGrow: 1 }} />
    </Stack>
  );
}
