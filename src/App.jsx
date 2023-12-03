import * as React from 'react';
import Request from './Request/Request.jsx';
import { Box } from '@mui/material';

const App = () => {
  const [dragging, setDragging] = React.useState(false);
  const [height, setHeight] = React.useState(50);

  React.useEffect(() => {
    window.addEventListener('mouseup', () => {
      if (dragging) {
        setDragging(false);
      }
    });

    window.addEventListener('mousemove', (e) => {
      if (dragging) {
        // console.log(e);
      }
    });
  });

  console.log(dragging);

  const handleDrag = (e) => {
    console.log(e);
    setDragging(true);
  };

  return (
    <Box height={'100vh'} display={'flex'} flexDirection={'column'}>
      <Request />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1'
      }}>
        <Box bgcolor={'lightblue'} flex={'1'}>{'request'}</Box>
        <Box sx={{
          '&:hover': {
            cursor: 'ns-resize'
          },
          maxHeight: '16px',
          bgcolor: 'gray',
        }} onMouseDown={handleDrag}>
        test
        </Box>
        <Box bgcolor={'lightgray'} height={height}>{'response'}</Box>
      </Box>
    </Box>
  );
};

export default App;

// TODO
// some kind of height calculation
// resize on mousemove
