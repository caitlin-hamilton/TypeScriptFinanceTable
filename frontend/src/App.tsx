import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table'
import {getTableDataFormatted} from './API';

function App() {
  return (
    <div><Table getTableData={getTableDataFormatted}/></div>
  );
}

export default App;
