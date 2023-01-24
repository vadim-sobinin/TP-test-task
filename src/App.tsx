import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import ProductPage from './pages/ProductPage';
import './scss/style.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/product/:id" component={ProductPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
