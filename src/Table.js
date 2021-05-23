import React from 'react';
import './style.css';
import React, {Component} from 'react';

class Table extends Component {
  render() {
    const characterData = this.props.characterDataTrue

    return (
      <table> 
        <TableHeader/>
        <TableBody characterData={characterData}/>
      </table>
    )
  }
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

//const TableBody = () => {
  //return (
    //<tbody/>
  //)
//}

export default Table


