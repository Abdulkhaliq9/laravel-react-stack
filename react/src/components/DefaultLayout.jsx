import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../Axios-client";
import { useEffect } from "react";

export default function DefaultLayout() {
  const { user, token , setUser, setToken} = useStateContext();

  if (!token) {
    return <Navigate to="/login" />;
  }




  // logout button setup
  const onLogOut = (ev) => {
    ev.preventDefault();
 
axiosClient.post('/logout')
.then(()=>{
  setUser({})
  setToken(null)
})
  };

useEffect(()=>{
  axiosClient.get('/user')
  .then(({data})=>{
    setUser(data)
  })
})


  return (
    <div id="defaultLayout">
      <aside>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Users</Link>
      </aside>
      <div className="content">
        <header>
          <div>Header</div>
          <div>
            {user.name}
            <a href="#" onClick={onLogOut} className="btn-logout">
              Log Out
            </a>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
