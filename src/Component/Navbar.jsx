import React from "react";
import { NavLink } from "react-router-dom";
import main  from '../Images/main.png'
const Navbar = () => {
    return (
        <>
            <section className="header-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 col-xs-12">
                            <NavLink id="a" href="#">
                                <div className="main-logo">
                                    <img src={main} alt="" />
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-md-7 col-sm-12 col-xs-12">
                            <div className="menu">
                                <ul className="nav navbar-nav">
                                    <li id="Home" className="active"><NavLink id="a" href="#">HOME</NavLink></li>
                                    <li id="ABOUT"><NavLink id="a" href="#">ABOUT US</NavLink></li>
                                    <li id="Causes"><NavLink id="a" href="#">CAUSES</NavLink></li>
                                    <li id="Event"><NavLink id="a" href="#">EVENT</NavLink></li>
                                    <li id="Contact"><NavLink id="a" href="#">CONTACT</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Navbar;