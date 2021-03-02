import React, { useState } from 'react';
import useToggle from '../hooks/useToggle';

import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItem } from '@material-ui/core';

const DrawerMenu = () => {
  const [drawer, toggleDrawer] = useToggle(false);

  const list = () => {
    return (
      <div onClick={() => toggleDrawer(false)}>
        <List>
          <ListItem>
            <ListItemText button>It works, hell yeah!!</ListItemText>
          </ListItem>
        </List>
      </div>
    );
  };

  return (
    <div className="DrawerMenu">
      <IconButton
        onClick={() => {
          toggleDrawer(true);
        }}
      >
        <MenuIcon style={{ color: 'white' }} />
      </IconButton>
      <Drawer
        anchor={'left'}
        open={drawer}
        onClose={() => {
          toggleDrawer(false);
        }}
      >
        {list()}
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
