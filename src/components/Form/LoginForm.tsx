import React from 'react';
import { Link } from 'react-router-dom';
import './Authentication.css';
import { useHandleLogin } from './HandleLogin';

const LoginForm: React.FC = () => {
    const {
        email,
        password,
        status,
        handleChange,
        handleLogin,
    } = useHandleLogin();

    return (
        <div className="container" id='container-form'>
            <div className="forms">
                <form onSubmit={handleLogin}>
                    <div>
                        <h1>Login</h1>
                    </div>
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
                    <div className="redirect">
                        <label>Belum punya akun? </label>
                        <Link to="/regisRole">Daftar di sini!</Link>
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
