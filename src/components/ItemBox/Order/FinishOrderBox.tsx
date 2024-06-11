import React, { useState } from 'react';
import './Style.css';

const FinishOrderBox: React.FC = () => {

    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleButtonClick = () => {
        setIsClicked(true);
    };

    return (
        <div className="FOBox">
            <label id='name'>Jonathan Maverick</label>
            <label id='food'>Hainan Rice 1x</label>
            <label id='note'>Note: Mau extra cabe pedes nampol</label>
            <button className={isClicked ? 'clicked' : ''} onClick={handleButtonClick}>Done</button>
        </div>
    );
};

export default FinishOrderBox;