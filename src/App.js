import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form'

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: []
    }
    }
  

    render(){
  return (
    <div className="App">
      <Dashboard />
      <Form />
      <Header />
  
    </div>
  )
}
}


export default App;
