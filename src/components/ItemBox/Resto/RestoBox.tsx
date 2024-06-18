import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Tenant } from '../../../interfaces/Tenant';
import './Style.css';

interface DataProps{
    tenant : Tenant;
}

const RestoBox: React.FC<DataProps> = ({tenant}) => {
    const navigate = useNavigate();

    return (
        <Link to={`/tenant/${tenant.tenantID}`}>
            <div className="resto-box">
                <div className="resto-box-info">
                    <p onClick={()=>navigate('/restaurantDetail')} id='resto-name'>{tenant.name}</p>
                </div>
            </div>
        </Link>
    );
};

export default RestoBox;