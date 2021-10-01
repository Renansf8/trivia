import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TriviaContext from '../../context/TriviaContext';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  title: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 16,
    fontFamily: 'Courgette',
  },
  hits: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 16,
  },
  span: {
    fontWeight: 600,
    fontSize: 20,
    marginLeft: 8,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  box: {
    margin: 20,
    maxWidth: 400,
    padding: 16,
  },
  background: {},
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
    <Container className={classes.background}>
      <Typography className={classes.title} variant="h4">
        Feedback
      </Typography>
      <Box className={classes.hits}>
        <Typography variant="body1">
          Número de acertos:
          <Typography className={classes.span} component="span">
            {hits}
          </Typography>
        </Typography>
        <Typography variant="body1">
          Número de erros:
          <Typography className={classes.span} component="span">
            {miss}
          </Typography>
        </Typography>
      </Box>
      <Container className={classes.container}>
        <Paper className={classes.box}>
          <Typography>Respostas corretas:</Typography>
          {answer.map((a, i) => {
            return (
              <Typography key={i}>
                Questão{i + 1} -{' '}
                <Typography className={classes.span} component="span">
                  {a}
                </Typography>
              </Typography>
            );
          })}
        </Paper>
        <Paper className={classes.box}>
          <Typography>Respostas marcadas:</Typography>
          {marked.map((m, i) => {
            return (
              <Typography key={i}>
                Questão{i + 1} -{' '}
                <Typography className={classes.span} component="span">
                  {m}
                </Typography>
              </Typography>
            );
          })}
        </Paper>
      </Container>
    </Container>
  );
};

export default Feedback;
