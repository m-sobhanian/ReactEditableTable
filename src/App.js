import React, { Component } from 'react';
import './App.css';
import Table from './_components/Table';
import {tableSchema} from './_constant';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{color:'#fff', textShadow:'#00000047, 1px, 1px, 5px'}}>Editable table</h1>
        <Table num={2} numRow={3} schema={tableSchema}/>
      </div>
    );
  }
}


export default App;
