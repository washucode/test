import React, { Component } from "react";
import './hero2.css';
import hero2 from '../../../img/home23.png'
class HeroTwo extends Component{
    render(){
        return(
            <section className="two d-flex align-items-center" id="two">
                <div className="container too">
                    <div className="row">
                        <div className="col-lg-4 d-flex flex-column justify-content-center">
                            <h1 data-aos="fade-up">Bridging financial systems</h1>
                            <h2 data-aos="fade-up" data-aos-delay="400">Exchange your cash to crypto, crypto to cash and even one crypto token for the other using BitLipa</h2>
                        </div>
                        <div className="col-lg-8 two-img justify-content-left" data-aos="zoom-out" data-aos-delay="200"><img className="img-fluid" id="home2" src={hero2} alt="" /></div>
                    </div>
                </div>
            </section>
        )
    }
}

export default HeroTwo