import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Questions from '../pages/Questions';
import Feedback from '../pages/Feedback';
import Start from '../pages/Start';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/start" component={Start} />
      <Route path="/questions" component={Questions} />
      <Route path="/feedback" component={Feedback} />
    </Switch>
  );
};

export default Routes;
