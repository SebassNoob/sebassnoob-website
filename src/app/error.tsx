'use client';

import { Button, Typography } from '@mui/material';
import { useEffect } from 'react';

// Renders during a runtime error
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log('errored');
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        margin: '15%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '2vh',
      }}
    >
      <Typography variant='h3' sx={{ color: '#66d3fa' }}>
        Something went wrong!
      </Typography>
      <Typography variant='h5' sx={{ color: '#0f5298' }}>
        {error.message}
      </Typography>

      <Button variant='contained' onClick={reset}>
        Try again
      </Button>
    </div>
  );
}
