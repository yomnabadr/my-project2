import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { UserContext } from '../../Context/UserContext'
import Footer from '../Footer/Footer'

export default function Layout() {


  return (
   <>
    <div>
     <Navbar/>
     <div className="pt-20">

    <Outlet></Outlet>
     </div>
     <Footer/>
     
    </div>
    </>
     
  )
}
