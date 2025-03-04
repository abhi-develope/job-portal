import Navbar from '@/shared/Navbar'
import React from 'react'
import FilterCard from './FilterCard'
import Job from './Job'
import { useSelector } from 'react-redux'
  
// const jobArray = [1, 2, 3, 4, 5, 6, 7, 8]
const Jobs = () => {
  const {jobs} = useSelector(store=>store.jobs)
  return (
    <div>
      <Navbar/>
      <div className='max-w-7xl mx-auto mt-5 flex gap-4'>
      <div className='w-[20%]'>
      <FilterCard/>
      </div>
      
      {
       jobs.length <=0 ? <span>job not found</span>:(
        <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
         <div className='grid grid-cols-3 gap-4'>
         {
             jobs.map((job)=>(
              <Job key={job._id} job={job}/>
            ))
          }

         </div>
        </div>
       )
      }
      
      </div>
      
    </div>
  )
}

export default Jobs
