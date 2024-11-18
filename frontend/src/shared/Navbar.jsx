import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Popover, PopoverTrigger } from '@/components/ui/popover'
import { PopoverContent } from '@radix-ui/react-popover'
import React from 'react'

const Navbar = () => {
    const user = false;
  return (
    <>
    <div  className='flex items-center justify-between gap-5 mx-auto max-w-7xl h-16'>
    <div>
      <h1 className='text-2xl font-bold'>job<span className='text-red-600'>Portal</span></h1>
    </div>
    <div>
      <ul className='flex gap-5 items-center font-medium'>
        <li>Home</li>
        <li>Jobs</li>
        <li>Browse</li>

      {
        !user?(
           <div className='flex gap-1'>
             <Button variant='secondary'>Signup</Button>
             <Button variant='outline'>Login</Button>
           </div>
        ):( <Popover >
            <PopoverTrigger asChild >
            <Avatar className='cursor-pointer'>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            
          </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-40 mr-5 pl-2 py-1">
             <div className='flex gap-1'>
             <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
      
          <h3>Hi! Abhishek Prajapati</h3>
         
             </div>
             <div className='pl-3'>
             <Button variant="link">View Profile</Button>
             <Button variant="link" className='mt-[-13px]'>logout</Button>
             </div>
            </PopoverContent>
          </Popover>)
      }  
   
      </ul>
    </div>
    </div>
    </>
  )
}

export default Navbar
