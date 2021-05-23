import React from 'react';
import './style.css';

import React, {Component} from 'react';
import Table from "./Table";


class App extends Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
      {
        name: 'Ehis',
        job: 'Senior Frontend Engineer',
      },
    ],
  }

  removeCharacter = (index) => {
  const {characters} = this.state

  this.setState({
    characters: characters.filter((character, i) => {
      return i !== index
    }),
  })
}

  render() {
    const { characters } = this.state   
    return (
      <div className="table table-striped">
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
          
      </div>
    )
  }
}

export default App