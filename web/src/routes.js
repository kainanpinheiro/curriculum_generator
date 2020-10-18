import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CreateCurriculo from './pages/CreateCurriculo';
import CurriculoList from './pages/CurriculoList';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CurriculoList} />
        <Route path="/curriculo" component={CreateCurriculo} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
