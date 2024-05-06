import { createBrowserRouter, useLocation } from "react-router-dom";
import UpdatePassword from "../components/modal/UpdatePassword/UpdatePassword";
import CompanyRoute from "../layouts/companyRoute/CompanyRoute";
import Router from "../layouts/router/Router";
import CompanyRegister from "../pages/companyRegister/CompanyRegister";
import AdminChart from "../pages/home/admin/adminChart/AdminChart";
import AllCompanyAdmin from "../pages/home/admin/allCompanyAdmin/AllCompanyAdmin";
import AllJobAdmin from "../pages/home/admin/allJobAdmin/AllJobAdmin";
import AllUserAdmin from "../pages/home/admin/allUserAdmin/AllUserAdmin";
import HomeAdmin from "../pages/home/admin/homeAdmin/HomeAdmin";
import UpdateInfoFistTime from "../pages/home/homeBusiness/CompanyUpdateInfoFirstTime/UpdateInfoFistTime";
import AddJob from "../pages/home/homeBusiness/addJob/AddJob";
import Alljob from "../pages/home/homeBusiness/allJob/Alljob";
import AllUserApply from "../pages/home/homeBusiness/allUserApply/AllUserApply";
import InformationUser from "../pages/home/homeBusiness/informationUser/InformationUser";
import MainBusiness from "../pages/home/homeBusiness/mainBusiness/MainBusiness";
import UpdateInforBusiness from "../pages/home/homeBusiness/updateInforBusiness/UpdateInforBusiness";
import UpdateJobBusiness from "../pages/home/homeBusiness/updateJobBusiness/UpdateJobBusiness";
import AllCV from "../pages/home/homeUser/allCV/AllCV";
import InforOutStandingCompany from "../pages/home/homeUser/inforOutStandingCompany/InforOutStandingCompany";
import InformationComany from "../pages/home/homeUser/informationComany/InformationComany";
import InformationUserB from "../pages/home/homeUser/informationUser/InformationUser";
import JobDetail from "../pages/home/homeUser/jobDetail/JobDetail";
import JobList from "../pages/home/homeUser/jobList/JobList";
import UserDetail from "../pages/home/homeUser/userDetail/UserDetail";
import Main from "../pages/home/main/Main";
import SearchAll from "../pages/home/searchAll/SearchAll";
import SearchCandidate from "../pages/home/searchAll/SearchCandidate";
import SearchCompany from "../pages/home/searchAll/SearchCompany";
import SearchJob from "../pages/home/searchAll/SearchJob";
import UserLogin from "../pages/userLogin/UserLogin";
import UserRegister from "../pages/userRegister/UserRegister";
import { useEffect } from "react";

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
    path: "/search-all",
    element: <SearchAll></SearchAll>,
    children: [
      {
        path: "search-job",
        element: <SearchJob></SearchJob>,
      },
      {
        path: "search-candidate",
        element: <SearchCandidate></SearchCandidate>
      },
      {
        path: "search-company",
        element: <SearchCompany></SearchCompany>,
      },
    ],
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
        path: "user-detail",
        element: <UserDetail></UserDetail>,
      },
      {
        path: "job-list",
        element: <JobList></JobList>,
      },
      {
        path: "jobdetail/:id",
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
        path: "candidate-outstanding/:id",
        element: <InformationUser></InformationUser>,
      },
      {
        path: "infor-companybycandidate/:id",
        element: <InforOutStandingCompany></InforOutStandingCompany>,
      },
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
        path: "candidate-outstanding-bybussiness/:id",
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

      {
        path: "updateinforthefirst",
        element: <UpdateInfoFistTime />,
      },
    ],
  },

  /* het company */
  {
    path: "/update-password",
    element: <UpdatePassword />,
  },
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
// const location = useLocation();
// useEffect(() => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// }, [location.pathname]);

export default router;
