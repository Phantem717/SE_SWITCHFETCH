import Navbar from "@/scenes/navbar";
import ProductContainer from "../components/ProductContainer";
import ProdImg from '../assets/Rectangle64.png'
import testIMG from '../assets/se.jpeg'
import React, {useEffect, useState} from 'react'
import Footer from "@/components/Footer";
import axios from "axios";
const Home = () => {
    const [data, setData] = useState(null);
    const userData = JSON.parse(localStorage.getItem('account'));
    useEffect(() => {
        const getData = async () => {
            try {
                axios.get('http://localhost:80/api/product/get-recommended-product')
                    .then(res => {
                        setData(res['data']);
                    })
                    .catch(err => {
                        console.error(err);
                    });
            } catch (err) {
                console.error(err);
            }
        };
        getData();
    }, []);

    console.log(data);
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
                {data ? (
                    data.map(item => (
                        <ProductContainer key={item.id} item={item} />
                    ))
                ) : (
                    <div>No data available</div>
                )}
            </div>

          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-AdWidth">
            <div className="flex justify-start font-semibold text-4xl mb-8">
             Under 100K
            </div>

            <div className="flex flex-wrap gap-x-6">
            {/*<ProductContainer />*/}
            {/*<ProductContainer />*/}
            {/*<ProductContainer />*/}
            {/*<ProductContainer />*/}
            {/*<ProductContainer />*/}

            </div>

          </div>
        </div>
      </div>
      <Footer
      />
    </div>
  )
}

export default Home;
