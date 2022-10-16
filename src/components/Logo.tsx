import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  disabledLink?: boolean;
}

export default function Logo({ disabledLink = false, sx }: Props) {
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 512 512"
        viewBox="0 0 512 512"
      >
        <polygon
          fill={PRIMARY_DARK}
          points="256 189.3 487 106.3 487 137.5 256 223.1"
          enableBackground="new"
          opacity=".3"
        />
        <path
          fill={PRIMARY_LIGHT}
          d="M476,385.4c0,15.9-7,29.5-17.1,35.8c-3.8,2.4-8,3.7-12.5,3.7s-8.7-1.3-12.5-3.7c-10.1-6.3-17.1-19.9-17.1-35.8
		c0-21.8,13.2-39.5,29.6-39.5S476,363.6,476,385.4z"
        />
        <path
          fill={PRIMARY_LIGHT}
          d="M496.8,93.8L259,16.3c-1.9-0.8-4.1-0.8-6,0L15.2,93.8c-3.1,1-5.2,3.9-5.2,7.1v41.8c0,3.1,2,5.9,4.9,7
		l99.3,36.8v101.7c0,1.8,0.6,3.5,1.8,4.9c0.5,0.6,13.2,15.4,36.8,30.3c21.7,13.7,57.2,29.9,103.1,30h0.3c45.8-0.1,81.3-16.3,103-30
		c23.6-14.8,36.3-29.6,36.8-30.3c1.2-1.4,1.8-3.1,1.8-4.9V186.5l41.1-15.2v174.5c0,4.1,3.4,7.5,7.5,7.5s7.5-3.4,7.5-7.5V165.7
		l43.2-16c2.9-1.1,4.9-3.9,4.9-7v-41.8C502,97.7,499.9,94.8,496.8,93.8z M382.8,285.3c-4.1,4.3-15.1,15-32,25.6
		c-19.9,12.5-52.5,27.3-94.6,27.4h-0.3c-42.1,0-74.7-14.9-94.7-27.4c-17-10.6-28-21.3-32-25.6v-93.2l15.6,5.8l107.4,39.8
		c1.1,0.6,2.4,1,3.7,1c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c1.2,0,2.5-0.3,3.7-1l122.9-45.6V285.3z M487,137.5l-40.7,15.1l-189.2-66
		c-3.9-1.4-8.2,0.7-9.6,4.6s0.7,8.2,4.6,9.6l172,60l-36.6,13.5L256,223.1l-131.7-48.8L25,137.5v-31.1l231-75.2l231,75.2V137.5z"
        />
        <path
          fill={PRIMARY_MAIN}
          d="M476,496.3h-59.1l17.1-75.1c3.8,2.4,8,3.7,12.5,3.7s8.7-1.3,12.5-3.7L476,496.3z"
        />
        <polygon
          fill={PRIMARY_MAIN}
          points="25 106.3 256 189.3 256 223.1 25 137.5"
          enableBackground="new"
          opacity=".3"
        />
        <path
          fill={PRIMARY_MAIN}
          d="M382.8,250.9l-99.9,46.3c-17.1,7.9-36.9,8.2-54.2,0.6l-99.6-43.5v-62.1l126.6,46.5l127-46.5V250.9z"
          enableBackground="new"
          opacity=".3"
        />
      </svg>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}