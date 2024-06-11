import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Authentication.css';
import { Login } from '../../services/UserService';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [status, setStatus] = useState<{ email: string; password: string }>({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();

        let valid = true;
        const newStatus = { email: '', password: '' };

        if (email === '') {
            newStatus.email = 'Email cannot be empty';
            valid = false;
        }

        if (password === '') {
            newStatus.password = 'Password cannot be empty';
            valid = false;
        }

        setStatus(newStatus);

        if (valid) {
            Login(navigate, email, password);
        }
    };

    return (
        <div className="forms">
            <form onSubmit={handleLogin}>
                <div>
                    <h2>Login</h2>
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                    <label className="Lbl_Status">{status.email}</label>
                </div>
                <div className='field'>
                    <label>Password</label>
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
                    <Link to="/register">Daftar di sini!</Link>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;