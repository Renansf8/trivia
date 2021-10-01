import React, { useContext, useState } from 'react';
import TriviaContext from '../../context/TriviaContext';
import { Redirect } from 'react-router-dom';

const Questions = () => {
  const { questionsNumber, questions } = useContext(TriviaContext);
  const [index, setIndex] = useState(0);

  const resetQuestions = () => {
    setIndex(prevState => prevState + 1);
  };

  console.log(questionsNumber);
  console.log(questions);
  if (index >= questionsNumber) return <Redirect to="/" />;
  return (
    <div>
      <h1>Página de perguntas</h1>
      <p>Category: {questions[index].category}</p>
      <p>Question: {questions[index].question}</p>
      <button onClick={() => resetQuestions()}>{questions[index].correct_answer}</button>
      {questions[index].incorrect_answers.map((incorrect, i) => {
        return (
          <button onClick={() => resetQuestions()} key={i}>
            {incorrect}
          </button>
        );
      })}
    </div>
  );
};

export default Questions;
