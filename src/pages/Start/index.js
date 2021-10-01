import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Start = () => {
  const createScore = () => {
    localStorage.setItem(
      'score',
      JSON.stringify({
        player: { hits: 0, miss: 0, questions: { marked: [], answer: [] } },
      })
    );
    localStorage.setItem(
      'markedQ',
      JSON.stringify({
        marked: [],
      })
    );
  };

  return (
    <Grid container justifyContent="center">
      <Link to="/questions" style={{ textDecoration: 'none' }}>
        <Button onClick={() => createScore()} variant="contained">
          Start
        </Button>
      </Link>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button color="error" variant="contained">
          Cancel
        </Button>
      </Link>
    </Grid>
  );
};

export default Start;
