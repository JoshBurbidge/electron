import * as React from 'react';
import { Box } from '@mui/material';
import RequestBar from './Request/Request.jsx';
import ResponsePane from './Response/ResponsePane.jsx';

const App = () => {
  const [height, setHeight] = React.useState(400);
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
        <ResponsePane response={response} height={height}></ResponsePane>
      </Box>
    </Box>
  );
};

export default App;
