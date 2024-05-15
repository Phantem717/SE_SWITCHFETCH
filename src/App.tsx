import Navbar from "@/scenes/navbar";
import SignUp from "./components/signUp";

import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
function App() {

  return (
    <Router>

    
    <div className='app bg-pageColor'>
      <Navbar />
      {/* <SignUp /> */}
      <Routes>
      <Route path = "/" element={<Navbar />}></Route>
        <Route path = "/signup" element={<SignUp />}></Route>
        
      </Routes>
    </div>
    </Router>
  )
}

export default App
