import React from "react";
import "./Formsearch.scss";
import logo from "../../assets/images/fromsearch/Vector.png";
import { Button } from "antd";
import { Link } from "react-router-dom";
export default function FormSearch() {
  return (
    <div className="form__search">
      <div className="form__search--content">
        <div className="form__search--image">
          <img
            className="form__search--image--logo"
            src="./src/assets/images/userLogin/logo-rikkei2.png"
          ></img>
        </div>
        <div className="form__search--input">
          <div className="form__search--input--boder"></div>
          <div className="form__search--input--adress">Hà Nội</div>
          <img
            src="./src/assets/images/fromsearch/Vector.png"
            className="form__search--input--logo"
          ></img>
          <img
            className="form__search--input--logo2"
            src="./src/assets/images/fromsearch/Line 31.png"
          ></img>
          <img
            className="form__search--input--logo3"
            src="./src/assets/images/fromsearch/fi_search.png"
          ></img>
          <div className="form__search--input--text">
            <input
              placeholder="Job title, keywords, or company"
              style={{ color: "red", fontSize: "14px" }}
            ></input>
          </div>
        </div>
        <div className="form__search--notifacation">
          {/* <img src="./src/assets/images/fromsearch/bell.fill.png"></img> */}
          <Button className="bnt-resgister">
            {" "}
            <Link to="/Login">
              <span>Đăng Nhập</span>
            </Link>
          </Button>
        </div>
        <div className="form__search--info">
          {/* <img src="./src/assets/images/fromsearch/Outline.png"></img> */}
          <Button className="bnt-Login">
            <Link to="/user-register">
              <span>Đăng ký</span>
            </Link>
          </Button>
        </div>
        <div className="form__search--name">
          <Button className="bnt-1">
            {" "}
            <Link to="/company-register">
              <span>Đăng Tuyển</span>
            </Link>
          </Button>
          {/*  <p style={{ color: "#BC2228", fontSize: "14px" }}>
            Nguyễn Minh Dương
  </p> */}
        </div>
      </div>
    </div>
  );
}
