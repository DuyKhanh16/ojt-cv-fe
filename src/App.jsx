import React, { useEffect } from "react";
import {
  RouterProvider,
  useLocation,
} from "react-router-dom";
<<<<<<< HEAD
import AdminChart from "./pages/home/admin/adminChart/AdminChart";
import Router from "./layouts/router/Router";
import CompanyRoute from "./layouts/companyRoute/CompanyRoute";
import ApplyJob from "./pages/home/homeUser/applyJob/ApplyJob";
import CV1 from "./components/cv/cv1/CV1";
import UpdateInfoFistTime from "./pages/home/homeBusiness/CompanyUpdateInfoFirstTime/UpdateInfoFistTime";
import UserDetail from "./pages/home/homeUser/userDetail/UserDetail";
import SearchAll from "./pages/home/searchAll/SearchAll";
import SearchJob from "./pages/home/searchAll/SearchJob";
import SearchCandidate from "./pages/home/searchAll/SearchCandidate";
import SearchCompany from "./pages/home/searchAll/SearchCompany";
import InforOutStandingCompany from "./pages/home/homeUser/inforOutStandingCompany/InforOutStandingCompany";
import UpdatePassword from "./components/modal/UpdatePassword/UpdatePassword";

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
    path:'/search-all',
    element:<SearchAll></SearchAll>,
    children:[
      {
        path:"search-job",
        element:<SearchJob></SearchJob>
      },
      {
        path:"search-candidate",
        element:<SearchCandidate></SearchCandidate>
      },
      {
        path:"search-company",
        element:<SearchCompany></SearchCompany>
      }
    ]

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
        path:"user-detail",
        element:<UserDetail></UserDetail>
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
        path:"infor-companybycandidate/:id",
        element:<InforOutStandingCompany></InforOutStandingCompany>
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
    path:"/update-password",
   element:<UpdatePassword/>
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

=======
import router from "./routes/route.config";
>>>>>>> 5a95e15513f6889a28c0629d74c72c5675ef803f
export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
