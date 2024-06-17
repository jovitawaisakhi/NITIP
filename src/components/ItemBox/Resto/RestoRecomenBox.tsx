import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';
import { Tenant } from '../../../interfaces/Tenant';

interface DataProps{
    item : Tenant;
}

const RestoRecomenBox: React.FC<DataProps> = ({item}) => {
    return (
        <Link to={`/tenant/${item.tenantID}`}>
            <div className='resto-recomen'>
                <img src={item.linkProfile} alt="" />
                <div className='resto-recomen-info'>
                    <p>{item.name}</p>
                    <p id='rating'>⭐</p>
                </div>
            </div>
        </Link>
    );
};

export default RestoRecomenBox;