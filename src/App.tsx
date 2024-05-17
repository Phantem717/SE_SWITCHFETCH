import Navbar from "@/scenes/navbar";
import SignUp from "./components/signUp";
import DropDownCategory from "./components/DropDownCategory";
import SignUp from "./components/signUp";
import Register from "./components/register.tsx";

import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import SellProduct from "./components/SellProduct";
import EditProfile from "./components/EditProfile";
function App() {

  return (
    <Router>

    
    <div className='app bg-pageColor'>
      <Routes>
      <Route path = "/" element={<Navbar />}></Route>
      <Route path = "/signup" element={<SignUp />}></Route>
      <Route path = "/sellproduct" element={<SellProduct />}></Route>
      <Route path="/editprofile" element={<EditProfile/>}> </Route>
      <Route path="/signup" element={<SignUp/>}> </Route>

      <Route path="/register" element={<Register/>}> </Route>
      
       
        
      </Routes>

    </div>
    </Router>
  )
}

export default App
