import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <div>
      <Navigation />
    </div>
    <div>
      <Route path="/" component={Home} exact />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
    </div>
  </div>
);

export default App;
