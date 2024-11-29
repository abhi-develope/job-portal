import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Popover, PopoverTrigger } from '@/components/ui/popover'
import { PopoverContent } from '@radix-ui/react-popover'
import { CircleUser, LogOut} from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const {user} = useSelector(store => store.auth)
  return (
    <>
    <div  className='flex items-center justify-between gap-5 mx-auto max-w-7xl h-16'>
    <div>
      <h1 className='text-2xl font-bold'>job<span className='text-red-600'>Portal</span></h1>
    </div>
    <div>
      <ul className='flex gap-5 items-center font-medium'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/jobs'>Jobs</Link></li>
        <li><Link to='/browse'>Browse</Link></li>
       

      {
        !user?(
           <div className='flex gap-1'>
             <Link to='/signup'><Button variant='secondary'>Signup</Button></Link>
             <Link to='/login'><Button variant='outline'>Login</Button></Link>
           </div>
        ):( <Popover >
            <PopoverTrigger asChild >
            <Avatar className='cursor-pointer'>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            
          </Avatar>
            </PopoverTrigger>
            <PopoverContent >
            
      
          <div className='rounded-md shadow-lg z-10 bg-slate-300 '>
          <h3 className='p-1'>Hi! Abhishek Prajapati</h3>
          <p className='p-2 -mt-3 text-sm text-gray-500 pr-4'>Lorem ipsum, dolor sit amet consectetur</p>
         
         <div className='pl-3'>
         <Button variant="link"><CircleUser/><Link to='/profile'>View Profile</Link></Button>
         <Button variant="link" className='mt-[-13px]'><LogOut/>logout</Button>
         </div>
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
