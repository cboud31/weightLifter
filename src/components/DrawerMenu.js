import React, { useState } from 'react';
import useToggle from '../hooks/useToggle';

import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  link: {
    color: 'black',
    textDecoration: 'bold',
  },
}));

const DrawerMenu = () => {
  const [drawer, toggleDrawer] = useToggle(false);

  const classes = useStyles();

  //   Map over this array to build menu links:
  const categories = [
    { name: 'Home', path: '/' },
    { name: 'Exercises', path: '/exercises' },
    { name: 'Routines', path: '/routines' },
  ];

  const list = () => {
    return (
      <>
        <div onClick={() => toggleDrawer(false)}>
          <List>
            {categories.map((category) => {
              return (
                <ListItem key={category}>
                  <ListItemText>
                    <Link className={classes.link} to={category.path}>
                      {category.name}
                    </Link>
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
        </div>
      </>
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
