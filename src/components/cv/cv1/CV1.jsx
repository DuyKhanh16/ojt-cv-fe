import React, { useEffect } from "react";
import "./CV1.scss";
import avatar from "../../../assets/images/cv/ACg8ocILX9TfOIrNEplYDawUBSv1Rpw3rLnuugZCNRefPEMyjM6NXIV4=s96-c.jpg";
import phoneicon from "../../../assets/images/cv/phone.svg";
import emailicon from "../../../assets/images/cv/email.svg";
import dateicon from "../../../assets/images/cv/date.svg";
import addressicon from "../../../assets/images/cv/address.svg";
import privateAxios from "../../../config/private.axios";
import { candidateGetAllInformation } from "../../../apis/candidates";
export default function CV1({ item }) {
  console.log("item", item);
  const [inforCV, setInforCV] = React.useState({});
  const [email, setEmail] = React.useState("");
  const [education, setEducation] = React.useState([]);
  const [exp, setExp] = React.useState([]);
  const [project, setProject] = React.useState([]);
  const [certificate, setCertificate] = React.useState([]);
  const [aboutMe, setAboutMe] = React.useState("");
  const [skill, setSkill] = React.useState([]);
  const getInforCV = async () => {
    await candidateGetAllInformation()
      .then((res) => {
        setInforCV(res.data);
        setEmail(res.data.account_candidate_id.email);
        setEducation(res.data.education_candidate);
        setExp(res.data.experience_candidate);
        setProject(res.data.project_candidate);
        setCertificate(res.data.certificate_candidate);
        setAboutMe(res.data.aboutme);
        setSkill(res.data.skills_candidate);
      })
      .catch((error) => {
        return error;
      });
  };
  useEffect(() => {
    getInforCV();
  }, []);
  return (
    <>
      <div className="CV1__container">
        <div className="CV1__header">
          <div className="CV1__header--left">
            <p className="CV1__header--left__name">
              <strong>{inforCV?.name}</strong>
            </p>
            <p className="CV1__header--left__job">{inforCV?.position}</p>
          </div>
          <div className="CV1__header--right">
            <div className="CV1__header--right__avatar">
              <img src={inforCV?.avatar} alt="" />
            </div>
          </div>
        </div>
        <div className="CV1__content">
          <div className="CV1__content--left">
            <div className="CV1__content--left__yourInfor">
              <p className="CV1__content--left__yourInfor__title title">
                Thông tin cá nhân
              </p>
              <div className="CV1__content--left__yourInfor--phone">
                <img src={phoneicon} alt="" />
                <p>{inforCV?.phone}</p>
              </div>
              <div className="CV1__content--left__yourInfor--email">
                <img src={emailicon} alt="" />
                <p>{email}</p>
              </div>
              <div className="CV1__content--left__yourInfor--date">
                <img src={dateicon} alt="" />
                <p>{inforCV?.birthday}</p>
              </div>
              <div className="CV1__content--left__yourInfor--address">
                <img src={addressicon} alt="" />
                <p>{inforCV?.address}</p>
              </div>
            </div>
            <div className="CV1__content--left__education">
              <p className="CV1__content--left__education__title title">
                Học vấn
              </p>
              {education?.map((item) => (
                <div
                  className="CV1__content--left__education--item"
                  key={item.id}
                >
                  <p className="CV1__content--left__education--item__school">
                    {item.major}
                  </p>
                  <p className="CV1__content--left__education--item__job">
                    {item.name_education}
                  </p>
                  <p className="CV1__content--left__education--item__time">
                    {item.start_at} / {item.end_at}
                  </p>
                </div>
              ))}
            </div>
            <div className="CV1__content--left__skill">
              <p className="CV1__content--left__skill__title title">Kĩ năng</p>
              {skill?.map((item) => (
                <div className="CV1__content--left__skill__item" key={item.id}>
                  <p className="CV1__content--left__skill__item__level">
                    Trung bình
                  </p>
                  <div className="CV1__content--left__skill__item__nameSkill">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
            <div className="CV1__content--left__certificate">
              <p className="CV1__content--left__certificate__title title">
                Chứng chỉ
              </p>
              {certificate?.map((item) => (
                <div
                  className="CV1__content--left__certificate--item"
                  key={item.id}
                >
                  <p className="CV1__content--left__certificate--item__name">
                    {item.info}
                  </p>
                  <p className="CV1__content--left__certificate--item__address">
                    {item.organization}
                  </p>
                  <p className="CV1__content--left__certificate--item__time">
                    {item.start_at} / {item.end_at}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="CV1__content--line"></div>
          <div className="CV1__content--right">
            <div className="CV1__content--right__introduce">
              <p className="CV1__content--right__introduce__title title">
                Giới thiệu thông tin
              </p>
              <div className="CV1__content--right__introduce__content">
                {aboutMe}
              </div>
            </div>
            <div className="CV1__content--right__experience">
              <p className="CV1__content--right__experience__title title">
                Kinh nghiệm làm việc
              </p>
              {exp?.map((item) => (
                <div
                  className="CV1__content--right__experience--item"
                  key={item.id}
                >
                  <div className="CV1__content--right__experience--item__role">
                    <p className="CV1__content--right__experience--item__role__title">
                      {item.position}
                    </p>
                    <p className="CV1__content--right__experience--item__role__time">
                      {item.start_at} / {item.end_at}
                    </p>
                  </div>
                  <p className="CV1__content--right__experience--item__company">
                    {item.company}
                  </p>
                </div>
              ))}
            </div>
            <div className="CV1__content--right__project">
              <p className="CV1__content--right__project__title title">
                Dự án cá nhân
              </p>
              {project?.map((item) => (
                <div
                  className="CV1__content--right__project--item"
                  key={item.id}
                >
                  <div className="CV1__content--right__project--item__nameProject">
                    <p className="CV1__content--right__project--item__nameProject__title">
                      {item.name}
                    </p>
                    <p className="CV1__content--right__project--item__nameProject__time">
                      {item.start_at} / {item.end_at}
                    </p>
                  </div>
                  <p className="CV1__content--right__project--item__discription">
                    {item.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
