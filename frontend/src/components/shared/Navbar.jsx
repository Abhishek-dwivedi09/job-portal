import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import React from "react";
import { PopoverContent } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const user = false;
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-20 mx-w-7xl h-16 ">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Jobs">Jobs</Link></li>
            <li><Link to="/browse">Browse</Link></li>
          </ul>
          {
            !user?(
              <div className="flex items-center gap-2">
               <Link to="/login"><Button variant="outline">login</Button></Link>
               <Link to= "/signup"><Button className="bg-[#6A38C2] hover:bg-[#6A38C2] text-white" >signup</Button></Link>
               
              </div>
            ):
            (
              <Popover>
              <PopoverTrigger>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-4 space-y-2 ">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium ">Abhishek MernStack</h4>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col text-gray-600 my-2">
                  <div className="flex w-fit items-center gap-2 cursor-pointer ">
                    <User2/>
                    <Button variant="link">view profile</Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer " >
                    <LogOut/>
                  <Button variant="link">Logout</Button>
                  </div>
                  
                </div>
              </PopoverContent>
            </Popover>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
