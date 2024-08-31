import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'


export default function ResetPassword() {

  async function RestPassword(values) {

   try{
    let { data } = await axios.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword` , values)
    console.log(data);

  }catch(err){
    console.log(err);
    
  }
   }

  let formik = useFormik({
    initialValues: {
      email: '',
      newPassword: '',

    }
    , onSubmit: RestPassword
  })
  return (
    <>
    

<div >
    <form onSubmit={formik.handleSubmit} className='w-1/2 mx-auto my-5' >
    <h3 className='text-3xl mb-7'>reset :</h3>
      
  <div className="relative z-0 w-full mb-5 group">
      <input type="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} name="email" id="email"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="  " />
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your email</label>
  </div>

  {formik.errors.email && formik.touched.email ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {formik.errors.email}
</div> :""}

<div className="relative z-0 w-full mb-5 group">
      <input type="pass" value={formik.values. newPassword} onBlur={formik.handleBlur} onChange={formik.handleChange} name="newPassword" id=" newPassword"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="  " />
      <label htmlFor=" newPassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your  newPassword</label>
  </div>

  {formik.errors. newPassword && formik.touched. newPassword ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {formik.errors. newPassword}
</div> :""}


  <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Reset Password</button> 

    </form>
  </div>
    </>
  )
}
