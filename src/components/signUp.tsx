import { useState } from "react";

const signUp = () => {

    const [User, SetUser] = useState({
        Firstname: '',
        Lastname: '',
        Email: '',
        Password: '',
    })

    const Submithandler = (e) => {
        e.preventDefault()
    }

    const handlechange = (e) => {
        const name = e.targer.name
        console.log(name)
    }

  return (
    <div>
      <form action=''>
        <div>
            <label htmlFor=''>First name</label>
            <input type='text' value={User.Firstname} onChange={handlechange} />
        </div>
        <div>
            <label htmlFor=''>Last name</label>
            <input type='text' value={User.Lastname} onChange={handlechange} />
        </div>
        <div>
            <label htmlFor=''>Email</label>
            <input type='Email' value={User.Email} onChange={handlechange} />
        </div>
        <div>
            <label htmlFor=''>Password</label>
            <input type='Password' value={User.Password} onChange={handlechange} />
        </div>
        <button onClick={Submithandler}>Submit</button>
      </form>
    </div>
  )
}

export default signUp
