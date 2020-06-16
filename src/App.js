import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter  } from 'react-router-dom';
import Todo from './modules/toDo';
import { Switch, Route } from 'react-router-dom';
import AppOri from './AppReactOri';

function App() {
  return (
    <div>
      <BrowserRouter basename={'/'}>
        <Switch>
          <Route path="/todo" exact component={Todo} />
          <Route path="/" component={AppOri} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
