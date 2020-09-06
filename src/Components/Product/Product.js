import React, {Component} from 'react'

export default class Product extends Component{
   


    render(){

        return(
            <div>
               
               <h1>{this.props.data.name}</h1>
               
            </div>
        )
    }
}