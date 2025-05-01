import { useParams } from 'next/navigation'
import { useGetProductByIdQuery} from '../features/reducers/dummyData'

const SpecificProduct = () => {
    const {id} = useParams() || "fuck u"; 
    console.log("here is the id " , id?.toString)
    const {data , isError , isLoading} = useGetProductByIdQuery(4);
    console.log(data)
    return (
    <div>
        data
      
    </div>
  )
}

export default SpecificProduct
