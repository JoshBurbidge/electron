import React from 'react';
import { Box } from "@mui/material";
import PropTypes from 'prop-types';
import CodeBlock from "../components/CodeBlock.jsx";

const ResponsePane = ({ response }) => {
  return (
    <Box bgcolor={'lightgray'} height={'100%'}>
      {response &&
        <CodeBlock>{response}</CodeBlock>
      }
    </Box>
  );
};

ResponsePane.propTypes = {
  response: PropTypes.object
};

export default ResponsePane;
