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
import MainBusiness from "./pages/home/homeBusiness/mainBusiness/MainBusiness";
import {
  Outlet,
  Link,
  createBrowserRouter,
  RouterProvider,
  useNavigation,
} from "react-router-dom";
import AdminChart from "./pages/home/admin/adminChart/AdminChart";
import Router from "./layouts/router/Router";
import CompanyRoute from "./layouts/companyRoute/CompanyRoute";
import ApplyJob from "./pages/home/homeUser/applyJob/ApplyJob";
import CV1 from "./components/cv/cv1/CV1";

const router = createBrowserRouter([
  /* source chung */
  {
    path: "/",
    element: <Router />,
    children: [
      {
        path: "",
        element: <Main />,
      },
    ],
  },
  {
    path:"/testCV1",
    element:<CV1></CV1>
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
  {
    path: "/allcv",
    element: <AllCV></AllCV>,
  },
  
  /* het source chung */

  /* candidate */

  {
    path: "/candidate",
    element: <Router />,
    children: [
      {
        path: "", // Correct way to specify a nested route
        element: <Main />,
      },
      {
        path: "job-list",
        element: <JobList></JobList>,
      },
      {
        path: "job-detail/:id",
        element: <JobDetail></JobDetail>,
      },
      {
        path: "inforcv",
        element: <InformationUserB></InformationUserB>,
      },

      {
        path: "company-detail",
        element: <InformationComany></InformationComany>,
      },
      {
        path: "candidate-outstanding",
        element: <InformationUser></InformationUser>,
      },
      {
        path:"apply-job",
        element: <ApplyJob></ApplyJob>,
      }
    ],
  },

  /* het candidate */

  /* company */
  {
    path: "/company",
    element: <CompanyRoute></CompanyRoute>,
    children: [
      {
        path: "",
        element: <MainBusiness />,
      },
      {
        path: "alluserapply",
        element: <AllUserApply />,
      },
      {
        path: "alljob",
        element: <Alljob />,
      },
      {
        path: "candidate-outstanding",
        element: <InformationUser />,
      },
      {
        path: "addnewjob",
        element: <AddJob />,
      },
      {
        path: "updatejob/:id",
        element: <UpdateJobBusiness />,
      },
      {
        path: "update-infor-company",
        element: <UpdateInforBusiness />,
      },
    ],
  },

  /* het company */

  /* admin */
  {
    path: "/admin",
    element: <HomeAdmin />,
    children: [
      {
        path: "users",
        element: <AllUserAdmin />,
      },
      {
        path: "",
        element: <AdminChart />,
      },
      {
        path: "jobs",
        element: <AllJobAdmin />,
      },
      {
        path: "companies",
        element: <AllCompanyAdmin />,
      },
    ],
  },
  /* het admin */
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
