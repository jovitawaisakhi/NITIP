import React from 'react';
// import { Tenant } from '../../../interfaces/Tenant';
import Accept from '../../../assets/tick.png';
import Decline from '../../../assets/cross.png';
import './Style.css';

// interface DataProps {
//     tenant: Tenant;
// }

const TenantReqBox: React.FC = () => {
    return (
        <div className="tr-box">
            <div className="tr-box-info">
                <p id='tr-name'>Xiao Kee</p>
            </div>

            <div id='decision'>
                <div id='accept'>
                    <img src={Accept} alt="" />
                </div>
                <div id='decline'>
                    <img src={Decline} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TenantReqBox;