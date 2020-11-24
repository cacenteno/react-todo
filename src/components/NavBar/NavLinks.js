import React from "react"
import { Link } from "react-router-dom";
function NavLinks(props) {
    return (
        <ul className="navbar-nav">
            {
            props.links.map((link) => {
                return (    
                    <li className="nav-item" key={link.id}>
                        <Link className="nav-link" to={link.href}>{link.text}</Link>
                    </li>
                )
            })
            }
        </ul>
    )
}
export default NavLinks;