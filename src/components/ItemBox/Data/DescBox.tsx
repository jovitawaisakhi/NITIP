import React from 'react';
import Edit from '../../../assets/edit.png';
import './Style.css';

const DescBox: React.FC = () => {
    return (
        <div className="DescBox">
            <label>Deskripsi</label>
            <div id='description'>
                <textarea />
                <img src={Edit} alt="" />
            </div>
        </div>
    );
};

export default DescBox;
