import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

const Herosection = () => {
  return (
    <div className='text-center'>
        <div className='flex flex-col gap-5'>
      <span className='rounded-full mx-auto bg-slate-200 text-red-600 font-bold py-2 px-4 '>No. 1 job hunt portal</span>
      <h1 className='text-5xl font-bold'>Search,Apply & <br /> Get Your <span className='text-blue-600'>Dream Job</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sequi modi dolore sit hic libero veniam cupiditate harum architecto sunt.</p>
      
      <div className='flex overflow-hidden shadow-lg w-[40%] items-center mx-auto rounded-full border border-gray-200' >
        <input type="text"
        placeholder='search your dream jobs'
        className='flex-grow outline-none border-none px-4 py-2 ' />
        <Button className='rounded-r-full   '>
            <Search className='h-5 w-5  '/>
        </Button>
      </div>
      </div>
    </div>
  )
}

export default Herosection
