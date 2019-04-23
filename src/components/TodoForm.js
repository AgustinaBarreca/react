import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(){
    super();
    this.state= {
      title: '',
      responsible: '',
      description: '',
      priority: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e){
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
      console.log(this.state);
  }

  render(){
    return (
      <div className= "col-md-4">
          <div className="card">
            <h1> FORMULARIO </h1>
            <form className="card-body"/>
              <div className="form-group">
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="title"
                    onChange={this.handleInput}
                  />
              </div>
              <div className="form-group">
                  <input type="text"
                  name="responsible"
                  className="form-control"
                  placeholder="responsible"
                  onChange={this.handleInput}
                />
              </div>
              <div className="form-group">
                  <input type="text"
                  name="description"
                  className="form-control"
                  placeholder="description"
                  onChange={this.handleInput}
                  />
              </div>
              <div className="form-group">
                  <input type="text"
                  name="priority"
                  className="form-control"
                  placeholder="priority"
                  onChange={this.handleInput}
                />
              </div>

          </div>
      </div>
    )
  }

}

export default TodoForm;
