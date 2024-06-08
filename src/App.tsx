import Navbar from "@/scenes/navbar";
import SignUp from "./Pages/signUp.tsx";
import Home from "./Pages/Home.tsx";
import Register from "./Pages/register.tsx";
import ProductDetGall from "./components/ProductDetGall.tsx";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import SellProduct from "./Pages/SellProduct.tsx";
import EditProfile from "./Pages/EditProfile.tsx";
import ProductDetails from "./Pages/ProductDetails.tsx";
import ProdInfoBox from "./components/ProdInfoBox.tsx";
import QTYIncrement from "./components/QTYIncrement.tsx";
import ProductContainer from "./components/ProductContainer.tsx";
import SearchPage from "./Pages/SearchPage.tsx";
import HistoryPage from "./Pages/HistoryPage.tsx";
import HistoryBox from "./components/HistoryBox.tsx";
import FileUpload from "./components/FileUpload.tsx";
import Footer from "./components/Footer.tsx";
import TopUp from "./Pages/TopUp.tsx";
import Cart from "./Pages/CartPage.tsx";
import CartBox from "./components/CartBox.tsx";
import DropDownProf from "./components/DropDownProf.tsx";
import Test from "./Pages/Test.tsx";
import SellerPage from "./Pages/SellerPage.tsx";
import SellerBox from "./components/SellerBox.tsx";
import TransactionDetails from "./Pages/TransactionDetails.tsx";
import ItemPage from "./Pages/ItemPage.tsx";
import SearchBar from "./components/searchBar.tsx";
import DropDownPrice from "./components/DropDownPrice.tsx";
import DropDownSeller from "./components/DropDownSeller.tsx";
function App() {

  return (
    <Router>

    
    <div className='app bg-pageColor'>
      <Routes>
      <Route path="/test" element={<Test/>}> </Route>

      <Route path="/" element={<SignUp/>}> </Route>
      <Route path="/Home" element={<Home/>}> </Route>
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
      <Route path="/history" element={<HistoryPage/>}> </Route>
      <Route path="/histbox" element={<HistoryBox/>}> </Route>
      <Route path="/fileupload" element={<FileUpload/>}> </Route>
      <Route path="/footer" element={<Footer/>}> </Route>
      <Route path="/topup" element={<TopUp/>}> </Route>
      <Route path="/cart" element={<Cart/>}> </Route>
      <Route path="/CartBox" element={<CartBox/>}> </Route>
      <Route path="/DDProf" element={<DropDownProf/>}> </Route>
      <Route path="/seller" element={<SellerPage/>}> </Route>
      <Route path="/SellerBox" element={<SellerBox/>}> </Route>
      <Route path="/TransactionDetails" element={<TransactionDetails/>}> </Route>
      <Route path="/itempage" element={<ItemPage/>}> </Route>
      <Route path="/searchbar" element={<SearchBar/>}> </Route>
      <Route path="/DDPrice" element={<DropDownPrice/>}> </Route>
      <Route path="/DDSell" element={<DropDownSeller/>}> </Route>

      </Routes>

    </div>
    </Router>
  )
}

export default App
