import { Box, CircularProgress } from '@mui/material';
import { Suspense, lazy, ElementType } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import MainLayout from 'src/layouts';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense
      fallback={
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      }
    >
      <Component {...props} />
    </Suspense>
  );

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: 'generate-jwt', element: <GenerateJWTPage /> },
        { path: 'track-events', element: <TrackEventsPage /> },
        { path: '/', element: <Navigate to="/generate-jwt" replace /> },
      ],
    },
  ]);
}

const GenerateJWTPage = Loadable(lazy(() => import('../pages/GenerateJWT')));
const TrackEventsPage = Loadable(lazy(() => import('../pages/TrackEvents')));
