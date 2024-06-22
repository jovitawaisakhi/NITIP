import React, { useEffect, useState } from 'react';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import TenantBox from '../../components/ItemBox/Resto/TenantBox';
import Search from '../../assets/search.png';
import './Home.css';
import { Tenant } from '../../interfaces/Tenant';
import { GetAcpprovedTenants, GetAllTenant } from '../../services/tenant/TenantService';
import RestoBox from '../../components/ItemBox/Resto/RestoBox';

const HomePage: React.FC = () => {
    const [tenants, setTenants] = useState<Tenant[]>([]);
    const [search, setSearch] = useState<string>('');
    const [filteredItems, setFilteredItems] = useState<Tenant[]>();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearch(query);
        if (query) {
          setFilteredItems(
            tenants.filter((item : any) =>
              item.name.toLowerCase().includes(query.toLowerCase())
            )
          );
        } else {
          setFilteredItems(tenants);
        }
    };

    const fetchAllTenants = async()=>{
        const tenants = await GetAcpprovedTenants();
        if(tenants && !filteredItems){
            setTenants(tenants)
            setFilteredItems(tenants)
        } else if(tenants && filteredItems) {
            setTenants(tenants)
        }
    }

    useEffect(()=>{
        fetchAllTenants();

        console.log(filteredItems)
    }, [])

    return (
        <div>
            <Header />
            <main>
                <div className='container' id='container-home'>

                    <div className='content-web'>

                        <div className='welcome'>
                            <h2>Welcome back, User!</h2>
                            <h3>What food is on your mind?</h3>
                            <div id='search-box'>
                                <input type="text" placeholder="Search here..." value={search} onChange={handleSearch}/>
                                <img src={Search} alt="" />
                            </div>
                        </div>

                        <div className='tenants'>
                            <h2>Tenants</h2>
                            <div className="slider-container">
                                <div id='tenants-list' className="slider">
                                    {
                                        filteredItems?.map((item, index)=>(
                                            <TenantBox key={index} item={item} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='promo'>
                    <div className='content-web'>
                        <h2>Everyone's Favorite</h2>
                        <div className='slider-container'>
                            <div id='resto-promo-list' className="slider">
                                {
                                    filteredItems?.map((item, index)=>(
                                        <RestoBox key={index} tenant={item} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;