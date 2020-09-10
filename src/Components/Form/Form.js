import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class Form extends Component{
    constructor(){
        super()
        this.state = {
            name: "",
            price: '',
            imgurl: ""
        }
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeImgurl = this.handleChangeImgurl.bind(this)
        this.handleChangePrice = this.handleChangePrice.bind(this)
        // this.handleAdd = this.handleAdd.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.addNewProd = this.addNewProd.bind(this)
        
    }

    handleChangeName(event){
        this.setState({name: event.target.value})
    }
    handleChangePrice(event){
        this.setState({price: event.target.value})
    }
    handleChangeImgurl(event){
        this.setState({imgurl: event.target.value})
    }

    handleClear(event){
        this.setState({
            ...this.state,
            name: '',
            price: '',
            imgurl: ''

        })
    }

   

    addNewProd(){
       const {name, price, imgurl} = this.state
       const newProd = {name, price, imgurl}
       this.props.addProduct(newProd)
       this.setState({
           name: '',
           price: '',
           imgurl: ''
       })
      }

   
    
    
    
    render(){

        return(
            <div>
                {/* <Link to ="/">Back to the Dashboard</Link> */}
                <form>
                <div>
                    <input value={this.state.input} type="text" onChange={this.handleChangeName}/>
                    <input value={this.state.input} type="text" onChange={this.handleChangePrice} />
                    <input value={this.state.input} type="text" onChange={this.handleChangeImgurl}/>
                </div>
                <div>
                    <button  className="cancel-add-buttons" type="button" onClick={this.handleClear}>Cancel</button>
                    <button className="cancel-add-buttons"  type="button" onClick={this.addNewProd} >Add</button>
                </div>
                </form>
                
            </div>
        )
    }
}
