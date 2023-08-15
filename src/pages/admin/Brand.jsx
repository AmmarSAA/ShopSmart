/********************************
* File Name: Brand.jsx 	        *
* Author: Ammar S.A.A 	      	*
* Output: Brand Page for Admin  *
********************************/

import React from 'react'
import ShowBrands from '../../components/admin/ShowBrands'

export default function Brand() {
  return (
    <div className="container">
      <div className="justify-content-between align-items-center">
        <div className="h4 p-3">All Brands</div>
        <ShowBrands />
      </div>
    </div>
  )
}
