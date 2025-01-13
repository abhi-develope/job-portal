import React, { useState } from 'react'


import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { RadioGroup } from '../ui/radio-group';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER_API_END_POINT } from '../utils/constant';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '../redux/authSlice';
import { Loader2 } from 'lucide-react';


const Signup = () => {
    const navigate = useNavigate();
    const {loading} = useSelector(store=>store.auth)
    const dispatch = useDispatch();
  
    const [input, setInput] = useState({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword:"",
      role: "",
      file: null,
    });
    
    // const [file, setFile] = useState(null);
    
  
    const changeEventHandler = (e) => {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    };
  
   
    const changeFileHandler = (e)=>{
      const file = e.target.files?.[0];
      setInput({ ...input, file })
  }

    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append("name", input.name);
      formData.append("email", input.email);
      formData.append("password", input.password);
      formData.append("phone", input.phone);
      formData.append("role", input.role);
      if (input.file) {
        formData.append("file", input.file);
      }

      // Add password confirmation logic
      if (input.password !== input.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
  
      try {
        dispatch(setLoading(true));
        const res = await axios.post(`${USER_API_END_POINT}/signup`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        });
  
        if (res.data.success) {
            
          dispatch(setUser(res.data.user)) 
          navigate("/");
          toast.success(res.data.message || 'Signup successful!');
          
          
        }
      } catch (error) {
        console.error(error);
        const errorMessage = error.response?.data?.message || "Something went wrong!";
        toast.error(errorMessage);
      } finally{
        dispatch(setLoading(false));
      }
    };
   
  return (
    
    <div>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4 bg-gray-50 rounded-lg shadow" encType="multipart/form-data">
      <h2 className="text-xl font-bold text-center">Signup Form</h2>

      {/* Full Name */}
      <div className="space-y-1">
        <Label >Full Name</Label>
        <Input type="text" name="name"  value={input.name} onChange={changeEventHandler} placeholder="Enter your full name" required />
      </div>

      {/* email */}
      <div className="space-y-1">
        <Label htmlFor="email">email</Label>
        <Input type="email" name="email" value={input.email} onChange={changeEventHandler}  placeholder="Enter email" required />
      </div>

      {/* Phone Number */}
      <div className="space-y-1">
        <Label >Phone Number</Label>
        <Input type="tel" name="phone"  value={input.phone} onChange={changeEventHandler} placeholder="Enter your phone number" required />
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

      {/* Password */}
      <div className="space-y-1">
        <Label >Password</Label>
        <Input type="password" name="password"  value={input.password} onChange={changeEventHandler} placeholder="Enter your password" required />
      </div>

      {/* Confirm Password */}
      <div className="space-y-1">
        <Label >Confirm Password</Label>
        <Input type="password" name="confirmPassword" value={input.confirmPassword} onChange={changeEventHandler}  placeholder="Confirm your password" required />
      </div> 

      {/* File Upload */}
      <div className="space-y-1">
        <Label >Upload Profile Picture</Label>
        <Input accept='image/*' type="file" name='file'   onChange={changeFileHandler}  />
      </div>

      {/* Submit Button */}
      {loading ? (
          <Button className="w-full">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            please wait
          </Button>
        ) : (
          <Button type="submit" className="w-full">
            Signup
          </Button>
        )}
      <p className='text-sm text-slate-500'>already have an account ? <span className='text-sm underline text-blue-500'><Link to='/login'>Login</Link></span></p>
    </form>
 

    </div>
  )
}

export default Signup
