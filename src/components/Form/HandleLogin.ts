import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Login, isEmailRegistered } from '../../services/user/AuthService';

interface HandleLoginReturn {
    email: string;
    password: string;
    status: { [key: string]: string };
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleLogin: (e: FormEvent) => void;
}

export const useHandleLogin = (): HandleLoginReturn => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [status, setStatus] = useState<{ [key: string]: string }>({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setStatus((prevStatus) => ({ ...prevStatus, [name]: '' }));

        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const validateEmail = (email: string): boolean => {
        const re = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        return re.test(email);
    };
    
    const validatePassword = (password: string): boolean => {
        const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
        return re.test(password);
    };

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();

        let valid = true;
        const newStatus = { email: '', password: '' };

        if (email === '') {
            newStatus.email = "Mohon masukkan email";
            valid = false;
        } else if (!validateEmail(email)) {
            newStatus.email = "Email harus dalam format 'xxx@gmail.com'";
            valid = false;
        }

        if (password === '') {
            newStatus.password = "Mohon masukkan pasword";
            valid = false;
        } else if (!validatePassword(password)) {
            newStatus.password = "Password harus terdiri dari minimal 6 karakter, 1 angka, dan 1 karakter spesial";
            valid = false;
        }

        setStatus(newStatus);

        if (valid) {
            const emailExists = await isEmailRegistered(email);
            if (!emailExists) {
                setStatus({ email: "Email tidak terdaftar", password: '' });
                return;
            }

            try {
                await Login(email, password);
                navigate('/home');
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setStatus({ email: '', password: error.message });
                } else {
                    setStatus({ email: '', password: 'An unknown error occurred' });
                }
            }
        }
    };

    return {
        email,
        password,
        status,
        handleChange,
        handleLogin,
    };
};
