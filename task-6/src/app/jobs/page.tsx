import { use } from "react";

import JobCard from "../../components/jobcard/page";


const fetchJobs = async ()  => {
  const res = await fetch('http://localhost:3000/api/jobs', {
      cache: 'no-store' // or 'force-cache' if you want caching
    });
    if (!res.ok) throw new Error('Failed to fetch jobs');
    return res.json();
  };

const jOBS = async () => {

  
  const jobs  =  await fetchJobs();
  
  return (
    
    
    <div className="h-screen flex items-center justify-center ">

      <div className=" bg-white backdrop-blur-md shadow shadow-2xl text-black p-4 w-[50%]  h-1/2 overflow-auto overflow-hidden">
       <div className="flex">
            <div className="flex flex-col ml-4">
              <h1 className="font-poppins font-black text-[45px] text-[rgba(37,50,75,1)]" > opportunites </h1>
              <h2 className="mb-5"> showing {jobs.length} results </h2>
            </div>
            <div className="mr-15 ml-auto flex items-center gap-2">
              <span className="text-gray-500">Sort by:</span>
              <select className="  px-2 py-1">
              <option value="relevance">Relevance</option>
              <option value="date">Date</option>
              <option value="salary">Salary</option>
              <option value="location">Location</option>
              <option value="company">Company</option>
              </select>
            </div>
        </div>
        <div className="   flex flex-col gap-6 max-h-full overflow-auto scroll-hide">
          {jobs.map((job: any, i: number) => (
            <JobCard key={i} job={job} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default jOBS
