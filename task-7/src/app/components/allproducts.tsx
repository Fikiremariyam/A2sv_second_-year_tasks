import React from 'react'
import { useGetAllProductsQuery}  from '../service/dummyData'
const Allproducts = () => {
    const {data,isError,isLoading} = useGetAllProductsQuery()
    if (isError){
        return <h1> opps! we got an error  </h1>
    }
    if (isError){
        return <h2></h2>

    }

  return (
    <div>
      All the products 
    </div>
  )
}

export default Allproducts
