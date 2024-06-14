import React, {useEffect, useState} from 'react'
import Navbar from '@/scenes/navbar'
import ProductContainer from '../components/ProductContainer'
import SearchBar from "../components/searchBar.tsx";
import DropDownPrice from '@/components/DropDownPrice'
import Footer from '@/components/Footer'
import HistoryBox from '@/components/HistoryBox.tsx';
import axios from "axios";
import searchBar from "../components/searchBar.tsx";

const SearchPage: React.FC = () => {
  const [data, setData] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [order, setOrder] = useState('');

  const handleSearchText = (text: string) => {
    console.log(text);
    setSearchText(text);
  };
  const handleOrder = (text: string) => {
    setOrder(text);
  };
  const userData = JSON.parse(localStorage.getItem('account'));
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.post('http://localhost:80/api/product/get-random-product', {
          search: searchText,
          sortBy: order,
          user_id: userData['id']
        });
       if(response.data['error'] == 1) {
         setData(null);
       } else {
         setData(response.data);
       }
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, [searchText, order]);

  return (
      <div>
        <Navbar />
        <div className="flex flex-col items-center mt-8  min-h-screen">
          <div className="w-AdWidth">
            <div className='flex items-center justify-center'>
                <SearchBar onSearch={handleSearchText} />
            </div>

            <div className="flex justify-start font-semibold text-4xl mt-4 mb-8"></div>

            <div className="flex justify-end">
              <DropDownPrice onSelect={handleOrder}/>
            </div>

            <div className="flex flex-wrap gap-x-6 mt-6">
              {data !== null ? (
                  data.map((item) => <ProductContainer key={item.id} item={item} />)
              ) : (
                  <div>No data available</div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
  );
};

export default SearchPage;
