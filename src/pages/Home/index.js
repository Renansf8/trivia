import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TriviaContext from '../../context/TriviaContext';
import { makeStyles } from '@material-ui/styles';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#fffffe',
    borderRadius: 8,
    boxShadow: '5px 5px 5px #848484',
    marginTop: 40,
    padding: 32,
  },
  header: {
    marginBottom: 40,
    marginTop: 8,
  },
  title: {
    display: 'flex',
    fontFamily: 'Courgette',
    fontSize: 48,
    fontWeight: 600,
    justifyContent: 'center',
  },
  paragraph: {
    display: 'flex',
    fontFamily: 'Courgette',
    fontSize: 20,
    justifyContent: 'center',
  },
  containerButtons: {
    marginLeft: 16,
    marginTop: 32,
  },
});

const Home = () => {
  const { takeNumQuestions } = useContext(TriviaContext);
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Container className={classes.header}>
        <Typography
          className={classes.title}
          color="primary"
          variant="p"
          align="center"
          gutterBottom
        >
          Welcome to Trivia
        </Typography>
        <Typography
          className={classes.paragraph}
          variant="p"
          align="center"
          gutterBottom
          component="p"
        >
          Choose the number of questions:
        </Typography>
      </Container>
      <Grid className={classes.containerButtons} container justifyContent="center">
        <Grid item xs={1}>
          <Link data-testid="test" to="/start" style={{ textDecoration: 'none' }}>
            <Button
              value={1}
              onClick={takeNumQuestions}
              variant="contained"
              className={classes.button}
            >
              1
            </Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/start" style={{ textDecoration: 'none' }}>
            <Button
              value={2}
              onClick={takeNumQuestions}
              variant="contained"
              className={classes.button}
            >
              2
            </Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/start" style={{ textDecoration: 'none' }}>
            <Button
              value={3}
              onClick={takeNumQuestions}
              variant="contained"
              className={classes.button}
            >
              3
            </Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/start" style={{ textDecoration: 'none' }}>
            <Button
              value={4}
              onClick={takeNumQuestions}
              variant="contained"
              className={classes.button}
            >
              4
            </Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/start" style={{ textDecoration: 'none' }}>
            <Button
              value={5}
              onClick={takeNumQuestions}
              variant="contained"
              className={classes.button}
            >
              5
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
