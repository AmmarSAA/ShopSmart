/********************************
* File Name: Users.jsx 	        *
* Author: Ammar S.A.A 	      	*
* Output: Users Page for Admin  *
********************************/

import React from 'react'
import ShowUsers from '../../components/admin/ShowUsers'

export default function Users() {
  return (
    <div className="container">
      <div className="justify-content-between align-items-center">
        <div className="h4 p-3">All Users</div>
        <ShowUsers />
      </div>
    </div>
  )
}
