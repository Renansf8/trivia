import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TriviaContext from '../../context/TriviaContext';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  paragraph: {
    fontSize: 40,
    backgroundColor: 'violet',
  },
  container: {
    display: 'flex',
  },
  box: {
    margin: 20,
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
    <div>
      <Typography className={classes.paragraph} variant="h4">
        Página de Feedback
      </Typography>
      <Typography variant="body1">Número de acertos: {hits}</Typography>
      <Typography variant="body1">Número de erros: {miss}</Typography>
      <Container className={classes.container}>
        <Box className={classes.box}>
          <Typography>Respostas corretas:</Typography>
          {answer.map((a, i) => {
            return (
              <Typography key={i}>
                Questão{i + 1} - {a}
              </Typography>
            );
          })}
        </Box>
        <Box className={classes.box}>
          <Typography>Respostas marcadas:</Typography>
          {marked.map((m, i) => {
            return (
              <Typography key={i}>
                Questão{i + 1} - {m}
              </Typography>
            );
          })}
        </Box>
      </Container>
    </div>
  );
};

export default Feedback;
