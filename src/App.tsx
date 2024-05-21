import Navbar from "@/scenes/navbar";
import SignUp from "./components/signUp";
import Home from "./components/Home.tsx";
import Register from "./components/register.tsx";
import ProductDetGall from "./components/ProductDetGall.tsx";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import SellProduct from "./components/SellProduct";
import EditProfile from "./components/EditProfile";
import ProductDetails from "./components/ProductDetails.tsx";
import ProdInfoBox from "./components/ProdInfoBox.tsx";
import QTYIncrement from "./components/QTYIncrement.tsx";
import ProductContainer from "./components/ProductContainer.tsx";
import SearchPage from "./components/SearchPage.tsx";
function App() {

  return (
    <Router>

    
    <div className='app bg-pageColor'>
      <Routes>
      <Route path="/" element={<Home/>}> </Route>
      <Route path = "/NavBar" element={<Navbar />}></Route>
      <Route path = "/signup" element={<SignUp />}></Route>
      <Route path = "/sellproduct" element={<SellProduct />}></Route>
      <Route path="/editprofile" element={<EditProfile/>}> </Route>
      <Route path="/signup" element={<SignUp/>}> </Route>
      <Route path="/ProdGall" element={<ProductDetGall/>}> </Route>
      <Route path="/ProdDet" element={<ProductDetails/>}> </Route>
      <Route path="/ProdInfo" element={<ProdInfoBox/>}> </Route>
      <Route path="/register" element={<Register/>}> </Route>
      <Route path="/QTYBTN" element={<QTYIncrement/>}> </Route>
      <Route path="/ProdCont" element={<ProductContainer/>}> </Route>
      <Route path="/search" element={<SearchPage/>}> </Route>
        
      </Routes>

    </div>
    </Router>
  )
}

export default App
