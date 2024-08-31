import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading';

export default function Brands() {

  const [brands , setBrands] =useState([])


  async function getBrands() {

    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
    console.log(data);
    setBrands(data.data)
    

  }
  useEffect(()=>{
    getBrands()
  },[])

  return (
    <>
      <h1 className='text-5xl text-center'>Brands</h1>
  
 {brands.length > 0 ?
  <div className="">
  <div className=" row">
  {brands.map((brand)=>
     <div className="w-1/3 cart p-10 gap-5">
     <div key={brand.id}>
     <h1 className='font-bold text-green-500'>{brand.name}</h1>
     
 
     <img src={brand.image} className='w-full' alt="" />
    <h4>{brand.createdAt}</h4>
    <h4>{brand.updatedAt}</h4>
 
   </div>
 </div>
       )}
  </div>
   </div> : <Loading/>}

   
     
      
    

    </>
  )
}
