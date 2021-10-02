import React, { useContext, useState } from 'react';
import TriviaContext from '../../context/TriviaContext';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Questions = () => {
  const { questionsNumber, questions } = useContext(TriviaContext);
  const [index, setIndex] = useState(0);

  const useStyles = makeStyles({
    root: {
      backgroundColor: '#fffffe',
      borderRadius: 8,
      boxShadow: '5px 5px 5px #848484',
      margin: '40px auto',
      maxWidth: 600,
      padding: '32px 0',
    },
    question: {
      color: '#fffffe',
      display: 'flex',
      fontFamily: 'Courgette',
      fontSize: 40,
      justifyContent: 'center',
      paddingTop: 24,
    },
    paragrah: {
      display: 'flex',
      justifyContent: 'center',
      fontFamily: 'Courgette',
      fontSize: 20,
    },
    span: {
      color: '#1976d2',
      fontFamily: 'Courgette',
      fontSize: 20,
      fontWeight: 600,
      paddingRight: 6,
    },
    containerButtons: {
      margin: '0 auto',
      marginTop: 32,
      maxWidth: 400,
    },
  });

  const classes = useStyles();

  const resetQuestions = () => {
    setIndex(prevState => prevState + 1);
  };

  const sumHits = () => {
    const getScore = JSON.parse(localStorage.getItem('score'));
    localStorage.setItem(
      'score',
      JSON.stringify({
        player: {
          ...getScore.player,
          hits: getScore.player.hits + 1,
        },
      })
    );
  };

  const sumMiss = () => {
    const getScore = JSON.parse(localStorage.getItem('score'));
    localStorage.setItem(
      'score',
      JSON.stringify({
        player: {
          ...getScore.player,
          miss: getScore.player.miss + 1,
        },
      })
    );
  };

  const takeAnswers = () => {
    const getScore = JSON.parse(localStorage.getItem('score'));
    localStorage.setItem(
      'score',
      JSON.stringify({
        player: {
          ...getScore.player,
          questions: {
            answer: [
              ...getScore.player.questions.answer,
              questions[index].correct_answer,
            ],
          },
        },
      })
    );
  };

  const takeMarkedQuestions = () => {
    const getScore = JSON.parse(localStorage.getItem('markedQ'));
    localStorage.setItem(
      'markedQ',
      JSON.stringify({
        marked: [...getScore.marked, questions[index].correct_answer],
      })
    );
  };

  const takeMarkedWrongQuestions = i => {
    const getScore = JSON.parse(localStorage.getItem('markedQ'));
    localStorage.setItem(
      'markedQ',
      JSON.stringify({
        marked: [...getScore.marked, questions[index].incorrect_answers[i]],
      })
    );
  };

  const renderQuestions = () => {
    const { question } = questions[index];
    const fixedQuestion = question
      .replace(/&quot;/gi, '')
      .replace(/&#039;/gi, '')
      .replace(/&eacute/gi, '')
      .replace(/&amp/gi, '');
    return fixedQuestion;
  };

  if (index >= questionsNumber) return <Redirect to="/feedback" />;
  return (
    <>
      <Typography variant="p" className={classes.question}>
        Question {index + 1}
      </Typography>
      <Container className={classes.root}>
        <Typography className={classes.paragrah} variant="p" gutterBottom>
          <Typography className={classes.span} variant="span">
            Category:
          </Typography>
          {questions[index].category}
        </Typography>
        <Typography className={classes.paragrah} variant="p" gutterBottom>
          <Typography className={classes.span} variant="span">
            Question:
          </Typography>
          {renderQuestions()}
        </Typography>
        <Grid className={classes.containerButtons} container flexDirection="column">
          <Button
            variant="contained"
            onClick={() => {
              resetQuestions(), sumHits(), takeAnswers(), takeMarkedQuestions();
            }}
            value={questions[index].correct_answer}
            className={classes.button}
            style={{ margin: '8px' }}
          >
            {questions[index].correct_answer}
          </Button>
          {questions[index].incorrect_answers.map((incorrect, i) => {
            return (
              <Button
                variant="contained"
                onClick={() => {
                  resetQuestions(), sumMiss(), takeAnswers(), takeMarkedWrongQuestions(i);
                }}
                key={i}
                style={{ margin: '8px' }}
              >
                {incorrect}
              </Button>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Questions;
