import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate()
    // console.log(user.email)
    
  const handleLogout=async()=>{
    try {
      await logOut();
      navigate('/') //once user is loged out, we want him to be automatically directed to the home page
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/Home">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          Netflix
        </h1>
      </Link>
      {user?.email ? (
        <div className="">
          <Link to="/Login">
            <button className="text-white pr-4">Sign In</button>
          </Link>
         
          <button onClick={handleLogout} className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
            Sign Up
          </button>
         
        </div>
      ) : (
        <div className="">
          <Link to="/Account">
            <button className="text-white pr-4">Account</button>
          </Link>
          <Link to="/SignUp">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
            LogOut
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
