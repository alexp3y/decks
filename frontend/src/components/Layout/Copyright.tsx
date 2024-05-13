import { Link, Typography } from '@mui/material';

export function Copyright() {
  return (
    <Typography variant="body2" color="" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://p3y.dev/">
        P3Y
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
