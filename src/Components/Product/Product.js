import React, {Component} from 'react'

export default class Product extends Component{
   


    render(){

        return(
            <div>
               <input type ='image' src={this.props.data.imgurl} />
            </div>
        )
    }
}