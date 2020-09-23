import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form'
import routes from './routes'
import Product from './Components/Product/Product';

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: [],
      currentProd: '',
      
      
    }
      this.componentDidMount = this.componentDidMount.bind(this)
      this.addProduct = this.addProduct.bind(this)
      this.deleteProduct = this.deleteProduct.bind(this)
      this.editProd = this.editProd.bind(this)
    }
  
    componentDidMount(){
      axios.get(`/api/inventory`)
      .then(res => {
        this.setState({
          inventory: res.data
        })
      })
      .catch(err => console.log(err))
    }
    
  addProduct(product){
    axios.post(`/api/product`, product)
    .then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  deleteProduct= (id) => {

    
    axios.delete(`/api/product/${id}`, )
    .then(res => {
      this.setState({
        inventory: res.data
        
      })
    }) .catch((err) => {
      console.log(err)
    })
  }

  editProd(id, prodInfo){
    axios.put(`/api/inventory/${id}`, prodInfo)
    .then(res => {
      this.setState({
        inventory:res.data
      }) 
      }).catch((err) => {
        console.log(err)
    })
  }

    render(){

      

 
      return (
        <div className="App">
    
          <Dashboard productTest={this.state.inventory} deleteProduct={this.deleteProduct} editProd={this.editProd}/>
          <Form addProduct={this.addProduct}  />
          <Header />
          {/* {routes} */}
      
        </div>
      )
    }
    }
    
    


export default App;
