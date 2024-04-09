import React from 'react'
import UserLogin from './pages/userLogin/UserLogin'
import { Route, Routes } from 'react-router-dom'
import CompanyLogin from './pages/companyLogin/CompanyLogin'
import UserRegister from './pages/userRegister/UserRegister'
import CompanyRegister from './pages/companyRegister/CompanyRegister'
import AdminLogin from './pages/adminLogin/AdminLogin'
import AdminRegister from './pages/adminRegister/AdminRegister'
import Main from './pages/home/main/Main'
import InformationUser from './pages/home/homeBusiness/informationUser/InformationUser'
import AddJob from './pages/home/homeBusiness/addJob/AddJob'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/dangnhap" element={<UserLogin />} />
        <Route path="/dangky" element={<UserRegister />} />
        <Route path="/dangnhap-congty" element={<CompanyLogin />} />
        <Route path="/dangky-congty" element={<CompanyRegister />} />
        <Route path="/admin-dangnhap" element={<AdminLogin />} />
        <Route path="/admin-dangky" element={<AdminRegister />} />
        <Route path="/trangchu" element={<Main />} />
        <Route path="/thongtin-ungvien" element={<InformationUser />} />
        <Route path="/themvieclammoi" element={<AddJob />} />
        
      </Routes>
    </div>
  )
}
