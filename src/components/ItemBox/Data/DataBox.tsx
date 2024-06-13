import React from 'react';
import Edit from '../../../assets/edit.png';
import Line from '../../../assets/longLine.png';
import './Style.css';

interface DataProps {
    label: string;
    inputOnChange : (e : React.ChangeEvent<HTMLInputElement>)=>void
}   

const DataBox: React.FC<DataProps> = ({label, inputOnChange}) => {
    return (
        <div className='DataBox'>
            <div id='Lbl_Data'>
                <label>{label}</label>
            </div>
            <div id='data'>
                <input onChange={inputOnChange}/>
                <img src={Edit} alt="Edit" />
            </div>
            <div id='line'>
                <img src={Line} alt="Line" />
            </div>
        </div>
    );
};

export default DataBox;
