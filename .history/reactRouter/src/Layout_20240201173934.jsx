import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import About from ''

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <About/>
    <Footer/>

    </>
  )
}

export default Layout