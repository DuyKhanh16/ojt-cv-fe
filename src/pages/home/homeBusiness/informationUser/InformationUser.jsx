import React, { useEffect, useState } from "react";
import "./InformationUser.scss";
import cv from "../../../../assets/images/informationUser/cv 1.png";
import emailicon from "../../../../assets/images/informationUser/emailicon.png";
import fbicon from "../../../../assets/images/informationUser/fbicon.png";
import heart from "../../../../assets/images/informationUser/heart.png";
import LinkSimple from "../../../../assets/images/informationUser/LinkSimple.png";
import location from "../../../../assets/images/informationUser/location.circle.png";
import logoFPT from "../../../../assets/images/informationUser/logoFPT.png";
import MapTrifold from "../../../../assets/images/informationUser/MapTrifold.png";
import Social from "../../../../assets/images/informationUser/Social icon.png";
import twicon from "../../../../assets/images/informationUser/twicon.png";
import { candidateAsync } from "../../../../redux/reduce/candidateReduce";
import { useDispatch, useSelector } from "react-redux";
import privateAxios from "../../../../config/private.axios";
import { useParams } from "react-router";
import { set } from "firebase/database";
export default function InformationUser() {
  const { id } = useParams();
  console.log(id);
  const [role, setRole] = useState("");
  const [infor, setInfor] = React.useState({});
  const [inforCompany, setInforCompany] = React.useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(candidateAsync());
    getInforUser();
    getInforCV();
    getInforCompany();
  }, [dispatch]);
  const user = useSelector((state) => state.candidate.data);

  console.log(inforCompany);
  console.log(role);
  const getInforUser = async () => {
    await privateAxios
      .get(`api/v2/candidates/getInfor`)
      .then((res) => {
        setInforCompany(res.data.data);
        setRole(res.data.data.account_candidate_id?.role);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const getInforCV = async () => {
    await privateAxios
      .get(`api/v2/candidates/getInforCandidatebyId/${id}`)
      .then((res) => {
        setInfor(res.data.data);
        console.log(infor);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const getInforCompany = async () => {
    await privateAxios
      .get(`api/v2/companies/getInfor`)
      .then((res) => {
        setInforCompany(res.data.data);
        setRole(res.data.data.account_company_id?.role);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  console.log(infor);

  return (
    <>
      <div className="informationUser__container">
        <div className="informationUser__nav">
          <p className="informationUser__nav__home">Trang chủ /</p>
          {role == 1 ? (
            <p className="informationUser__nav__candidate">
              Thông tin ứng viên{" "}
            </p>
          ) : (
            ""
          )}

          {role == 2 ? (
            <p className="informationUser__nav__candidate">Ứng viên nổi bật </p>
          ) : (
            ""
          )}
        </div>
        <div className="informationUser__body">
          <div className="informationUser-header">
            <div className="informationUser-header--left">
              <img src={infor?.avatar} alt="" />
              <div className="informationUser-header--left__infor">
                <p>{infor?.name}</p>
                <div className="informationUser-header--left__infor__list">
                  <div className="informationUser-header--left__infor__list__itemLeft">
                    {infor?.position}
                  </div>
                  <div className="informationUser-header--left__infor__list__itemRight">
                    Fresher
                  </div>
                </div>
              </div>
            </div>
            <div className="informationUser-header--right">
              {role == 1 ? (
                ""
              ) : (
                <>
                  <div className="informationUser-header--right__icon">
                    <img src={heart} alt="" />
                  </div>
                  <div className="informationUser-header--right__button">
                    Xem CV
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="informationUser-content">
            <div className="informationUser-content--left">
              <div className="informationUser-content--left__aboutInfor">
                <p className="informationUser-content--left__aboutInfor__title">
                  <strong>Mô tả về bản thân</strong>
                </p>{" "}
                <p className="informationUser-content--left__aboutInfor__content">
                  {infor?.aboutme}
                </p>
                <div className="responsive__btn">Xem thêm</div>
              </div>
              <br />
              <div className="informationUser-content--left__experience">
                <p className="informationUser-content--left__experience__title">
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
              <div className="informationUser-content--left__future">
                <p className="informationUser-content--left__future__title">
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
              <div className="informationUser-content--left__project">
                <p className="informationUser-content--left__project__title">
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
              <div className="informationUser-content--left__project">
                <p className="informationUser-content--left__project__title">
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
            <div className="informationUser-content--right">
              <div className="informationUser-content--right__address">
                <div className="informationUser-content--right__address--top">
                  <img src={location} alt="" />
                  <p>Địa chỉ cá nhân</p>
                </div>
                <div className="informationUser-content--right__address--bottom">
                  <p>{infor?.address}</p>
                </div>
              </div>
              <div className="informationUser-content--right__skills">
                <div className="informationUser-content--right__skills--top">
                  <img src={MapTrifold} alt="" />
                  <p>Kĩ năng</p>
                </div>
                <ul>
                  <li className="li_skill_name">
                    <div className="informationUser-content--right__skills--name">
                      Các kĩ năng:
                    </div>
                    {infor?.skills_candidate?.map((item) => {
                      return (
                        <div
                          className="informationUser-content--right__skills--item"
                          key={item.id}
                        >
                          {item.name}
                        </div>
                      );
                    })}
                  </li>
                </ul>
              </div>
              <div className="informationUser-content--right__linkInfor">
                <p className="informationUser-content--right__linkInfor__title">
                  <strong>Mạng xã hội</strong>
                </p>
                <div className="informationUser-content--right__linkInfor__listLink">
                  <div className="informationUser-content--right__linkInfor__listLink__item1">
                    <img src={LinkSimple} alt="" />
                    <p>Copy Links</p>
                  </div>
                  <div className="informationUser-content--right__linkInfor__listLink__item2">
                    <img src={Social} alt="" />
                  </div>
                  <div className="informationUser-content--right__linkInfor__listLink__item3">
                    <img src={fbicon} alt="" />
                  </div>
                  <div className="informationUser-content--right__linkInfor__listLink__item4">
                    <img src={twicon} alt="" />
                  </div>
                  <div className="informationUser-content--right__linkInfor__listLink__item5">
                    <img src={emailicon} alt="" />
                  </div>
                </div>
              </div>
              {/* <div className="informationUser-content--right__gotoCV">
                <div className="informationUser-content--right__gotoCV--top">
                  <img src={cv} alt="" />
                  <p>Thông tin CV</p>
                </div>
                <div className="informationUser-content--right__gotoCV--bottom">
                  <div className="informationUser-content--right__gotoCV--btn" onClick={() => navigate("/candidate/inforcv")}>
                    Truy cập CV
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
