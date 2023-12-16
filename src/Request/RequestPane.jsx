import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Tab } from '@mui/material';
import { TabPanel, TabList, TabContext } from '@mui/lab';

const TABS = ['Auth', 'Headers'];

const RequestPane = () => {
  const [tab, setTab] = useState(TABS[0]);

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
        <TabPanel value={TABS[1]}>{'test2'}</TabPanel>
      </TabContext>
    </Box>
  );
};

RequestPane.propTypes = {

};

export default RequestPane;
