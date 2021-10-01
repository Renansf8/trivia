import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TriviaProvider from './context/TriviaProvider';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TriviaProvider>
        <App />
      </TriviaProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
