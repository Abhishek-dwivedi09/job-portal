import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";


export default function Signup() {

  const [input, setInput] = useState(
    {
      fullname:"",
      email:"",
      phoneNumber:"",
      password:"",
      role:"",
      file:""
    }
  )

  const navigate = useNavigate();
  const dispatch = useDispatch();
    const {loading} = useSelector(store=>store.auth)

  const changeEventHandler = (e) =>{
    setInput({...input, [e.target.name]:e.target.value})
  }

  const changeFileHandler = (e) =>{
    setInput({...input, file:e.target.files?.[0]});
  }

 const submitHandler = async(e) => {
  dispatch(setLoading(true))

     e.preventDefault();
     const formData = new FormData();
     formData.append("fullname",input.fullname);
     formData.append("email",input.email);
     formData.append("password",input.password);
     formData.append("phoneNumber",input.phoneNumber);
     formData.append("role",input.role);

     if(input.file){
       formData.append("file",input.file);
     }
     try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData,{
       headers:{
        "Content-Type":"multipart/form-data"
       },
       withCredentials:true
      })
      if(res.data.success){
        navigate("/login")
        toast.success(res.data.message)
      }
    
     } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
     }
     finally{
      dispatch(setLoading(false))
    }
 }

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2  flex flex-col gap-1">
            <Label>Full Name</Label>
            <input
              type="text"
              value= {input.fullname}
              name= "fullname"
              onChange={changeEventHandler}
              placeholder="fullname"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="my-2  flex flex-col gap-1">
            <Label>Email</Label>
            <input
              type="text"
              placeholder="email"
              value= {input.email}
              name= "email"
              onChange={changeEventHandler}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="my-2  flex flex-col gap-1">
            <Label>Phone Number</Label>
            <input
              type="text"
              value= {input.phoneNumber}
              name= "phoneNumber"
              onChange={changeEventHandler}
              placeholder="8080808080"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="my-2  flex flex-col gap-1">
            <Label>Password</Label>
            <input
              type="text"
              placeholder="password"
              value= {input.password}
              name= "password"
              onChange={changeEventHandler}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="flex items-center justify-between my-4">
            <RadioGroup
              defaultValue="comfortable"
              className="flex items-center gap-4 my-5"
            >
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked= {input.role == 'student'}
                  onChange={changeEventHandler}
                  className="border-2 border-black w-4 h-4 rounded-full data-[state=checked]:bg-black cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center gap-3">
              <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked= {input.role == 'recruiter'}
                  onChange={changeEventHandler}
                  className="border-2 border-black w-4 h-4 rounded-full data-[state=checked]:bg-black cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
                <Label>Profile</Label>
                <input 
                accept="image/*"
                type="file" 
                onChange={changeFileHandler}
               className="cursor-pointer"
                />

            </div>
          </div>
          
            {
              loading ? <Button className="w-full my-4"> <Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please wait</Button>:<Button type="submit" className =" w-full my-4 bg-black text-white hover:bg-gray-900">
              Signup
            </Button>
              }
          
          {/* <Button type="submit" className =" w-full my-4 bg-black text-white hover:bg-gray-900">
            Signup
          </Button> */}
          <span className="text-sm">Already have an account? <Link to ="/login" className="text-blue-600">Log in</Link></span>
        </form>
      </div>
    </div>
  );
}
