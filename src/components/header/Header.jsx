import React, { useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import phone from "../../assets/images/main/PhoneCall.png";
import american from "../../assets/images/main/image123.png";
import vietnam from "../../assets/images/vietnam-26834_1280.png";
import CheckLogin from "../confirm/CheckLogin";
export default function Header() {
  const token = localStorage.getItem("token") || null;
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <CheckLogin isOpen={isOpen} close={open}></CheckLogin>
      <div className="header">
        <div className="header__navbar__menu" onClick={open}>
          <span class="material-symbols-outlined ">menu</span>
        </div>
        <div
          className="header__navbar"
          style={{ height: isOpen ? "300px " : "0px" }}
        >
          <NavLink to="/" className="navbar_item">
            Trang chủ
          </NavLink>
          {token ? (
            <>
              <NavLink to="/candidate/job-list" className="navbar_item">
                Việc làm
              </NavLink>
            </>
          ) : (
            <>
              <span className="navbar_item" onClick={() => open()}>
                Việc làm
              </span>
            </>
          )}
          {token ? (
            <>
              <NavLink to={"/candidate/inforcv"} className="navbar_item">
                CV của bạn
              </NavLink>
            </>
          ) : (
            <>
              <span className="navbar_item" onClick={() => open()}>
                CV của bạn
              </span>
            </>
          )}

          <NavLink to="/" className="navbar_item">
            Customer Supports
          </NavLink>
        </div>
        <div className="header__contact">
          <div className="header__contact__phone">
            <img src={phone} alt="" height={24} width={24} />
            <p style={{opacity: '0.8'}}> 1800 8198</p>
          </div>
          <div className="header__language">
            <img src={vietnam} alt="" />
            <select>
              <option value="">Tiếng việt</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
