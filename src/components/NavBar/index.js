import NavLinks from "./NavLinks"
import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import {useState} from "react"
import routes from "../../routes"
function NavBar(props) {
    const[toggle, setToggle] = useState({toggle: false})
    const toggleNav = () =>{
        setToggle(!toggle)
    }
    const logOut= ()=>{
        props.history.push("/")
        props.logOut()
    }
        return (
            <Router forceRefresh={true}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Logo</Link>
            <button className="navbar-toggler" type="button" onClick={() => toggleNav()}>
                <span className="navbar-toggler-icon" />
            </button>
            <div className={`collapse navbar-collapse ${toggle ? "" : "show" }`} id="navbarNav">
            { props.token ? (<ul className="navbar-nav ml-auto">
                    <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
                    <li className="nav-item" ><Link className="nav-link" to="/" onClick={()=> props.logOut()}>Log Out</Link></li>
                </ul>): (<ul className="navbar-nav ml-auto">
                    <NavLinks links={routes} />
                </ul>)}
            </div>
        </nav>
        </Router>)
    }

export default NavBar;