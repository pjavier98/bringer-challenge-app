// @mui
import { styled } from '@mui/material/styles';
import Timeline from '@mui/lab/Timeline';

// components
import Page from '../components/Page';
import {
  Alert,
  Button,
  Card,
  CircularProgress,
  Container,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Iconify from 'src/components/Iconify';
import { useCallback, useState } from 'react';
import TrackEventsItemPage from './TrackEventsItem';
import { Track } from 'src/types/track';
import { api } from 'src/services/api';
import CopyClipboard from 'src/components/CopyClipboard';

const RootStyle = styled('div')(() => ({
  height: '100%',
}));

export default function TrackEventsPage() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [track, setTrack] = useState({} as Track);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = useCallback(async () => {
    try {
      setError('');
      setIsLoading(true);
      setTrack({} as Track);

      const { data } = await api.get(`tracking-events`, {
        params: {
          trackingNumber,
        },
      });

      setTrack(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [trackingNumber]);

  return (
    <Page title="Track Events">
      <RootStyle>
        <Container sx={{ py: 5, alignItems: 'center', justifyContent: 'center' }}>
          <Card sx={{ p: 3 }}>
            <Typography align="center" variant="h4">
              Start tracking your packages
            </Typography>
            <Stack
              spacing={2}
              mt={2}
              direction={'row'}
              sx={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <TextField
                size="small"
                placeholder="Tracking Number"
                value={trackingNumber}
                label={'Tracking Number'}
                onChange={(e) => setTrackingNumber(e.target.value.toLocaleUpperCase())}
              />
              <Button
                variant="outlined"
                disabled={!trackingNumber}
                endIcon={<Iconify icon={'eva:search-fill'} />}
                onClick={handleSearch}
              >
                Search
              </Button>
            </Stack>

            <Stack spacing={2} mt={2}>
              {!!error && <Alert severity="error">{error}</Alert>}
            </Stack>
          </Card>

          {(Object.keys(track).length > 0 || isLoading) && (
            <Card sx={{ p: 3, mt: 3 }}>
              {isLoading ? (
                <Stack spacing={2} alignItems={'center'} justifyContent={'center'}>
                  <CircularProgress />
                </Stack>
              ) : (
                <Stack spacing={2}>
                  <Stack
                    spacing={2}
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-around'}
                  >
                    <CopyClipboard
                      value={track?.label?.tracking_number}
                      placeholder={'Tracking Number'}
                      label={'Tracking Number'}
                      size={'small'}
                    />

                    <CopyClipboard
                      value={track?.label?.external_tracking_number}
                      placeholder={'External Tracking Number'}
                      label={'External Tracking Number'}
                      size={'small'}
                    />
                  </Stack>

                  <Timeline sx={{ mt: 2 }}>
                    {track?.parcel_tracking_items?.map((parcelTrackingItem, index) => (
                      <TrackEventsItemPage
                        key={index}
                        parcelTrackingItem={parcelTrackingItem}
                        lastTrackingItem={index === 0}
                      />
                    ))}
                  </Timeline>
                </Stack>
              )}
            </Card>
          )}
        </Container>
      </RootStyle>
    </Page>
  );
}
