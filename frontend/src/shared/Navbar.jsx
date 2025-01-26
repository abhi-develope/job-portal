import { setUser } from '@/components/redux/authSlice'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Popover, PopoverTrigger } from '@/components/ui/popover'
import { USER_API_END_POINT } from '@/components/utils/constant'
import { PopoverContent } from '@radix-ui/react-popover'
import axios from 'axios'
import { CircleUser, LogOut} from 'lucide-react'
import React from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const {user} = useSelector(store => store.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const logoutHandler = async () =>{
      
     try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {withCredentials:true})
      if(res.data.success){
        dispatch(setUser(null))
        navigate('/')
        toast.success(res.data.message)
      }
     } catch (error) {
         console.log(error);
         toast.error(error.response.data.message)
         
     }

    }
  return (
    <>
    <div  className='flex items-center justify-between gap-5 mx-auto max-w-7xl h-16'>
    <div>
      <h1 className='text-2xl font-bold'>job<span className='text-red-600'>Portal</span></h1>
    </div>
    <div>
      <ul className='flex gap-5 items-center font-medium'>
        {
          user && user.role === "recruiter" ? (
            <>
             <li><Link to='/getCompany'>Companies</Link></li>
             <li><Link to='/adminJobs'>Jobs</Link></li>
            </>
          ):(
            <>
             <li><Link to='/'>Home</Link></li>
        <li><Link to='/jobs'>Jobs</Link></li>
        <li><Link to='/browse'>Browse</Link></li>
       
            </>
          )
        }
       

      {
        !user?(
           <div className='flex gap-1'>
             <Link to='/signup'><Button variant='secondary'>Signup</Button></Link>
             <Link to='/login'><Button variant='outline'>Login</Button></Link>
           </div>
        ):( <Popover >
            <PopoverTrigger asChild >
            <Avatar className='cursor-pointer'>
            <AvatarImage src={user.profile.profilePicture} alt="@shadcn" />
            
          </Avatar>
            </PopoverTrigger>
            <PopoverContent >
            
      
          <div className='rounded-md shadow-lg z-10 bg-slate-300 '>
          <h3 className='p-1'>{user?.name}</h3>
          <p className='p-2 -mt-3 text-sm text-gray-500 pr-4'>{user?.profile?.bio}</p>
         
         <div className='pl-3'>
         {
          user && user.role === "student" &&  (<Button variant="link"><CircleUser/><Link to='/profile'>View Profile</Link></Button>)
         }
         <Button onClick={logoutHandler} variant="link" className='mt-[-13px]'><LogOut/>logout</Button>
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
