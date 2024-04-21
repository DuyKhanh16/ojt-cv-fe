import React, { useEffect } from "react";
import "./CV2.scss";
import avatar from "../../../assets/images/cv/ACg8ocILX9TfOIrNEplYDawUBSv1Rpw3rLnuugZCNRefPEMyjM6NXIV4=s96-c.jpg";
import phonew from "../../../assets/images/cv/phonew.svg";
import emailw from "../../../assets/images/cv/mailw.svg";
import bdw from "../../../assets/images/cv/bdw.svg";
import mapw from "../../../assets/images/cv/mapw.svg";
import privateAxios from "../../../config/private.axios";
export default function CV2() {
  const [inforCV, setInforCV] = React.useState({});
  const [email, setEmail] = React.useState("");
  const [education, setEducation] = React.useState([]);
  const [exp, setExp] = React.useState([]);
  const [project, setProject] = React.useState([]);
  const [aboutMe, setAboutMe] = React.useState("");
  const [skill, setSkill] = React.useState([]);
  const [certificate, setCertificate] = React.useState([]);
  const getInforCV = async () => {
    await privateAxios
      .get("api/v2/candidates/getAllInformation")
      .then((res) => {
        console.log(res.data.data);
        setInforCV(res.data.data);
        setEmail(res.data.data.account_candidate_id.email);
        setEducation(res.data.data.education_candidate);
        setExp(res.data.data.experience_candidate);
        setProject(res.data.data.project_candidate);
        setAboutMe(res.data.data.aboutme);
        setSkill(res.data.data.skills_candidate);
        setCertificate(res.data.data.certificate_candidate);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    getInforCV();
  }, []);
  return (
    <div className="CV2__container">
      <div className="CV2__header">
        <div className="CV2__header--left">
          <p className="CV2__header--left__name">
            <strong>{inforCV?.name}</strong>
          </p>
          <p className="CV2__header--left__job">{inforCV?.position}</p>
        </div>
        <div className="CV2__header--right">
          <div className="CV2__header--right__avatar">
            <img src={avatar} alt="" />
          </div>
        </div>
      </div>
      <div className="CV2__content">
        <div className="CV2__content--left">
          <div className="CV2__content--left__yourInfor">
            <p className="CV2__content--left__yourInfor__title title">
              Thông tin cá nhân
            </p>
            <div className="CV2__content--left__yourInfor--phone">
              <span class="material-symbols-outlined">call</span>
              <p>{inforCV?.phone}</p>
            </div>
            <div className="CV2__content--left__yourInfor--email">
              <span class="material-symbols-outlined">mail</span>
              <p>{email}</p>
            </div>
            <div className="CV2__content--left__yourInfor--date">
              <span class="material-symbols-outlined">calendar_month</span>
              <p>{inforCV?.birthday}</p>
            </div>
            <div className="CV2__content--left__yourInfor--address">
              <span class="material-symbols-outlined">location_on</span>
              <p>{inforCV?.address}</p>
            </div>
          </div>
          <div className="CV2__content--left__education">
            <p className="CV2__content--left__education__title title">
              Học vấn
            </p>
            {education?.map((item) => (
              <div
                className="CV2__content--left__education--item"
                key={item.id}
              >
                <p className="CV2__content--left__education--item__school">
                  {item.major}
                </p>
                <p className="CV2__content--left__education--item__job">
                  {item.name_education}
                </p>
                <p className="CV2__content--left__education--item__time">
                  {item.start_at} / {item.end_at}
                </p>
              </div>
            ))}
          </div>
          <div className="CV2__content--left__skill">
            <p className="CV2__content--left__skill__title title">Kĩ năng</p>
            {skill?.map((item) => (
              <div className="CV2__content--left__skill__item" key={item.id}>
                <p className="CV2__content--left__skill__item__level">
                  Trung bình
                </p>
                <div className="CV2__content--left__skill__item__nameSkill">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
          <div className="CV2__content--left__certificate">
            <p className="CV2__content--left__certificate__title title">
              Chứng chỉ
            </p>
            {certificate?.map((item) => (
              <div
                className="CV2__content--left__certificate--item"
                key={item.id}
              >
                <p className="CV2__content--left__certificate--item__name">
                  {item.info}
                </p>
                <p className="CV2__content--left__certificate--item__address">
                  {item.organization}
                </p>
                <p className="CV2__content--left__certificate--item__time">
                  {item.start_at} / {item.end_at}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="CV2__content--line"></div>
        <div className="CV2__content--right">
          <div className="CV2__content--right__introduce">
            <p className="CV2__content--right__introduce__title title">
              Giới thiệu thông tin
            </p>
            <div className="CV2__content--right__introduce__content">
              {aboutMe}
            </div>
          </div>
          <div className="CV2__content--right__experience">
            <p className="CV2__content--right__experience__title title">
              Kinh nghiệm làm việc
            </p>
            {exp.map((item) => (
              <div
                className="CV2__content--right__experience--item"
                key={item.id}
              >
                <div className="CV2__content--right__experience--item__role">
                  <p className="CV2__content--right__experience--item__role__title">
                    {item.position}
                  </p>
                  <p className="CV2__content--right__experience--item__role__time">
                    {item.start_at} / {item.end_at}
                  </p>
                </div>
                <p className="CV2__content--right__experience--item__company">
                  {item.company}
                </p>
                {/* <p className="CV2__content--right__experience--item__discription">
                  Tối ưu hóa trang E-Learning
                </p> */}
              </div>
            ))}
          </div>
          <div className="CV2__content--right__project">
            <p className="CV2__content--right__project__title title">
              Dự án cá nhân
            </p>
            {project?.map((item) => (
              <div className="CV2__content--right__project--item">
                <div className="CV2__content--right__project--item__nameProject">
                  <p className="CV2__content--right__project--item__nameProject__title">
                    {item.name}
                  </p>
                  <p className="CV2__content--right__project--item__nameProject__time">
                    {item.start_at} / {item.end_at}
                  </p>
                </div>
                <p className="CV2__content--right__project--item__discription">
                  {item.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
