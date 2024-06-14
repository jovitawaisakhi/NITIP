import React from 'react';
import Edit from '../../../assets/edit.png';
import './Style.css';

interface DataProps {
    label: string;
    data: string;
}  

const DescValueBox: React.FC<DataProps> = ({label, data}) => {
    return (
        <div className="DescBox">
            <label>{label}</label>
            <div id='description'>
                <p>{data}</p>
                <img src={Edit} alt="" />
            </div>
        </div>
    );
};

export default DescValueBox;
