import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Layout/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import CreateProject from './components/projects/CreateProject';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard}></Route>
          <Route path='/project/:id' component={ProjectDetails}></Route>
          <Route path='/signin' component={SignIn}></Route>
          <Route path='/signup' component={SignUp}></Route>
          <Route path='/create' component={CreateProject}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
