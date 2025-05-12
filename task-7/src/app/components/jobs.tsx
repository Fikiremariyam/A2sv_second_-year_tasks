
import { useGetAllJobsQuery}  from '../features/reducers/jobs'

import { Link } from 'react-router-dom'
import JobDetail from "./jobsdetail";


const Jobs =  () => {

  
    const {data ,isError:error, isLoading:loading} = useGetAllJobsQuery();
    
    if (loading){

    return <>
    ...loading</>

    }
    if (error){
        return<>
        faild to fethh</>

    }if (!data){
        return <h1> No data found </h1>
    }
  
    console.log(data)
  return (
    
    <>
    
    <div className="h-screen flex items-center justify-center ">

      <div className=" bg-white backdrop-blur-md shadow shadow-2xl text-black p-4 w-[70%]  h-[80%] overflow-auto  scroll-hide">
         <div className="flex">

            <div className="flex flex-col ml-4">
              <h1 className="font-poppins font-black text-[25px] text-[rgba(37,50,75,1)]" > opportunites </h1>
              <h2 className="mb-5 text-[15px]" > showing {data.data.length} results </h2>
            </div>

            <div className="mr-15 ml-auto flex items-center gap-2">
              <span className="text-gray-500 text-[15px]">Sort by:</span>
              <select className="   text-[10px] px-2 py-1">
              <option value="relevance ">Relevance</option>
              <option value="date">Date</option>
              <option value="salary">Salary</option>
              <option value="location">Location</option>
              <option value="company">Company</option>
              </select>
            </div>
        </div>
        <div className="   flex flex-col gap-6  overflow-auto scroll-hide mt-2">
            {
            data.data.map((job: any, i: number) => (
              
              <Link
            key={i}
            to={{
              pathname: `/jobcard/${job.id}`,
              search: `?job=${encodeURIComponent(JSON.stringify(job))}`, // Pass the job object as a query parameter
            }}
            className=""
          >
              
              <JobDetail key={i} job={job} />
            </Link>
            )
            )}
          
        </div>
      </div>

    </div>
    </>
  )
}

export default Jobs
