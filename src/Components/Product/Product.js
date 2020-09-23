import React, {Component} from 'react'

export default class Product extends Component{
   constructor(props){
       super(props)
       this.state = {
           name: this.props.data.name,
           price: this.props.data.price,
           imgurl: this.props.data.imgurl,
           editMode: false
       }
       
   }
   
   editProduct = () =>{
       this.setState({
           editMode: !this.state.editMode
       })
       
   }

   handleChange(e){
       this.setState({
           [e.target.name]: e.target.value
       })
   }

    render(){
            const{name, price, imgurl} = this.state
        return(
            <div>
              {this.state.editMode? (
                  <div>
                    <input name ="name" value={this.state.name} onChange={(e) => this.handleChange(e)}></input> 
                    <input name="price" value={this.state.price} onChange={(e) => this.handleChange(e)}></input>  
                    <input name="imgurl" value={this.state.imgurl} onChange={(e) => this.handleChange(e)}></input>  
                    <button onClick={() => this.props.editProd(this.props.data.id, {name, price, imgurl})}>Save</button>
                  </div>
              ): (
                  <div>
                       
               <h1>{this.props.data.name}</h1>
               <h1>{this.props.data.price}</h1>
               <h1>{this.props.data.imgurl}</h1>
               <button onClick={this.props.deleteProduct}>Remove</button>
               <button onClick={this.editProduct}>Edit</button>
                  </div>
              )}
            </div>
        )
    }
}