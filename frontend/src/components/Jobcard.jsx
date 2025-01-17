import React from 'react'
import { Badge } from './ui/badge'

const Jobcard = ({job}) => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200 cursor-pointer'>
      <div>
        <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
        <p className='text-sm text-gray-500'>India</p>
      </div>
      <div>
        <h1 className='text-lg font-bold my-2'>{job?.title}</h1>
        <p className='text-sm text-gray-500'>{job?.description}</p>
      </div>
      <div className='flex gap-2 items-center mt-4'>
        <Badge className={'text-blue-700 font-bold '} variant="ghost">{job?.position} Position</Badge>
        <Badge className={'text-red-600 font-bold '} variant="ghost">{job?.jobType}</Badge>
        <Badge className={'text-purple-800 font-bold '} variant="ghost">{job?.salary} LPA</Badge>
        
        
      </div>
    </div>
  )
}

export default Jobcard
