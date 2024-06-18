import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RegistrationForm from '../../components/Form/RegistrationForm';

const RegisterPage: React.FC = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const role = queryParams.get('role');

    useEffect(() => {
        document.body.classList.add('register-page-body');
        
        return () => {
            document.body.classList.remove('register-page-body');
        };
    }, []);

    if (!role) {
        return <div>Please select a role to register</div>;
    }

    return (
        <main>
            <div>
                <RegistrationForm role={role} />
            </div>
        </main>
    );
};

export default RegisterPage;
