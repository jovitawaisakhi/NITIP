import React from 'react';
import { Link } from 'react-router-dom';

const RestoPromoBox: React.FC = () => {
    return (
        <Link to="/tenant">
            <div className="resto-promo">
                <div className="resto-promo-info">
                    <p id='resto-name'>Xiao Kee, Binus Anggrek</p>
                    <p>Chinese Food [Food Category]</p>
                </div>
            </div>
        </Link>
    );
};

export default RestoPromoBox;