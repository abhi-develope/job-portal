import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
 
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { USER_API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import axios from "axios";
import { setUser } from "../redux/authSlice";


const UpdateDialogBox = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false)
    const {user} = useSelector(store=>store.auth)
    const dispatch = useDispatch()

    const [input, setInput] = useState({
        name:user?.name,
        email:user?.email,
        bio:user?.profile?.bio,
        phone:user?.phone,
        skills:user?.profile?.skills,
        file:user?.profile?.resume,
    })

    const changeEventHandler = (e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }

    const fileChangeHandler = (e)=>{
        const file = e.target.files?.[0];
        setInput({...input, file})
    }

    const submitHandler = async(e)=>{
        e.preventDefault()
        const formData = new FormData();
        formData.append("name",input.name);
        formData.append("email",input.email);
        formData.append("phone",input.phone);
        formData.append("bio",input.bio);
        formData.append("skills",input.skills);
        if (input.file) {
          formData.append("file", input.file); // Make sure the field name matches Multer's configuration
        }
        try {
          setLoading(true)
            const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData,{
                headers:{
                    'Content-Type':'multipart/form-data'
                },
                withCredentials: true,
            })
            if(res.data.success){
                dispatch(setUser(res.data.user))
                toast.success(res.data.message)
            }
        } catch (error) {
            
            const errorMessage =
              error.response?.data?.message || "Something went wrong!";
            toast.error(errorMessage);
            
        }finally{
          setLoading(false)
        }
        
        setOpen(false);
        
    }
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
     
        <DialogContent
          className="sm:max-w-[425px]"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
            <DialogDescription>
            Keeping your profile up-to-date ensures a better experience and helps others learn more about you.
      </DialogDescription>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={input.name}
                  onChange={changeEventHandler}
                  name="name"
                  className="col-span-3 w-full px-2 py-1 rounded-md"
                />
              </div>
            </div>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  name="email"
                  className="col-span-3 w-full px-2 py-1 rounded-md"
                />
              </div>
            </div>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="phone number">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  value={input.phone}
                  onChange={changeEventHandler}
                  name="phone"
                  className="col-span-3 w-full px-2 py-1 rounded-md"
                />
              </div>
            </div>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="skills">Skills</label>
                <input
                  type="text"
                  id="skills"
                  value={input.skills}
                  onChange={changeEventHandler}
                  name="skills"
                  className="col-span-3 w-full px-2 py-1 rounded-md"
                />
              </div>
            </div>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="bio">Bio</label>
                <input
                  type="text"
                  id="bio"
                  name="bio"
                  value={input.bio}
                  onChange={changeEventHandler}
                  className="col-span-3 w-full px-2 py-1 rounded-md"
                />
              </div>
            </div>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="resume">Resume</label>
                <input
                  type="file"
                  id="resume"
                  name="file"
                  onChange={fileChangeHandler}
                  accept="application/pdf"
                  className="col-span-3 w-full px-2 py-1 rounded-md"
                />
              </div>
            </div>
            <DialogFooter>
              {loading ? (
                <Button className="w-full">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  please wait
                </Button>
              ) : (
                <Button type="submit" className="w-full">
                  Update
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateDialogBox;
