import { Link } from "react-router-dom";
import { useState } from "react";
import addMenu from '../../../assets/add.png';
import Edit from '../../../assets/edit.png';
import Line from '../../../assets/longLine.png';
import MenuBox from "../Food/MenuBox";
import '../../../components/ItemBox/Data/Style.css';

export default function RestoInfo(){
    const [restaurantName, setRestaurantName] = useState<string|undefined>();
    const [description, setDescription] = useState<string|undefined>();

    return(
        <div id='resto-info'>
            <div className='DataBox'>
                <div id='Lbl_Data'>
                    <label>Restaurant Name</label>
                </div>
                <div id='data'>
                    <input value={restaurantName} onChange={()=>setRestaurantName(restaurantName)}/>
                    <img src={Edit} alt="Edit" />
                </div>
                <div id='line'>
                    <img src={Line} alt="Line" />
                </div>
            </div>
            <div id='description'>
                <div className="DescBox">
                    <label>Deskripsi</label>
                    <div id='description'>
                        <textarea value={description} onChange={()=>setDescription(description)}/>
                        <img src={Edit} alt="" />
                    </div>
                </div>
            </div>

            {/* komponen*/}
            <div id='menu-list'>
                <div id='title'>
                    <label>Menu</label>
                </div>

                <MenuBox />

                <Link to="/menuDetail">
                    <div id='addMenu'>
                        <img src={addMenu} alt="" />
                    </div>
                </Link>
            </div>
        </div>
    )
}