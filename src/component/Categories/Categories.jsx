import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import Loading from '../Loading/Loading';



export default function CategoriesSlider() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
     autoplay:true,
    autoplaySpeed : 1000
  };

  const [categories, setCategories] = useState([])

async function getcategories(){

try{
  let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);

console.log(data.data);
setCategories(data.data);

}catch(error){
  console.log("error");
}

}

useEffect(()=> {

getcategories()


}  , [])


 
  return (<>
   {categories.length >0 ?
    <Slider {...settings}>

    {categories?.map((category, index) => <div key={index} className='my-6'>
      <img  src={category.image} className='w-full h-[200px] ' alt="" />
      <h3>{category.name}</h3>
    </div>)}

  </Slider> : <Loading/>}
  </>

  )
}
