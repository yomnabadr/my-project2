import React, { useContext } from 'react'
import img from '../../assets/img/freshcart-logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext'

export default function Navbar() {
  let navigate = useNavigate()

  let { userdata, setUserData } = useContext(UserContext)
  let { cart } = useContext(CartContext);

  function logOut() {
    localStorage.removeItem('userToken');
    setUserData(null)
    navigate('/login')

  }
  return (
    <>
      <nav className='bg-slate-300 shadow-sm py-2 text-center md:fixed top-0 inset-x-0 z-30'>
        <div className='  flex flex-col md:flex-row justify-between ' >

          <div className='logo flex flex-col md:flex-row  items-center space-x-3' >

            <img src={img} width={120} alt="freshcart-logo.svg" />
            {userdata && <ul className='flex flex-col lg:flex-row'>

              <li className='px-3 py-2'><NavLink to={''}>Home</NavLink></li>
              <li className='px-3 py-2'><NavLink to={'product'}>Products</NavLink></li>
              <li className='px-3 py-2'><NavLink to={'brands'}>Brands</NavLink></li>
              <li className='px-3 py-2'><NavLink to={'categories'}>categories</NavLink></li>
            <li className='text-red-600 mt-1  text-2xl'><NavLink to={'wishList'}><i class="fa-solid fa-heart"></i></NavLink></li>
          

            </ul>}
          </div>
          <div className="social">
            <ul className='flex flex-col md:flex-row space-x-2 items-center'>
           
              {userdata ? <>

                <li className='relative' ><NavLink to={'Carts'}><i className="fa-solid fa-2xl text-green-600 fa-cart-shopping"></i></NavLink> <span className='text-white absolute left-1/2 top-0'>{cart ? cart.numOfCartItems : 0} </span></li>
                <li onClick={() => logOut()} className='px-2 cursor-pointer'><span>Logout</span></li>
              
              </>
              :
                <>
                  <li className='px-2'><NavLink to={"register"}>Register</NavLink></li>
                  <li className='px-2'><NavLink to={"login"}>Login</NavLink></li>

                </>}

                <li className='px-2 text-black'>
                <i className='fab px-2 fa-facebook'></i>
                <i className='fab px-2 fa-youtube'></i>
                <i className='fab px-2 fa-instagram'></i>
                <i className='fab px-2 fa-twitter'></i>
              </li>
             

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
