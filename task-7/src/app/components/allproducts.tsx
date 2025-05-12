import React from 'react'
import { useGetAllProductsQuery}  from '../features/reducers/dummyData'
import Counter from './counter'
import { Link } from 'react-router-dom'
const Allproducts = () => {

    const {data,isError,isLoading} = useGetAllProductsQuery()
    console.log(data)

    if (isError){
        return <h1> opps! we got an error  </h1>
    }
    if (isLoading){
      return <h1> Loading... </h1>
    }
    if (!data){
        return <h1> No data found </h1>
    }
    
  return  <div>
    {data.products.map((product) => (
       
      <div  key = {product.id}>
        <Link to = { `/product/${product.id}` }>
       

      <h1 key = {product.id}> {product.title}</h1>
      
      </Link>
      </div>

    ))
    }

    </div>
  
}

export default Allproducts
