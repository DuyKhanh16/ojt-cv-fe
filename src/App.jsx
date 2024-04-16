import React from "react";
import UserLogin from "./pages/userLogin/UserLogin";
import UserRegister from "./pages/userRegister/UserRegister";
import CompanyRegister from "./pages/companyRegister/CompanyRegister";
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

import AllUserAdmin from "./pages/home/admin/allUserAdmin/AllUserAdmin";
import AllJobAdmin from "./pages/home/admin/allJobAdmin/AllJobAdmin";
import AllCompanyAdmin from "./pages/home/admin/allCompanyAdmin/AllCompanyAdmin";

import AllUserApply from "./pages/home/homeBusiness/allUserApply/AllUserApply";
import Alljob from "./pages/home/homeBusiness/allJob/Alljob";
import HomeAdmin from "./pages/home/admin/homeAdmin/HomeAdmin";
import AdminAllUser from './layouts/adminSideBar/AdminAllUser';
import AdminAllJob from './layouts/adminSideBar/AdminAllJob';
import AdminAllCompany from './layouts/adminSideBar/AdminAllCompany';
import MainBusiness from "./pages/home/homeBusiness/mainBusiness/MainBusiness";

import {
  Outlet,
  Link,
  createBrowserRouter,
  RouterProvider,
  useNavigation,
} from "react-router-dom";
import AdminChart from "./pages/home/admin/adminChart/AdminChart";



const router = createBrowserRouter([

          // trang chủ
          {
            path: "/",
            element: <Main />,
          },
          {
            path: "/company",
            element: <MainBusiness />,
          },
          {
            path: "/login",
            element: <UserLogin />,
          },
          {
            path: "/user-register",
            element: <UserRegister />,
          },
          {
            path: "/company-register",
            element: <CompanyRegister />,
          },
          // trang quản trị admin
          {
            path: "/admin",
            element: <HomeAdmin />, // Component layout chung cho admin
            children: [
              {
                path: "all-users",
                element: <AllUserAdmin />,
              },
              {
                path: "home-admin",
                element: <AdminChart />,
              },
              {
                path: "all-jobs",
                element: <AllJobAdmin />,
              },
              {
                path: "all-companies",
                element: <AllCompanyAdmin />,
              },
              // ... thêm các route con khác dành cho admin ở đây
            ],
          },
          // các đường link của company

          {
            path: "/company-alluserapply",
            element: <AllUserApply />,
          },
          {
            path: "/company-alljob",
            element: <Alljob />,
          },
          {
            path: "/company-infouser-outstanding",
            element: <InformationUser />,
          },
          {
            path: "/company-addnewjob",
            element: <AddJob />,

          },  
          {
            path: "/company-updatejob",
            element: <UpdateJobBusiness />,
          },
          {
            path: "/company-updateinfor",
            element: <UpdateInforBusiness />,
          },
          // các đường link của user
          {
            path: "/user-listcompany",
            element: <ListCompany />,
          },
          {
            path: "/user-companyview",
            element: <InformationComany />,
          },
          {
            path: "/user-info",
            element: <InformationUserB />,
          },
          {
            path: "/company-job-detail",
            element: <JobDetail />,
          },
          {
            path: "/user-createcv",
            element: <AllCV />,
          },
        
          {
            path: "/user-jobList",
            element: <JobList />,
          },
        ]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
  
}
