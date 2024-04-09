import React from "react";
import UserLogin from "./pages/userLogin/UserLogin";
import { Route, Routes } from "react-router-dom";
import CompanyLogin from "./pages/companyLogin/CompanyLogin";
import UserRegister from "./pages/userRegister/UserRegister";
import CompanyRegister from "./pages/companyRegister/CompanyRegister";
import AdminLogin from "./pages/adminLogin/AdminLogin";
import AdminRegister from "./pages/adminRegister/AdminRegister";
import Main from "./pages/home/main/Main";
import InformationUser from "./pages/home/homeBusiness/informationUser/InformationUser";
import AddJob from "./pages/home/homeBusiness/addJob/AddJob";
import JobDetail from "./pages/home/homeUser/jobDetail/JobDetail";
import UpdateJobBusiness from "./pages/home/homeBusiness/updateJobBusiness/UpdateJobBusiness";
import InformationUserB from "./pages/home/homeUser/informationUser/InformationUser";
import FormSearch from "./components/formSearch/FormSearch";
import ListCompany from "./pages/home/homeUser/listCompany/ListCompany";
import InformationComany from "./pages/home/homeUser/informationComany/InformationComany";
import UpdateInforBusiness from "./pages/home/homeBusiness/updateInforBusiness/UpdateInforBusiness";
import JobList from "./pages/home/homeUser/jobList/JobList";

export default function App() {
  return (
    <div>
      <Routes>

        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/companylogin" element={<CompanyLogin />} />
        <Route path="/companyregister" element={<CompanyRegister />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminregister" element={<AdminRegister />} />
        <Route path="/home" element={<Main />} />
        <Route path="/informationUser-business" element={<InformationUser />} />
        <Route path="/addnewjob" element={<AddJob />} />
        <Route path="*" element={<JobDetail />}></Route>

        <Route path="/InformationUser" element={<InformationUserB />} />
        <Route path="*" element={<FormSearch />}></Route>
        <Route path="/listcompany" element={<ListCompany />}></Route>
        <Route path="/companyView" element={<InformationComany />}></Route>
        <Route path="/updateinforcompany" element={<UpdateInforBusiness />}
        ></Route>
        <Route path="/listjob" element={<JobList />}></Route>
      </Routes>
    </div>
  );
}
