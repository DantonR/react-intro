import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './form.js';

class App extends Component {
  render(){
    return (
      <div>
        <div className="jumbotron text-center">
          <h1 className="display-4">Shopping List</h1>
          <ShoppingList/>
          <hr />

          <Form></Form>
        </div>
      </div>
    )
  }
}
        

class ShoppingList extends Component {
  render(){
    return (
      <div>
        <ul class="list-group">
          <li class="list-group-item">Cras justo odio</li>
        </ul>
      </div>
    )
  }
}






ReactDOM.render(<App />, document.getElementById('root'));