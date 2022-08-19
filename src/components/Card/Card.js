import React from "react";
import "./Card.css";

const Card = ({ emoji, heading, color }) => {
    return (
        <div className="card" style={{ borderColor: { color } }}>
            <img src={emoji} alt="" />
            <span>{heading}</span>
        </div>
    );
};

export default Card;