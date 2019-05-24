import React from 'react'
import Header from '../components/Header'
//import Form from '../components/Form'
import List from '../components/List'

import '../css/App.css'

function App() {
  return (
    <div className="App">
    <Header title = "รายรับ-รายจ่าย"/>
    <List />
    </div>
  );
}

export default App;
