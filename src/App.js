import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginScreen from './Screens/Login';
import MainScreen from './Screens/Main';

function App() {
  return (
    <Router>
        <Route path="/" exact component={LoginScreen} />
        <Route path="/main" exact component={MainScreen} />
    </Router>
  );
}

export default App;
