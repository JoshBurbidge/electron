import React from 'react';
import { Box } from "@mui/material";
import PropTypes from 'prop-types';
import CodeBlock from "../components/CodeBlock.jsx";

const ResponsePane = ({ response, height }) => {
  return (
    <Box bgcolor={'lightgray'} height={height}>
      {response &&
        <CodeBlock>{response}</CodeBlock>
      }
    </Box>
  );
};

ResponsePane.propTypes = {
  response: PropTypes.string,
  height: PropTypes.number
};

export default ResponsePane;
