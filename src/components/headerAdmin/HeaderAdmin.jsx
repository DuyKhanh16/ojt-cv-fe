import React, { useState } from "react";
import "./HeaderAdmin.scss";
import { NavLink } from "react-router-dom";
import phone from "../../assets/images/main/PhoneCall.png";
import american from "../../assets/images/main/image123.png";
export default function HeaderAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="headerAdmin">
        <div className="headerAdmin__navbar__menu" onClick={open}>
          <span class="material-symbols-outlined ">menu</span>
        </div>
        <div
          className="headerAdmin__navbar"
          style={{ height: isOpen ? "300px " : "0px" }}
        >
          <NavLink to="/" className="navbar_item">
            Trang chủ
          </NavLink>
          <NavLink to="/" className="navbar_item">
            Quản lý việc làm
          </NavLink>
          <NavLink to="/" className="navbar_item">
            Quản lý người dùng
          </NavLink>
          <NavLink to="/" className="navbar_item">
            Quản lý công ty
          </NavLink>
        </div>
        <div className="headerAdmin__contact">
          <div className="headerAdmin__contact__phone">
            <img src={phone} alt="" height={24} width={24} />
            <p> +84 123 456 789</p>
          </div>
          <div className="headerAdmin__language">
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
