import { useState } from "react";
import background from '../assets/LoginBackground.png';
import logo from '../assets/Logo.png'
import { useNavigate } from "react-router-dom";
import axios from "axios"
import Swal from 'sweetalert2'
const signUp = () => {
  const flexCent = "flex items-center justify-center";
  const navigate = useNavigate();
  let data : any;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLoginClick = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    login();
  }
  const inputEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const inputPassword = (event: any) => {
    setPassword(event.target.value);
  };

  const login = () => {
    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Something Went Wrong",
        text: "Please fill in the data",
      });
      return;
    }
    Swal.showLoading(); 
    axios.post('http://localhost:80/api/auth/login', {email, password})
        .then(res => {
          data = res['data'];
         
          if (data['error'] == 1){
            Swal.fire({
              icon: "error",
              title: "Invalid Credentials",
              text: data['message'],
            });
          } else if (data['error'] == 0) {
            Swal.close();
            localStorage.setItem('account',JSON.stringify(data));
            navigate('/Home');
          }
        })
        .catch(err => {
          console.error(err);
        });
  }

  return (
    <div className={'bg-cover h-screen bg-gradient-to-r from-logregGrad5 to-logregGrad6 min-h-screen'} style= {{backgroundImage: `url(${background})`}}>
        <form action="" className={`${flexCent}  text-black h-svh`}>
        <div className={`${flexCent} shadow-xl bg-gradient-to-r from-logregGrad1/50 from-25% via-logregGrad1.5/50 via-50% to-logregGrad2/50 to-77% bg-transparent rounded-tl-lg rounded-bl-lg h-4/6 w-4/12`}>
          <img src={logo} alt="" className={`h-3/4`}/>
          </div>
            <div className={`shadow-xl bg-gradient-to-b from-logregGrad3/50 from-0% via-logregGrad4/50 via-41% to-loregGrad4.5/50 to-100% rounded-tr-lg rounded-br-lg h-4/6 w-3/12 p-12`}>
              <h1 className={`${flexCent} text-3xl font-bold`}>Login</h1>
              <div className={`mt-12`}>
                <p className={`text-black`}>Email Address</p>
                <input className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200    placeholder:text-gray-200 rounded-lg w-full h-8 text-xs bg-transparent border-solid border-2 border-white text-logregTxt pl-2 `}
                       type="text" placeholder="enter email"
                       value={email}
                       onChange={inputEmail}
                       required />
              </div>
              <div className={`mt-4`}>
                <p className={`text-black`}>Password</p>
                <input className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200    placeholder:text-gray-200 rounded-lg w-full h-8 text-xs bg-transparent border-solid border-2 border-white text-logregTxt pl-2 `}
                       type="password"
                       placeholder="enter password"
                       onChange={inputPassword}
                       required />
              </div>
              <button className={`${flexCent} mt-5 text-xs h-8 w-full rounded-lg text-white bg-logregBtn cursor-pointer hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:p-1 hover:bg-blue-200  hover:text-black transition-all duration-300 font-medium`} 
                      type="submit"
                      onClick={handleLoginClick}>Login</button>



              <div className={`text-xs mt-28`}>
                <p className={`${flexCent} text-logregnoAcc`}>No Account yet?</p>
                <a className={`${flexCent} text-logregyesAcc hover:underline font-bold transition-all duration-300`} 
                href="./register"
                  >
                    Register Here
                  </a>
              </div>
            </div>
          </form>
      </div>
  )
}

export default signUp
