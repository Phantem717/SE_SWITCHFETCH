import Navbar from "@/scenes/navbar";
import ProductContainer from "./ProductContainer";
import ProdImg from './Rectangle64.png'
import testIMG from './speencock.png'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        {/* AD */}
        <div className="flex justify-center items-center mt-12 mb-8">
          <div className="flex justify-center items-center w-AdWidth h-AdHeight bg-white">
            <img src={testIMG} alt="Product" className="w-AdWidth h-AdHeight rounded-md shadow-xl" />
          </div>
        </div>

        {/* Recommended */}
        <div className="flex flex-col items-center">
          <div className="w-AdWidth">
            <div className="flex justify-start font-semibold text-4xl mb-8">
              Recommendation
            </div>

            <div className="flex flex-wrap gap-x-6">
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
          

            </div>

          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-AdWidth">
            <div className="flex justify-start font-semibold text-4xl mb-8">
              Top Rated
            </div>

            <div className="flex flex-wrap gap-x-6">
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
          

            </div>

          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-AdWidth">
            <div className="flex justify-start font-semibold text-4xl mb-8">
             Under 100K
            </div>

            <div className="flex flex-wrap gap-x-6">
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
