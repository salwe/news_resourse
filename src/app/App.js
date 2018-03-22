import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { PageTemplate } from './pages/PageTemplate';
import { Home } from './pages/Home';
import AllNews from './pages/AllNews';
import News from './pages/News';
import * as constants from './constants';

class App extends Component {
  render() {    
    return (
      <PageTemplate>
        <Switch>
          <Route exact path={constants.URL_HOME} component={Home}/>
          <Route exact path={constants.URL_ALL_NEWS} component={AllNews}/>
          <Route exact path={`${constants.URL_ALL_NEWS}/:pageId`} component={News}/>
        </Switch>

      </PageTemplate>
    );
  }
}

export default App;
