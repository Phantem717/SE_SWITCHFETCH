import React from 'react'
import Navbar from '@/scenes/navbar'
import ProductContainer from '../components/ProductContainer'
import SearchBar from "../components/searchBar.tsx";
import DropDownPrice from '@/components/DropDownPrice'
import Footer from '@/components/Footer'
import HistoryBox from '@/components/HistoryBox.tsx';
const SearchPage:React.FC = () => {
  return (
    <div>
        <Navbar />
        <div className="flex flex-col items-center mt-8  min-h-screen">
          <div className="w-AdWidth">
            <SearchBar />
            <div className="flex justify-start font-semibold text-4xl mb-8">
              Search Page
            </div>

            <div className='flex justify-end'>
              <DropDownPrice/>
            </div>

            <div className="flex flex-wrap gap-x-6">
              
            {/* <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer /> */}
            
            </div>

          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default SearchPage