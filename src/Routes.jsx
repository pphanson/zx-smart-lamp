import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Alarm, Power, Location, Maintenance, Strategy, Wheather, Video } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Wheather} />
    <Route path="/alarm" component={Alarm} />
    <Route path="/power" component={Power} />
    <Route path="/location" component={Location} />
    <Route path="/maintenance" component={Maintenance} />
    <Route path="/strategy" component={Strategy} />
    <Route path="/wheather" component={Wheather} />
    <Route path="/video" component={Video} />
  </Switch>
);

export default Routes;
