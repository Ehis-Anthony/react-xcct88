import React from 'react';
import React, {Component} from 'react';


class Form extends Component {

   constructor(props) {
        super(props);
        
        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }


    handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value,
    });
    }

  //submitForm = () => {
  //this.props.handleSubmit(this.state)
  //this.setState(this.initialState)
  //}

    onFormSubmit = (event) => {
          event.preventDefault();
          
          this.props.handleSubmit(this.state);
          this.setState(this.initialState);
      }

    render() {
    const { name, job } = this.state;

    return ( 
      <form onSubmit={this.onFormSubmit}>
      <div className="mb-3">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange} />
          </div>
          <div className="mb-3">
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange} />
          </div>
          <input type="button" value="Submit" onClick={this.onFormSubmit} />
      </form>

    );
  }
  
}

export default Form;