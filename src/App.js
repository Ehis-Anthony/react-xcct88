import React from 'react';
import './style.css';

import React, {Component} from 'react';
import Table from "./Table";
import Form from "./Form";


class App extends Component {
  state = {
    characters: [],
  }

  removeCharacter = (index) => {
  const {characters} = this.state

  this.setState({
    characters: characters.filter((character, i) => {
      return i !== index
    }),
  })
  }
  
  //function for submitting of data and updating the parent state
  handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }


  render() {
    const { characters } = this.state   
    return (
      <div className="table table-striped">
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit}/>
          
      </div>
    )
  }
}

export default App