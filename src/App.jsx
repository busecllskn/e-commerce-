import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageContent from './layout/PageContent';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/product" component={ProductsPage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/about" component={ProductsPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </PageContent>
    </Router>
  );
}

export default App;