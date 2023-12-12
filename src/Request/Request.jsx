import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField } from '@mui/material';
import MethodPicker, { METHODS } from './MethodPicker.jsx';

const Request = ({ setResponse }) => {
  const [url, setUrl] = React.useState('https://jsonplaceholder.typicode.com/todos/1');
  const [method, setMethod] = React.useState(METHODS[0]);

  function send(url) {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setResponse(json);
      });
  }

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

Request.propTypes = {
  setResponse: PropTypes.func
};
