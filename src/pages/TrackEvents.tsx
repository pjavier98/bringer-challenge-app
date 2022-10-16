// @mui
import { styled } from '@mui/material/styles';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
// components
import Page from '../components/Page';
import { Box, Button, Card, Container, Stack, TextField, Typography } from '@mui/material';
import Iconify from 'src/components/Iconify';
import { useState } from 'react';

const RootStyle = styled('div')(({ theme }) => ({
  height: '100%',
}));

export default function TrackEventsPage() {
  const [trackingNumber, setTrackingNumber] = useState('');

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
                onChange={(e) => setTrackingNumber(e.target.value.toLocaleUpperCase())}
              />
              <Button
                variant="outlined"
                disabled={!trackingNumber}
                endIcon={<Iconify icon={'eva:search-fill'} />}
              >
                Search
              </Button>
            </Stack>
          </Card>

          <Card sx={{ p: 3, mt: 3 }}>
            <Timeline>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">09:30 am</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="success" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Eat</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">10:00 am</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Code</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">12:00 am</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Sleep</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">9:00 am</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Repeat</TimelineContent>
              </TimelineItem>
            </Timeline>
          </Card>
        </Container>
      </RootStyle>
    </Page>
  );
}
