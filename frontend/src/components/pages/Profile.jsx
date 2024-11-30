import Navbar from '@/shared/Navbar'
import React, { useState } from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Contact, FileDown, Mail, Pen } from 'lucide-react'
import { Badge } from '../ui/badge'
import AplliedTableJobs from './AplliedTableJobs'
import UpdateDialogBox from './UpdateDialogBox'
  
const skills = ["Html", "Css", "Javascript", "react"]
const Profile = () => {
    const [open, setOpen] = useState(false);
  return (
      <div>
        <Navbar/>
        <div className='max-w-4xl mx-auto rounded-2xl border border-gray-200 bg-white my-5 p-8 '>
            <div className='flex justify-between'>
            <div className='flex gap-4 items-center'>
            <Avatar className='h-24 w-24'>
                <AvatarImage src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg'/>
            </Avatar>
            <div>
                <h1 className='text-lg font-bold'>Full Name</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, at!</p>
            </div>
            </div>
            <Button onClick={()=>setOpen(true)} variant='outline' className='text-right'><Pen/></Button>
            </div>
            <div className='my-5'>
                <div className='flex gap-3 my-2'>
                    <Mail/>
                    <span>prajapatiabhishek320@gmail.com</span>

                </div>
                <div className='flex gap-3 my-2'>
                    <Contact/>
                    <span>8873645789</span>

                </div>
            </div>
            <div className='my-3'>
                <p>Skills</p>
                <div className='flex gap-2'>
                {
                    skills.length !== 0 ? skills.map((item, index)=>(
                        <Badge key={index}>{item}</Badge>
                    )) : <p>NA</p>
                }
                </div>
            </div>
            <div>
                <h1 className='font-bold'>Resume</h1>

               <a href="https://google.com" target='blank'> <FileDown/>resume.pdf</a>
            </div>
        </div>

        <div className='max-w-4xl mx-auto rounded-2xl border border-gray-200 bg-white'>
            <h1 className='text-lg font-bold p-2'>Applied Jobs</h1>
            <AplliedTableJobs/>
        </div>
        <UpdateDialogBox open={open} setOpen={setOpen}/>
      
    </div>
  )
}

export default Profile
