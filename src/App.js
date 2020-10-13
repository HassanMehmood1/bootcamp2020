import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import P01_App from './P01/P01_App';
import P02_App from './P02/P02_App';
import Menu from './Menu';



function App() {
  return (
    <>
    <h1>React Practice Project List </h1>
      <Menu />
      <Switch>
        <Route exact path='/P01' component={P01_App}/>
        <Route exact path='/P02' component={P02_App}/>
      </Switch>
    </>
  );
}

export default App;
