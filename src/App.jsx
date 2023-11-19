import * as React from 'react';
import Request from './Request.jsx';
import { Typography } from '@mui/material';

const App = () => {
  return (
    <div>
      <Typography variant='h2'>{'Hello from React!'}</Typography>
      {/* eslint-disable-next-line no-undef */}
      <Typography>{`Chrome version ${versions.chrome()}`}</Typography>
      <Request></Request>
    </div>
  );
};

export default App;
