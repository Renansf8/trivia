import React, { useState, useEffect } from 'react';
import TriviaContext from './TriviaContext';
import PropTypes from 'prop-types';
import { fetchAPi } from '../services';

const TriviaProvider = ({ children }) => {
  const [questionsNumber, setQuestionsNumber] = useState(4);
  const [questions, setQuestions] = useState([]);
  const [hits, setHits] = useState(0);

  useEffect(() => {
    fetchAPi(questionsNumber).then(data => {
      setQuestions(data.data.results);
    });
  }, [questionsNumber]);

  const contextValue = {
    questionsNumber,
    setQuestionsNumber,
    questions,
    setHits,
    hits,
  };

  return <TriviaContext.Provider value={contextValue}>{children}</TriviaContext.Provider>;
};

TriviaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TriviaProvider;
