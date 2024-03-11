
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const { user, logIn } = UserAuth();
  const [error, setError] = useState(" "); //if the use sets a wrong password, the error state will bw changed
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    //we don't want our page to be submitted whenever we submit our form,
    e.preventDefault();
    setError(" ");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="/"
        
      />
      <div className="bg-black/60 fixed top-0 left-0 h-screen w-full"></div>  {/*overlay*/}
      <div className="fixed w-full px-4 py-24 z-50">
        {/* form */}
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16 ">
            <h1 className="text-3xl font-bold">Sign In</h1>
            {error ? <p className="my-2 p-3 bg-red-400">{error}</p> : null}{" "}
            {/*//if error is true, p tag msg will appear */}
            <form onSubmit={handleSubmit} className="flex flex-col w-full py-4">
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
                Sign In
              </button>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>
                  <input type="checkbox" />
                  Remember me
                </p>
                <p>Need help?</p>
                <p className="py-8">
                  <span className="text-gray-600">New to Netflix?</span>{" "}
                  <Link to="/signUp">Sign Up </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
