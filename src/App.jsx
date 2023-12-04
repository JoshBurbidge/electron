import * as React from 'react';
import Request from './Request/Request.jsx';
import { Box } from '@mui/material';

const App = () => {
  const [dragging, _setDragging] = React.useState(false);
  const [height, setHeight] = React.useState(50);

  // idk if these refs are necessary
  const draggingRef = React.useRef(dragging);

  const setDragging = (dragging) => {
    draggingRef.current = dragging;
    _setDragging(dragging);
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

  // console.log(draggingRef.current);

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
          {/* {dragging && ' dragging'} */}
        </Box>
        <Box sx={{
          '&:hover': {
            cursor: 'ns-resize'
          },
          maxHeight: '16px',
          bgcolor: 'gray',
        }} onMouseDown={() => setDragging(true)}>
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
