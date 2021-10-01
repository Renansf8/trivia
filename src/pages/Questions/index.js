import React, { useContext } from 'react';
import TriviaContext from '../../context/TriviaContext';

const Questions = () => {
  const { questionsNumber, questions } = useContext(TriviaContext);

  console.log(questionsNumber);
  console.log(questions);

  return (
    <div>
      <h1>Página de perguntas</h1>
    </div>
  );
};

export default Questions;
