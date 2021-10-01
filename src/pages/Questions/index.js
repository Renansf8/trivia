import React, { useContext } from 'react';
import TriviaContext from '../../context/TriviaContext';

const Questions = () => {
  const { questionsNumber } = useContext(TriviaContext);

  console.log(questionsNumber);

  return <h1>Página de perguntas</h1>;
};

export default Questions;
