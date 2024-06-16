import React from 'react';
import './Style.css';

interface DataProps {
    label: string;
    inputOnChange : (e : React.ChangeEvent<HTMLTextAreaElement>)=>void,
    value? : string;
}  

const DescBox: React.FC<DataProps> = ({label, inputOnChange, value}) => {
    return (
        <div className="DescBox">
            <label>{label}</label>
            <div id='description'>
                <textarea value={value} onChange={inputOnChange} />
            </div>
        </div>
    );
};

export default DescBox;
