import React from 'react';
import './SkillCard.css';

const SkillCard = (props) => {
    let a = props.skill;
    a = a.slice(0,-1);
    a = a-2;
    a = a + '%'
    return (
        <>
            <div className='particular-skill'>
                <div className="skill-container">
                    <div className='show-percentage' style={{ left: a }}>{props.skill}</div>
                    <div className='skill-percentage' style={{ width: props.skill }}></div>
                    <div className="showname">{props.on}</div>
                </div>
            </div>
        </>
    );
};

export default SkillCard;