import React, { useContext } from "react";
import "./Intro.css";
import background from "../../img/background.png";
import { themeContext } from "../../Context";
// import cvAr from './files/cv-ar.pdf';
import cvEn from './files/cv-en1.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'




const Intro = () => {


    const transition = { duration: 2, type: "spring" };

    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


    return (
        <div className="Intro" id="Intro">
            {/* left name side */}
            <div className="i-left">
                <div className="i-name">
                    {/* yahan change hy darkmode ka */}
                    <span style={{ color: darkMode ? "white" : "" }}>Nice To Visit You</span>
                    <span>I'm Omar Mohammed</span>
                    <span>
                        On my way to become Full Stack Developer. Programming is a passion for me, and I love to constantly learn about anything related to it .
                    </span>
                </div>
                <div className="download-cv">

                    <a href={cvEn} >
                        <FontAwesomeIcon icon={faDownload} size="2x" />   CV
                    </a>
                </div>
            </div>
            {/* right image side */}
            <div className="i-right">
                <img src={background} alt="" />
                {/* animation */}


                {/* <motion.div
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "68%" }}
                    transition={transition}
                    className="floating-div"
                >
                    <FloatinDiv img={dev} text1="Web" text2="Developer" />
                </motion.div>

                {/* animation */}
                {/* <motion.div
                    initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "0rem" }}
                    transition={transition}
                    className="floating-div"
                >
                    {/* floatinDiv mein change hy dark mode ka */}
                {/* <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
            </motion.div>   */}

                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div
                    className="blur"
                    style={{
                        background: "#f07369",
                        top: "17rem",
                        width: "21rem",
                        height: "11rem",
                        left: "1rem",
                    }}
                ></div>
            </div>
        </div >
    );
};




export default Intro;