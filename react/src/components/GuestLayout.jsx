import React from 'react'
import { Outlet } from 'react-router-dom'

export default function GuestLayout() {
  return (

    <div>
    For Guest Users Only
     <Outlet/>
  

    </div>
  )
}
