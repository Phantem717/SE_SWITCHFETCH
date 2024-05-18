import Navbar from "@/scenes/navbar";

import DropDownCategory from "./components/DropDownCategory";
import SignUp from "./components/signUp";
import Register from "./components/register.tsx";
import ProductDetGall from "./components/ProductDetGall.tsx";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import SellProduct from "./components/SellProduct";
import EditProfile from "./components/EditProfile";
import ProductDetails from "./components/ProductDetails.tsx";
import ProdInfoBox from "./components/ProdInfoBox.tsx";
import QTYIncrement from "./components/QTYIncrement.tsx";
function App() {

  return (
    <Router>

    
    <div className='app bg-pageColor'>
      {/* <Navbar />
      <SignUp /> */}
      <Routes>
      <Route path = "/" element={<Navbar />}></Route>
      <Route path = "/signup" element={<SignUp />}></Route>
      <Route path = "/sellproduct" element={<SellProduct />}></Route>
      <Route path="/DDCategory" element={<DropDownCategory />}> </Route>
      <Route path="/editprofile" element={<EditProfile/>}> </Route>
      <Route path="/signup" element={<SignUp/>}> </Route>
      <Route path="/ProdGall" element={<ProductDetGall/>}> </Route>
      <Route path="/ProdDet" element={<ProductDetails/>}> </Route>
      <Route path="/ProdInfo" element={<ProdInfoBox/>}> </Route>
      <Route path="/register" element={<Register/>}> </Route>
      <Route path="/QTYBTN" element={<QTYIncrement/>}> </Route>
      
       
        
      </Routes>

    </div>
    </Router>
  )
}

export default App
