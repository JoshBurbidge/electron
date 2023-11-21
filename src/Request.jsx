import { Button, TextField } from '@mui/material';
import React from 'react';

function send(url) {
  console.log('test');
  fetch(url)
    .then(response => response.json())
    .then(json => console.log(json));
}

const Request = () => {
  const [url, setUrl] = React.useState('https://jsonplaceholder.typicode.com/todos/1');

  return (
    <>
      <TextField label='URL' value={url} onChange={(e) => setUrl(e.target.value)}/>
      <Button onClick={() => send(url)}>{'Send'}</Button>
    </>
  );
};

export default Request;
