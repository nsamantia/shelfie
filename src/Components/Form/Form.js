import React, {Component} from 'react'

export default class Form extends Component{
    constructor(){
        super()
        this.state = {
            name: "",
            price: 0,
            imgurl: ''
        }
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeImgurl = this.handleChangeImgurl.bind(this)
        this.handleChangePrice = this.handleChangePrice.bind(this)
        // this.handleAdd = this.handleAdd.bind(this)
        this.handleClear = this.handleClear.bind(this)
        
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

    handleClear(){
        this.setState({name: ""})
    }
    
    
   



    render(){

        return(
            <div>
                <div>
                    <input value={this.state.input} type="text" onChange={this.handleChangeName}/>
                    <input value={this.state.input} type="text" onChange={this.handleChangePrice} />
                    <input value={this.state.input} type="text" onChange={this.handleChangeImgurl}/>
                </div>
                <div>
                    <button  className="cancel-add-buttons" type="button" >Cancel</button>
                    <button className="cancel-add-buttons" type="button" onClick={e => this.handleAdd}>Add</button>
                </div>
                
            </div>
        )
    }
}
