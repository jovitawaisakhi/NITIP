import { Link } from "react-router-dom";
import { LogOut } from "../../services/user/AuthService";
import { useEffect, useState } from "react";
import { getUser } from "../../services/user/UserService";

export default function UserDropdownMenu() {
    const [role, setRole] = useState<string | undefined>();
    const [status, setStatus] = useState<string | undefined>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUser();
            if (user) {
                setRole(user.role);
                setStatus(user.status);
            }
            setLoading(false);
        }

        fetchUser();
    }, []);

    if (loading) {
        return null;
    }

    return (
        <ul className="dropdown-menu">
            {!role && (
                <>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/regisRole">Register</Link></li>
                </>
            )}

            {role == 'admin' && (
                <>
                    <li><Link to="/tenantReq">Tenant Request</Link></li>
                </>
            )}

            {role == 'customer' && (
                <>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/orderHistory">Order History</Link></li>
                </>
            )}

            {role == 'tenant' && status == 'approved' && (
                <>
                    <li><Link to="/restaurantDetail">Restaurant Detail</Link></li>
                    <li><Link to="/finishOrder">Manage Order</Link></li>
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