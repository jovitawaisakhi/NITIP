import React from 'react';
import './Style.css';

interface DataProps {
    label: string;
    inputOnChange : (e : React.ChangeEvent<HTMLTextAreaElement>)=>void
}  

const DescBox: React.FC<DataProps> = ({label, inputOnChange}) => {
    return (
        <div className="DescBox">
            <label>{label}</label>
            <div id='description'>
                <textarea onChange={inputOnChange} />
            </div>
        </div>
    );
};

export default DescBox;
