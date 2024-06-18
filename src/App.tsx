import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/Authentication/LoginPage'
import RegisRolePage from './pages/Authentication/RegisRolePage'
import RegisterPage from './pages/Authentication/RegisterPage'
import HomePage from './pages/Home/HomePage'
import TenantPage from './pages/Home/TenantPage'
import CartPage from './pages/Cart/CartPage'
import ReceiveOrderPage from './pages/Order/ReceiveOrderPage'
import PaymentPage from './pages/Payment/PaymentPage'
import QRPage from './pages/Payment/QRPage'
import OrderStatusPage from './pages/Order/OrderStatusPage'
import FinishOrderPage from './pages/Order/FinishOrderPage'
import OrderHistoryPage from './pages/Order/OrderHistoryPage'
import ProfilePage from './pages/Profile/ProfilePage'
import RestaurantDetailPage from './pages/DataManagement/RestaurantDetailPage'
import MenuDetailPage from './pages/DataManagement/MenuDetailPage'
import TenantReqPage from './pages/DataManagement/TenantReqPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/regisRole" element={<RegisRolePage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/tenant" element={<TenantPage />} />
        <Route path='/tenant/:tenantID' element={<TenantPage/>}/>

        <Route path="/cart" element={<CartPage />} />

        <Route path="/receiveOrder" element={<ReceiveOrderPage />} />
        <Route path="/payment/:cartID" element={<PaymentPage />} />
        <Route path="/qr" element={<QRPage />} />
        <Route path="/statusOrder" element={<OrderStatusPage />} />
        <Route path="/finishOrder" element={<FinishOrderPage />} />
        <Route path="/orderHistory" element={<OrderHistoryPage />} />

        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/restaurantDetail" element={<RestaurantDetailPage />} />
        <Route path="/menuDetail" element={<MenuDetailPage />} />
        <Route path="/menuDetail/:foodID" element={<MenuDetailPage />} />
        <Route path="/tenantReq" element={<TenantReqPage />} />
      </Routes>
    </Router>
  )
}

export default App
