import React from 'react'
import { Outlet } from 'react-router-dom'

export default function GuestLayout() {
  return (

    <div>
    <div>
    <h2>For Guest Users Only</h2>
     <Outlet/>
    </div>
  

    </div>
  )
}
