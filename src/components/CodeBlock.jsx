import { Box } from '@mui/material';
import React from 'react';
import  PropTypes  from 'prop-types';

const CodeBlock = ({ children }) => {
  return (
    <Box bgcolor={'white'} padding={'10px'}>
      <Box sx={{ fontFamily: 'monospace', fontSize: '16px' }}><pre>{JSON.stringify(children, null, 2)}</pre></Box>
    </Box>
  );
};


CodeBlock.propTypes = {
  children: PropTypes.any
};

export default CodeBlock;
