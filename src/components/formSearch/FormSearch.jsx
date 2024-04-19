import React, { useEffect, useState } from "react";
import "./Formsearch.scss";
import logo from "../../assets/images/fromsearch/fi_search.png";
import job from "../../assets/images/main/briefcase-duotone 1.png";
import avatar from "../../assets/images/userLogin/logo-rikkei2.png";
import user1 from "../../assets/images/main/users-duotone 1.png";
import bell from "../../assets/images/fromsearch/bell.fill.png";
import ouline from "../../assets/images/fromsearch/Outline.png";
import { Button, Select, Input, Space, Popover } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import privateAxios from "../../config/private.axios";
// import { Button, Input, Select, Space } from 'antd';
const { Search } = Input;
const options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
  },
];
export default function FormSearch() {
  const [info, SetInfo] = useState({});
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));
  const role = JSON.parse(localStorage.getItem("role"));
  // console.log(role)
  // khối của thằng poper của user
  const content = (
    <div className="form__search--popover">
      <div className="form__search--popover--content">
        <img src={job}></img>
        <p>Công việc đã ứng tuyển</p>
      </div>
      <div className="form__search--popover--info">
        <img src={user1}></img>
        <p>Thông tin cá nhân</p>
      </div>
      <div
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
        className="form__search--popover--logout"
      >
        <MenuFoldOutlined size={40} className="custom-icon" />
        <p>Log out</p>
      </div>
    </div>
  );
  // Khối của thằng company
  const contentCompany = (
    <div className="form__search--popover">
      <Link style={{color:"black"}} to={"/company/update-infor-company"}>
        <div className="form__search--popover--info">
          <img src={user1}></img>
          <p>Thông tin Doanh Nghiệp</p>
        </div>
      </Link>
      <div
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("role");
          navigate("/login");
        }}
        className="form__search--popover--logout"
      >
        <MenuFoldOutlined size={40} className="custom-icon" />
        <p>Log out</p>
      </div>
    </div>
  );
  // hàm lấy thông tin người dùng
  const getInfo = () => {
    if(role === 1){
      const res1 = privateAxios.get("api/v2/candidates/getInfor");
      res1.then((res) => {
        SetInfo(res.data.data);
      });
    }
    if(role === 2){
      const res2 = privateAxios.get("api/v2/companies/getInfor");
      res2.then((res) => {
        SetInfo(res.data.data);
      });
    }
  };
  useEffect(() => {
    getInfo();
  }, []);
  // console.log(info,"123");
  return (
    <div className="form__search">
      <div className="form__search--content">
        <div className="form__search--image">
          <img className="form__search--image--logo" src={avatar}></img>
        </div>
        <div className="form__search--input">
          <Space.Compact style={{ width: "40vw", height: "50px" }}>
            <Select
              style={{ height: "50px" }}
              defaultValue="Hà Nội"
              options={options}
            />

            <Input defaultValue="Job title, keywords,company" />
            <img src={logo}></img>
          </Space.Compact>
        </div>
        <div className="form__search--button">
          <div className="form__search--notifacation">
            {/* <img src="./src/assets/images/fromsearch/bell.fill.png"></img> */}
            {token ? (
              <img className="form__search--notifacation-1" src={bell}></img>
            ) : (
              <Button className="bnt-resgister">
                {" "}
                <Link to="/login">
                  <span>Đăng Nhập</span>
                </Link>
              </Button>
            )}
          </div>
          <div className="form__search--info">
            {/* <img src="./src/assets/images/fromsearch/Outline.png"></img> */}
            {token ? (
              <Popover
                placement="bottom"
                content={role === 2 ? contentCompany : content}
              >
                <img className="avatar" src={ouline}></img>
              </Popover>
            ) : (
              <Button className="bnt-Login">
                <Link to="/user-register">
                  <span>Đăng ký</span>
                </Link>
              </Button>
            )}
          </div>
          <div className="form__search--name"></div>
          {token ? (
            <p>{info?.name}</p>
          ) : (
            <Button className="bnt-1">
              {" "}
              <Link to="/company-register">
                <span>Đăng Tuyển</span>
              </Link>
            </Button>
          )}

          {/*  <p style={{ color: "#BC2228", fontSize: "14px" }}>
            Nguyễn Minh Dương</p> */}
        </div>
      </div>
    </div>
  );
}
