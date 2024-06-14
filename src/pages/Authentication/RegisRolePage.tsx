import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './RegisRole.css';
import RegistrationForm from '../../components/Form/RegistrationForm';

const RegisRolePage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const initialRole = queryParams.get('role');
    const [role, setRole] = useState<string | null>(initialRole);

    const handleRoleSelection = (selectedRole: string) => {
        setRole(selectedRole);
        navigate(`/register?role=${selectedRole}`);
    };

    useEffect(() => {
        if (role) {
            navigate(`/register?role=${role}`);
        }
    }, [role, navigate]);

    return (
        <div className="container" id='container-reg'>
            {!role ? (
                <div className='content-mobile' id='content-reg'>
                    <h1>Register as...</h1>

                    <div className='option'>
                        <button onClick={() => handleRoleSelection('customer')}>
                            <p>Customer</p>
                        </button>
                    </div>

                    <div className='option'>
                        <button onClick={() => handleRoleSelection('tenant')}>
                            <p>Tenant Owner</p>
                        </button>
                    </div>
                </div>
            ) : (
                <RegistrationForm role={role} />
            )}
        </div>
    );
};

export default RegisRolePage;
