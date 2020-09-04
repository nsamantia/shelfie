import React from 'react'
import Product from '../Product/Product'


   
const Dashboard = (props) =>{
    return (
    {props.Product.map(props =><h2>{props.name}</h2>)}
    )
}

    export default Dashboard
    
