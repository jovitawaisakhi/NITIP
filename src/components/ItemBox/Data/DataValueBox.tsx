import React from 'react';
import Edit from '../../../assets/edit.png';
import Line from '../../../assets/longLine.png';
import './Style.css';

interface DataProps {
    label: string;
    data: string | number;
    inputOnChange : (e : React.ChangeEvent<HTMLInputElement>)=>void;
}   

const DataValueBox: React.FC<DataProps> = ({label, data, inputOnChange}) => {
    data = data.toString()

    return (
        <div className='DataBox'>
            <div id='Lbl_Data'>
                <label>{label}</label>
            </div>
            <div id='data'>
                <input type='text' value={data} onChange={inputOnChange}/>
                <img src={Edit} alt="Edit" />
            </div>
            <div id='line'>
                <img src={Line} alt="Line" />
            </div>
        </div>
    );
};

export default DataValueBox;
