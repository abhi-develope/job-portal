import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { setSingleJob } from '../redux/jobSlice';
import toast from 'react-hot-toast';

const Jobdescription = () => {
  const params = useParams()
  const jobId = params.id
  const dispatch = useDispatch()
  const {singleJob} = useSelector(store=>store.jobs)
  const user = useSelector(store=>store.auth)
  const initialApplied = singleJob?.applications?.some(application=>application.applicant == user?._id) || false;
  const [isApplied, setIsApplied] = useState(initialApplied)


  useEffect(()=>{
    const fetchSingleJob = async () => {
        try {
          const res = await axios.get(`${JOB_API_END_POINT}/jobsById/${jobId}`, {withCredentials:true}) 
          if(res.data.success){
              dispatch(setSingleJob(res.data.job))
              setIsApplied(res.data.job.applications.some(application=>application.applicant === user?._id))   // ensuure it is sync with fetch data or not
          } 
        } catch (error) {
            console.log(error);
            
        }
    }
    fetchSingleJob()
  }, [jobId, dispatch, user?._id])

  const applyHandler = async () =>{
    try {
      const res = await axios.get(`${APPLICATION_API_END_POINT}/applyJobs/${jobId}`, {withCredentials:true})
      if(res.data.success){
        setIsApplied(true)
        const updateSingleJob = {...singleJob,applications:[...singleJob.applications,{applicant:user?._id}]}
        dispatch(setSingleJob(updateSingleJob))   // real time update data
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
      
      
    }
  }
  
  return (
    <div className='max-w-7xl mx-auto p-6'>
      <h1 className='font-bold'>{singleJob?.title}</h1>
      <div className='flex justify-between'>
      <div className='flex gap-2 items-center mt-4'>
        <Badge className={'text-blue-700 font-bold '} variant="ghost">{singleJob?.position} Position</Badge>
        <Badge className={'text-red-600 font-bold '} variant="ghost">{singleJob?.jobType}</Badge>
        <Badge className={'text-purple-800 font-bold '} variant="ghost">{singleJob?.salary} LPA</Badge>
        
      </div>
      <Button onClick={isApplied?null:applyHandler} disabled={isApplied} className={`rounded-full ${isApplied?'bg-slate-400 text-black':'bg-black'}`}>{isApplied?"Already Applied":"Apply Now"}</Button>

      </div>
      <h1 className='border-b-2 border-b-gray-400 font-medium py-4'>{singleJob?.description}</h1>
      <div>
        <h1 className='font-bold my-2'>Role: <span className='py-4 text-gray-500 text-sm'>{singleJob?.title}</span></h1>
        <h1 className='font-bold my-2'>Location: <span className='py-4 text-gray-500 text-sm'>{singleJob?.location}</span></h1>
        <h1 className='font-bold my-2'>Experience: <span className='py-4 text-gray-500 text-sm'>{singleJob?.exprience}year</span></h1>
        <h1 className='font-bold my-2'>Description: <span className='py-4 text-gray-500 text-sm'>{singleJob?.description}</span></h1>
        <h1 className='font-bold my-2'>Total Applicant: <span className='py-4 text-gray-500 text-sm'>{singleJob?.applications?.length}</span></h1>
        <h1 className='font-bold my-2'>Posted Date: <span className='py-4 text-gray-500 text-sm'>{singleJob?.createdAt.split("T")[0]}</span></h1>
      </div>
    </div>
  )
}

export default Jobdescription
