import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { JOB_API_END_POINT } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { setSingleJob } from '../redux/jobSlice';

const Jobdescription = () => {
  const isApplied = false;
  const params = useParams()
  const jobId = params.id
  const dispatch = useDispatch()
  const {singleJob} = useSelector(store=>store.jobs)
  const user = useSelector(store=>store.auth)

  useEffect(()=>{
    const fetchSingleJob = async () => {
        try {
          const res = await axios.get(`${JOB_API_END_POINT}/jobsById/${jobId}`, {withCredentials:true}) 
          if(res.data.success){
              dispatch(setSingleJob(res.data.job))
          } 
        } catch (error) {
            console.log(error);
            
        }
    }
    fetchSingleJob()
  }, [jobId, dispatch, user?._id])
  
  return (
    <div className='max-w-7xl mx-auto p-6'>
      <h1 className='font-bold'>{singleJob?.title}</h1>
      <div className='flex justify-between'>
      <div className='flex gap-2 items-center mt-4'>
        <Badge className={'text-blue-700 font-bold '} variant="ghost">{singleJob?.position} Position</Badge>
        <Badge className={'text-red-600 font-bold '} variant="ghost">{singleJob?.jobType}</Badge>
        <Badge className={'text-purple-800 font-bold '} variant="ghost">{singleJob?.salary} LPA</Badge>
        
      </div>
      <Button disabled={isApplied} className={`rounded-full ${isApplied?'bg-slate-400 text-black':'bg-black'}`}>{isApplied?"Already Applied":"Apply Now"}</Button>

      </div>
      <h1 className='border-b-2 border-b-gray-400 font-medium py-4'>{singleJob?.description}</h1>
      <div>
        <h1 className='font-bold my-2'>Role: <span className='py-4 text-gray-500 text-sm'>{singleJob?.title}</span></h1>
        <h1 className='font-bold my-2'>Location: <span className='py-4 text-gray-500 text-sm'>{singleJob?.location}</span></h1>
        <h1 className='font-bold my-2'>Experience: <span className='py-4 text-gray-500 text-sm'>{singleJob?.exprience}year</span></h1>
        <h1 className='font-bold my-2'>Description: <span className='py-4 text-gray-500 text-sm'>{singleJob?.description}</span></h1>
        <h1 className='font-bold my-2'>Total Applicant: <span className='py-4 text-gray-500 text-sm'>{singleJob?.applications.length}</span></h1>
        <h1 className='font-bold my-2'>Posted Date: <span className='py-4 text-gray-500 text-sm'>{singleJob?.createdAt.split("T")[0]}</span></h1>
      </div>
    </div>
  )
}

export default Jobdescription
