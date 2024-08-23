import React from 'react'
import Header from '../../components/Header'
import { Outlet } from 'react-router'
import Footer from '../../components/Footer'

export default function Main() {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
