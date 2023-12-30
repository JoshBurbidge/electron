import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField } from '@mui/material';
import MethodPicker, { DEFAULT_METHOD } from './MethodPicker.jsx';
import { RequestContext } from './RequestContext.js';

const RequestBar = ({ setResponse }) => {
  const [url, setUrl] = React.useState('https://jsonplaceholder.typicode.com/todos/1');
  const [method, setMethod] = React.useState(DEFAULT_METHOD);

  const { headers } = useContext(RequestContext);

  console.log(headers);

  function send(url) {
    fetch(url, {
      headers
    })
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

export default RequestBar;

RequestBar.propTypes = {
  setResponse: PropTypes.func
};
