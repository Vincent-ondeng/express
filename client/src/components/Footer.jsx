import React from 'react'
import Logo from "client/src/img/logo.png"

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="" />
            <span>
                Made with Love and Passion <b>ALX Software Engineering</b>. <b>React.js</b>
            </span>
        </footer>
    )
}

export default Footer