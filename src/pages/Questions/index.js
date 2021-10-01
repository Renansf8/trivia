import React, { useContext, useState } from 'react';
import TriviaContext from '../../context/TriviaContext';
import { Redirect } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Questions = () => {
  const { questionsNumber, questions } = useContext(TriviaContext);
  const [index, setIndex] = useState(0);

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
    <div>
      <Typography variant="h5">Category: {questions[index].category}</Typography>
      <Typography variant="h5">Question: {renderQuestions()}</Typography>
      <Button
        variant="contained"
        onClick={() => {
          resetQuestions(), sumHits(), takeAnswers(), takeMarkedQuestions();
        }}
        value={questions[index].correct_answer}
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
            value={incorrect}
          >
            {incorrect}
          </Button>
        );
      })}
    </div>
  );
};

export default Questions;
