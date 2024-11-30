import React from 'react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge';

const isApplied = false;
const Jobdescription = () => {
  return (
    <div className='max-w-7xl mx-auto p-6'>
      <h1 className='font-bold'>Frontend Developer</h1>
      <div className='flex justify-between'>
      <div className='flex gap-2 items-center mt-4'>
        <Badge className={'text-blue-700 font-bold '} variant="ghost">12 Position</Badge>
        <Badge className={'text-red-600 font-bold '} variant="ghost">Part Time</Badge>
        <Badge className={'text-purple-800 font-bold '} variant="ghost">24LPA</Badge>
        
      </div>
      <Button disabled={isApplied} className={`rounded-full ${isApplied?'bg-slate-400 text-black':'bg-black'}`}>{isApplied?"Already Applied":"Apply Now"}</Button>

      </div>
      <h1 className='border-b-2 border-b-gray-400 font-medium py-4'>Job Description</h1>
      <div>
        <h1 className='font-bold my-2'>Role: <span className='py-4 text-gray-500 text-sm'>Frontend Developer</span></h1>
        <h1 className='font-bold my-2'>Location: <span className='py-4 text-gray-500 text-sm'>Noida</span></h1>
        <h1 className='font-bold my-2'>Experience: <span className='py-4 text-gray-500 text-sm'>0-1year</span></h1>
        <h1 className='font-bold my-2'>Description: <span className='py-4 text-gray-500 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat pariatur quidem doloribus obcaecati blanditiis ratione quisquam nemo?</span></h1>
        <h1 className='font-bold my-2'>Total Applicant: <span className='py-4 text-gray-500 text-sm'>4</span></h1>
        <h1 className='font-bold my-2'>Posted Date: <span className='py-4 text-gray-500 text-sm'>12-06-2030</span></h1>
      </div>
    </div>
  )
}

export default Jobdescription
