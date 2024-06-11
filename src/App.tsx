import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/Authentication/LoginPage'
import RegisterPage from './pages/Authentication/RegisterPage'
import HomePage from './pages/Home/HomePage'
import TenantPage from './pages/Home/TenantPage'
import CartPage from './pages/Cart/CartPage'
import ReceiveOrderPage from './pages/Order/ReceiveOrderPage'
import PaymentPage from './pages/Payment/PaymentPage'
import QRPage from './pages/Payment/QRPage'
import OrderStatusPage from './pages/Order/OrderStatusPage'
import FinishOrderPage from './pages/Order/FinishOrderPage'
import ProfilePage from './pages/Profile/ProfilePage'
import RestaurantDetailPage from './pages/DataManagement/RestaurantDetailPage'
import MenuDetailPage from './pages/DataManagement/MenuDetailPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/tenant" element={<TenantPage />} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/receiveOrder" element={<ReceiveOrderPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/qr" element={<QRPage />} />
        <Route path="/statusOrder" element={<OrderStatusPage />} />
        <Route path="/finishOrder" element={<FinishOrderPage />} />

        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/restaurantDetail" element={<RestaurantDetailPage />} />
        <Route path="/menuDetail" element={<MenuDetailPage />} />
      </Routes>
    </Router>
  )
}

export default App
