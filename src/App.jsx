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
import ListCompany from "./pages/home/homeUser/listCompany/ListCompany";
import InformationComany from "./pages/home/homeUser/informationComany/InformationComany";
import UpdateInforBusiness from "./pages/home/homeBusiness/updateInforBusiness/UpdateInforBusiness";
import AllCV from "./pages/home/homeUser/allCV/AllCV";
import JobList from "./pages/home/homeUser/jobList/JobList";
import HeaderAdmin from "./components/headerAdmin/HeaderAdmin";
import AllUserAdmin from "./pages/home/admin/allUserAdmin/AllUserAdmin";
import AllJobAdmin from "./pages/home/admin/allJobAdmin/AllJobAdmin";
import AllCompanyAdmin from "./pages/home/admin/allCompanyAdmin/AllCompanyAdmin";
import AllUserApply from "./pages/home/homeBusiness/allUserApply/AllUserApply";
import Alljob from "./pages/home/homeBusiness/allJob/Alljob";
import Cv4 from "./components/cv/cv4/Cv4";
import HomeAdmin from "./pages/home/admin/homeAdmin/HomeAdmin";


export default function App() {
  return (
    <div>
      <Routes>
      <Route path="/admin-alluser" element={<AllUserAdmin />} />
      <Route path="/admin-home" element={<HomeAdmin />} />
      <Route path="/admin-alljob" element={<AllJobAdmin />} />
      <Route path="/admin-allcompany" element={<AllCompanyAdmin />} />
      <Route path="/company-alluserapply" element={<AllUserApply />} />
      <Route path="/company-alljob" element={<Alljob />} />
        
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
        <Route path="/updatejob" element={<UpdateJobBusiness />}></Route>
        <Route path="/listcompany" element={<ListCompany />}></Route>
        <Route path="/companyView" element={<InformationComany />}></Route>
        <Route path="/allCV" element={<AllCV />}></Route>
        <Route path="/cv4" element={<Cv4 />}></Route>
        <Route
          path="/updateinforcompany"
          element={<UpdateInforBusiness />}>
        </Route>
        <Route path="/updateinforcompany" element={<UpdateInforBusiness />}
        ></Route>
        <Route path="/listjob" element={<JobList />}></Route>
      </Routes>
    </div>
  );
}
