import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import MethodPicker from './MethodPicker.jsx';

function send(url) {
  fetch(url)
    .then(response => response.json())
    .then(json => console.log(json));
}

const METHODS = ['GET', 'POST', 'PATCH'];

const Request = () => {
  const [url, setUrl] = React.useState('https://jsonplaceholder.typicode.com/todos/1');
  const [method, setMethod] = React.useState(METHODS[0]);

  return (
    <Box gap={'5px'} display={'flex'} flexDirection={'row'}>
      <MethodPicker method={method} setMethod={setMethod}></MethodPicker>
      <Box flexGrow={'1'}>
        <TextField fullWidth={true} size={'small'} placeholder='URL' value={url} onChange={(e) => setUrl(e.target.value)}/>
      </Box>
      <Button variant='contained' onClick={() => send(url)}>{'Send'}</Button>
    </Box>
  );
};

export default Request;
