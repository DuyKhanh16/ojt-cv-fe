import React, { useEffect, useState } from "react";
import "./InformationUser.scss";
import Header from "../../../../components/header/Header";
import Footer from "../../../../components/footer/Footer";
import { NavLink, useNavigate } from "react-router-dom";
import vetor from "../../../../assets/images/main/Vector.png";
import vector1 from "../../../../assets/images/main/Vector1.png";
import cv1 from "../../../../assets/images/main/cv1.png";
import logo from "../../../../assets/images/main/logo.png";
import vector2 from "../../../../assets/images/main/Vector2.png";
import cake from "../../../../assets/images/main/Cake.png";
import location from "../../../../assets/images/main/Location.png";
import world from "../../../../assets/images/main/worldd.png";
import phone from "../../../../assets/images/main/phone.png";
import userIcon from "../../../../assets/images/main/User.png";
import AboutUser from "../../../../components/modal/updateInforUser/AboutUser";
import Certificate from "../../../../components/modal/updateInforUser/Certificate";
import Education from "../../../../components/modal/updateInforUser/Education";
import Exp from "../../../../components/modal/updateInforUser/Exp";
import ProjectUser from "../../../../components/modal/updateInforUser/ProjectUser";
import Skill from "../../../../components/modal/updateInforUser/Skill";
import UpdateInforUser from "../../../../components/modal/updateInforUser/UpdateInforUser";
import FormSearch from "../../../../components/formSearch/FormSearch";
import Confirm from "../../../../components/confirm/Confirm";
import privateAxios from "../../../../config/private.axios";

export default function InformationUserB() {
  const [isOpen, setIsOpen] = useState(true);
  const [openABout, setOpenAbout] = useState(false);
  const [openEdu, setOpenEdu] = useState(false);
  const [openCert, setOpenCert] = useState(false);
  const [openExp, setOpenExp] = useState(false);
  const [openProject, setOpenProject] = useState(false);
  const [openUpdateUser, setOpenUpdateUser] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const open = () => {
    setIsOpen(!isOpen);
  };
  const close = () => {
    setOpenAbout(false);
    setOpenEdu(false);
    setOpenCert(false);
    setOpenExp(false);
    setOpenProject(false);
    setOpenUpdateUser(false);
  };
  const getUser = () => {
    console.log("first");
    privateAxios.get("api/v2/candidates/getInfor")
      .then((res) => {
        console.log("API response data:", res.data.data);
        setUser(res.data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  console.log(user);
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <AboutUser isOpen={openABout} close={close}></AboutUser>
      <Certificate isOpen={openCert} close={close}></Certificate>
      <Education isOpen={openEdu} close={close}></Education>
      <Exp isOpen={openExp} close={close}></Exp>
      <ProjectUser isOpen={openProject} close={close}></ProjectUser>
      <UpdateInforUser
        isOpen={openUpdateUser}
        close={close}
      ></UpdateInforUser>
      <Skill></Skill>
      <Confirm></Confirm>
      <UpdateInforUser></UpdateInforUser>
      <div className="informationUser">
        <div className="informationUser__navbar2">
          <div className="informationUser__navbar__contain">
            <NavLink className={"informationUser__navbar__item"}>Hồ sơ</NavLink>
            <NavLink className={"informationUser__navbar__item"}>
              Quản lí công việc
            </NavLink>
            <NavLink className={"informationUser__navbar__item"}>
              Tiêu chí làm việc
            </NavLink>
          </div>
        </div>
        <div className="informationUser__contain">
          <div className="informationUser__contain__left">
            <p>
              Nâng cấp hồ sơ xin việc của bạn bằng việc bổ sung các trường sau
            </p>
            <img
              src={vector1}
              alt=""
              className="informationUser__contain__left__vector"
              style={{ width: "16px", height: "9px" }}
              onClick={open}
            />
            <div
              className="informationUser__contain__left__list"
              style={{ height: isOpen ? "380px" : "0px" }}
            >
              <div
                className="informationUser__contain__left__item"
                onClick={() => setOpenAbout(!openABout)}
              >
                <img src={vetor} alt="" />
                <p>Thêm giới thiệu bản thân</p>
              </div>
              <div className="informationUser__contain__left__item">
                <img src={vetor} alt="" />
                <p>Thêm học vấn</p>
              </div>
              <div className="informationUser__contain__left__item">
                <img src={vetor} alt="" />
                <p>Thêm kinh nghiệm làm việc</p>
              </div>
              <div className="informationUser__contain__left__item">
                <img src={vetor} alt="" />
                <p>Thêm dự án cá nhân</p>
              </div>
              <div className="informationUser__contain__left__item">
                <img src={vetor} alt="" />
                <p>Thêm chứng chỉ</p>
              </div>
            </div>
            <div className="informationUser__contain__left__updateCV">
              <img src={cv1} alt="" />
              <p>
                Nâng cấp hồ sơ xin việc của bạn bằng việc bổ sung các trường sau
              </p>
            </div>
            <div className="informationUser__contain__left__button">
              <button onClick={()=> navigate("/allCV")}>Xem Và Tải CV</button>
            </div>
          </div>

          <div className="informationUser__contain__right">
            <div className="informationUser__contain__right__infor">
              <div>
                <img src={logo} alt="" />
              </div>

              <div className="informationUser__infor">
                <p>{user.name}</p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "24px",
                    color: "#767F8C",
                  }}
                >
                  Full-stack Developer
                </p>
                <div className="informationUser__infor__list">
                  <div>
                    <p>
                      <span className="material-symbols-outlined">mail</span>
                      {user?.account_candidate_id?.email}
                    </p>
                    <p>
                      <span>
                        {" "}
                        <img src={cake} alt="" />
                      </span>
                      {user?.birthday
                        ? user?.birthday
                        : "Cập nhật thêm ngày sinh"}
                    </p>
                    <p>
                      <span>
                        <img src={location} alt="" />
                      </span>
                      {user?.address ? user?.address : "Cập nhật thêm địa chỉ"}
                    </p>
                  </div>

                  <div>
                    <p>
                      <span>
                        <img src={phone} alt="" />
                      </span>
                      {user?.phone
                        ? user?.phone
                        : "Cập nhật thêm số điện thoại"}
                    </p>
                    <p>
                      <span>
                        <img src={userIcon} alt="" />
                      </span>
                      {user?.gender ? user?.gender : "Cập nhật thêm giới tính"}
                    </p>
                    <p>
                      <span>
                        <img src={world} alt="" />
                      </span>
                      {user?.link_git
                        ? user?.link_git
                        : "Cập nhật thêm link github"}
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", right: "30px", top: "30px" }}>
                <img
                  src={vector2}
                  onClick={() => setOpenUpdateUser(!openUpdateUser)}
                  alt=""
                />
              </div>
            </div>

            <div className="informationUser__contain__right__item">
              <p>Giới thiệu Bản Thân</p>
              <input
                type="text"
                placeholder="Giơí thiệu điểm mạnh của bản thân và kinh nghiệm của bạn "
              />
              <img
                style={{ cursor: "pointer" }}
                src={vector2}
                alt=""
                onClick={() => setOpenAbout(!openABout)}
              />
            </div>
            <div className="informationUser__contain__right__item">
              <p>Học Vấn</p>
              <input
                type="text"
                placeholder="Giơí thiệu điểm mạnh của bản thân và kinh nghiệm của bạn "
              />
              <img src={vetor} alt="" onClick={() => setOpenEdu(!openEdu)} />
            </div>

            <div className="informationUser__contain__right__item">
              <p>Kinh Nghiệm Làm Việc</p>
              <input
                type="text"
                placeholder="Giơí thiệu điểm mạnh của bản thân và kinh nghiệm của bạn "
              />
              <img src={vetor} alt="" onClick={() => setOpenExp(!openExp)} />
            </div>

            <div className="informationUser__contain__right__item">
              <p>Dự Án Cá Nhân</p>
              <input
                type="text"
                placeholder="Giơí thiệu điểm mạnh của bản thân và kinh nghiệm của bạn "
              />
              <img
                src={vetor}
                alt=""
                onClick={() => setOpenProject(!openProject)}
              />
            </div>

            <div className="informationUser__contain__right__item">
              <p>Chứng Chỉ</p>
              <input
                type="text"
                placeholder="Giơí thiệu điểm mạnh của bản thân và kinh nghiệm của bạn "
              />
              <img src={vetor} alt="" onClick={() => setOpenCert(!openCert)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
