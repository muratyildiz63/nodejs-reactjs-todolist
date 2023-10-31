import React from 'react'
import Header from '../../components/Todo/Header'
import Footer from '../../components/Todo/Footer'
import { Outlet } from 'react-router-dom'


function index() {
  return (
    <>
    <Header />
    <div className='w-full p-5 mx-auto'>
    <Outlet/>
    </div>
    <Footer />
    </>
  )
}

export default index
