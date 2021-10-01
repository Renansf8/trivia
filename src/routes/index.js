import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Questions from '../pages/Questions';
import Feedback from '../pages/Feedback';
import Start from '../pages/Start';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/questions" component={Questions} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/start" component={Start} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
