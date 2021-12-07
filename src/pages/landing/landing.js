import React,{Component} from "react";
import ClientHeader from "../../components/layout/main/mainheader";
import './landing.css'
import HeroOne from "../../components/landingsections/hero1/hero1";
import HeroTwo from "../../components/landingsections/hero2/hero2";
import HeroThree from "../../components/landingsections/hero3/hero3";
import HeroFour from "../../components/landingsections/hero4/hero4";

class LandingPage extends Component {


    render(){
        return(


            <>
            <ClientHeader />
            <div className="home">

              <HeroOne /> 
              <HeroTwo /> 
              <HeroThree />
              <HeroFour/>
               
            </div>

            
            </>





        
        )
    }
}

export default LandingPage