import React from 'react'
import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {
  return (
    <div>
     <h1>DashBoard</h1>
     <Outlet/>
    </div>
  )
}
