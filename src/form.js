import React, { Component } from 'react';

class Form extends Component{
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit}>
        
        <div class="input-group mb-3">
          <input type="text" class="form-control" ref="newItem" value={this.props.editingValue} onChange={this.onChange} aria-describedby="button-addon2" />
          <div class="input-group-append">
            <button class="btn btn-primary" type="submit" id="button-addon2 btn">{this.props.buttonText}</button>
          </div>
        </div>

        </form>
      </div>
    )
  }

  onSubmit(e){
    e.preventDefault();
    var newItem = this.refs.newItem.value.trim();
    if(!newItem){
      alert('please enter a new item')
      return
    }
    if(this.props.editID === 0){
      this.props.addNew(newItem)
    } else {
      var updatingItem = {
        id: this.props.editID,
        item: newItem
      }
      this.props.updateItem(updatingItem)
    }


    this.refs.newItem.value = ''

  }

  onChange(e){
    this.props.changeText(e.target.value)
  }
}

export default Form;