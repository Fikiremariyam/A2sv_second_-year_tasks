import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery} from '../features/reducers/dummyData'
import AddNewProduct from './addnewproduct';

const SpecificProduct = () => {
    const {id} = useParams() || "fuck u"; 
    
    console.log("here is the id " , id)
    const {data , isError , isLoading} = useGetProductByIdQuery(id);
    
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

    return (
    <div>
      {data?.brand}
      {data?.category}
      
      <AddNewProduct data={data?.id || 0 } />    
    </div>
  )
}

export default SpecificProduct
