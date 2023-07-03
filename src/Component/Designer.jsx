import React from "react";
import image from '../Images/volanteer_1.jpg'
const Designer = () =>
{
    return(
        <>
 <section className="carosal_bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="carosal_bottom_single owl-carousel owl-theme">
                            <div className="item">
                                <img src={image} alt=""/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                                <h4>Florence M. Cofer</h4>
                                <h6>Designer</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Designer;