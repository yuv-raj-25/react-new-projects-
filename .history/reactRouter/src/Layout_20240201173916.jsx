import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <A
    <Footer/>

    </>
  )
}

export default Layout