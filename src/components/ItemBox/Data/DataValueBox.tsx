import React from 'react';
import Edit from '../../../assets/edit.png';
import Line from '../../../assets/longLine.png';
import './Style.css';
import { UpdateFood } from '../../../services/food/FoodService';
import { useParams } from 'react-router-dom';

interface DataProps {
    label: string;
    data: string | number;
}   

const DataValueBox: React.FC<DataProps> = ({label, data}) => {
    const {foodID} = useParams();

    return (
        <div className='DataBox'>
            <div id='Lbl_Data'>
                <label>{label}</label>
            </div>
            <div id='data'>
                <p>{data}</p>
                <img onClick={()=>{UpdateFood(foodID)}} src={Edit} alt="Edit" />
            </div>
            <div id='line'>
                <img src={Line} alt="Line" />
            </div>
        </div>
    );
};

export default DataValueBox;
