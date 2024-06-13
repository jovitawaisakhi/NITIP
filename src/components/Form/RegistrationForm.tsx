import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Authentication.css';
import { Register } from '../../services/AuthService';

const RegistrationForm: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [status, setStatus] = useState<{ username: string; email: string; password: string; confirmPassword: string }>({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'username') {
            setUsername(value);
            setStatus(prevStatus => ({ ...prevStatus, username: '' }));
        } else if (name === 'email') {
            setEmail(value);
            setStatus(prevStatus => ({ ...prevStatus, email: '' }));
        } else if (name === 'password') {
            setPassword(value);
            setStatus(prevStatus => ({ ...prevStatus, password: '' }));
        } else if (name === 'confirmPassword') {
            setConfirmPassword(value);
            setStatus(prevStatus => ({ ...prevStatus, confirmPassword: '' }));
        }
    };

    const handleRegister = (e: FormEvent) => {
        e.preventDefault();

        let valid = true;
        const newStatus = { username: '', email: '', password: '', confirmPassword: '' };

        if (username === '') {
            newStatus.username = 'Username cannot be empty';
            valid = false;
        }

        if (email === '') {
            newStatus.email = 'Email cannot be empty';
            valid = false;
        }

        if (password === '') {
            newStatus.password = 'Password cannot be empty';
            valid = false;
        }

        if (confirmPassword === '') {
            newStatus.confirmPassword = 'Confirm Password cannot be empty';
            valid = false;
        }

        if (password !== confirmPassword) {
            newStatus.confirmPassword = 'Passwords do not match';
            valid = false;
        }

        setStatus(newStatus);

        console.log(email)

        if (valid) {
            Register(navigate, email, password);
        }
    };

    return (
        <div className="forms">
            <form onSubmit={handleRegister}>
                <div>
                    <h2>Register</h2>
                </div>
                <div className='field'>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        name="username" 
                        value={username} 
                        onChange={handleChange} 
                    />
                    {status.username && <label className="Lbl_Status">{status.username}</label>}
                </div>
                <div className='field'>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={handleChange} 
                    />
                    {status.email && <label className="Lbl_Status">{status.email}</label>}
                </div>
                <div className='field'>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={handleChange} 
                    />
                    {status.password && <label className="Lbl_Status">{status.password}</label>}
                </div>
                <div className='field'>
                    <label>Confirm Password:</label>
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        value={confirmPassword} 
                        onChange={handleChange} 
                    />
                    {status.confirmPassword && <label className="Lbl_Status">{status.confirmPassword}</label>}
                </div>
                <div className='redirect'>
                    <label>Sudah punya akun? </label>
                    <Link to="/login">Masuk di sini!</Link>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
