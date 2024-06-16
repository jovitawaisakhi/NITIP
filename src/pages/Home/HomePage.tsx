import React, { useEffect, useState } from 'react';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import RestoRecomenBox from '../../components/ItemBox/Resto/RestoRecomenBox';
import RestoPromoBox from '../../components/ItemBox/Resto/RestoPromoBox';
import Search from '../../assets/search.png';
import './Home.css';
import { Tenant } from '../../interfaces/Tenant';
import { GetAllTenant } from '../../services/tenant/TenantService';

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
        const tenants = await GetAllTenant();
        if(tenants && !filteredItems){
            setTenants(tenants)
            setFilteredItems(tenants)
        } else if(tenants && filteredItems) {
            setTenants(tenants)
        }
    }

    useEffect(()=>{
        fetchAllTenants();
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

                        <div className='top-recomen'>
                            <h2>Tenants</h2>
                            <div className="slider-container">
                                <div id='resto-recomen-list' className="slider">
                                    {
                                        filteredItems?.map((item, index)=>(
                                            <RestoRecomenBox key={index} item={item} />
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

                                <RestoPromoBox />
                                <RestoPromoBox />
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