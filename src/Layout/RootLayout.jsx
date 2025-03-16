import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <>
    <Header/>
    <Footer/>
    <Outlet/>
    </>
  )
}

export default RootLayout