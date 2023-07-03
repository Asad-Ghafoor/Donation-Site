import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from "react-router-dom";
import "../Style/HomeStyle.css"

const Desister = () =>
{
    return(
        <>
<section className="donate_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 for-padding">
                        <h4>URGENT CAUSE</h4>
                        <h3>Recent Environmental Disasters</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div className="progress-text">
                            <p className="progress-top">50%</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{"width":"80%"}}></div>
                            </div>
                            <p className="progress-left">Raised: $1200</p>
                            <p className="progress-right">Goal: $2400</p>
                        </div>
                        <h2><NavLink id="a" className='textAlign' to="#">DONATE NOW</NavLink></h2>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Desister;