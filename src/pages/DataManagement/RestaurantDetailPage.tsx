import React, { useEffect } from 'react';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import './RestaurantDetail.css';
import '../../components/ItemBox/Data/Style.css'
import RestoInfo from '../../components/ItemBox/Resto/RestoInfo';
import { Tenant } from '../../interfaces/Tenant';
import { fetchTenantAndFoodById } from '../../services/tenant/TenantService';
import { useNavigate } from 'react-router-dom';

const RestaurantDetailPage: React.FC = () => {

    const[tenant, setTenant] = React.useState<Tenant>();
    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem("user");
        if (userId === null) {
            navigate('/login');
        } else {
            const fetchTenant = async () => {
                try {
                    const tenant = await fetchTenantAndFoodById(userId);
                    setTenant(tenant);
                } catch (error) {
                    console.error("Failed to fetch tenant:", error);
                }
            };
            fetchTenant();
            console.log(tenant)
        }
    }, []);

    return (
        <div>
            <Header />
            <main>
                <div className='container'>
                    <div className='content-mobile' id='content-restoDetail'>
                        <h2>Restaurant Details</h2>
                        <div id='resto-picture'>
                            <div id='picture'>
                                {tenant ? 
                                    <img src={tenant?.linkProfile} alt="" /> : 
                                    <img src='hainan-rice.jpeg' alt="" />
                                }
                            </div>
                        </div>
                        {tenant ? <RestoInfo tenant={tenant} /> : <p>Loading...</p>}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default RestaurantDetailPage;