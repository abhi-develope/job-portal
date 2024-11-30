import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { useSelector } from "react-redux";


const UpdateDialogBox = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false)
    const {user} = useSelector(store=>store.auth)

    const [input, setInput] = useState({
        name:user?.name,
        email:user?.email,
        bio:user?.profile?.bio,
        phone:user?.phone,
        skills:user?.profile?.skills,
        file:user?.profile?.resume,
    })

    const changeEventHandler = ()=>{
        setInput({...input,[e.target.name]:e.target.value})
    }
  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="sm:max-w-[425px]"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form>
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
                  name="resume"
                  value={input.file}
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
