import * as React from 'react';
import Request from './Request/Request.jsx';
import { Box } from '@mui/material';

const App = () => {
  const [height, setHeight] = React.useState(50);
  const draggingRef = React.useRef(false);

  const setDragging = (dragging) => {
    draggingRef.current = dragging;
  };

  const stopDragging = () => {
    setDragging(false);
  };

  const handleMove = (e) => {
    if (draggingRef.current) {
      setHeight(e.view.innerHeight - e.clientY);
    }
  };

  React.useEffect(() => {
    window.addEventListener('mouseup', stopDragging);
    window.addEventListener('mousemove', handleMove);

    return () => {
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('mousemove', handleMove);
    };
  }, []);

  return (
    <Box height={'100vh'} display={'flex'} flexDirection={'column'}>
      <Request />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1'
      }}>
        <Box bgcolor={'lightblue'} flex={'1'}>
          {'request'}
        </Box>
        <Box sx={{
          '&:hover': {
            cursor: 'ns-resize'
          },
          height: '3px',
          bgcolor: 'gray',
        }} onMouseDown={() => setDragging(true)} />
        <Box bgcolor={'lightgray'} height={height}>{'response'}</Box>
      </Box>
    </Box>
  );
};

export default App;
