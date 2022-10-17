import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { Typography } from '@mui/material';
import { useMemo } from 'react';
import { ParcelTrackingItem } from 'src/types/track';

type TrackEventsItemPageProps = {
  parcelTrackingItem: ParcelTrackingItem;
  lastTrackingItem?: boolean;
};

export default function TrackEventsItemPage({
  parcelTrackingItem,
  lastTrackingItem = false,
}: TrackEventsItemPageProps) {
  const date = useMemo(
    () =>
      new Date(parcelTrackingItem.timestamp).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      }),
    [parcelTrackingItem.timestamp]
  );

  const hour = useMemo(
    () =>
      new Date(parcelTrackingItem.timestamp).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    [parcelTrackingItem.timestamp]
  );

  const status = useMemo(
    () =>
      parcelTrackingItem.tracking_code?.tracking_code_locales[0].description.toLocaleUpperCase() ||
      parcelTrackingItem.tracking_code_vendor?.tracking_code.tracking_code_locales[0].description.toLocaleUpperCase() ||
      'N/A',
    [
      parcelTrackingItem.tracking_code?.tracking_code_locales,
      parcelTrackingItem.tracking_code_vendor?.tracking_code.tracking_code_locales,
    ]
  );

  const location = useMemo(
    () =>
      `${parcelTrackingItem.state?.toLocaleUpperCase() ?? 'N/A'}, ${
        parcelTrackingItem.city?.toLocaleUpperCase() ?? 'N/A'
      },`,
    [parcelTrackingItem.city, parcelTrackingItem.state]
  );
  const country = useMemo(
    () => parcelTrackingItem.country.name.toLocaleUpperCase(),
    [parcelTrackingItem.country.name]
  );

  return (
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary">
        <Typography variant="body2">
          {date}
          <br />
        </Typography>
        <Typography variant="caption">{hour}</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color={lastTrackingItem ? 'success' : 'grey'} />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent color="text.secondary">
        <Typography variant="body2">
          {status}
          <br />
        </Typography>
        <Typography variant="caption">
          {location}
          <br />
        </Typography>
        <Typography variant="caption">{country}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
}
