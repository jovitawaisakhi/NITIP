import React, { useEffect, useState } from 'react';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import './TenantReq.css';
import TenantReqBox from '../../components/ItemBox/Resto/TenantReqBox';
import { GetPendingTenant } from '../../services/tenant/TenantService';
import { Tenant } from '../../interfaces/Tenant';

const TenantReqPage: React.FC = () => {
    const [tenants, setTenants] = useState<Tenant[]>();

    const fecthPendingTenant = async ()=>{
        const t = await GetPendingTenant();

        if(t){
            setTenants(t);
        }
    }

    useEffect(()=>{
        fecthPendingTenant();
    }, [])

    return (
        <div>
            <Header />
            <main>
                <div className='container'>

                    <div className='content-mobile'>

                        <h2>Tenant Request(s)</h2>
                        {tenants?.map((tenant)=>(
                            <div id='tr-list'>
                                <TenantReqBox tenant={tenant} />
                            </div>
                        ))}
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TenantReqPage;