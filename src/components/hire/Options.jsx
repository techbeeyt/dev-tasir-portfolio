import React from 'react';
import HireCard from './HireCard';
import './Options.css'

const Options = () => {
    
    return (
        <>
        <h2>Hire me on</h2>
        <div className="hire-list-container">
                <HireCard marketPlace='fiver' imageSrc='https://digisolutionexpo.com/wp-content/uploads/2021/04/Fiverr-emblem.jpg'/>
                <HireCard marketPlace='upwork' imageSrc='https://i2.wp.com/indomumma.com/wp-content/uploads/2017/09/Upwork-logo-e1504235075862-300x300.jpg?resize=300%2C300' />
                <HireCard marketPlace='freelancer' imageSrc='https://dnc.techtunes.io/tDrive/tuner/2018/03/techtunes_ee6fe6ce246dc8747a94c701cde808c6.jpg' />
                <HireCard marketPlace='devtasir' imageSrc='https://cdn6.f-cdn.com/contestentries/1873290/51967715/5ff8322805e3a_thumb900.jpg' />

        </div>
        </>
    );
};

export default Options;