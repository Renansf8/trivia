import React, { useState, useEffect } from 'react';
import TriviaContext from './TriviaContext';
import PropTypes from 'prop-types';
import { fetchAPi } from '../services';

const TriviaProvider = ({ children }) => {
  const [questionsNumber, setQuestionsNumber] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchAPi(questionsNumber).then(data => {
      setQuestions(data.data.results);
    });
  }, [questionsNumber]);

  const takeNumQuestions = e => {
    setQuestionsNumber(e.target.value);
  };

  const contextValue = {
    questionsNumber,
    setQuestionsNumber,
    questions,
    takeNumQuestions,
  };

  return <TriviaContext.Provider value={contextValue}>{children}</TriviaContext.Provider>;
};

TriviaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TriviaProvider;
