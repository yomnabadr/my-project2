import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Slider from "react-slick";




export default function ProductDetails() {

    let { id, category } = useParams()

    const [productDetails, setproductDetails] = useState({})
    const [relatedProducts, setRelatedProducts] = useState([])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    async function getProductDetails(id) {


        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);

     
        setproductDetails(data.data)

    }

    async function getRelatedProducts(category) {


     try{
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
         
        let allproducts = data.data;
        let related = allproducts.filter((product) => product.category.name == category)
      

        setRelatedProducts(related);

     }catch( error){
        console.log('error')
     }
         
       


    }

    useEffect(() => {
        getProductDetails(id)
        getRelatedProducts(category)
    }, [])


    return (<>
        <h1 className='text-5xl'>ProductDetails</h1>

        <div className="flex items-center py-10">
            <div className="w-1/4 p-4">
                {productDetails.images > 1 ? <  Slider {...settings}>

                    {productDetails.images?.map((image, index) => <img key={index} src={image} className='w-full' alt="" />)}

                </Slider> : <img src={productDetails.imageCover} className='w-full' alt="" />}
            </div>
            <div className="w-3/4">
                <h2>{productDetails.title}</h2>
                <p className='my-6 text-gray-500'>{productDetails.description}</p>
                <h3>{productDetails.category?.name}</h3>
                <div className="flex justify-between">
                    <h3>{productDetails.price} EGP</h3>
                    <h3><i className='fas fa-star text-yellow-400'> {productDetails.ratingsAverage}</i></h3>
                </div>


                <button className='btn w-full bg-green-500 text-white rounded py-1'>Add To Cart </button>
            </div>
        </div>

        <div className="w-1/4 p-4 ">
            <Slider {...settings}>

                {relatedProducts.map((product , index ) => <div key={index}>
                    <Link to={`productdetails/${product.id}/${product.category.name}`}>

                        <img src={product.imageCover} className='w-full' alt={product.title} />
                        <h2 className='text-green-500 '>{product.category.name}</h2>
                        <h2 className='font-medium'>{product.title}</h2>

                        <div className="flex justify-between">
                            <h3>{product.price} EGP</h3>
                            <h3><i className='fas fa-star text-yellow-400'> {product.ratingsAverage}</i></h3>
                        </div>

                    </Link>

                    <button onClick={() => AddProductToCart(product.id)} className='btn w-full bg-green-500 text-white rounded py-1'>Add To Cart </button>
                </div>)}


            </Slider>
        </div>




    </>
    )
}
