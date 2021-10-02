import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#fffffe',
    borderRadius: 8,
    boxShadow: '5px 5px 5px #848484',
    margin: '200px auto',
    maxWidth: 600,
    padding: '32px 0',
  },
  paragrah: {
    display: 'flex',
    fontFamily: 'Courgette',
    fontSize: 20,
    justifyContent: 'center',
  },
  containerButtons: {
    marginTop: 32,
  },
});

const Start = () => {
  const createScore = () => {
    localStorage.setItem(
      'score',
      JSON.stringify({
        player: { hits: 0, miss: 0, questions: { marked: [], answer: [] } },
      })
    );
    localStorage.setItem(
      'markedQ',
      JSON.stringify({
        marked: [],
      })
    );
  };

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.paragrah} variant="p">
        Are you ready?
      </Typography>
      <Grid className={classes.containerButtons} container justifyContent="space-around">
        <Link to="/questions" style={{ textDecoration: 'none' }}>
          <Button size="large" onClick={() => createScore()} variant="contained">
            Start
          </Button>
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button size="large" color="error" variant="contained">
            Cancel
          </Button>
        </Link>
      </Grid>
    </Box>
  );
};

export default Start;
