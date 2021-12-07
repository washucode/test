import React, { Component } from "react";
import "./hero1.css";
import hero1 from "../../../img/home.svg"
class HeroOne extends Component{
    render(){
        return(
            <section className="hero d-flex align-items-center" id="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col md-12 hero-img justify-content-left" data-aos="zoom-out" data-aos-delay="200"><img className="img-fluid" id="home1" src={hero1} alt="" /></div>
                        <div className="col-lg-5 col-md-12 d-flex flex-column justify-content-center">
                            <h1 data-aos="fade-up">Convenient Borderless Transactions</h1>
                            <h2 data-aos="fade-up" data-aos-delay="200">Cut down on cost and time when transacting across the globe.</h2>
                        </div>
                    </div>
                </div>
            </section>
        )
        
    }
}

export default HeroOne