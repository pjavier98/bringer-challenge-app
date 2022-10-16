// @mui
import { styled } from '@mui/material/styles';
// components
import Page from '../components/Page';

const RootStyle = styled('div')(({ theme }) => ({
  height: '100%',
}));

export default function TrackEventsPage() {
  return (
    <Page title="Track Events">
      <RootStyle>
        <h1>Track Events</h1>
      </RootStyle>
    </Page>
  );
}
