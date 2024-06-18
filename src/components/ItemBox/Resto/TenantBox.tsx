import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';
import { Tenant } from '../../../interfaces/Tenant';

interface DataProps{
    item : Tenant;
}

const TenantBox: React.FC<DataProps> = ({item}) => {
    return (
        <Link to={`/tenant/${item.tenantID}`}>
            <div className='tenant'>
                <div id='tenant-image'>
                    <img src={item.linkProfile} alt="" />
                </div>
                
                <div className='tenant-info'>
                    <p>{item.name}</p>
                    <p id='rating'>⭐</p>
                </div>
            </div>
        </Link>
    );
};

export default TenantBox;