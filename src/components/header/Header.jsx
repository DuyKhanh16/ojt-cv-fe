import React, { useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import phone from "../../assets/images/main/PhoneCall.png";
import american from "../../assets/images/main/image123.png";
import CheckLogin from "../confirm/CheckLogin";
export default function Header() {
  const token = localStorage.getItem("token") || null;
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    console.log(isOpen);
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
          <NavLink to="/user-jobList" className="navbar_item">
            Việc làm
          </NavLink>
          {token?(
            <>
               <NavLink to={"/user-info"} className="navbar_item" >
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
            <p> +84 123 456 789</p>
          </div>
          <div className="header__language">
            <img src={american} alt="" />
            <select>
              <option value="">English</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
