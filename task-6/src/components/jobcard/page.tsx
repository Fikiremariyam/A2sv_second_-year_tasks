import React from 'react'


type Job = {
    title: string;
    company: string;
    location: string;
    description: string;
    deadline:string;
  };
   
const JobCard = ( { job} :{ job:Job } ) => {
  return (
    <div>
     
      <div className="bg-white shadow h-auto p-6 rounded-3xl border border-gray-200 hover:shadow-md transition  mt-0 gap-2 px-8 py-10 flex flex-col items-start">
        
        <div className="flex">
          <div className="w-15 h-15 -mt-3 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-700 font-bold text-sm">A</span>
          </div>

          <div className="ml-5 -mt-3 space-y-2">
            <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
            <p className="text-sm text-gray-500 mb-1">{job.company} • <span className="mx-1"></span>{job.location}</p>
          </div>
        </div>

        <div className="mt-5  ">
          {job.description}

        </div>
        
        <div className="mt-5 flex items-center  gap-3 ">

          <button className=' rounded-2xl border-2 border-green-600 text-green-600 w-20 h-8'>
            IT
          </button>
          <button className=' rounded-2xl border-2 border-yellow-400 text-yellow-300 min-w-20 h-8 px-4'>
            Education
          </button>

        </div>


        
      </div>
      

      
    </div>  
  )
}

export default JobCard
