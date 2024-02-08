import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Foot


    </>
  )
}

export default Layout