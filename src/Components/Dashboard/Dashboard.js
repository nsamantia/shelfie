import React from 'react'
import Product from '../Product/Product'
import {Link} from 'react-router-dom'


   
const Dashboard = (props) =>{
    return(
        <div>
            
            {props.productTest.map((element) =>{
            return(
                <Product
                deleteProduct={props.deleteProduct}
                editProd={props.editProd}
                product = {props.product}
                key={element.id}
                data={element}
                />
            )
})}
    {/* <Link to="/add">Go To Forms</Link> */}
        </div>
    )
}

    export default Dashboard