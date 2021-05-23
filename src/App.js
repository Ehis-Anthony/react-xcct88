import React from 'react';
import './style.css';

import React, {Component} from 'react';
import Table from "./Table";


class App extends Component {
  render() {
    
    const characters = [
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
    ]
    

    return (
      <div className="table table-striped">
        <Table characterDataTrue={characters}/>
          
      </div>
    )
  }
}

export default App