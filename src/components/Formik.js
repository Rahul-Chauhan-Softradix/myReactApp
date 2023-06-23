import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik  } from 'formik';
import { signupSchema } from './schemas/FormikSchema'


function Formik() {
  
      const initialValue = {
        first_name:"",
        last_name:"",
        email:"",
        phone_number:"",
        password:""
    }

      const {values,errors,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues:initialValue,
        validationSchema:signupSchema,
        onSubmit:(values)=>{
          console.log(values)
        }
    })
  console.log(errors)
    //   const submit = async(event)=>{
    //       event.preventDefault();
    //      await axios.post('http://localhost:3000/auth/signup', userRegistration)
    //         .then(function (response) {
    //           if(response.data.status == 1) {
    //               toast.dismiss();
    //               toast.success(response.data.message ,{
    //               position: "top-right",
    //               });
  
    //               setUserRegistration({ first_name:"",
    //               last_name:"",
    //               email:"",
    //               phone_number:"",
    //               password:""})
    //           }else {
    //             toast.dismiss();
    //             toast.error(response.data.message, {
    //               position: "top-right",
    //             });
    //           }
    //         })
    //         .catch(function (error) {
    //           if(error.response.data.status == 0) {
    //               toast.dismiss();
    //               toast.error(error.response.data.message, {
    //                 position: "top-right",
    //               });
    //           }
    //         });
    //   }
  
    return (
      <div>
      <form className='customform' onSubmit={handleSubmit}>
        <div className='formContent'>
          <div className='forminput'>
            <label>Enter your first name:</label>
          <div>
          <input onChange={handleChange} onBlur={handleBlur} type="text"  name = 'first_name' value={values.first_name}/>
          <p className='formerror'>{errors.first_name}</p>
        </div>
        <div className='formContent'>
        <div className='forminput'>
          <label>Enter your last name:  </label>
          <input onChange={handleChange} onBlur={handleBlur} type="text" name = 'last_name' value={values.last_name}/>
          <p className='formerror'>{errors.last_name}</p>
        </div>
        </div>
        <div className='formContent'>
        <div className='forminput'>
        <label>Enter your email: </label>
        <input onChange={handleChange} onBlur={handleBlur} type="text" name = 'email' value={values.email}/>
        <p className='formerror'>{errors.email}</p>
        </div>
        </div>
        <div className='formContent'>
        <div className='forminput'>
        <label>Enter your phone number: </label>
        <input onChange={handleChange} onBlur={handleBlur} type="text" name = 'phone_number' value={values.phone_number} />
        <p className='formerror'>{errors.phone_number}</p>
        </div>
        </div>
        <div className='formContent'>
        <div className='forminput'>
        <label>Enter your password:
          <input  onChange={handleChange} onBlur={handleBlur} type="password" name = 'password' value={values.password} />
          <p className='formerror'>{errors.password}</p>
        </label>
        </div>
        </div>
        </div>
        </div>
        <button type='submit'>Submit</button>
      </form>
      <ToastContainer/>
      </div>
    )
}

export default Formik