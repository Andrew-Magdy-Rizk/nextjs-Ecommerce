import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartInfi } from '../rtk/slices/cartReducer';
import Cart from './Cart';
import Link from 'next/link';
import DarkMode from './DarkMode';
function Header() {
  const {user} = useUser();
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const [openCart, setopenCart] = useState(false);
  const [loading, setLoading] = useState(true);
  const modeState = useSelector((state) => state.mode);
  const email = user?.primaryEmailAddress?.emailAddress
  useEffect(() => {
    if(user?.primaryEmailAddress?.emailAddress){
      dispatch(fetchCartInfi(email));
      setLoading(false);
      console.log(user)
    }else if(user === null){
      console.log(user)
      setLoading(false);
    }
  },[user, loading])
  return (
    // <!-- ========== HEADER ========== -->
    <div className={modeState && "dark"}>
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7 dark:bg-[#171717]">
      <nav className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-8 mx-auto" aria-label="Global">
        <div className="md:col-span-3 w-[120px] sm:w-[200px]">
          {/* <!-- Logo --> */}
          <Image src={modeState ? "/darkLogo.svg" : "/logo.svg"} alt="Logo" width={modeState ? 200 : 100} height={150} />
          {/* <!-- End Logo --> */}
        </div>
    
        {/* <!-- Button Group --> */}

        <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
          {loading == false && (
        !user ? 
        <div>
          <Link href="/sign-in" className="transition-all duration-500 py-2 mr-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-800">
            Sign in
          </Link>
          <Link href="/sign-up" type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent transition-all duration-500 bg-primary text-black hover:bg-secondary disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-lime-500 dark:text-white ">
            Sign Up
          </Link>

        </div>
        :
        <div className='flex gap-10 items-center'>
          <div onClick={()=> setopenCart(!openCart)}>
          <h2 className='flex cursor-pointer select-none items-center gap-1 text-2xl font-medium dark:text-white'>
          <FiShoppingCart />({cartState.length})
          </h2>
          {openCart && <Cart />}
          </div>
        <UserButton afterSignOutUrl="/sign-in" width="40px" />
        </div>
          )}
    
          <div className="md:hidden">
            <button type="button" className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
              <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
              <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
        </div>
        {/* <!-- End Button Group --> */}
    
        {/* <!-- Collapse --> */}
        <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6">
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
            <div>
              <Link className="transition-all duration-500 relative inline-block text-black before:absolute before:bottom-0.5 before:start-0 before:-z-2 before:w-full before:h-1 before:bg-primary dark:text-white dark:hover:text-gray-200" href="/" aria-current="page">Home</Link>
            </div>
            <div>
              <a className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-secondary" href="#">Services</a>
            </div>
            <div>
              <a className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-secondary" href="#">About</a>
            </div>
            
            {loading == false && (
              user && <DarkMode />
            )}

          </div>
        </div>
        {/* <!-- End Collapse --> */}
      </nav>
    </header>
    </div>

    // <!-- ========== END HEADER ========== -->
  )
}

export default Header