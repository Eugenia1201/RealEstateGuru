import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import Menu from "./component/nav/Menu";
import { Toaster } from "react-hot-toast";
import AccountActivate from "./pages/auth/AccountActivate";
import AdCreate from "./pages/user/ad/AdCreate"
import PrivateRoute from "./component/routes/PrivateRoute";


export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Menu />
        <Toaster/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth/account-activate/:token" element={<AccountActivate />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/access-account/:token" element={<AccessAccount />} />

          <Route path = "/" element ={<PrivateRoute/>}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="ad/create" element={<AdCreate />} />
            <Route path="ad/create/sell/House" element={<SellHouse />} />
            <Route path="ad/create/sell/Land" element={<SellLand />} />
            <Route path="ad/create/rent/House" element={<RentHouse />} />
            <Route path="ad/create/rent/Land" element={<RentLand />} />
          </Route>

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
