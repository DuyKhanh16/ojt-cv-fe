import React, { useEffect } from "react";
import "./UserDetail.scss";
import cv from "../../../../assets/images/informationUser/cv 1.png";
import emailicon from "../../../../assets/images/informationUser/emailicon.png";
import fbicon from "../../../../assets/images/informationUser/fbicon.png";
import arrow from "../../../../assets/images/main/fi_arrow-right.png";
import heart from "../../../../assets/images/informationUser/heart.png";
import BookmarkSimple from "../../../../assets/images/main/BookmarkSimple.png";
import MapPin from "../../../../assets/images/main/MapPin.png";
import LinkSimple from "../../../../assets/images/informationUser/LinkSimple.png";
import location from "../../../../assets/images/informationUser/location.circle.png";
import logoFPT from "../../../../assets/images/informationUser/logoFPT.png";
import MapTrifold from "../../../../assets/images/informationUser/MapTrifold.png";
import Social from "../../../../assets/images/informationUser/Social icon.png";
import twicon from "../../../../assets/images/informationUser/twicon.png";
import { candidateAsync } from "../../../../redux/reduce/candidateReduce";
import { useDispatch, useSelector } from "react-redux";
import privateAxios from "../../../../config/private.axios";
import { useNavigate } from "react-router";
export default function UserDetail() {
  const [infor, setInfor] = React.useState({});
  const [allJob, setAllJob] = React.useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.candidate.data);

  const getInforCV = async () => {
    await privateAxios
      .get("api/v2/candidates/getAllInformation")
      .then((res) => {
        setInfor(res.data.data);
        console.log(infor);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  console.log(user);
  console.log(infor);
  const allJobApply = async () => {
    await privateAxios
    .get("api/v2/jobs/getJobAppliedCandidates")
    .then((res) => {
      console.log(res.data.data);
      setAllJob(res.data.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    })
  }
  console.log(allJob)
  useEffect(() => {
    dispatch(candidateAsync());
    getInforCV();
    allJobApply();
  }, [dispatch]);
  return (
    <>
      <div className="userDetail__container">
        <div className="userDetail__nav">
          <p className="userDetail__nav__home">Trang chủ /</p>
          <p className="userDetail__nav__candidate">Thông tin cá nhân </p>
        </div>
        <div className="userDetail__body">
          <div className="userDetail-header">
            <div className="userDetail-header--left">
              <img src={logoFPT} alt="" />
              <div className="userDetail-header--left__infor">
                <p>{user?.name}</p>
                <div className="userDetail-header--left__infor__list">
                  <div className="userDetail-header--left__infor__list__itemLeft">
                    {user?.position}
                  </div>
                </div>
              </div>
            </div>
            <div className="userDetail-header--right">
              <div
                className="userDetail-header--right__button"
                onClick={() => navigate("/candidate/inforcv")}
              >
                Chỉnh sửa thông tin cá nhân
              </div>
            </div>
          </div>
          <div className="userDetail-content">
            <div className="userDetail-content--left">
              <div className="userDetail-content--left__aboutInfor">
                <p className="userDetail-content--left__aboutInfor__title">
                  <strong>Mô tả về bản thân</strong>
                </p>{" "}
                <p className="userDetail-content--left__aboutInfor__content">
                  {user?.aboutme}
                </p>
                <div className="responsive__btn">Xem thêm</div>
              </div>
              <br />
              <div className="userDetail-content--left__experience">
                <p className="userDetail-content--left__experience__title">
                  <strong>Kinh nghiệm làm việc</strong>
                </p>
                <br />
                <ul>
                  {infor?.experience_candidate?.map((item) => {
                    return (
                      <li key={item.id}>
                        Làm vị trí {item.position} tại {item.company} từ{" "}
                        {item.start_at} đến {item.end_at}
                      </li>
                    );
                  })}
                </ul>
                <div className="responsive__btn">Xem thêm</div>
              </div>
              <br />
              <div className="userDetail-content--left__future">
                <p className="userDetail-content--left__future__title">
                  <strong>Học vấn</strong>
                </p>{" "}
                <br />
                <ul>
                  {infor?.education_candidate?.map((item) => {
                    return (
                      <li key={item.id}>
                        Đã học chuyên ngành {item.major} tại{" "}
                        {item.name_education} tháng {item.start_at} đến{" "}
                        {item.end_at}
                      </li>
                    );
                  })}
                </ul>
                <div className="responsive__btn">Xem thêm</div>
              </div>
              <div className="userDetail-content--left__project">
                <p className="userDetail-content--left__project__title">
                  <strong>Dự án</strong>
                </p>{" "}
                <br />
                <ul>
                  {infor?.project_candidate?.map((item) => {
                    return (
                      <li key={item.id}>
                        Dự án "{item.name}" từ {item.start_at} đến {item.end_at}
                      </li>
                    );
                  })}
                </ul>
                <div className="responsive__btn">Xem thêm</div>
              </div>
              <div className="userDetail-content--left__project">
                <p className="userDetail-content--left__project__title">
                  <strong>Chứng chỉ</strong>
                </p>{" "}
                <br />
                <ul>
                  {infor?.certificate_candidate?.map((item) => {
                    return (
                      <li key={item.id}>
                        Chứng chỉ "{item.name}" từ {item.start_at} đến{" "}
                        {item.end_at}
                      </li>
                    );
                  })}
                </ul>
                <div className="responsive__btn">Xem thêm</div>
              </div>
            </div>
            <div className="userDetail-content--right">
              <div className="userDetail-content--right__address">
                <div className="userDetail-content--right__address--top">
                  <img src={location} alt="" />
                  <p>Địa chỉ cá nhân</p>
                </div>
                <div className="userDetail-content--right__address--bottom">
                  <p>
                   {infor?.address}
                  </p>
                </div>
              </div>
              <div className="userDetail-content--right__skills">
                <div className="userDetail-content--right__skills--top">
                  <img src={MapTrifold} alt="" />
                  <p>Kĩ năng</p>
                </div>
                <ul>
                  <li className="li_skill_name">
                    <div className="userDetail-content--right__skills--name">
                      Technical:
                    </div>
                    <div className="userDetail-content--right__skills--item">
                      ReactJs
                    </div>
                    <div className="userDetail-content--right__skills--item">
                      NodeJs
                    </div>
                  </li>
                  <li className="li_skill_name">
                    <div className="userDetail-content--right__skills--name">
                      Language:
                    </div>
                    <div className="userDetail-content--right__skills--item">
                      N2
                    </div>
                    <div className="userDetail-content--right__skills--item">
                      Toeic 700
                    </div>
                  </li>
                </ul>
              </div>
              <div className="userDetail-content--right__linkInfor">
                <p className="userDetail-content--right__linkInfor__title">
                  <strong>Mạng xã hội</strong>
                </p>
                <div className="userDetail-content--right__linkInfor__listLink">
                  <div className="userDetail-content--right__linkInfor__listLink__item1">
                    <img src={LinkSimple} alt="" />
                    <p>Copy Links</p>
                  </div>
                  <div className="userDetail-content--right__linkInfor__listLink__item2">
                    <img src={Social} alt="" />
                  </div>
                  <div className="userDetail-content--right__linkInfor__listLink__item3">
                    <img src={fbicon} alt="" />
                  </div>
                  <div className="userDetail-content--right__linkInfor__listLink__item4">
                    <img src={twicon} alt="" />
                  </div>
                  <div className="userDetail-content--right__linkInfor__listLink__item5">
                    <img src={emailicon} alt="" />
                  </div>
                </div>
              </div>
              <div className="userDetail-content--right__gotoCV">
                <div className="userDetail-content--right__gotoCV--top">
                  <img src={cv} alt="" />
                  <p>Thông tin CV</p>
                </div>
                <div className="userDetail-content--right__gotoCV--bottom">
                  <div className="userDetail-content--right__gotoCV--btn" onClick={() => navigate("/candidate/inforcv")}>
                    Truy cập CV
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="userDetail__outStandingJob">
        <div className="userDetail__outStandingJob--header">
            <span className="userDetail__outStandingJob--header__title">
              Công việc đã ứng tuyển
            </span>
            <div
              className="userDetail__outStandingJob--header__view"
              onClick={() => navigate("/candidate/job-list")}
            >
              <p></p>
              
            </div>
          </div>
        <div className="userDetail__outStandingJob--listJob">
            {allJob?.map((item) => (
              <div
                className="userDetail__outStandingJob--listJob__item"
                key={item.id}
              >
                <div className="userDetail__outStandingJob--listJob__item--top">
                  <span className="userDetail__outStandingJob--listJob__item--top__name">
                    {item?.job_id?.title}
                  </span>
                  <div className="userDetail__outStandingJob--listJob__item--top__salary">
                    <div className="userDetail__outStandingJob--listJob__item--top__salary__text">
                      <p>{item?.job_id?.types_jobs[0].typejob.name}</p>
                    </div>
                    <span className="userDetail__outStandingJob--listJob__item--top__salary__price">
                      {item?.job_id?.salary}
                    </span>
                  </div>
                </div>
                <div className="userDetail__outStandingJob--listJob__item--bottom">
                  <div className="userDetail__outStandingJob--listJob__item--bottom--left">
                    <div className="userDetail__outStandingJob--listJob__item--bottom__logo">
                      <img src={item?.job_id?.company?.logo} alt="" />
                    </div>
                    <div className="userDetail__outStandingJob--listJob__item--bottom__nameLogo">
                      <p className="userDetail__outStandingJob--listJob__item--bottom__nameLogo__text">
                        {item?.job_id?.company?.name}
                      </p>
                      <div className="userDetail__outStandingJob--listJob__item--bottom__nameLogo__location">
                        <img src={MapPin} alt="" />
                        <p>{item?.job_id?.company?.address_company[0]?.address}</p>
                      </div>
                    </div>
                  </div>
                  <div className="userDetail__outStandingJob--listJob__item--bottom__bookmark">
                    <img src={BookmarkSimple} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </>
  );
}
