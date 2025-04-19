"use client";
import { LuCircleCheck } from "react-icons/lu";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { IoAddCircleOutline } from "react-icons/io5";


import "@/app/globals.css";
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

const JobCard = () => {
  const router = useRouter();
  const {job}=router.query;

  const [jobDetails, setJobDetails] = useState<Job | null>(null);


  useEffect(() => {
     try {
        if (job) {
          try {
            const data = JSON.parse(job as string);
            setJobDetails(data);
          } catch (error) {
            console.error("Invalid JSON format:", error);
          }
        } else {
          console.error("Job is undefined or null");
        }
        
      } catch (error) {
        console.error("Failed to fetch job details:", error);
      }
    

  }, [job]);

  if (!jobDetails) {
    return <div>Loading job details...</div>;
  }


  return (
  
    <div className="h-screen flex items-center justify-center ">

    <div className=" h-[90vh] mt-40  w-[80%] child flex  max-w-4xl mx-auto bg-white shadow-md rounded-lg   gap-1 ">
   
      <div className="mt-4  w-[75%] h-full flex flex-col gap-0.5 p-6  ">

        <div className=" h-40">
            <h1 className="font-black text-[25px] mt-5 "> Description </h1>
            <div className="w-[100%]  mt-3 text-[12px]"> {jobDetails.description}</div>
        </div>

        <div className=" h-50">
        <h1 className="font-black text-[25px] mt-5 "> Responsibilites </h1>
      
      <ul className="list-disc  mt-3 text-[12px]">
        {jobDetails.responsibilities.map((responsibility, index) => (
             <li key={index} className="flex ">
             
             <LuCircleCheck className="mr-2 text-green-600 " />
             {responsibility}
             </li>
        ))}
      </ul>

        </div> 

         <div className=" h-auto">
            <h1 className="font-black text-[25px] mt-5 "> Ideal Candidate we want </h1>
            <ul className="text-[10px] list-disc ml-5">

              <li className=" list-disc font-bold items-end">
              Age:  
               {jobDetails.ideal_candidate.age}
              </li>

              <li className="font-bold  list-disc ">
              Gender : 
              {jobDetails.ideal_candidate.gender}
              </li>
              
              <li className="font-bold list-disc ">
               {jobDetails.ideal_candidate.traits}
              </li>

            </ul>

        </div>

        <div className="  text-[15px]  h-50">
              
            <h1 className="font-black text-[25px] mt-5 "> When & Where  </h1>
            <div className="flex p-3">
            <GrLocation className="text-[15px]"/>
           <h1 className="ml-5 text-[10px]"> {jobDetails.when_where}</h1>
            </div>
           
        </div>



      </div>

      <div className="  w-[30%] ml-3 mt-4 h-[80vh] mt-0  ">
       
        <div className=" p-2 h-auto shadow ">
          <h1 className=" font-extrabold text-1xl "> About </h1>
              
          <div className="jobCard  h-[15%] flex ">
                  <img src='../plus_circle.png' alt='location' className='w-12 h-12 p-2'/>

                <div className="discription text-[10px] justify-center flex flex-col">
                  <h1> Posted On </h1>
                  <h1 className="text-[12px] font-bold">{jobDetails.about.posted_on}</h1>
                  

                </div>
              </div>

              <div className="jobCard  h-[15%] flex ">
                  <img src='../frame.png' alt='location' className='w-12 h-12 p-2'/>
                <div className="discription text-[10px] justify-center flex flex-col">
                  <h1> Deadline </h1>
                  <h1 className="text-[12px] font-bold">{jobDetails.about.posted_on}</h1>
                </div>
              </div>

              <div className="jobCard  h-[15%] flex ">
                  <img src='../Location.png' alt='location' className='w-12 h-12 p-2'/>
          

                <div className="discription text-[10px] justify-center flex flex-col">
                  <h1> Location </h1>
                  <h1 className="text-[12px] font-bold">{jobDetails.about.posted_on}</h1>
                  

                </div>
              </div>

              <div className="jobCard  h-[15%] flex ">
                  <img src='../start.png' alt='location' className='w-12 h-12 p-2'/>
                <div className="discription text-[10px] justify-center flex flex-col">
                  <h1> Start Date </h1>
                  <h1 className="text-[10px] font-bold">{jobDetails.about.posted_on}</h1>
                </div>
              </div>

              <div className="jobCard  h-[15%] flex ">
                  <img src='../Endpoint.png' alt='location' className='w-12 h-12 p-2'/>
                <div className="discription text-[10px] justify-center flex flex-col">
                  <h1> End date </h1>
                  <h1 className="text-[12px] font-bold">{jobDetails.about.posted_on}</h1>
                </div>
              </div>

        </div>


        <div className="h-auto p-3 shadow">
          <h1 className=" text-[15px] font-extrabold"> Catagories </h1>
          <div className="flex  text-[10px]">
         
          {jobDetails.about.categories && jobDetails.about.categories.map((category, index) => (
                <button 
                key={index} 
                className={`rounded-2xl px-4 py-1 w-auto h-5 w-auto ml-2 px-4 py-1 ${
                index % 2 === 0 
                  ? 'border-yellow-300 text-yellow-300 bg-yellow-50' 
                  : 'border-green-600 text-green-600 bg-green-50'
                }`}
                >
                {category}
                </button>
              ))}

          </div>
          </div>

          <div className="h-auto p-3 shadow">
          <h1 className=" text-[15px] font-extrabold"> required skills </h1>
         
          <div className="  text-[10px] ">

          {jobDetails.about.required_skills && jobDetails.about.required_skills.map((category, index) => (
                <button 
                key={index} 
                className="rounded-2xl px-4 py-1 w-auto h-auto ml-2 border-blue-900 text-blue-900 bg-blue-50"
                >
                {category}
                </button>
              ))}
         
         

          </div>
          </div>
        
        </div>
      </div>
    </div>
    );
};

export default JobCard;