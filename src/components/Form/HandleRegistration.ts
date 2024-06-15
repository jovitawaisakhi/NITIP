import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Register, isEmailRegistered } from '../../services/user/AuthService';
import { User } from '../../interfaces/User';

interface HandleRegistrationProps {
    role: string;
}

interface HandleRegistrationReturn {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    tenantName: string;
    phoneNumber: string;
    status: { [key: string]: string };
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleRegister: (e: FormEvent) => void;
}

export const useHandleRegistration = ({ role }: HandleRegistrationProps): HandleRegistrationReturn => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [tenantName, setTenantName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [status, setStatus] = useState<{ [key: string]: string }>({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        tenantName: '',
        phoneNumber: '',
    });
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setStatus((prevStatus) => ({ ...prevStatus, [name]: '' }));

        switch (name) {
            case 'username':
                setUsername(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
                break;
            case 'tenantName':
                setTenantName(value);
                break;
            case 'phoneNumber':
                setPhoneNumber(value);
                break;
            default:
                break;
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

    const validatePhoneNumber = (value: string): boolean => {
        return /^\d*$/.test(value);
    };    

    const handleRegister = async (e: FormEvent) => {
        e.preventDefault();

        let valid = true;
        const newStatus = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            tenantName: '',
            phoneNumber: '',
        };

        if (role === 'customer') {
            if (username === '') {
                newStatus.username = "Mohon masukkan nama lengkap";
                valid = false;
            }
        } else if (role === 'tenant') {
            if (tenantName === '') {
                newStatus.tenantName = "Mohon masukkan nama tenant";
                valid = false;
            }
            if (phoneNumber === '') {
                newStatus.phoneNumber = "Mohon masukkan nomor telepon";
                valid = false;
            } else if (!validatePhoneNumber(phoneNumber)) {
                newStatus.phoneNumber = "Nomor telepon hanya boleh berisi angka";
                valid = false;
            }
        }

        if (email === '') {
            newStatus.email = "Mohon masukkan email";
            valid = false;
        } else if (!validateEmail(email)) {
            newStatus.email = "Email harus dalam format 'xxx@gmail.com'";
            valid = false;
        } else if (await isEmailRegistered(email)) {
            newStatus.email = "Email sudah terdaftar";
            valid = false;
        }

        if (password === '') {
            newStatus.password = "Mohon masukkan password";
            valid = false;
        } else if (!validatePassword(password)) {
            newStatus.password = 'Password harus terdiri dari minimal 6 karakter, 1 angka, dan 1 karakter spesial';
            valid = false;
        }

        if (confirmPassword === '') {
            newStatus.confirmPassword = "Mohon konfirmasi password anda";
            valid = false;
        } else if (!validatePassword(confirmPassword)) {
            newStatus.confirmPassword = 'Password harus terdiri dari minimal 6 karakter, 1 angka, dan 1 karakter spesial';
            valid = false;
        } else if (password !== confirmPassword) {
            newStatus.confirmPassword = 'Password tidak sesuai';
            valid = false;
        }

        setStatus(newStatus);

        const user : User = {
            name : username,
            email : email, 
            phoneNumber : phoneNumber,
            linkProfile : "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
            dob : new Date (),
        }

        if (valid) {
            Register(navigate, user, password, role, tenantName);
        }
    };

    return {
        username,
        email,
        password,
        confirmPassword,
        tenantName,
        phoneNumber,
        status,
        handleChange,
        handleRegister,
    };
};
