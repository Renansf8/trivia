import axios from 'axios';

export const fetchAPi = numOfQuestions => {
  const request = axios.get(`https://opentdb.com/api.php?amount=${numOfQuestions}`);
  return request;
};
