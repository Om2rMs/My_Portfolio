import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
// install from npm on google
import { Link } from "react-scroll";


const Navbar = () => {
    return (
        <div className="n-navbar" id="Navbar">
            <div className="n-left">
                <div className="n-name">Omar</div>
                {/* Toggle */}
                <Toggle />

            </div>

            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: "none" }}>
                        <li>
                            <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="services" spy={true} smooth={true}>
                                Skills
                            </Link>
                        </li>
                        {/* <li>
                            <Link to="testimonial" spy={true} smooth={true}>
                                Quotes
                            </Link>
                        </li> */}
                        <li>
                            <Link to="portfolio" spy={true} smooth={true}>
                                Projects
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}




export default Navbar;