import React, { Component } from 'react'; 
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import EditProduct from './components/EditProduct';

class App extends Component {
 
  render() {
    return (
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/edit-product' component={EditProduct} />
      </Router>
    )
  }
}

export default connect()(App);
