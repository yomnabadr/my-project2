import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductDetails from '../ProductDetails/ProductDetails'
import { CartContext } from '../../Context/CartContext'
import axios, { Axios } from 'axios'
import Loading from '../Loading/Loading'



export default function RecentProduct({ product }) {

 let {AddProductToCart ,  AddProductToWishList} = useContext(CartContext);

 const [recentProducts, setRecentProducts] = useState([])

 async function getProducts() {

   try {
     let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);

     console.log(data.data);
     setRecentProducts(data.data);

   } catch (error) {
     console.log("error");
   }

 }

 useEffect(() => {

   getProducts()


 }, [])


  return (<>

<h1 className='text-5xl py-8 text-center '>Recent Products</h1>

 {!recentProducts ? <Loading/> : <div className="row">
 {recentProducts.map((product)=> 
      <div key={product.id} className='w-1/5 '>
    <div className="product">

    <button onClick={()=> AddProductToWishList(product.id)} className='text-red-600 mt-1  text-2xl' >
    <i class="fa-solid fa-heart"></i>
    </button>

    <Link to={`productdetails/${product.id}/${product.category.name}`}>

   


<img src={product.imageCover} className='w-full relative' alt={product.title}  />


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
 </div>}


  </>

  )
}
