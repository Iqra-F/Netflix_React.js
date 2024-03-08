// import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import { useState } from "react";


const SignUp = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    //we don't want our page to be submitted everytime when we submit aou form,
    // we will preventdefault and that is why we will pass an event e
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        {/* background image, this image will be hidden in phones i.e below small screen */}
        <img
          className="hidden sm:block w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
        />
        {/* on phones there will be a black background */}
        <div className="bg-black/60 fixed top-0 left-0 h-screen w-full"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          {/* form */}
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16 ">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form
                 onClick={(e)=>{handleSubmit(e)}} //added later
                // onSubmit={handleSubmit}   //commented later
                className="flex flex-col w-full py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold ">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need help?</p>
                  <p className="py-8">
                    <span className="text-gray-600">
                      Already subscribed to Netflix?
                    </span>{" "}
                    <Link to="/logIn">Sign In </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;