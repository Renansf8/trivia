import React, { useState } from 'react';
import TriviaContext from './TriviaContext';
import PropTypes from 'prop-types';

const TriviaProvider = ({ children }) => {
  const [questionsNumber, setQuestionsNumber] = useState(4);

  const contextValue = {
    questionsNumber,
    setQuestionsNumber,
  };

  return <TriviaContext.Provider value={contextValue}>{children}</TriviaContext.Provider>;
};

TriviaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TriviaProvider;
