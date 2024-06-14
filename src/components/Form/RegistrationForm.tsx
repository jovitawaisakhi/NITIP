import React from 'react';
import { Link } from 'react-router-dom';
import './Authentication.css';
import { useHandleRegistration } from './HandleRegistration';

interface RegistrationFormProps {
    role: string;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ role }) => {
    const {
        username,
        email,
        password,
        confirmPassword,
        tenantName,
        phoneNumber,
        status,
        handleChange,
        handleRegister,
    } = useHandleRegistration({ role });

    return (
        <div className='container' id='container-form'>

            <div className="forms">
                <form onSubmit={handleRegister}>
                    <div>
                        <h1>Register</h1>
                    </div>
                    {role === 'customer' && (
                        <div className='field'>
                            <p>Full Name</p>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={handleChange}
                            />
                            <ErrorMessage message={status.username} />
                        </div>
                    )}
                    {role === 'tenant' && (
                        <>
                            <div className='field'>
                                <p>Tenant Name</p>
                                <input
                                    type="text"
                                    name="tenantName"
                                    value={tenantName}
                                    onChange={handleChange}
                                />
                                <ErrorMessage message={status.tenantName} />
                            </div>
                            <div className='field'>
                                <p>Phone Number</p>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={phoneNumber}
                                    onChange={handleChange}
                                />
                                <ErrorMessage message={status.phoneNumber} />
                            </div>
                        </>
                    )}
                    <div className='field'>
                        <p>Email</p>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                        <ErrorMessage message={status.email} />
                    </div>
                    <div className='field'>
                        <p>Password</p>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />
                        <ErrorMessage message={status.password} />
                    </div>
                    <div className='field'>
                        <p>Confirm Password</p>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={handleChange}
                        />
                        <ErrorMessage message={status.confirmPassword} />
                    </div>
                    <div className='redirect'>
                        <label>Already have an account? </label>
                        <Link to="/login">Login here!</Link>
                    </div>
                    <div>
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return message ? <label className="Lbl_Status">{message}</label> : null;
};

export default RegistrationForm;
