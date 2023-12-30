import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Tab, TextField, Typography } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { TabPanel, TabList, TabContext } from '@mui/lab';
import { RequestContext } from './RequestContext';

const TABS = ['Auth', 'Headers'];
const defaultHeader = {
  name: '',
  value: ''
};

const RequestPane = () => {
  const [tab, setTab] = useState(TABS[1]);
  const [headers, setHeaders] = useState([defaultHeader]);

  const { setHeaders: setHeaderContext } = useContext(RequestContext);

  const handleTabSelect = (_, val) => {
    setTab(val);
  };

  const onChange = (e, index, field) => {
    const newHeader = {
      ...headers[index],
      [field]: e.target.value
    };

    const newHeaders = [...headers.slice(0, index), newHeader, ...headers.slice(index + 1)];

    setHeaders(newHeaders);

    const headerObject = newHeaders.reduce((acc, cur) => ({
      ...acc,
      [cur.name]: cur.value
    }), {});

    setHeaderContext(headerObject);
  };

  return (
    <Box>
      <TabContext value={tab}>
        <TabList value={tab} onChange={handleTabSelect}>
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
                <Box width={'50%'}><TextField size={'small'} fullWidth onChange={(e) => onChange(e, index, 'name')}/></Box>
                <Box width={'50%'}><TextField size={'small'} fullWidth onChange={(e) => onChange(e, index, 'value')}/></Box>
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
