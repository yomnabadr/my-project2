import React from 'react'

export default function Footer() {

  return (
    <>

      <div className='bg-gray-200 h-[200px] p-5'>
        <h1 className='text-3xl'>Get the FreshCart app</h1>
        <h3 className='text-gray-400'>We will send you a link , open it on your phone to download the app .</h3>


        <div className="relative z-0 flex mb-5 group">
          <input type="email" name="email" id="email" className="block ms-8  rounded mt-2 w-3/4 text-sm text-gray-900 bg-transparent border-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" Email  " />
          <button className='bg-green-500 hover:bg-green-700 text-white rounded ms-3'>share app link </button>

        </div>

        <div className='flex justify-between '>
          <div className='flex'>
            <h3>Payment Partners</h3>

            <ul className='flex ms-4 '>
              <li className='px-3 '><i class="fa-brands fa-amazon"></i></li>
              <li className='px-3 '><i class="fa-brands fa-apple"></i></li>
              <li className='px-3 '><i class="fa-brands fa-google-pay"></i></li>

            </ul>
          </div>

          <div className='flex'>
            <h3 className='me-3 mt-3'>Get deliveries with freshcart</h3>
            <div>
              <button type="button" className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2">
                <svg className="w-5 h-5 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
                App Store
              </button>
              <button type="button" className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                  <path fillrule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" />
                </svg>
                Google Play
              </button>
            </div>

          </div>
        </div>

      </div>


    </>
  )
}
