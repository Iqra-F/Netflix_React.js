import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { AuthContextProvider } from "./Context/AuthContext";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Account from  "./Pages/Account"
import ProtectedRoute from "./Components/ProtectedRoute";


function App() {
  return (
    <>
    <AuthContextProvider> 
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/SignUp" element={<SignUp/>}></Route>
      <Route path="/Account" element={<ProtectedRoute><Account/></ProtectedRoute>}></Route>
    </Routes>
    </AuthContextProvider>
    
    </>
  );
}

export default App;
