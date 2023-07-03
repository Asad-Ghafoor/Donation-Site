import React from "react";
import img3 from '../Images/events_single_three.jpg'
import img2 from '../Images/events_single_two.jpg'
import img1 from '../Images/events_single_one.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from "react-router-dom";
import "../Style/HomeStyle.css"
import 'font-awesome/css/font-awesome.min.css'; 

const UpComingEvents = () =>
{
    return(
        <>
<section className="events_section_area">
            <h2>UPCOMING EVENTS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. </p>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-xs-12">
                        <div className="events_single">
                            <img src={img1} alt=""/>
                            <p><span className="event_left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>1:00 pm - 3:00 pm</span><span className="event_right"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>California Street</span></p>
                            <div className="clear"></div>
                            <h3>Education For Children</h3>
                            <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</h6>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <div className="events_single">
                            <img src={img2} alt=""/>
                            <p><span className="event_left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>1:00 pm - 3:00 pm</span><span className="event_right"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>California Street</span></p>
                            <h3>Education For Children</h3>
                            <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</h6>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <div className="events_single">
                            <img src={img3} alt=""/>
                            <p><span className="event_left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>1:00 pm - 3:00 pm</span><span className="event_right"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>California Street</span></p>
                            <h3>Education For Children</h3>
                            <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default UpComingEvents;