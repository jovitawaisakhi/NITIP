import React, { useEffect } from 'react';
import LoginForm from '../../components/Form/LoginForm';

const LoginPage: React.FC = () => {

    useEffect(() => {
        // Add the class to body when component mounts
        document.body.classList.add('login-page-body');
        
        // Clean up by removing the class when component unmounts
        return () => {
            document.body.classList.remove('login-page-body');
        };
    }, []);

    return (
        <main>
            <div>
                <LoginForm />
            </div>
        </main>
    );
};

export default LoginPage;
