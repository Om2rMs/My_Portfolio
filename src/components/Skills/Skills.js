import React, { useContext } from "react";
import "./Skills.css";
import Card from "../Card/Card";
import PHP from "../../img/php.png";
import REACT from "../../img/react.png";
import Code from "../../img/code.png";
import Laravel from "../../img/laravel.png";
import Flutter from "../../img/flutter.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";



const Services = () => {
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


    // transition
    const transition = {
        duration: 1,
        type: "spring",
    };

    return (
        <div className="services" id="services">
            {/* left side */}
            <div className="awesome">
                {/* dark mode */}
                <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
                <span>Skills</span>

                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right */}
            <div className="cards">
                {/* first card */}
                <motion.div
                    initial={{ left: "25rem" }}
                    whileInView={{ left: "13rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={REACT}
                        heading={"React js"}
                    />
                </motion.div>

                {/* Second card */}
                <motion.div
                    initial={{ left: "10rem" }}
                    whileInView={{ left: "27rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={Laravel}
                        heading={"Laravel"}
                    />
                </motion.div>

                {/* third card */}
                <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-2rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={Code}
                        heading={"HTML , CSS"}

                    />
                </motion.div>

                {/* Forth card */}
                <motion.div
                    initial={{ top: "12rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={PHP}
                        heading={"PHP Native"}

                    />
                </motion.div>

                {/* Fifth card */}
                <motion.div
                    initial={{ top: "12rem", left: "40rem" }}
                    whileInView={{ left: "26rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={Flutter}
                        heading={"Flutter"}

                    />
                </motion.div>



                <div
                    className="blur s-blur2"
                    style={{ background: "#89c3d6" }}
                ></div>
            </div>
        </div>
    );
};

export default Services;
