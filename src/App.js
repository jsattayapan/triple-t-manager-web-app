import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginScreen from './Screens/Login';
import RestaurantMain from './Sections/RestaurantMain';

function App() {
  return (
    <Router>
        <Route path="/" exact component={LoginScreen} />
        <Route path="/restaurant" exact component={RestaurantMain} />
    </Router>
  );
}

export default App;
