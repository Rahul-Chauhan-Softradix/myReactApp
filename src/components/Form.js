import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Form() {
    const [userRegistration, setUserRegistration] = useState({
      first_name:"",
      last_name:"",
      email:"",
      phone_number:"",
      password:""
    })

    const handleInput = (e)=>{
      const name = e.target.name
      const value = e.target.value
      setUserRegistration({...userRegistration, [name]:value})
    }

 
    const submit = async(event)=>{
        event.preventDefault();
      console.log(userRegistration)
       await axios.post('http://localhost:3000/auth/signup', userRegistration)
          .then(function (response) {
            if(response.data.status == 1) {
                toast.dismiss();
                toast.success(response.data.message ,{
                position: "top-right",
                });

                setUserRegistration({ first_name:"",
                last_name:"",
                email:"",
                phone_number:"",
                password:""})
            }else {
              toast.dismiss();
              toast.error(response.data.message, {
                position: "top-right",
              });
            }
          })
          .catch(function (error) {
            if(error.response.data.status == 0) {
                toast.dismiss();
                toast.error(error.response.data.message, {
                  position: "top-right",
                });
            }
          });
    }

  return (
    <div>
    <form className='customform' onSubmit={submit}>
      <div className='forminput'>
      <label>Enter your first name:
        <input onChange={handleInput} type="text"  name = 'first_name' value={userRegistration.first_name}/>
      </label>
      </div>
      <div className='forminput'>
      <label>Enter your last name:
        <input onChange={handleInput} type="text" name = 'last_name' value={userRegistration.last_name}/>
      </label>
      </div>
      <div className='forminput'>
      <label>Enter your email:
        <input onChange={handleInput} type="text" name = 'email' value={userRegistration.email}/>
      </label>
      </div>
      <div className='forminput'>
      <label>Enter your phone number:
        <input onChange={handleInput} type="text" name = 'phone_number' value={userRegistration.phone_number} />
      </label>
      </div>
      <div className='forminput'>
      <label>Enter your password:
        <input  onChange={handleInput} type="password" name = 'password' value={userRegistration.password} />
      </label>
      </div>
      <button type='submit'>Submit</button>
    </form>
    <ToastContainer/>
    </div>
  )
}

export default Form;