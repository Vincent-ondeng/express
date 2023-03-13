import React from 'react'
import {Link} from 'react-router-dom'
import Logo from "client/src/img/logo2.png"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="Express" />
                </div>
                <div className="links">
                    <Link className='link' to="/?cat=art">
                        <h6>ART</h6>
                    </Link>
                    <Link className='link' to="/?cat=books">
                        <h6>BOOKS</h6>
                    </Link>
                    <Link className='link' to="/?cat=cinema">
                        <h6>CINEMA</h6>
                    </Link>
                    <Link className='link' to="/?cat=design">
                        <h6>DESIGN</h6>
                    </Link>
                    <Link className='link' to="/?cat=food">
                        <h6>FOOD</h6>
                    </Link>
                    <Link className='link' to="/?cat=marketing">
                        <h6>MARKETING</h6>
                    </Link>
                    <Link className='link' to="/?cat=programming">
                        <h6>PROGRAMMING</h6>
                    </Link>
                    <span>Vincent</span>
                    <span>Logout</span>
                    <span className="write">
                        <Link className="link" to="/write">Write</Link>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Navbar