import React from 'react';
import './App.css';
import Table from './Table'
import {getTableData} from './API';

function App() {
  return (
    <div><Table getTableData={getTableData}/></div>
  );
}

export default App;
