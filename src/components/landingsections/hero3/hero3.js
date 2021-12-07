import React, { Component } from "react";
import './hero3.css';

class HeroThree extends Component{
    render(){
        return(
            <section className="three d-flex align-items-center" id="three">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 three-img justify-content-left slider" data-aos="zoom-out" data-aos-delay="200"><img className="slide visible img-fluid" id="home3" src="https://washucode.github.io/statics/assets/img/bitcoin.svg" alt="" /></div>
                        <div className="col-lg-5 d-flex flex-column justify-content-center">
                            <h1 data-aos="fade-up"> Multiple Currencies</h1>
                            <h2 data-aos="fade-up" data-aos-delay="400">Send, receive and store your assets in different wallets for easy access and use.</h2>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default HeroThree