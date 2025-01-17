import React from 'react'
import Jobcard from './Jobcard'
import { useSelector } from 'react-redux'





const LatestJobs = () => {
  const {jobs} = useSelector(store=>store.jobs)
  return (
    <div className='max-w-7xl mx-auto my-20'>
      <h1 className='text-4xl font-bold'><span className='text-blue-500'>Latest & Top</span> Jobs Opnenings</h1>
      <div className='grid grid-cols-3 gap-4 my-5'>
        {
            jobs.length <= 0 ? <span>No job Available</span> : jobs.slice(0,6).map((job)=> (
                <Jobcard key={job._id} job= {job}/>
            ))
        }
      </div>
    </div>
    
  )
}

export default LatestJobs
