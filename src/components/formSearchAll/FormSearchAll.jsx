import React, { useEffect, useState } from "react";
import "./FormSearchAll.scss";
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
import { candidateGetInfor } from "../../apis/candidates";
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
export default function FormSearchAll() {
  const [info, setInfor] = useState({});
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));
  const role = JSON.parse(localStorage.getItem("role"));
  // khối của thằng poper của user
  const content = (
    <div className="formSearchAll__search--popover">
      <div className="formSearchAll__search--popover--info">
        <img src={user1}></img>
        <p onClick={() => navigate("/candidate/user-detail")} style={{cursor:"pointer"}}>Thông tin cá nhân</p>
      </div>
      <div
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
        className="formSearchAll__search--popover--logout"
      >
        <MenuFoldOutlined size={40} className="custom-icon" />
        <p style={{cursor:"pointer"}}>Log out</p>
      </div>
    </div>
  );
  // Khối của thằng company
  const contentCompany = (
    <div className="formSearchAll__search--popover">
      <Link style={{color:"black"}} to={"/company/update-infor-company"}>
        <div className="formSearchAll__search--popover--info">
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
        className="formSearchAll__search--popover--logout"
      >
        <MenuFoldOutlined size={40} className="custom-icon" />
        <p style={{ cursor: "pointer" }}>Đăng xuất</p>
      </div>
    </div>
  );
  // hàm lấy thông tin người dùng
  const getInfo = () => {
    if(role === 1){
      const response = candidateGetInfor();
      response.then((res) => {
        setInfor(res.data);
      });
    }
    if(role === 2){
      const response = privateAxios.get("api/v2/companies/getInfor");
      response.then((res) => {
        setInfor(res.data.data);
      });
    }
  };
  useEffect(() => {
    getInfo();
  }, []);
  return (
    <div className="formSearchAll__search" style={{padding:"0",width:"100vw"}}>
      <div className="formSearchAll__search--content" style={{width:"100vw",margin:"0 auto",marginLeft:"0px"}}>
        <div className="formSearchAll__search--image">
          <img className="formSearchAll__search--image--logo" src={avatar}></img>
        </div>
        
        <div className="formSearchAll__search--button">
          <div className="formSearchAll__search--notifacation">
            {/* <img src="./src/assets/images/fromsearch/bell.fill.png"></img> */}
            {token ? (
              <img className="formSearchAll__search--notifacation-1" src={bell}></img>
            ) : (
              <Button className="bnt-resgister">
                {" "}
                <Link to="/login">
                  <span>Đăng Nhập</span>
                </Link>
              </Button>
            )}
          </div>
          <div className="formSearchAll__search--info">
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
          <div className="formSearchAll__search--name"></div>
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
