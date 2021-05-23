import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Userform from './Userform/Userform';
import SpotDetails from './spotDetails';
import Settings from './Userform/Settings/settings';

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/findYourPerfectWave" component={Userform} />
          <Route path="/spot/:id" component={SpotDetails} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Router;
