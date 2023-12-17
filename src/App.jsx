import * as React from 'react';
import { Box } from '@mui/material';
import RequestBar from './Request/RequestBar.jsx';
import ResponsePane from './Response/ResponsePane.jsx';
import RequestPane from './Request/RequestPane.jsx';

const requestBarHeight = 40;

const App = () => {
  const [height, setHeight] = React.useState(400);
  const [topHeight, setTopHeight] = React.useState(window.innerHeight - height - requestBarHeight); // get this from innerHeight
  const [response, setResponse] = React.useState();
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
      setTopHeight(e.clientY - requestBarHeight);
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
      <RequestBar setResponse={setResponse}/>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        maxHeight: topHeight + height
      }}>
        <Box flex={'1'} maxHeight={topHeight} overflow={'scroll'}>
          <RequestPane />
        </Box>
        <Box sx={{
          '&:hover': {
            cursor: 'ns-resize'
          },
          height: '3px',
          bgcolor: 'gray',
        }} onMouseDown={() => setDragging(true)} />
        <Box height={height}>
          <ResponsePane response={response} />
        </Box>
      </Box>
    </Box>
  );
};

export default App;
