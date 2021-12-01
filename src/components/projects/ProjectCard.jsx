import React from 'react';
import { useState } from 'react';
import './ProjectCard.css';


const ProjectCard = (props) => {
    const [current, update] = useState('extra-info');
    const [onCurrent, onUpdate] = useState('image');

    const cardHover = () => {
        update('extra-info anim');
        onUpdate('image not-active');
    }
    const cardHoverAlt = () => {
        update('extra-info');
        onUpdate('image');
    }
    const callF =() => {
        onUpdate('image not-active');
    }
    return (
        <>
            <div className="card-container" onMouseOver={cardHover} onMouseLeave={cardHoverAlt}>
                <div className={onCurrent} onMouseOver={callF}>
                    <img src={props.imageSrc} alt="" />
                </div>
                <div className={current}>
                    <h1>{props.projectName}</h1>
                    <p>{props.desc}</p>
                </div>
            </div>
        </>
    );
};

export default ProjectCard;