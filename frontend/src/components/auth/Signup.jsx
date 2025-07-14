import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2  flex flex-col gap-1">
            <Label>Full Name</Label>
            <input
              type="text"
              placeholder="princu"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="my-2  flex flex-col gap-1">
            <Label>Email</Label>
            <input
              type="text"
              placeholder="email"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="my-2  flex flex-col gap-1">
            <Label>Phone Number</Label>
            <input
              type="text"
              placeholder="phoneNumber"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="my-2  flex flex-col gap-1">
            <Label>Password</Label>
            <input
              type="text"
              placeholder="password"
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
                  className="border-2 border-black w-4 h-4 rounded-full data-[state=checked]:bg-black cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center gap-3">
              <input
                  type="radio"
                  name="role"
                  value="recruiter"
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
                className="cursor-pointer"
                />

            </div>
          </div>
          <Button type="submit" className =" w-full my-4 bg-black text-white hover:bg-gray-900">
            Signup
          </Button>
          <span className="text-sm">Already have an account? <Link to ="/login" className="text-blue-600">Log in</Link></span>
        </form>
      </div>
    </div>
  );
}
