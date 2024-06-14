import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Register } from '../../services/user/AuthService';

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

    const handleRegister = (e: FormEvent) => {
        e.preventDefault();

        let valid = true;
        const newStatus = { username: '', email: '', password: '', confirmPassword: '', tenantName: '', phoneNumber: '' };

        if (role === 'customer') {
            if (username === '') {
                newStatus.username = "Full name can't be empty";
                valid = false;
            }
        } else if (role === 'tenant') {
            if (tenantName === '') {
                newStatus.tenantName = "Tenant name can't be empty";
                valid = false;
            }
            if (phoneNumber === '') {
                newStatus.phoneNumber = "Phone number can't be empty";
                valid = false;
            }
        }

        if (email === '') {
            newStatus.email = "Email can't be empty";
            valid = false;
        }

        if (password === '') {
            newStatus.password = "Password can't be empty";
            valid = false;
        }

        if (confirmPassword === '') {
            newStatus.confirmPassword = "Password confirmation can't be empty";
            valid = false;
        }

        if (password !== confirmPassword) {
            newStatus.confirmPassword = 'Passwords do not match';
            valid = false;
        }

        setStatus(newStatus);

        if (valid) {
            Register(navigate, email, password);
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
