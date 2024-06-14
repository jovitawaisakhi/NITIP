import { Link } from "react-router-dom";
import { LogOut } from "../../services/user/AuthService";
import { useEffect, useState } from "react";
import { getUser } from "../../services/user/UserService";

export default function UserDropdownMenu(){
    const [role, setRole] = useState<string|undefined>();
    const [status, setStatus] = useState<string|undefined>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        const fetchUser = async ()=>{
            const user =  await getUser();
            if(user){
                setRole(user.role);
                setStatus(user.status);
            }
            setLoading(false); // Set loading to false once user data is fetched
        }

        fetchUser();
    }, []);

    if (loading) {
        return null; // Render nothing while loading
    }

    return (
        <ul className="dropdown-menu">
            {!role && (
                <>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/registerRole">Register</Link></li>
                </>
            )}

            {role == 'admin' && (
                <>
                    {/* Admin specific menu items */}
                </>
            )}

            {role == 'customer' && (
                <li><Link to="/cart">Cart</Link></li>   
            )}

            {role == 'tenant' && status == 'approved' && (
                <>
                    <li><Link to="/receiveOrder">Receive Order</Link></li>
                    <li><Link to="/restaurantDetail">Restaurant Detail</Link></li>
                    <li><Link to="/finishOrder">Finish Order</Link></li>
                </>
            )}

            {role && (
                <>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/login" onClick={LogOut}>Logout</Link></li>
                </>
            )}
        </ul>
    );
}