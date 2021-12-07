import React, { Component } from "react";
import './hero4.css';

import  Home2  from '../../../img/Home2.svg';

class HeroFour extends Component{
    render(){
        return(
            <section className="four d-flex align-items-center" id="four">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 d-flex flex-column justify-content-center">
                            <h1 data-aos="fade-up">Swift Payments</h1>
                            <h2 data-aos="fade-up" data-aos-delay="400">Instant conversions of digital currency its cash value, protecting you against crypo volatility.</h2>
                        </div>
                        <div className="col-lg-7 four-img justify-content-left" data-aos="zoom-out" data-aos-delay="200"><img className="img-fluid" id="home4" src={Home2} alt="" /></div>
                    </div>
                </div>
            </section>
        )
    }
}


export default HeroFour