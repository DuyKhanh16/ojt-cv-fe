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
import { getInforCompany } from "../../apis/company/index.js";
import { candidateGetInfor } from "../../apis/candidates/index.js";
import { useDispatch, useSelector } from "react-redux";
import { candidateAsync } from "../../redux/reduce/candidateReduce.js";
import { inforCompanyAsync } from "../../redux/reduce/getInforCompany.js";
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
  const [info, setInfor] = useState({});
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));
  const role = JSON.parse(localStorage.getItem("role"));

  // khối của thằng poper của user
  const content = (
    <div className="form__search--popover">
      <div className="form__search--popover--info">
        <img src={user1}></img>
        <p
          onClick={() => navigate("/candidate/user-detail")}
          style={{ cursor: "pointer" }}
        >
          Thông tin cá nhân
        </p>
      </div>
      <div
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
        className="form__search--popover--logout"
      >
        <MenuFoldOutlined size={40} className="custom-icon" />
        <p style={{ cursor: "pointer" }}>Đăng xuất</p>
      </div>
    </div>
  );
  // Khối của thằng company
  const contentCompany = (
    <div className="form__search--popover">
      <Link style={{ color: "black" }} to={"/company/update-infor-company"}>
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
        <p style={{ cursor: "pointer" }}>Đăng xuất</p>
      </div>
    </div>
  );
  // hàm lấy thông tin người dùng
  const dispatch = useDispatch();
  const userReducer = useSelector((state) => state.candidate.data);
  const companyReducer = useSelector((state) => state.inforCompany.data);
  useEffect(() => {
    dispatch(candidateAsync());
    dispatch(inforCompanyAsync());
  }, [dispatch]);
  const getInfo = () => {
    if (token) {
      if (role === 1) {
        const response = candidateGetInfor();
        response.then((res) => {
          setInfor(res.data);
        });
      }
      if (role === 2) {
        try {
          const response = getInforCompany();
          response.then((res) => {
            setInfor(res.data);
          });
        } catch (error) {
          return error;
        }
      }
    }
  };
  const goHome = () => {
    if (role == 1) {
      navigate("/candidate");
    }
    if (role == 2) {
      navigate("/company");
    }
  };
  useEffect(() => {
    getInfo();
  }, []);
  return (
    <div className="form__search">
      <div className="form__search--content">
        <div className="form__search--image" onClick={goHome}>
          <img className="form__search--image--logo" src={avatar}></img>
        </div>
        <div className="form__search--input">
          <Space.Compact style={{ width: "40vw", height: "50px" }}>
            <Select
              style={{ height: "50px" }}
              defaultValue="Hà Nội"
              options={options}
            />

            <Input defaultValue="Tìm kiếm công việc, công ty..." />
            <img src={logo}></img>
          </Space.Compact>
        </div>
        <div className="form__search--button">
          <div className="form__search--notifacation">
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
            <p>{role == 1 ? userReducer?.name : companyReducer?.name}</p>   
          ) : (
            <Button className="bnt-1">
              {" "}
              <Link to="/company-register">
                <span>Đăng Tuyển</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
