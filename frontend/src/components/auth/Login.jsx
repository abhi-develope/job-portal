import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import axios from 'axios';
import { toast } from 'sonner';
import { USER_API_END_POINT } from '../utils/constant';
import { Button } from '../ui/button';


const Login = () => {
    const navigate = useNavigate();
  
    const [input, setInput] = useState({
      name: "",
      email: "",
      phone: "",
      password: "",
      role: "",
      file: null,
    });
    
    
  
    const changeEventHandler = (e) => {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    };
  
   
        
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      
      formData.append("email", input.email);
      formData.append("password", input.password);
      formData.append("role", input.role);
     
      try {
        const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
  
        if (res.data.success) {
            
            
          navigate("/");
          toast.success(res.data.message);
          
          
        }
      } catch (error) {
        console.error(error);
        const errorMessage = error.response?.data?.message || "Something went wrong!";
        toast.error(errorMessage);
      }
    };
   
  return (
    
    <div>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4 bg-gray-50 rounded-lg shadow" encType="multipart/form-data">
      <h2 className="text-xl font-bold text-center">Login Form</h2>

      
      {/* email */}
      <div className="space-y-1">
        <Label htmlFor="email">email</Label>
        <Input type="email" name="email" value={input.email} onChange={changeEventHandler}  placeholder="Enter email" required />
      </div>

     {/* Password */}
     <div className="space-y-1">
        <Label >Password</Label>
        <Input type="password" name="password"  value={input.password} onChange={changeEventHandler} placeholder="Enter your password" required />
      </div>

      {/* User Role (Radio Group) */}
      <div className="space-y-1">
        <Label>User Role</Label>
        <RadioGroup defaultValue="student" name="student" className="space-y-2">
          <div className="flex items-center space-x-2">
            <input type="radio" 
               name='role'
               value='student'
               checked={input.role == 'student'}
               onChange={changeEventHandler}
               className='cursor-pointer'
            />
             <Label >Student</Label>
          </div>
          <div className="flex items-center space-x-2">
            <input type='radio'name='role'
               value='recruiter'
               checked={input.role == 'recruiter'}
               onChange={changeEventHandler}
               className='cursor-pointer' />
            <Label htmlFor="user">Recruiter</Label>
          </div>
        </RadioGroup>
      </div>

      

      

      

      {/* Submit Button */}
      <Button type="submit" className="w-full">
        Login
      </Button>
      <p className='text-sm text-slate-500'>Don't have account ? <span className='text-sm underline'><Link to='/signup'>Signup</Link></span></p>
    </form>
 

    </div>
  )
}

export default Login



