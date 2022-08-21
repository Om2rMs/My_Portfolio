import React from "react";
import Intro from "../Intro/Intro";
import { useContext } from "react";
import { themeContext } from "../../Context";
import Navbar from "../Navbar/Navbar";
import Services from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import './App.css'
import Footer from "../Footer/Footer";

function App() {


    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (

        <div
            className="App"
            style={{
                background: darkMode ? "black" : "",
                color: darkMode ? "white" : "",
            }}
        >
            <Navbar />
            <Intro />
            <Services />
            <Portfolio />
            <Footer />


        </div>
    )
}


export default App;