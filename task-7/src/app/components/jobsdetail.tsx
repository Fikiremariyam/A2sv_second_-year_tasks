import React from 'react'

type Job = {
  id:string;
  title: string;
  responsibilities: string,
  requirements:string,
  location: string,
  opType: string,
  startDate :string,
  endDate: string,
  deadline: string,
  requiredSkills:string[],
  categories:string[],
  idealCandidate:string,
  whenAndWhere:string,
  createdBy:string,
  orgID:string,
  datePosted:string,
  status:string,

applicantsCount:string,
viewsCount:string,
orgName:string,
logoUrl:string,
isBookmarked:string,
isRolling:string,
questions:string,
perksAndBenefits:string,
createdAt:string,
updatedAt:string,
orgPrimaryPhone:string,
orgEmail:string,
isPaid:string,
total_reviews:string,
engagementType:string,
paymentOption:{} ;

  };

const JobDetail = ( { job} :{ job:Job } ) => {
   

  return (
    <div>
    <div className="bg-white shadow-lg h-[30vh]  rounded-4xl border border-gray-200 hover:shadow-2xl hover:scale-105 transition-transform transition-shadow duration-300 mt-0 gap-2 px-8 py-10 flex flex-col items-center justify-center mx-auto w-[90%]" >
      <div className="flex justify-between w-[100%]">
        
        <div className="w-15 h-15 -mt-3 rounded-full bg-gray-300 flex items-center justify-center">
            <img src={job.logoUrl} alt="Company Logo" className="w-12 h-12 rounded-full object-cover" />
        </div>

        <div className="w-[90%] ml-5 -mt-3 space-y-2">
            <h2 className="text-xl font-semibold text-gray-800 text-left">{job.title}</h2>
            <p className="text-sm text-gray-500 mb-1 text-[10px] text-left">{job.orgName} • <span className="mx-1"></span>{job.whenAndWhere}</p>
          <div className="mt-5 text-[10px]  text-left">
               {job.responsibilities}
     	    </div>
      
          <div className='text-[10px] flex '>

           <div className='  overflow-hidden rounded-2xl border-2 border-green-600 text-green-600  h-8 w-auto px-4 py-2'>
                {job.location}
          </div>
        
          <h1 className='text-2xl text-gray-200 shadow'> |</h1>

              {job.categories && job.categories.map((category, index) => (
              <button 
                key={index} 
                className={`rounded-2xl border-2 px-4 py-1 w-auto h-8 w-auto ml-2 px-4 py-1 ${
                index % 2 === 0 
                  ? 'border-yellow-300 text-yellow-300' 
                  : 'border-green-600 text-green-600'
                }`}
              >
                {category}
              </button>
              ))}
        </div>
      </div>
    </div>

     


      
    </div>

      
    </div>  
  )
}

export default JobDetail
