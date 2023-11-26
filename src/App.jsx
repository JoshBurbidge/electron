import * as React from 'react';
import Request from './Request/Request.jsx';
import { Typography } from '@mui/material';

const App = () => {
  return (
    <div>
      {/* eslint-disable-next-line no-undef */}
      <Typography>{`Chrome version ${versions.chrome()}`}</Typography>
      <Request></Request>
    </div>
  );
};

export default App;
