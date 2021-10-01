import React, { useContext, useState } from 'react';
import TriviaContext from '../../context/TriviaContext';
import { Redirect } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Questions = () => {
  const { questionsNumber, questions, setHits } = useContext(TriviaContext);
  const [index, setIndex] = useState(0);

  const resetQuestions = () => {
    setIndex(prevState => prevState + 1);
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
          resetQuestions(), setHits(prevState => prevState + 1);
        }}
      >
        {questions[index].correct_answer}
      </Button>
      {questions[index].incorrect_answers.map((incorrect, i) => {
        return (
          <Button variant="contained" onClick={() => resetQuestions()} key={i}>
            {incorrect}
          </Button>
        );
      })}
    </div>
  );
};

export default Questions;
