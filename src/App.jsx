import React, { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import context from './context/context';
import { useDispatch } from 'react-redux';
import SummaryApi from './common/com';
import { setUserDetails } from './store/userSlice';



function App() {
  const dispatch = useDispatch()
  const [cartProductCount,setCartProductCount] = useState(0)

  const fetchUserDetails = async () => {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method: SummaryApi.current_user.method,
      credentials: 'include'
    })

    const dataApi = await dataResponse.json()

    if (dataApi.success) {
      dispatch(setUserDetails(dataApi.data))
    }
  }
  const fetchUserAddToCart = async () => {
    const dataResponse = await fetch(SummaryApi.addToCartProductCount.url, {
      method: SummaryApi.addToCartProductCount.method,
      credentials: 'include'
    })

    const dataApi = await dataResponse.json()
    setCartProductCount(dataApi?.data?.count)
  }

  useEffect(() => {
    fetchUserDetails()
    /**user Details cart product */
    fetchUserAddToCart()

  }, [])
  return (
    <>
      <context.Provider value={{
        fetchUserDetails,
        /**user Details cart product */
        cartProductCount,
        fetchUserAddToCart

      }}>
        <ToastContainer  
        position='top-center'/>
        <Header />
        <main className='min-h-[calc(100vh-120px)] pt-16'>
          <Outlet />
        </main>
        <Footer />
      </context.Provider>
    </>
  )
}

export default App
