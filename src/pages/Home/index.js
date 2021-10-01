import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TriviaContext from '../../context/TriviaContext';
import { makeStyles } from '@material-ui/styles';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles({
  header: {
    marginTop: 32,
    marginBottom: 40,
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
    justifyContent: 'center',
    fontFamily: 'Courgette',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#6246ea',
  },
  containerButtons: {
    marginTop: 32,
    marginLeft: 24,
  },
});

const Home = () => {
  const { setQuestionsNumber } = useContext(TriviaContext);
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.header}>
        <Typography
          className={classes.title}
          color="primary"
          variant="p"
          align="center"
          gutterBottom
        >
          Bem vindo(a) à Trivia
        </Typography>
        <Typography
          className={classes.paragraph}
          variant="p"
          align="center"
          gutterBottom
          component="p"
        >
          Escolha o número de perguntas à responder:
        </Typography>
      </Container>
      <Grid className={classes.containerButtons} container justifyContent="center">
        <Grid xs={1}>
          <Link to="/start" style={{ textDecoration: 'none' }}>
            <Button
              value={1}
              onClick={e => setQuestionsNumber(e.target.value)}
              variant="contained"
              className={classes.button}
            >
              1
            </Button>
          </Link>
        </Grid>
        <Grid xs={1}>
          <Link to="/start" style={{ textDecoration: 'none' }}>
            <Button
              value={2}
              onClick={e => setQuestionsNumber(e.target.value)}
              variant="contained"
              className={classes.button}
            >
              2
            </Button>
          </Link>
        </Grid>
        <Grid xs={1}>
          <Link to="/start" style={{ textDecoration: 'none' }}>
            <Button
              value={3}
              onClick={e => setQuestionsNumber(e.target.value)}
              variant="contained"
              className={classes.button}
            >
              3
            </Button>
          </Link>
        </Grid>
        <Grid xs={1}>
          <Link to="/start" style={{ textDecoration: 'none' }}>
            <Button
              value={4}
              onClick={e => setQuestionsNumber(e.target.value)}
              variant="contained"
              className={classes.button}
            >
              4
            </Button>
          </Link>
        </Grid>
        <Grid xs={1}>
          <Link to="/start" style={{ textDecoration: 'none' }}>
            <Button
              value={5}
              onClick={e => setQuestionsNumber(e.target.value)}
              variant="contained"
              className={classes.button}
            >
              5
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
