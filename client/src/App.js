import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import NoMatch from './components/NoMatch';
import {Switch, Route} from 'react-router-dom';
import FetchUser from './components/FetchUser';
import NavBar from './components/NavBar';
import AddVideo from './components/AddVideo';
import './App.scss';

const App = () => (
  <>
    <NavBar />
    <FetchUser>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/upload" component={AddVideo} />
          <Route component={NoMatch} />
        </Switch>
    </FetchUser>
  </>
)

export default App;
