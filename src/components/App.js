import React from 'react';
import {Switch, Route } from "react-router-dom";
import Homepage from './Homepage';
import Header from './Header';




function App() {
  return (
    <div>
    <Header/>
    <Switch>
        <Route exact path="/" component={Homepage} />
        
    </Switch>
    
    </div>
    
  );
}

export default App;
