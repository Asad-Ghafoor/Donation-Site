import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from "react-router-dom";
import "../Style/HomeStyle.css"
import image from '../Images/donors_featured_one.jpg'
const Causes = () => {
    return (
        <>
            <section className="donors">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="donors_input">
                                <h2>DONATION NOW</h2>
                                <form action="#" method="post">
                                    <p className="amount">
                                        <label for="usd">AMOUNT : </label>
                                        <input type="radio" name="usd" id="usd" checked />20usd
                                        <input type="radio" name="usd" id="usd" />50usd
                                        <input type="radio" name="usd" id="usd" />100usd </p>
                                    <p className="type">
                                        <label for="type">TYPE : </label>
                                        <input type="radio" name="time" id="type" checked />One Time
                                        <input type="radio" name="time" id="type" />Monthly
                                        <input type="radio" name="time" id="type" />Yearly <br />
                                    </p>
                                    <h5>
                                        <input type="text" placeholder="Name" />
                                        <input type="email" placeholder="Email" />
                                    </h5>
                                    <h4>
                                        <select>
                                            <option>I Want To Donate For 1</option>
                                            <option>I Want To Donate For 2</option>
                                            <option>I Want To Donate For 3</option>
                                        </select>
                                    </h4>
                                    <input type="submit" value="DONATION NOW" />
                                </form>
                            </div>
                            <div className="donors_image">
                                <h2>FEATURED DONORS</h2>
                                <div className="donors_featured owl-carousel owl-theme">
                                    <div className="item">
                                        <img src={image} alt="" />
                                        <h3>Kenneth J. Garnica</h3>
                                        <p>Donated Amount : <span>220 USD</span> </p>
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
export default Causes