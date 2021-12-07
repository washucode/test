import React,{useState} from "react";
import './mainheader.css';
import logo from "../../../img/logo.svg"



function ClientHeader(){



    const[isMobile,setMobile] = useState("true");
    const[isOpen,setOpen]=useState("true")
    const toggleHandler =()=>{
        setMobile(!isMobile)
        setOpen(!isOpen)
    }

   
    return(
        <header className="header fixed-top" id="header">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between"><a className="logo d-flex align-items-center" href="/home"><img src={logo} alt="" /></a>
                
                <nav className= {`${isMobile?"":"navbar-mobile"} navbar`} id="navbar">
                    <ul>
                        <li><a className="scrollto active" href="/">Home</a></li>
                        
                    </ul>
                    
                    <button onClick={toggleHandler} className="ibtn">
                        <i className="fas fa-bars mobile-nav-toggle" ></i>
                    </button>
                
                
                    
                </nav>

                
                   
                       
                            
                    


                
                
                <nav className="navbar2 navbar2 fixed-bottom d-flex align-items-center justify-content-between" id="navbar2">
                    <div className="navbar-header"><a className="navbar-brand" id="banner" href="/"><img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" /></a></div>
                    <ul>
                        <li><a className="nav-link scroll-to" href="https://t.me/+902FzxMoq2FkNzU0"><span className="bx bxl-telegram bx-sm"></span></a></li>
                        <li><a className="nav-link scroll-to" href="https://twitter.com/Bitlipa_"><span className="bx bxl-twitter bx-sm"></span></a></li>
                        <li><a className="nav-link scroll-to" href="https://discord.gg/mfaSNx9MC9"><span className="bx bxl-discord bx-sm"></span></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
   
}

export default  ClientHeader;

