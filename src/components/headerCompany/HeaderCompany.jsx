import React, { useState } from "react";
import "./HeaderCompany.scss";
import { NavLink } from "react-router-dom";
import phone from "../../assets/images/main/PhoneCall.png";
import american from "../../assets/images/main/image123.png";
export default function HeaderCompany() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="headerCompany">
        <div className="headerCompany__navbar__menu" onClick={open}>
          <span class="material-symbols-outlined ">menu</span>
        </div>
        <div
          className="headerCompany__navbar"
          style={{ height: isOpen ? "300px " : "0px" }}
        >
          <NavLink to="/company" className="navbar_item">
            Trang chủ
          </NavLink>
          <NavLink to="/company/alluserapply" className="navbar_item">
            Quản lý ứng viên
          </NavLink>
          <NavLink to="/company/alljob" className="navbar_item">
            Quản lý việc làm
          </NavLink>
        </div>
        <div className="headerCompany__contact">
          <div className="headerCompany__contact__phone">
            <img src={phone} alt="" height={24} width={24} />
            <p> +84 123 456 789</p>
          </div>
          <div className="headerCompany__language">
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
