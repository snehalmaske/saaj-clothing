import React from 'react';
import {Switch, Route } from "react-router-dom";
import Homepage from './Homepage';
import Header from './Header';
import Register from './Register';




function App() {
  return (
    <div>
    <Header/>
    <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signin" component={Register} />
        
    </Switch>
    
    </div>
    
  );
}

export default App;
