import { setJobs } from '@/components/redux/jobSlice'
import { JOB_API_END_POINT } from '@/components/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllJobs = () => {
    const dispatch =  useDispatch()
  useEffect(()=>{
    const fetchAllJobs = async () => {
        try {
          const res = await axios.get(`${JOB_API_END_POINT}/allJobs`, {withCredentials:true}) 
          if(res.data.success){
              dispatch(setJobs(res.data.jobs))
          } 
        } catch (error) {
            console.log(error);
            
        }
    }
    fetchAllJobs()
  }, [])
}

export default useGetAllJobs
