import React from 'react';
import hainan_rice from '../../../assets/hainan-rice.jpeg';
import { Link } from 'react-router-dom';
import './Style.css';

const RestoRecomenBox: React.FC = () => {
    return (
        <Link to="/tenant">
            <div className='resto-recomen'>
                <img src={hainan_rice} alt="" />
                <div className='resto-recomen-info'>
                    <p>Xiao Kee, Binus Anggrek</p>
                    <p id='rating'>⭐ 5.0</p>
                </div>
            </div>
        </Link>
    );
};

export default RestoRecomenBox;