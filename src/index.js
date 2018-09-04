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
      darkTheme: false,
      editID: 0,
      buttonText: 'Add New Item',
      editingValue: ''
    } // this.state end

    this.changeText = this.changeText.bind(this)
    this.addNewItemToList = this.addNewItemToList.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleChangeText = this.handleChangeText.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleDelete =this.handleDelete.bind(this)
  } // constructor end

  render(){
    return (
      <div>
        <div className={this.state.jumboClass}>
          <h1 className={this.state.style}>Shopping List</h1>
          <h3>{this.state.text}</h3>
          <ShoppingList 
            list={this.state.list}
            editItem={this.handleEdit}
            deleteItem={this.handleDelete}
          />
          <hr />

          <Form
            {...this.state} 
            addNew={this.addNewItemToList}
            updateItem={this.handleUpdate}
            changeText={this.handleChangeText}
          ></Form>
          <button onClick={this.changeText}>Change state of H3</button>
          <button onClick={this.changeStyle}>Change style</button>
          <button onClick={this.removeItem}>Remove Item</button>
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

  handleEdit(itemToEdit){
    console.log('working');
    
    this.setState({
      editID: itemToEdit.id,
      buttonText: 'Edit Item',
      editingValue: itemToEdit.item
    })
    
  }

  handleDelete(itemToDelete){
    console.log(itemToDelete);
    var allItems = this.state.list;
    for (var i = 0; i < allItems.length; i++) {
        if(allItems[i].id === itemToDelete.id){
            allItems.splice(i, 1);
            break;
        }
    }
    for (var j = 0; j < allItems.length; j++) {
        allItems[j].id = j+1;
    }
    this.setState({list: allItems});
  }

  handleUpdate(updatedItem){
    var allItems = this.state.list
    for (let i = 0; i < allItems.length; i++) {
      if(allItems[i].id === updatedItem.id) {
        allItems[i].item = updatedItem.item
        break
      }
    }
    this.setState({
      list: allItems,
      editID: 0,
      buttonText: 'Add New Item',
      editingValue: ''
    })
  }


      

  handleChangeText(inputValue){
    this.setState({
      editingValue: inputValue
    })
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
              return <li key={product.id} product={product} className="list-group-item">{product.item}<span className="controls"> <span className="edit" onClick={this.edit.bind(this, product)}>Edit</span> <span className="delete" onClick={this.delete.bind(this, product)}>Delete</span></span></li>
            })
          }
          
        </ul>
      </div>
    )
  }

  edit(product) {
    this.props.editItem(product)
  }

  delete(product) {
    this.props.deleteItem(product)
    
  }
}






ReactDOM.render(<App />, document.getElementById('root'));