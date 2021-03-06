import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TriviaContext from '../../context/TriviaContext';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    marginTop: 32,
  },
  title: {
    color: '#fffffe',
    display: 'flex',
    fontFamily: 'Courgette',
    fontSize: 40,
    justifyContent: 'center',
    marginBottom: 16,
  },
  hits: {
    alignItems: 'center',
    color: '#fffffe',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Courgette',
    fontSize: 18,
  },
  span: {
    color: '#1976d2',
    fontSize: 20,
    fontFamily: 'Courgette',
    fontWeight: 600,
    paddingLeft: 8,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#fffffe',
    borderRadius: 8,
    boxShadow: '5px 5px 5px #848484',
    fontFamily: 'Courgette',
    margin: 20,
    minWidth: 360,
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
  },
  answers: {
    fontSize: 20,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 32,
  },
});

const Feedback = () => {
  const { questionsNumber } = useContext(TriviaContext);
  const classes = useStyles();

  console.log(questionsNumber);

  const {
    player: {
      hits,
      miss,
      questions: { answer },
    },
  } = JSON.parse(localStorage.getItem('score'));

  const { marked } = JSON.parse(localStorage.getItem('markedQ'));

  return (
    <Container className={classes.root}>
      <Typography className={classes.title} variant="p">
        Feedback
      </Typography>
      <Box className={classes.hits}>
        <Typography variant="p">
          Number of hits:
          <Typography className={classes.span} variant="span">
            {hits}
          </Typography>
        </Typography>
        <Typography variant="p">
          Number of errors:
          <Typography className={classes.span} variant="span">
            {miss}
          </Typography>
        </Typography>
      </Box>
      <Grid className={classes.container}>
        <Box elevation={4} className={classes.box}>
          <Typography className={classes.answers} variant="p">
            Correct answers:
          </Typography>
          {answer.map((a, i) => {
            return (
              <Typography variant="p" key={i}>
                Question {i + 1} -{' '}
                <Typography className={classes.span} variant="span">
                  {a}
                </Typography>
              </Typography>
            );
          })}
        </Box>
        <Box className={classes.box}>
          <Typography className={classes.answers} variant="p">
            Marked answers:
          </Typography>
          {marked.map((m, i) => {
            return (
              <Typography variant="p" key={i}>
                Question {i + 1} -{' '}
                <Typography className={classes.span} variant="span">
                  {m}
                </Typography>
              </Typography>
            );
          })}
        </Box>
      </Grid>
      <Box className={classes.button}>
        <Link style={{ textDecoration: 'none' }} to="/">
          <Button variant="contained">Play again</Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Feedback;
