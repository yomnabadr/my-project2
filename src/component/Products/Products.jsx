import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

export default function Products() {

  
 
  const [products, setProducts] = useState([])
 
  async function getProducts() {
 
    try {
      let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
 
      console.log(data.data);
      setProducts(data.data);
 
    } catch (error) {
      console.log("error");
    }
 
  }
 
  useEffect(() => {
 
    getProducts()
 
 
  }, [])
 
 
   return (<>
 
 <h1 className='text-5xl py-8 text-center '> Products</h1>
 
  {products.length > 0 ?
  <div className="row">
  {products.map((product)=> 
       <div className='w-1/5 '>
     <div className="product">
     <Link to={`productdetails/${product.id}/${product.category.name}`}>
 
 <img src={product.imageCover} className='w-full' alt={product.title} />
 <h2 className='text-green-500 '>{product.category.name}</h2>
 <h2 className='font-medium'>{product.title}</h2>
 
 <div className="flex justify-between">
   <h3>{product.price} EGP</h3>
   <h3><i className='fas fa-star text-yellow-400'> {product.ratingsAverage}</i></h3>
 </div>
 
 </Link>
 
 <button onClick={()=> AddProductToCart(product.id)} className='btn w-full bg-green-500 text-white rounded py-1'>Add To Cart </button>
     </div>
       </div>
 
 
     )}
  </div> : <Loading/>}
 
 
   </>
 
   )
 }