import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Notes from "../../img/Notes.png";
import RayBan from "../../img/rayban.png";
import findUser from "../../img/finduser.png";
import paymentPlan from "../../img/payment.jpg"
import { themeContext } from "../../Context";
const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio" id="portfolio">
            {/* heading */}
            <span style={{ color: darkMode ? 'white' : '' }}></span>
            <span>Recent Projects</span>

            {/* slider */}
            <Swiper
                spaceBetween={20}
                slidesPerView={4}
                grabCursor={true}
                className="portfolio-slider"
            >
                <SwiperSlide>
                    <a href="https://om2rms.github.io/Notes/">
                        <img src={Notes} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://om2rms.github.io/rayBan/">
                        <img src={RayBan} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://om2rms.github.io/NameIt/">
                        <img src={findUser} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://om2rms.github.io/Payment_Plan/">
                        <img src={paymentPlan} alt="" />
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Portfolio;
