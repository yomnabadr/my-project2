import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Products from '../Products/Products';
import RecentProduct from '../RecentProduct/RecentProduct';
import Loading from '../Loading/Loading';
import CategoriesSlider from '../categoriesSlider/categoriesSlider';
import MainSlide from '../mainSlide/mainSlide';

export default function Home() {




  return (
    <>


<MainSlide />

<CategoriesSlider />

<RecentProduct/>


   
  


    </>
  )
}
