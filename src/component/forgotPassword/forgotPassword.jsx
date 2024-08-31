import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import Login from '../Login/Login'
import { useNavigate } from 'react-router-dom'

export default function ForgotPassword() {

  let  validationSchema = Yup.object().shape({
    email : Yup.string().email('invalid email').required('email is required')
    })

async function sendCode(values) {

try{
  let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords` , values )
  console.log(data);

  if(data.statusMsg == 'success'){
    
  document.querySelector('.forgetpass').classList.add('hidden')
  document.querySelector('.verifyReset').classList.remove('hidden')

  }
  
}catch(err){
  console.log(err);
}
}

let formik =  useFormik({
  initialValues:{
    email : ''
  },validationSchema
  
   ,onSubmit : sendCode
})

let  validationSchema2 = Yup.object().shape({
  resetCode : Yup.string().email('invalid email')
  })
let navigate =useNavigate()

async function sendData(values) {

try{
let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode` , values )
console.log(data);

if(data.status == "success"){
  navigate('resetPassword')
}

}catch(err){
console.log(err);
}
}

let verifyFormik =  useFormik({
initialValues:{
 resetCode : ''
},validationSchema : validationSchema2

 ,onSubmit :sendData
})
  return (
  <>
  <div className='forgetpass' >
    <form onSubmit={formik.handleSubmit} className='w-1/2 mx-auto my-5' >
    <h3 className='text-3xl mb-7'>Forgot Password :</h3>
      
  <div className="relative z-0 w-full mb-5 group">
      <input type="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} name="email" id="email"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="  " />
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your email</label>
  </div>

  {formik.errors.email && formik.touched.email ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {formik.errors.email}
</div> :""}
  <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Send Code</button> 

    </form>
  </div>


  <div className='verifyReset hidden' >
    <form onSubmit={verifyFormik.handleSubmit} className='w-1/2 mx-auto my-5' >
    <h3 className='text-3xl mb-7 '>verifyCode :</h3>
      
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" value={verifyFormik.values.resetCode} onBlur={verifyFormik.handleBlur} onChange={verifyFormik.handleChange} name="resetCode" id="resetCode"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="  " />
      <label htmlFor="resetCode" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your resetCode</label>
  </div>

  {verifyFormik.errors.resetCode && verifyFormik.touched.resetCode ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {verifyFormik.errors.resetCode}
</div> :""}
  <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Send Code</button> 

    </form>
  </div>
  
  </>
  )
}
