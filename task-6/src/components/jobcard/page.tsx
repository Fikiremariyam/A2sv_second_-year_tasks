
import React from 'react'


type Job = {
  title: string;
  description: string;
  responsibilities: string[];
  ideal_candidate: {
    age: string;
    gender: string;
    traits: string[];
  };
  when_where: string;
  about: {
    posted_on: string;
    deadline: string;
    location: string;
    start_date: string;
    end_date: string;
    categories: string[];
    required_skills: string[];
  };
  company: string;
  image: string;  
  };
  
   
const JobCard = ( { job} :{ job:Job } ) => {
  return (
    <div>
     
      <div className=" bg-white shadow h-auto p-6 rounded-4xl border border-gray-200 hover:shadow-md transition mt-0 gap-2 px-8 py-10 flex flex-col items-center justify-center mx-auto" >
        <div className="flex">
          <div className="w-15 h-15 -mt-3 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-700 font-bold text-sm">A</span>
          </div>

          <div className="w-[80%] ml-5 -mt-3 space-y-2">
            <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
            <p className="text-sm text-gray-500 mb-1">{job.company} • <span className="mx-1"></span>{job.when_where}</p>
            <div className="mt-5  ">
          {job.description}

        </div>
        </div>
        </div>

       


        
      </div>
      

      
    </div>  
  )
}

export default JobCard
