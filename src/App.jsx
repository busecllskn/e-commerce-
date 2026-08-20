import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageContent from './layout/PageContent';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutUsPage from './pages/AboutUsPage';
import Signup from './pages/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <PageContent>
        <ToastContainer position="top-right" autoClose={3000} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/product" component={ProductsPage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/about" component={AboutUsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/team" component={TeamPage} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </PageContent>
    </Router>
  );
}

export default App;