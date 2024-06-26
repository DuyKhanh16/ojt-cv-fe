import React from "react";
import "./Admin.scss";
import logo from "../../assets/images/logo/logo.png";
import avatar from "../../assets/images/cv/ACg8ocILX9TfOIrNEplYDawUBSv1Rpw3rLnuugZCNRefPEMyjM6NXIV4=s96-c.jpg";
import AllUserAdmin from "../../pages/home/admin/allUserAdmin/AllUserAdmin";
import { NavLink } from "react-router-dom";
export default function HomeAdmin() {
  const body = document.querySelector("body"),
    sidebar = body.querySelector(".fui-sidbar-navigiation nav"),
    toggle = body.querySelector(".fui-sidbar-navigiation .toggle"),
    searchBtn = body.querySelector(".fui-sidbar-navigiation .search-box"),
    modeSwitch = body.querySelector(".fui-sidbar-navigiation .toggle-switch");
  const [toggleSidebar, setToggleSidebar] = React.useState(true);

  const handleDesign = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <>
      <div className="homeAdmin__container">
        <div className="homeAdmin__header">
          <a className="logo" href="#">
            <img src={logo} alt="Fast UI" />
          </a>
          <span className="homeAdmin__header__title">Quản lý người dùng</span>
          <ul className="menu-list">
            <li className="menu-item menu-sub">
              <a className="menu-link" href="#" title="Contact">
                Admin
              </a>
              <a className="menu-sub-btn-dropdown" href="#" title="dropdown">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ color: "#fff" }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="currentColor"
                    d="M16.2071 9.79289C15.8166 9.40237 15.1834 9.40237 14.7929 9.79289L12 12.5858L9.20711 9.79289C8.81658 9.40237 8.18342 9.40237 7.79289 9.79289C7.40237 10.1834 7.40237 10.8166 7.79289 11.2071L11.2929 14.7071C11.6834 15.0976 12.3166 15.0976 12.7071 14.7071L16.2071 11.2071C16.5976 10.8166 16.5976 10.1834 16.2071 9.79289Z"
                  ></path>
                </svg>
              </a>
              <div className="fui-navbar-multi-level">
                <ul className="menu-list">
                  <li className="menu-item">
                    <a className="menu-link" href="#" title="Address">
                      Đăng xuất
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="homeAdmin__content">
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
                      Admin
                    </span>
                  </div>
                </div>
                <span
                  className="toggle"
                  onClick={handleDesign}
                  style={{
                    transform: toggleSidebar
                      ? "rotate(0deg)"
                      : "rotate(180deg)",
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
                  <li className="search-box">
                    <span className="icon">
                      <svg
                        className=""
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.9056 16.3199C13.551 17.3729 11.8487 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.551 16.3199 14.9056L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L14.9056 16.3199ZM16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <input type="text" placeholder="Search..." />
                  </li>
                  <ul className="menu-links">
                    <li className="nav-link">
                      <NavLink to={"/admin"} style={{ textDecoration: "none" }}>
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
                              d="M17.5 15C17.0478 15 16.4089 15.0625 15.7438 15.1536C15.4331 15.1962 15.1962 15.4331 15.1536 15.7438C15.0625 16.4089 15 17.0478 15 17.5C15 17.9522 15.0625 18.5911 15.1536 19.2562C15.1962 19.5669 15.4331 19.8038 15.7438 19.8464C16.4089 19.9375 17.0478 20 17.5 20C17.9522 20 18.5911 19.9375 19.2562 19.8464C19.5669 19.8038 19.8038 19.5669 19.8464 19.2562C19.9375 18.5911 20 17.9522 20 17.5C20 17.0478 19.9375 16.4089 19.8464 15.7438C19.8038 15.4331 19.5669 15.1962 19.2562 15.1536C18.5911 15.0625 17.9522 15 17.5 15ZM15.4724 13.1721C14.2725 13.3364 13.3364 14.2725 13.1721 15.4724C13.0778 16.1606 13 16.9082 13 17.5C13 18.0918 13.0778 18.8394 13.1721 19.5276C13.3364 20.7275 14.2725 21.6636 15.4724 21.8279C16.1606 21.9222 16.9082 22 17.5 22C18.0918 22 18.8394 21.9222 19.5276 21.8279C20.7275 21.6636 21.6636 20.7275 21.8279 19.5276C21.9222 18.8394 22 18.0918 22 17.5C22 16.9082 21.9222 16.1606 21.8279 15.4724C21.6636 14.2725 20.7275 13.3364 19.5276 13.1721C18.8394 13.0778 18.0918 13 17.5 13C16.9082 13 16.1606 13.0778 15.4724 13.1721Z"
                              fill="currentColor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.5 15C6.04782 15 5.40893 15.0625 4.74381 15.1536C4.43308 15.1962 4.19615 15.4331 4.15359 15.7438C4.0625 16.4089 4 17.0478 4 17.5C4 17.9522 4.0625 18.5911 4.15359 19.2562C4.19615 19.5669 4.43308 19.8038 4.74381 19.8464C5.40893 19.9375 6.04782 20 6.5 20C6.95218 20 7.59107 19.9375 8.25619 19.8464C8.56692 19.8038 8.80385 19.5669 8.84641 19.2562C8.9375 18.5911 9 17.9522 9 17.5C9 17.0478 8.9375 16.4089 8.84641 15.7438C8.80385 15.4331 8.56692 15.1962 8.25619 15.1536C7.59107 15.0625 6.95218 15 6.5 15ZM4.47244 13.1721C3.27253 13.3364 2.33642 14.2725 2.17209 15.4724C2.07784 16.1606 2 16.9082 2 17.5C2 18.0918 2.07784 18.8394 2.17209 19.5276C2.33642 20.7275 3.27253 21.6636 4.47244 21.8279C5.16065 21.9222 5.90816 22 6.5 22C7.09184 22 7.83935 21.9222 8.52756 21.8279C9.72747 21.6636 10.6636 20.7275 10.8279 19.5276C10.9222 18.8394 11 18.0918 11 17.5C11 16.9082 10.9222 16.1606 10.8279 15.4724C10.6636 14.2725 9.72747 13.3364 8.52756 13.1721C7.83935 13.0778 7.09184 13 6.5 13C5.90816 13 5.16065 13.0778 4.47244 13.1721Z"
                              fill="currentColor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M17.5 4C17.0478 4 16.4089 4.0625 15.7438 4.15359C15.4331 4.19615 15.1962 4.43308 15.1536 4.74381C15.0625 5.40893 15 6.04782 15 6.5C15 6.95218 15.0625 7.59107 15.1536 8.25619C15.1962 8.56692 15.4331 8.80385 15.7438 8.84641C16.4089 8.9375 17.0478 9 17.5 9C17.9522 9 18.5911 8.9375 19.2562 8.84641C19.5669 8.80385 19.8038 8.56692 19.8464 8.25619C19.9375 7.59107 20 6.95218 20 6.5C20 6.04782 19.9375 5.40893 19.8464 4.74381C19.8038 4.43308 19.5669 4.19615 19.2562 4.15359C18.5911 4.0625 17.9522 4 17.5 4ZM15.4724 2.17209C14.2725 2.33642 13.3364 3.27253 13.1721 4.47244C13.0778 5.16065 13 5.90816 13 6.5C13 7.09184 13.0778 7.83935 13.1721 8.52756C13.3364 9.72747 14.2725 10.6636 15.4724 10.8279C16.1606 10.9222 16.9082 11 17.5 11C18.0918 11 18.8394 10.9222 19.5276 10.8279C20.7275 10.6636 21.6636 9.72747 21.8279 8.52756C21.9222 7.83935 22 7.09184 22 6.5C22 5.90816 21.9222 5.16065 21.8279 4.47244C21.6636 3.27253 20.7275 2.33642 19.5276 2.17209C18.8394 2.07784 18.0918 2 17.5 2C16.9082 2 16.1606 2.07784 15.4724 2.17209Z"
                              fill="currentColor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.5 4C6.04782 4 5.40893 4.0625 4.74381 4.15359C4.43308 4.19615 4.19615 4.43308 4.15359 4.74381C4.0625 5.40893 4 6.04782 4 6.5C4 6.95218 4.0625 7.59107 4.15359 8.25619C4.19615 8.56692 4.43308 8.80385 4.74381 8.84641C5.40893 8.9375 6.04782 9 6.5 9C6.95218 9 7.59107 8.9375 8.25619 8.84641C8.56692 8.80385 8.80385 8.56692 8.84641 8.25619C8.9375 7.59107 9 6.95218 9 6.5C9 6.04782 8.9375 5.40893 8.84641 4.74381C8.80385 4.43308 8.56692 4.19615 8.25619 4.15359C7.59107 4.0625 6.95218 4 6.5 4ZM4.47244 2.17209C3.27253 2.33642 2.33642 3.27253 2.17209 4.47244C2.07784 5.16065 2 5.90816 2 6.5C2 7.09184 2.07784 7.83935 2.17209 8.52756C2.33642 9.72747 3.27253 10.6636 4.47244 10.8279C5.16065 10.9222 5.90816 11 6.5 11C7.09184 11 7.83935 10.9222 8.52756 10.8279C9.72747 10.6636 10.6636 9.72747 10.8279 8.52756C10.9222 7.83935 11 7.09184 11 6.5C11 5.90816 10.9222 5.16065 10.8279 4.47244C10.6636 3.27253 9.72747 2.33642 8.52756 2.17209C7.83935 2.07784 7.09184 2 6.5 2C5.90816 2 5.16065 2.07784 4.47244 2.17209Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <span className="text nav-text">Trang chủ</span>
                      </NavLink>
                    </li>
                    <li className="nav-link">
                      <NavLink to={'/admin-allcompany'}>
                        <span className="icon">
                          <span class="material-symbols-outlined">
                            apartment
                          </span>
                        </span>
                        <span className="text nav-text">Công ty</span>
                      </NavLink>
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
                              d="M12 13C8.13401 13 5 16.134 5 20V22C5 22.5523 4.55228 23 4 23C3.44772 23 3 22.5523 3 22V20C3 15.0294 7.02944 11 12 11C16.9706 11 21 15.0294 21 20V22C21 22.5523 20.5523 23 20 23C19.4477 23 19 22.5523 19 22V20C19 16.134 15.866 13 12 13Z"
                              fill="currentColor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11ZM12 13C15.3137 13 18 10.3137 18 7C18 3.68629 15.3137 1 12 1C8.68629 1 6 3.68629 6 7C6 10.3137 8.68629 13 12 13Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <span className="text nav-text">Người dùng</span>
                      </a>
                    </li>
                    <li className="nav-link">
                      <NavLink to={"/admin-alljob"}>
                        <span className="icon">
                          <span class="material-symbols-outlined">work</span>
                        </span>
                        <span className="text nav-text">Việc làm</span>
                      </NavLink>
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
                        <span className="text nav-text">Đăng xuất</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>

          <div
            className="homeAdmin__content-Right"
            style={{
              marginLeft: toggleSidebar ? "0px" : "160px",
              transition: "1s",
            }}
          >
            <div className="homeAdmin__content-Right__content">
              <AllUserAdmin></AllUserAdmin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
