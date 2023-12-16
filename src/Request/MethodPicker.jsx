import { Button, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React from 'react';
import PropTypes from 'prop-types';

const METHODS = ['GET', 'DELETE', 'PATCH', 'POST', 'PUT'];
export const DEFAULT_METHOD = METHODS[0];

const MethodPicker = ({ method, setMethod }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (method) => {
    setAnchorEl(null);
    setMethod(method);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button variant='outlined' onClick={(e) => handleButtonClick(e)} sx={{ paddingRight: '5px', width: '100px' }}>
        {method}
        <ArrowDropDownIcon/>
      </Button>
      <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
        {METHODS.map((method) => (
          <MenuItem key={method} onClick={() => handleMenuItemClick(method)}>{method}</MenuItem>
        ))}
      </Menu>
    </>
  );
};

MethodPicker.propTypes = {
  method: PropTypes.string,
  setMethod: PropTypes.func
};

export default MethodPicker;
