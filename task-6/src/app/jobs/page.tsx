import { use } from "react";
import JobDetail from "@/components/jobDetail/page";
import Link from 'next/link'

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

      <div className=" bg-white backdrop-blur-md shadow shadow-2xl text-black p-4 w-[50%]  h-[80%] overflow-auto  scroll-hide">
         <div className="flex">

            <div className="flex flex-col ml-4">
              <h1 className="font-poppins font-black text-[25px] text-[rgba(37,50,75,1)]" > opportunites </h1>
              <h2 className="mb-5 text-[15px]" > showing {jobs.length} results </h2>
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
            {jobs.map((job: any, i: number) => (
            <Link
              key={job.id}
              href={`/components/jobcard/${job.id}`}
              className=""
            >
              <JobDetail key={i} job={job} />
            </Link>
            ))}
          
        </div>
      </div>

    </div>
  )
}

export default jOBS
