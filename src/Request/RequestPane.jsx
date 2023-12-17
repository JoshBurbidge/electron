import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Tab, TextField, Typography } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { TabPanel, TabList, TabContext } from '@mui/lab';

const TABS = ['Auth', 'Headers'];
const defaultHeader = {
  name: '',
  value: ''
};

const RequestPane = () => {
  const [tab, setTab] = useState(TABS[1]);
  const [headers, setHeaders] = useState([defaultHeader]);

  const handleChange = (_, val) => {
    setTab(val);
  };

  return (
    <Box>
      <TabContext value={tab}>
        <TabList value={tab} onChange={handleChange}>
          {TABS.map(tab => <Tab label={tab} value={tab} key={tab} />)}
        </TabList>
        <TabPanel value={TABS[0]}>{'test'}</TabPanel>
        <TabPanel value={TABS[1]}>
          <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
            <Box display={'flex'} width={'100%'} gap={'5px'}>
              <Box width={'50%'}><Typography variant='body2'>{'Name'}</Typography></Box>
              <Box width={'50%'}><Typography variant='body2'>{'Value'}</Typography></Box>
            </Box>
            { headers.map((_, index) => (
              <Box display={'flex'} width={'100%'} gap={'5px'} key={index}>
                <Box width={'50%'}><TextField size={'small'} fullWidth></TextField></Box>
                <Box width={'50%'}><TextField size={'small'} fullWidth></TextField></Box>
              </Box>
            ))}
          </Box>
          <Box>
            <IconButton onClick={() => setHeaders([...headers, defaultHeader])}><AddCircleOutlineOutlinedIcon /></IconButton>
          </Box>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

RequestPane.propTypes = {

};

export default RequestPane;
