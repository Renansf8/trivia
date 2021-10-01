import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TriviaContext from '../../context/TriviaContext';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Home = () => {
  const { setQuestionsNumber } = useContext(TriviaContext);

  return (
    <div>
      <Typography variant="h2" color="primary" align="center" gutterBottom>
        Bem vindo(a) à Trivia
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Escolha o número de perguntas à responder:
      </Typography>
      <Grid container justifyContent="center">
        <Grid xs={1}>
          <Link to="/start" style={{ textDecoration: 'none' }}>
            <Button
              value={1}
              onClick={e => setQuestionsNumber(e.target.value)}
              variant="contained"
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
