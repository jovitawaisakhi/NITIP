import { Link } from "react-router-dom";
import { getRoleUser } from "../../services/UserService";
import { LogOut } from "../../services/AuthService";
import { useEffect, useState } from "react";

export default function UserDropdownMenu(){
    const [role, setRole] = useState<string|null>('');

    useEffect(()=>{
        const getRole = async ()=>{
            const fetched_role =  await getRoleUser()
            setRole(fetched_role)
        }
        getRole()

    }, [])

    console.log(role)

    return (
        <ul className="dropdown-menu">
            {role == null && (
                <>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </>
            )}

            {role == 'admin' && (
                <>
                
                </>
            )}

            {role == 'tenant' && (
                <>
                    <li><Link to="/receiveOrder">Receive Order</Link></li>
                    <li><Link to="/restaurantDetail">Restaurant Detail</Link></li>
                    <li><Link to="/finishOrder">Finish Order</Link></li>
                </>
            )}

            {role && (
                <>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/login" onClick={LogOut}>Logout</Link></li>
                </>
            )}
        </ul>
    )
}