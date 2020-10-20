import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CreateCurriculo from './pages/CreateCurriculo';
import CurriculoList from './pages/CurriculoList';
import Curriculo from './pages/Curriculo';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CurriculoList} />
        <Route path="/curriculo/create" component={CreateCurriculo} />
        <Route path="/curriculo/:id" component={Curriculo} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
