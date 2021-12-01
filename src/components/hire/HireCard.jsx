import React, {useState} from 'react';

const HireCard = (props) => {
    const [hoverEffect, setEffect] = useState('');
    const [hoverImageEffect, sethoverImageEffect] = useState('');
    const onMouseOverFunc = () => {
        setEffect('hover-effect');
        sethoverImageEffect('hover-image-effect')
    }
    const onMouseLeaveFunc = () => {
        setEffect('');
        sethoverImageEffect('');
    }
    return (
        <>
        <div className={`hire-${props.marketPlace} ${hoverEffect}`} onMouseOver={onMouseOverFunc} onMouseLeave={onMouseLeaveFunc}>
            <img className={hoverImageEffect} src={props.imageSrc} alt={props.marketPlace} />
        </div>
        </>
    );
};

export default HireCard;