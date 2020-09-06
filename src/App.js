import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
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
  
    componentDidMount(){
      axios.get('/api/inventory')
      .then(res => {
        this.setState({
          inventory: res.data
        })
      })
    }

    render(){

      

  return (
    <div className="App">
    

      <Dashboard productTest={this.state.inventory}/>
      <Form />
      <Header />
  
    </div>
  )
}
}


export default App;
