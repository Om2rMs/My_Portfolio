import React from "react";
import "./Footer.css";
import FooterImage from "../../img/footer-image.png";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
    return (
        <div className="footer">
            <img src={FooterImage} alt="" style={{ width: "100%" }} />
            <div className="f-content">
                <span>moro.bash97@gmail.com</span>
                <div className="f-icons">
                    <a href="https://twitter.com/om2r_mh">
                        <Twitter color="White" size={"3rem"} href="" />
                    </a>
                    <a href="https://github.com/Om2rMs">
                        <Gitub color="White" size={"3rem"} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
