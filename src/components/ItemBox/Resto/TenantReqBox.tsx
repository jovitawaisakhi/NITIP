// import React, { useEffect } from 'react';
// import { Tenant } from '../../../interfaces/Tenant';
import Accept from '../../../assets/tick.png';
import Decline from '../../../assets/cross.png';
import './Style.css';
import { Tenant } from '../../../interfaces/Tenant';
import { AcceptTenant, DeclineTenant } from '../../../services/tenant/TenantService';

interface DataProps {
    tenant: Tenant;
}

const TenantReqBox: React.FC<DataProps> = ({tenant}) => {
    // const notify = (message : string)=>{
    //     toast.success('Successful ' + message, {
    //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //       });
    // }

    const handleAccept = async()=>{
        await AcceptTenant(tenant.tenantID)
        // notify("accept tenant")
    }

    const handleDecline = async()=>{
        await DeclineTenant(tenant.tenantID)
        // notify("decline tenant")
    }

    return (
        <div className="tr-box">
            <div className="tr-box-info">
                <p id='tr-name'>{tenant.name}</p>
            </div>

            <div id='decision'>
                <div id='accept'>
                    <img onClick={()=>{handleAccept()}} src={Accept} alt="" />
                </div>
                <div id='decline'>
                    <img onClick={()=>{handleDecline()}} src={Decline} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TenantReqBox;