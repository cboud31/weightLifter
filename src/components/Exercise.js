import React from 'react';
import ReactPlayer from 'react-player';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '75vw',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    margin: '0 auto',
    marginTop: '2rem',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordion: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
  },
}));

const Exercise = (props) => {
  const classes = useStyles();

  const { title, description, videoURL } = props;

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            <b>{title}</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{description}</Typography>
          <div>
            <ReactPlayer url={videoURL} />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Exercise;
