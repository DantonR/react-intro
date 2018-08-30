import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './form.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          item: 'Apples'
        },
        {
          id: 2,
          item: 'Pears'
        },
        {
          id: 3,
          item: 'Bananas'
        }
      ], // list array end
      text: 'HELLO WORLD',
      style: 'empty',
      jumboClass: 'jumbotron text-center',
      darkTheme: false
    } // this.state end

    this.changeText = this.changeText.bind(this)
    this.addNewItemToList = this.addNewItemToList.bind(this)
  } // constructor end

  render(){
    return (
      <div>
        <div className={this.state.jumboClass}>
          <h1 className={this.state.style}>Shopping List</h1>
          <h3>{this.state.text}</h3>
          <ShoppingList list={this.state.list}/>
          <hr />

          <Form addNew={this.addNewItemToList}></Form>
          <button onClick={this.changeText}>Change state of H3</button>
          <button onClick={this.changeStyle}>Change style</button>
        </div>
      </div>
    )
  } // render ends

  changeText(e) {
    e.preventDefault();
    console.log(this.state);
    
    // alert('h3 will be changed')
    this.setState({
      text: 'Button has been clicked',
      jumboClass: 'jumbotron text-center jumboDark'
      // darkTheme: !this.state.darkTheme
    })
    console.log(this.state);


    // if(this.state.darkTheme === true){
    //   this.setState({
    //     jumboClass: 'jumbotron text-center jumboDark'
    //   })
    // } else {
    //   this.setState({
    //     jumboClass: 'jumbotron text-center'
    //   })
    // }
      
  } // end change text

  addNewItemToList(item) {
    var newItem = {
      id: this.state.list.length + 1,
      item: item
    }

    this.setState({list: this.state.list.concat(newItem)} )
  }

  changeStyle(e) {
    e.preventDefault();
    this.setState({style: 'display-4'})
  }
} // component ends
        

class ShoppingList extends Component {
  render(){
    return (
      <div>
        <ul className="list-group">
          {
            this.props.list.map(product => {
              return <li key={product.id} product={product} className="list-group-item">{product.item}</li>
            })
          }
          
        </ul>
      </div>
    )
  }
}






ReactDOM.render(<App />, document.getElementById('root'));