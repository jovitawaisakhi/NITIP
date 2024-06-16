import React, { useState, useEffect } from 'react';
import DataBox from '../Data/DataBox';
import DescBox from '../Data/DescBox';
import FoodsList from './FoodList';
import { Tenant } from '../../../interfaces/Tenant';

interface RestoInfoProps {
    tenant: Tenant;
}

const RestoInfo: React.FC<RestoInfoProps> = ({ tenant }) => {
    const [restaurantName, setRestaurantName] = useState<string>(tenant.name);
    const [description, setDescription] = useState<string>(tenant.desc!!);

    useEffect(() => {
        setRestaurantName(tenant.name);
        setDescription(tenant.desc!!);
    }, [tenant]);

    const handleRestaurantNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRestaurantName(e.target.value);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };

    return (
        <div id='resto-info'>
            <DataBox
                label="Restaurant Name"
                value={restaurantName}
                inputOnChange={handleRestaurantNameChange}
            />
            <div id='description'>
                <DescBox
                    label="Description"
                    value={description}
                    inputOnChange={handleDescriptionChange}
                />
            </div>

            <div id='menu-list'>
                <div id='title'>
                    <label>Menu</label>
                </div>

                <FoodsList foods={tenant.foods!!} />

                {/* <Link to="/menuDetail">
                    <div id='addMenu'>
                        <img src={addMenu} alt="Add Menu" />
                    </div>
                </Link> */}
            </div>
        </div>
    );
};

export default RestoInfo;