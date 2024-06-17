import React, { useEffect } from 'react';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import foodImg from '../../assets/hainan-rice.jpeg';
import FoodBox from '../../components/ItemBox/Food/FoodBox';
import './Tenant.css';
import { Tenant } from '../../interfaces/Tenant';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchTenantAndFoodById } from '../../services/tenant/TenantService';
import Empty from '../../assets/empty-box.png';

const TenantPage: React.FC = () => {
    const { tenantID } = useParams<{ tenantID: string }>();
    const[tenant, setTenant] = React.useState<Tenant>();
    const navigate = useNavigate();

    useEffect(() => {
        if (tenantID === null) {
            navigate('/login');
        } else {
            const fetchTenant = async () => {
                try {
                    const tenant = await fetchTenantAndFoodById(tenantID!);
                    setTenant(tenant);
                } catch (error) {
                    console.error("Failed to fetch tenant:", error);
                }
            };
            fetchTenant();
        }

        console.log(tenant?.foods?.length)
    }, []);
    
    return (
        <div>
            <Header />

            <div className='container' id='container-tenant'>
                <div id='foodImg'>
                    <img src={foodImg} alt="" />
                </div>

                <div id='container-food'>
                    <div className='content-web' id='content-tenant'>
                        {tenant?.foods?.length ? tenant.foods?.map((food, index)=>(
                            <div className='foodList'>
                                <h2>{tenant.name}</h2>
                                <FoodBox key={index} food={food}/>
                            </div>
                        )) : (
                            <div id='content-empty'>
                                <img src={Empty}/>
                                <p>Currently no menu available</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default TenantPage;