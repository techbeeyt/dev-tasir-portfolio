import React from 'react';
import './Motivation.css'

const MotivationCard = (props) => {
    return (
        <>
            <div className={`motivation-card ${props.isActive}`}>
                <div className="image"><img src={props.image} alt="Avatar" /></div>
                <div className="name">{props.name}</div>
                <div className="rating"><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i></div>
                <div className="quote"><i class="fas fa-quote-left"></i> {props.quote} <i class="fas fa-quote-right"></i></div>
            </div>
        </>
    );
};

export default MotivationCard;