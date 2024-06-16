import React from 'react';
import Line from '../../../assets/longLine.png';
import './Style.css';

interface DataProps {
    label: string;
    inputOnChange : (e : React.ChangeEvent<HTMLInputElement>)=>void,
    value?: string;
}   

const DataBox: React.FC<DataProps> = ({label, inputOnChange, value}) => {
    return (
        <div className='DataBox'>
            <div id='Lbl_Data'>
                <label>{label}</label>
            </div>
            <div id='data'>
                <input value={value} onChange={inputOnChange}/>
            </div>
            <div id='line'>
                <img src={Line} alt="Line" />
            </div>
        </div>
    );
};

export default DataBox;
