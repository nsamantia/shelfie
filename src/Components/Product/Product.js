import React, {Component} from 'react'

export default class Product extends Component{
   


    render(){

        return(
            <div>
               
               <h1>{this.props.data.name}</h1>
               <h1>{this.props.data.price}</h1>
               <h1>{this.props.data.img}</h1>
               <button onClick={this.props.deleteProduct}>Remove</button>
               
            </div>
        )
    }
}