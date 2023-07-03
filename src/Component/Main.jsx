import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from "react-router-dom";
import "../Style/HomeStyle.css"
const Main = () => {
    return (
        <>
            <section className="carosal-area" id="Home">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="client owl-carousel owl-theme">
                                <div className="item">
                                    <div className="text">
                                        <h3>CHILDREN NEED YOUR HELP</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br /> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
                                        <h5 className="white-button"><NavLink to="#">DONATE NOW</NavLink></h5>
                                        <h5><NavLink to="#">CONTACT US</NavLink></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Main;