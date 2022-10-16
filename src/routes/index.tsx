import { Suspense, lazy, ElementType } from 'react';
import { useRoutes } from 'react-router-dom';
import MainLayout from 'src/layouts';

// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: 'generate-token', element: <GenerateTokenPage /> },
        { path: 'track-events', element: <TrackEventsPage /> },
      ],
    },
  ]);
}

const GenerateTokenPage = Loadable(lazy(() => import('../pages/GenerateToken')));
const TrackEventsPage = Loadable(lazy(() => import('../pages/TrackEvents')));
