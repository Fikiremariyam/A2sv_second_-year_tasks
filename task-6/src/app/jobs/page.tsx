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

      <div className="bg-white/5 backdrop-blur-md shadow text-black p-4 w-1/2 h-1/2 overflow-auto overflow-hidden">
        <h1 className="text-10 font-bold mb-6 text-gray-700 drop-shadow-lg">Job Listings</h1>
        <div className="  flex flex-col gap-6 max-h-full overflow-auto scroll-hide">
          {jobs.map((job: any, i: number) => (
            <JobCard key={i} job={job} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default jOBS
