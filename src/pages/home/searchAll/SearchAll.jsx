import React, { useEffect } from "react";
import "./SearchAll.scss";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import { candidateAsync } from "../../../redux/reduce/candidateReduce";
import Header from "../../../components/header/Header";
import HeaderCompany from "../../../components/headerCompany/HeaderCompany";
import avatar from "../../../assets/images/cv/ACg8ocILX9TfOIrNEplYDawUBSv1Rpw3rLnuugZCNRefPEMyjM6NXIV4=s96-c.jpg";
import FormSearchAll from "../../../components/formSearchAll/FormSearchAll";
import { Link } from "react-router-dom";
import SearchJob from "./SearchJob";

export default function SearchAll() {
  const body = document.querySelector("body"),
    sidebar = body.querySelector(".fui-sidbar-navigiation nav"),
    toggle = body.querySelector(".fui-sidbar-navigiation .toggle"),
    searchBtn = body.querySelector(".fui-sidbar-navigiation .search-box"),
    modeSwitch = body.querySelector(".fui-sidbar-navigiation .toggle-switch");
  const [toggleSidebar, setToggleSidebar] = React.useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.candidate.data);
  console.log(user);
  useEffect(() => {
    navigate("/searchall/searchjob");
    dispatch(candidateAsync());
  }, [dispatch]);

  const handleLogout = ()=> {
    localStorage.removeItem('token')
    navigate("/login")
  }
  const handleDesign = () => {
    setToggleSidebar(!toggleSidebar);
  };
  return (
    <>
      <div>
        {user?.account_candidate_id?.role == 1 ? (
          <>
            <Header></Header>
          </>
        ) : (
          <>
            <HeaderCompany></HeaderCompany>
          </>
        )}
      </div>
      <div className="searchAll__formsearch">
        <FormSearchAll></FormSearchAll>
      </div>
      <div className="searchAll__container">
        <div
          className="fui-sidbar-navigiation"
          style={{ flexGrow: toggleSidebar ? 1 : 0 }}
        >
          <nav
            className="sidebar"
            style={{ width: toggleSidebar ? "5%" : "15%" }}
          >
            <header>
              <div className="image-text">
                <a className="image" href="#">
                  <img src={avatar} alt="Fast UI" />
                </a>
                <div className="text logo-text">
                  <span
                    className="profession"
                    style={{
                      display: toggleSidebar ? "none" : "block",
                      transition: "1s",
                    }}
                  >
                    {user?.name}
                  </span>
                </div>
              </div>
              <span
                className="toggle"
                onClick={handleDesign}
                style={{
                  transform: toggleSidebar ? "rotate(0deg)" : "rotate(180deg)",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.79289 7.79289C9.40237 8.18342 9.40237 8.81658 9.79289 9.20711L12.5858 12L9.79289 14.7929C9.40237 15.1834 9.40237 15.8166 9.79289 16.2071C10.1834 16.5976 10.8166 16.5976 11.2071 16.2071L14.7071 12.7071C15.0976 12.3166 15.0976 11.6834 14.7071 11.2929L11.2071 7.79289C10.8166 7.40237 10.1834 7.40237 9.79289 7.79289Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </header>
            <div className="menu-bar">
              <div className="menu">
                <ul className="menu-links">
                  <li className="nav-link">
                    <Link to="/searchAll/search-candidate">
                      <span className="icon">
                      <span class="material-symbols-outlined" style={{fontSize:"2vw"}}>
                        person
                        </span>
                      </span>
                      <span
                        className="text nav-text"
                        style={{ fontSize: "1.2vw" }}
                      >
                        Tìm kiếm ứng viên 
                      </span>
                    </Link>
                  </li>

                  <li className="nav-link">
                    <Link to="/searchAll/search-company">
                      <span className="icon">
                        <span class="material-symbols-outlined">apartment</span>
                      </span>
                      <span
                        className="text nav-text"
                        style={{ fontSize: "1.2vw" }}
                      >
                        Tìm kiếm công ty
                      </span>
                    </Link>
                  </li>
                 
                  <li className="nav-link">
                    <Link to="/searchAll/search-job">
                      <span className="icon">
                        <span class="material-symbols-outlined">work</span>
                      </span>
                      <span
                        className="text nav-text"
                        style={{ fontSize: "1.2vw" }}
                      >
                        Tìm kiếm việc làm
                      </span>
                    </Link>
                  </li>
                  <li className="nav-link">
                    <a href="#">
                      <span className="icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.0292 15.0007C11.5811 14.9799 12.0454 15.4104 12.0662 15.9623C12.1132 17.2065 12.1791 18.1145 12.244 18.7656C12.3079 19.4068 12.695 19.7926 13.2345 19.8586C13.8708 19.9363 14.7683 20 16 20C17.2317 20 18.1292 19.9363 18.7655 19.8586C19.3048 19.7926 19.6921 19.4067 19.7559 18.7653C19.8763 17.5568 20 15.4688 20 12C20 8.53118 19.8763 6.44321 19.7559 5.23468C19.6921 4.59333 19.3048 4.20736 18.7655 4.14144C18.1292 4.06366 17.2317 4 16 4C14.7683 4 13.8708 4.06365 13.2345 4.14143C12.695 4.20739 12.3079 4.59318 12.244 5.23437C12.1791 5.88545 12.1132 6.79354 12.0662 8.03772C12.0454 8.58961 11.5811 9.02012 11.0292 8.99929C10.4773 8.97845 10.0468 8.51417 10.0676 7.96228C10.1158 6.68524 10.1842 5.73543 10.2538 5.03611C10.4003 3.56595 11.4253 2.3477 12.9919 2.15621C13.7211 2.06707 14.7008 2 16 2C17.2992 2 18.2789 2.06707 19.0082 2.15622C20.5748 2.34774 21.5997 3.56655 21.7461 5.03643C21.875 6.33068 22 8.48847 22 12C22 15.5115 21.875 17.6693 21.7461 18.9636C21.5997 20.4334 20.5748 21.6523 19.0082 21.8438C18.2789 21.9329 17.2992 22 16 22C14.7008 22 13.7211 21.9329 12.9919 21.8438C11.4253 21.6523 10.4003 20.4341 10.2538 18.9639C10.1842 18.2646 10.1158 17.3148 10.0676 16.0377C10.0468 15.4858 10.4773 15.0215 11.0292 15.0007Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.20711 14.7929C7.59763 15.1834 7.59763 15.8166 7.20711 16.2071C6.81658 16.5976 6.18342 16.5976 5.79289 16.2071L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L5.79289 7.79289C6.18342 7.40237 6.81658 7.40237 7.20711 7.79289C7.59763 8.18342 7.59763 8.81658 7.20711 9.20711L5.41421 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13L5.41421 13L7.20711 14.7929Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>

                      <span
                        className="text nav-text"
                        style={{ fontSize: "1.2vw" }}
                        onClick={handleLogout}
                      >
                        Đăng xuất
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div
            className="searchAll__content-Right"
            style={{
              marginLeft: toggleSidebar ? "0px" : "160px",
              transition: "1s",
            }}
          >
            <div className="searchAll__content-Right__content">
              <Outlet />
            </div>
          </div>
      </div>
    </>
  );
}
