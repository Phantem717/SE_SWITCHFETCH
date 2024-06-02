import { useState } from "react";
import background from '../assets/LoginBackground.png';
import logo from '../assets/Logo.png'
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import axios from "axios"
// import SignUp from "./signUp";
const signUp = () => {
  const flexCent = "flex items-center justify-center";
  const navigate = useNavigate();
  let data = null;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setUsername] = useState('');

  const handleRegisterClick = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    register();
  };
  const inputEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const inputPassword = (event: any) => {
    setPassword(event.target.value);
  };
  const inputUsername = (event: any) => {
    setUsername(event.target.value);
  };
  const register = () => {
    if (!email || !password || !name) {
      Swal.fire({
        icon: "error",
        title: "Something Went Wrong",
        text: "Please fill in the data",
      });
      return;
    }
    axios.post('http://localhost:80/api/auth/create-user', {name, email, password})
        .then(res => {
          data = res['data'];
          if (data['error'] == 1){
            Swal.fire({
              icon: "error",
              title: "ERROR",
              text: data['message'],
            });
          } else if (data['error'] == 0) {
            Swal.fire( {
              icon: "success",
              title: "SUCCESS",
              "text": data['message'],
            }).then(
                (result) => {
                  if (result.isConfirmed){
                    navigate('/');
                  }
                }
            );
          }
        })
        .catch(err => {
          console.error(err);
        });
  }
  return (
    <div className={'bg-cover h-screen bg-gradient-to-r from-logregGrad5 to-logregGrad6'} style= {{backgroundImage: `url(${background})`}}>
      
        <form action=""  className={`${flexCent}  text-black h-svh`}>
        <div className={`${flexCent} shadow-xl bg-gradient-to-r from-logregGrad1/50 to-logregGrad2/50 rounded-tl-lg rounded-bl-lg h-4/6 w-4/12`}>
          <img src={logo} alt="" className={`h-3/4`}/>
          </div>
            <div className={`shadow-xl bg-gradient-to-r from-logregGrad3/50 to-logregGrad4/50 rounded-tr-lg rounded-br-lg h-4/6 w-3/12 p-12 bg-o `}>
              <h1 className={`${flexCent} text-3xl`}>Register</h1>
              
              <div className={`mt-4`}>
                <p className={`text-black text-xs font-bold`}>Username</p>
                <input className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200   pl-2 rounded-lg w-full h-8 text-xs bg-transparent border-solid border-2 border-white text-logregTxt placeholder:text-gray-200`}
                       value={name}
                       onChange={inputUsername}
                       type="text" placeholder="enter username" required />
              </div>
              
              <div className={`mt-4`}>
                <p className={`text-black text-xs font-bold`}>Email Address</p>
                <input className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200   pl-2 rounded-lg w-full h-8 text-xs bg-transparent border-solid border-2 border-white text-logregTxt font-normal placeholder:text-gray-200`} type="text"
                       value={email}
                       onChange={inputEmail}
                       placeholder="enter email" required />
              </div>

              {/*<div className={`mt-4`}>*/}
              {/*  <p className={`text-black text-xs font-bold`}>Address</p>*/}
              {/*  <input className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200   pl-2 rounded-lg w-full h-8 text-xs bg-transparent border-solid border-2 border-white text-logregTxt placeholder:text-gray-200`} type="password" placeholder="password" required />*/}
              {/*</div>*/}

              <div className={`mt-4`}>
                <p className={`text-black text-xs font-bold`}>Password</p>
                <input className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200   pl-2 rounded-lg w-full h-8 text-xs bg-transparent border-solid border-2 border-white text-logregTxt placeholder:text-gray-200`}
                       value={password}
                       onChange={inputPassword}
                       type="password" placeholder="enter password" required />
              </div>

              <button className={`${flexCent} mt-5 text-xs h-8 w-full rounded-lg text-white bg-logregBtn cursor-pointer hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:p-1 hover:bg-blue-200  hover:text-black transition-all duration-300 font-medium` } type="submit" onClick={handleRegisterClick}>Register</button>
              
              <div className={`text-xs mt-8`}>
                <p className={`${flexCent} text-logregyesAcc`}>Have account already?</p>
                <a className={`${flexCent} text-logregyesAcc hover:underline font-bold transition-all duration-300 `} href="./signUp" >Login Here</a>
              </div>
            </div>
          </form>
      </div>
  )
}

export default signUp
