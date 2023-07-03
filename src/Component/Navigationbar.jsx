import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from "react-router-dom";
import "../Style/HomeStyle.css"
import Navbar from "./Navbar";
import Main from "./Main";
import Activity from "./Activity";
import Desister from "./Desister";
import UpComingEvents from "./UpComingEvents";
import String from "./String";
import Causes from "./Causes";
import Designer from "./Designer";
import Footer from "./Footer";
const Navigationbar = () => {
    return (
        <>
            <div className="wrapper">
                <header className="header">
                    <section className="header-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-sm-8 col-xs-12">
                                    <div className="contact">
                                        <p><span className="phone"><NavLink id="a" to="#">Phone: +92123456789</NavLink></span><span className="email"><NavLink id="a" to="#">Email: ABCtest@gmail.com</NavLink></span></p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="join-us">
                                        <p><NavLink id="a" to="#">JOIN US</NavLink></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Navbar />
                </header>
                <Main />
                <Activity />
                <Desister />
                <UpComingEvents />
                <String />
                <Causes />
                <Designer />
                <Footer />
            </div>
        </>
    )
}
export default Navigationbar;