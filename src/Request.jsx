import { Button, TextField } from '@mui/material';
import React from 'react';

function send() {
  console.log('test');
}

const Request = () => {
  return (
    <>
      <TextField label='URL'></TextField>
      <Button onClick={() => send()}>{'Send'}</Button>
    </>
  );
};

export default Request;
