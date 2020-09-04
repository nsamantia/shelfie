import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form'

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: [{
        name:"Toy",
        price: "5.00",
        imgurl: "https://www.ikea.com/us/en/images/products/fabler-bjoern-soft-toy__0710165_PE727396_S5.JPG"
      },
      {
        name:"Game",
        price: "10.00",
        imgurl:"https://www.hallmark.com/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dw2988f8f8/images/finished-goods/Monopoly-Hallmark-Channel-Board-Game-root-MN002704_MN002704_02.jpg_Source_Image.jpg?sw=1920"
      }
    ]
    }
      
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
