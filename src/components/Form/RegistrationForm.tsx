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
                            <p>Nama Lengkap</p>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={handleChange}
                            />
                            <label className="Lbl_Status">{status.username}</label>
                        </div>
                    )}
                    {role === 'tenant' && (
                        <>
                            <div className='field'>
                                <p>Nama Tenant</p>
                                <input
                                    type="text"
                                    name="tenantName"
                                    value={tenantName}
                                    onChange={handleChange}
                                />
                                <label className="Lbl_Status">{status.tenantName}</label>
                            </div>
                            <div className='field'>
                                <p>Nomor Telepon</p>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={phoneNumber}
                                    onChange={handleChange}
                                />
                                <label className="Lbl_Status">{status.phoneNumber}</label>
                            </div>
                        </>
                    )}
                    <div className='field'>
                        <p>Email</p>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                        <label className="Lbl_Status">{status.email}</label>
                    </div>
                    <div className='field'>
                        <p>Password</p>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />
                        <label className="Lbl_Status">{status.password}</label>
                    </div>
                    <div className='field'>
                        <p>Konfirmasi Password</p>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={handleChange}
                        />
                        <label className="Lbl_Status">{status.confirmPassword}</label>
                    </div>
                    <div className='redirect'>
                        <label>Sudah punya akun? </label>
                        <Link to="/login">Masuk di sini!</Link>
                    </div>
                    <div>
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
