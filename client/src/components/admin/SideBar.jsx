import React, { useEffect } from 'react'
import { FaHome } from 'react-icons/fa'
import { BiSolidCategory } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'

export default function SideBar() {

    const NavItems = [
        {
            tab: "Home",
            url: "/",
            icon: <FaHome />
        },
        {
            tab: "Products",
            url: "/products",
            icon: <BiSolidCategory />
        }
    ]

    const location = useLocation()

    useEffect(() => {
        console.log(location.pathname)
    }, [location])

    return (
        <>
            <div className="bg-primary d-flex align-items-center justify-content-between text-white p-3">
                <span>Admin Name</span>
                <button className="btn btn-outline-light">Logout</button>
            </div>

            <ul className="nav flex-column">
                {
                    NavItems.map((val, key) =>
                        <li key={key} className={`nav-item m-2 ${location.pathname == val.url ? 'bg-white rounded' : null}`}>
                            <Link to={val.url} className='gap-3 nav-link d-flex align-items-center'>
                                <span>{val.icon}</span>

                                <span>{val.tab}</span>
                            </Link>
                        </li>
                    )
                }
            </ul>

        </>

    )
}
