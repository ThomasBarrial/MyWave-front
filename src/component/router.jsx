import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Userform from './Userform/Userform';

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/findYourPerfectWave" component={Userform} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Router;
