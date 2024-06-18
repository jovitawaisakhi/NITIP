import React from 'react';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import './TenantReq.css';
import TenantReqBox from '../../components/ItemBox/Resto/TenantReqBox';

const TenantReqPage: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <div className='container'>

                    <div className='content-mobile'>

                        <h2>Tenant Request(s)</h2>
                        <div id='tr-list'>
                            <TenantReqBox />
                            <TenantReqBox />
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TenantReqPage;