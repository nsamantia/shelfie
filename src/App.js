import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form'
import routes from './routes'

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: [],
      id: ''
    }
      this.componentDidMount = this.componentDidMount.bind(this)
      this.addProduct = this.addProduct.bind(this)
      this.deleteProduct = this.deleteProduct.bind(this)
    }
  
    componentDidMount(){
      axios.get(`/api/inventory`)
      .then(res => {
        this.setState({
          inventory: res.data
        })
      })
    }

    
  addProduct(product){
    axios.post(`/api/product`, product)
    .then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  deleteProduct(){

    
    axios.delete(`/api/product/${this.state.id}`)
    .then(res => {
      this.setState({
        inventory: res.data
        
      })
    })
  }

    render(){

      

  return (
    <div className="App">

      <Dashboard productTest={this.state.inventory} deleteProduct={this.deleteProduct}/>
      <Form addProduct={this.addProduct} />
      <Header />
      {/* {routes} */}
  
    </div>
  )
}
}


export default App;
