import React, { useEffect, useState, useCallback, useMemo } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { candidateAsync } from "../../../../redux/reduce/candidateReduce";
import { educationAsync } from "../../../../redux/reduce/educationReduce";
import { expAsync } from "../../../../redux/reduce/expReduce";
import { projectAsync } from "../../../../redux/reduce/projectReduce";
import { certificateAsync } from "../../../../redux/reduce/certificateReduce";
import { skillAsync } from "../../../../redux/reduce/skillReduce";
export default function InformationUserB() {
  window.scrollTo(0, 0);

  const [isOpen, setIsOpen] = useState(true);
  const [openABout, setOpenAbout] = useState(false);
  const [openEdu, setOpenEdu] = useState(false);
  const [openCert, setOpenCert] = useState(false);
  const [openExp, setOpenExp] = useState(false);
  const [openProject, setOpenProject] = useState(false);
  const [openUpdateUser, setOpenUpdateUser] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openSkill, setOpenSkill] = useState(false);

  const [flag, setFlag] = useState(0);
  const [checkAboutMe, setCheckAboutMe] = useState(false);
  const [checkEducation, setCheckEducation] = useState(false);
  const [checkExp, setCheckExp] = useState(false);
  const [checkJob, setCheckJob] = useState(false);
  const [checkCerti, setCheckCerti] = useState(false);
  const [checkSkill, setCheckSkill] = useState(false);

  

  // bien hung update sang modal
  const [itemEduUpdate, setItemEduUpdate] = useState({});
  const [itemDelete, setItemDelete] = useState({});
  const [itemExpUpdate, setItemExpUpdate] = useState({});
  const [itemProjectUpdate, setItemProjectUpdate] = useState({});
  const [itemCertificateUpdate, setItemCertificateUpdate] = useState({});
  const [itemAboutUpdate, setItemAboutUpdate] = useState({});
  const [itemSkillUpdate, setItemSkillUpdate] = useState({});
  // het bien hung

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const open = () => {
    setIsOpen(!isOpen);
  };
  const close = useCallback(() => {
    dispatch(candidateAsync());
    dispatch(educationAsync());
    dispatch(expAsync());
    dispatch(projectAsync());
    dispatch(certificateAsync());
    dispatch(skillAsync());
    setOpenAbout(false);
    setOpenEdu(false);
    setOpenCert(false);
    setOpenExp(false);
    setOpenProject(false);
    setOpenUpdateUser(false);
    setOpenConfirm(false);
    setOpenSkill(false);
    setFlag(flag + 1);
  }, [dispatch]);

  useEffect(() => {
    dispatch(candidateAsync());
    dispatch(educationAsync());
    dispatch(expAsync());
    dispatch(projectAsync());
    dispatch(certificateAsync());
    dispatch(skillAsync());
  }, [dispatch]);

  /* Candidate */
  const user = useSelector((state) => state.candidate.data);
  const exp = useSelector((state) => state.exp.data);
  const project = useSelector((state) => state.project.data);
  const education = useSelector((state) => state.education.data);
  const certificate = useSelector((state) => state.certificate.data);
  const skill = useSelector((state) => state.skill.data);
  useEffect(() => {
    checkAboutmeF();
    checkEdu();
    checkExpF();
    checkProjectF();
    checkCertiF();
    checkSkillF();
  }, [user, exp, project, education, certificate, skill]);


  const checkSkillF = () => {
    console.log("11", skill);
    if (skill?.length > 0) {
      setCheckSkill(true);
    } else {
      setCheckSkill(false);
    }
  };
  const creatSkill = () => {
    setOpenSkill(true);
    setItemSkillUpdate({
      status: "creat",
      item: user,
    });
  }

  const updateSkill = () => {
    setOpenSkill(true);
    setItemSkillUpdate({
      status: "update",
      item: user,
    });
  }
  const creatAboutMe = () => {
    setOpenAbout(true);
    setItemAboutUpdate({
      status: "creat",
      item: user,
    });
  };
  const updateAboutMe = () => {
    setOpenAbout(true);
    setItemAboutUpdate({
      status: "update",
      item: user,
    });
  };
  const checkAboutmeF = () => {
    if (user?.aboutme != "") {
      setCheckAboutMe(true);
    } else {
      setCheckAboutMe(false);
    }
  };
  /* het Candidate */
  /* enducation */
  const checkEdu = () => {
    if (education.length > 0) {
      setCheckEducation(true);
    } else {
      setCheckEducation(false);
    }
  };
  const creatEdu = () => {
    setOpenEdu(true);
    setItemEduUpdate({
      status: "creat",
    });
  };
  // sua edu
  const updateEdu = (item) => {
    setOpenEdu(true);
    setItemEduUpdate({
      item: item,
      status: "update",
    });
  };
  const handleDelete = async (id, table) => {
    setOpenConfirm(true);
    setItemDelete({
      id: id,
      table: table,
    });
  };
  /* het edu */

  /* kinh nghiem */
  const checkExpF = () => {
    if (exp.length > 0) {
      // console.log("11", exp);
      setCheckExp(true);
    } else {
      setCheckExp(false);
    }
  };
  // sua kinh nghiem
  const updateExp = (item) => {
    if (item) {
      setOpenExp(true);
    }
    setItemExpUpdate({
      item: item,
      status: "update",
    });
  };
  const creatExp = async () => {
    setOpenExp(true);
    setItemExpUpdate({
      status: "creat",
    });
  };

  /* het kinh nghiem */

  /* project */
  const checkProjectF = () => {
    if (project.length > 0) {
      setCheckJob(true);
    } else {
      setCheckJob(false);
    }
  };
  const updateProject = (item) => {
    setOpenProject(true);
    setItemProjectUpdate({
      item: item,
      status: "update",
    });
  };
  const creatProject = () => {
    setOpenProject(true);
    setItemProjectUpdate({
      status: "creat",
    });
  };
  /* het project */

  /* cert */
  const checkCertiF = () => {
    if (certificate.length > 0) {
      setCheckCerti(true);
    } else {
      setCheckCerti(false);
    }
  };

  const updateCertificate = (item) => {
    setOpenCert(true);
    setItemCertificateUpdate({
      item: item,
      status: "update",
    });
  };
  const creatCerti = () => {
    setOpenCert(true);
    setItemCertificateUpdate({
      status: "creat",
    });
  };

  /* het cert */
  console.log("data", user);

  return (
    <>
      <AboutUser
        isOpen={openABout}
        close={close}
        item={itemAboutUpdate}
      ></AboutUser>
      <Certificate
        isOpen={openCert}
        close={close}
        certificate={itemCertificateUpdate}
      ></Certificate>
      <Education
        isOpen={openEdu}
        user={user}
        close={close}
        edu={itemEduUpdate}
      ></Education>
      <Exp
        isOpenP={openExp}
        close={close}
        exp={itemExpUpdate}
        userE={user}
      ></Exp>
      <ProjectUser
        isOpen={openProject}
        close={close}
        project={itemProjectUpdate}
      ></ProjectUser>
      <UpdateInforUser isOpen={openUpdateUser} close={close}></UpdateInforUser>
      <Skill
        isOpen={openSkill}
        close={close}
        skill={itemSkillUpdate}
      ></Skill>
      <Confirm isOpen={openConfirm} close={close} value={itemDelete}></Confirm>
      <UpdateInforUser></UpdateInforUser>
      <div className="informationUser">
        <div className="informationUser__navbar2">
          <div className="informationUser__navbar__contain">
            <NavLink className={"informationUser__navbar__item"} to={"/candidate/user-detail"}>
              {" "}
              <span class="material-symbols-outlined">arrow_back</span>Quay lại
              hồ sơ cá nhân
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
              style={{ height: isOpen ? "450px" : "0px" }}
            >
              <div className="informationUser__contain__left__item ">
                {checkAboutMe ? (
                  <span
                    style={{ color: "green" }}
                    class="material-symbols-outlined"
                  >
                    check_circle
                  </span>
                ) : (
                  <img src={vetor} alt="" onClick={creatAboutMe} />
                )}

                <p style={{ color: checkAboutMe ? "green" : "red" }}>
                  Thêm giới thiệu bản thân
                </p>
              </div>
              <div className="informationUser__contain__left__item">
                {checkEducation ? (
                  <span
                    style={{ color: "green" }}
                    class="material-symbols-outlined"
                  >
                    check_circle
                  </span>
                ) : (
                  <img onClick={creatEdu} src={vetor} alt="" />
                )}
                <p style={{ color: checkEducation ? "green" : "red" }}>
                  Thêm học vấn
                </p>
              </div>
              <div className="informationUser__contain__left__item">
                {checkExp ? (
                  <span
                    style={{ color: "green" }}
                    class="material-symbols-outlined"
                  >
                    check_circle
                  </span>
                ) : (
                  <img onClick={creatExp} src={vetor} alt="" />
                )}
                <p style={{ color: checkExp ? "green" : "red" }}>
                  Thêm kinh nghiệm làm việc
                </p>
              </div>
              <div className="informationUser__contain__left__item">
                {checkJob ? (
                  <span
                    style={{ color: "green" }}
                    class="material-symbols-outlined"
                  >
                    check_circle
                  </span>
                ) : (
                  <img onClick={creatProject} src={vetor} alt="" />
                )}
                <p style={{ color: checkJob ? "green" : "red" }}>
                  Thêm dự án cá nhân
                </p>
              </div>
              <div className="informationUser__contain__left__item">
                {checkCerti ? (
                  <span
                    style={{ color: "green" }}
                    class="material-symbols-outlined"
                  >
                    check_circle
                  </span>
                ) : (
                  <img onClick={creatCerti} src={vetor} alt="" />
                )}
                <p style={{ color: checkCerti ? "green" : "red" }}>
                  Thêm chứng chỉ
                </p>
              </div>
              <div className="informationUser__contain__left__item">
                {checkSkill ?(
                  <span
                    style={{ color: "green" }}
                    class="material-symbols-outlined"
                  >
                    check_circle
                  </span>
                ) : (
                  <img onClick={creatSkill} src={vetor} alt="" />
                )}
                <p style={{ color: checkSkill ? "green" : "red" }}>
                  Thêm kỹ năng
                </p>
              </div>
            </div>
            <div className="informationUser__contain__left__updateCV">
              <img src={cv1} alt="" />
              <p>
                Nâng cấp hồ sơ xin việc của bạn bằng việc bổ sung các trường sau
              </p>
            </div>
            {user?.aboutme != "" &&
            education?.length > 0 &&
            exp?.length > 0 &&
            project?.length > 0 &&
            certificate?.length > 0&&
            skill?.length > 0 ? (
              <>
                <div className="informationUser__contain__left__button">
                  <button onClick={() => navigate("/allcv")}>
                    Xem Và Tải CV
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="informationUser__contain__left__buttonNone">
                  <button>Xem Và Tải CV</button>
                </div>
              </>
            )}
          </div>

          <div className="informationUser__contain__right">
            <div className="informationUser__contain__right__infor">
              <div style={{ width: "80px", height: "80px",borderRadius: "50%", overflow: "hidden"  }}>
                <img src={user?.avatar} alt="" width={80} height={80}/>
              </div>

              <div className="informationUser__infor">
                <p>{user?.name}</p>
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

            <div
              className="informationUser__contain__right__item aboutMeInfor"
              style={{ display: checkAboutMe ? "block" : "none" }}
            >
              <p>Giới Thiệu Bản Thân</p>
              {user?.aboutme ? (
                <>
                  <img
                    style={{ cursor: "pointer" }}
                    src={vector2}
                    alt=""
                    onClick={updateAboutMe}
                  />
                </>
              ) : (
                <>
                  <img src={vetor} alt="" onClick={creatAboutMe} />
                </>
              )}

              <div
                className="informationUser__contain__right__item__contentInfor"
                style={{
                  height: "auto",
                  borderTop: "1px solid #CCCCCC",
                  marginTop: "20px",
                  paddingTop: "20px",
                }}
              >
                <p style={{ fontSize: "20px", fontWeight: "400" }}>
                  {user?.aboutme}
                </p>
              </div>
            </div>
            <div
              className="informationUser__contain__right__item"
              style={{ display: checkEducation ? "block" : "none" }}
            >
              <p>Học Vấn</p>
              {education?.map((item) => (
                <div
                  className="informationUser__contain__right__item__miniitem"
                  key={item.id}
                >
                  <div className="informationUser__contain__right__item__miniitem__top">
                    <p className="informationUser__contain__right__item__miniitem__position">
                      <strong>{item.major}</strong>
                    </p>
                    <div className="informationUser__contain__right__item__miniitem__action">
                      <img
                        style={{ cursor: "pointer" }}
                        src={vector2}
                        alt=""
                        onClick={() => updateEdu(item)}
                      />
                      <span
                        class="material-symbols-outlined"
                        onClick={() => handleDelete(item.id, "education")}
                      >
                        delete
                      </span>
                    </div>
                  </div>
                  <p className="informationUser__contain__right__item__miniitem__nameSchool">
                    {item.name_education}
                  </p>
                  <p className="informationUser__contain__right__item__miniitem__time">
                    {item.start_at} đến {item.end_at}
                  </p>
                </div>
              ))}

              <img src={vetor} alt="" onClick={creatEdu} />
            </div>

            <div
              className="informationUser__contain__right__item"
              style={{ display: checkExp ? "block" : "none" }}
            >
              <p>Kinh Nghiệm Làm Việc</p>
              {exp?.map((item) => (
                <div
                  className="informationUser__contain__right__item__miniitem"
                  key={item.id}
                >
                  <div className="informationUser__contain__right__item__miniitem__top">
                    <p className="informationUser__contain__right__item__miniitem__position">
                      <strong>{item.position}</strong>
                    </p>
                    <div className="informationUser__contain__right__item__miniitem__action">
                      <img
                        style={{ cursor: "pointer" }}
                        src={vector2}
                        alt=""
                        onClick={() => updateExp(item)}
                      />
                      <span
                        class="material-symbols-outlined"
                        onClick={() => handleDelete(item.id, "exp")}
                      >
                        delete
                      </span>
                    </div>
                  </div>
                  <p className="informationUser__contain__right__item__miniitem__nameSchool">
                    {item.company}
                  </p>
                  <p className="informationUser__contain__right__item__miniitem__time">
                    {item.start_at} đến {item.end_at}
                  </p>
                </div>
              ))}

              <img src={vetor} alt="" onClick={creatExp} />
            </div>

            <div
              className="informationUser__contain__right__item"
              style={{ display: checkJob ? "block" : "none" }}
            >
              <p>Dự Án Cá Nhân</p>
              {project?.map((item) => (
                <div
                  className="informationUser__contain__right__item__miniitem"
                  key={item.id}
                >
                  <div className="informationUser__contain__right__item__miniitem__top">
                    <p className="informationUser__contain__right__item__miniitem__position">
                      <strong>{item.name}</strong>
                    </p>
                    <div className="informationUser__contain__right__item__miniitem__action">
                      <img
                        style={{ cursor: "pointer" }}
                        src={vector2}
                        alt=""
                        onClick={() => updateProject(item)}
                      />
                      <span
                        class="material-symbols-outlined"
                        onClick={() => handleDelete(item.id, "project")}
                      >
                        delete
                      </span>
                    </div>
                  </div>
                  <p className="informationUser__contain__right__item__miniitem__nameSchool">
                    {item.info}
                  </p>
                  <p className="informationUser__contain__right__item__miniitem__time">
                    {item.start_at} đến {item.end_at}
                  </p>
                </div>
              ))}
              <img src={vetor} alt="" onClick={creatProject} />
            </div>

            <div
              className="informationUser__contain__right__item"
              style={{ display: checkCerti ? "block" : "none" }}
            >
              <p>Chứng Chỉ</p>
              {certificate?.map((item) => (
                <div
                  className="informationUser__contain__right__item__miniitem"
                  key={item.id}
                >
                  <div className="informationUser__contain__right__item__miniitem__top">
                    <p className="informationUser__contain__right__item__miniitem__position">
                      <strong>{item.name}</strong>
                    </p>
                    <div className="informationUser__contain__right__item__miniitem__action">
                      <img
                        style={{ cursor: "pointer" }}
                        src={vector2}
                        alt=""
                        onClick={() => updateCertificate(item)}
                      />
                      <span
                        class="material-symbols-outlined"
                        onClick={() => handleDelete(item.id, "certificate")}
                      >
                        delete
                      </span>
                    </div>
                  </div>
                  <p className="informationUser__contain__right__item__miniitem__nameSchool">
                    {item.info}
                  </p>
                  <p className="informationUser__contain__right__item__miniitem__time">
                    {item.start_at} đến {item.end_at}
                  </p>
                </div>
              ))}
              <img src={vetor} alt="" onClick={creatCerti} />
            </div>

            <div
              className="informationUser__contain__right__item"
              style={{ display: checkSkill ? "block" : "none" }}
            >
              <p>Kỹ năng</p>
              {skill?.map((item) => (
                <div
                  className="informationUser__contain__right__item__miniitem"
                  key={item.id}
                >
                  <div className="informationUser__contain__right__item__miniitem__top">
                    <p className="informationUser__contain__right__item__miniitem__position">
                      <strong>{item.name}</strong>
                    </p>
                    <div className="informationUser__contain__right__item__miniitem__action">
                      <img
                        style={{ cursor: "pointer" }}
                        src={vector2}
                        alt=""
                        onClick={() => updateSkill(item)}
                      />
                      <span
                        class="material-symbols-outlined"
                        onClick={() => handleDelete(item.id, "skill")}
                      >
                        delete
                      </span>
                    </div>
                  </div>
                  <p className="informationUser__contain__right__item__miniitem__nameSchool">
                    {item?.leveljob_id?.name}
                  </p>
                </div>
              ))}
              <img src={vetor} alt="" onClick={creatSkill} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
