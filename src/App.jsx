import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageContent from './layout/PageContent';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutUsPage from './pages/AboutUsPage';

function App() {
  return (
    <Router>
      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/product" component={ProductsPage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/about" component={AboutUsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/team" component={TeamPage} />
        </Switch>
      </PageContent>
    </Router>
  );
}

export default App;