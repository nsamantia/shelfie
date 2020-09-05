import React from 'react'
import Product from '../Product/Product'


   
const Dashboard = (props) =>{
    return(
        <div>
            {props.productTest.map((element) =>{
            return(
                <Product
                product = {props.name}
                key={element.id}
                data={element}
                />
            )
})}
        </div>
    )
}

    export default Dashboard
    
