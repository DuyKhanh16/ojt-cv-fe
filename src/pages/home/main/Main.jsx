import React, { useEffect, useState } from "react";
import "./Main.scss";
import imgSearch from "../../../assets/images/main/Software code testing-pana 1.png";
import searchIcon from "../../../assets/images/main/fi_search.png";
import localIcon from "../../../assets/images/main/fi_map-pin.png";
import briefcase from "../../../assets/images/main/briefcase-duotone 1.png";
import buildings from "../../../assets/images/main/buildings-duotone 1.png";
import users from "../../../assets/images/main/users-duotone 1.png";
import arrow from "../../../assets/images/main/fi_arrow-right.png";
import MapPin from "../../../assets/images/main/MapPin.png";
import BookmarkSimple from "../../../assets/images/main/BookmarkSimple.png";
import LogoG from "../../../assets/images/main/Employers Logo.png";
import global from "../../../assets/images/main/global.png";
import avatar from "../../../assets/images/main/avatar.png";
import Quote from "../../../assets/images/main/Quote.png";
import Rating from "../../../assets/images/main/Rating.png";
import arrowLeft from "../../../assets/images/main/fi_arrow-left.png";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import FormSearch from "../../../components/formSearch/FormSearch";
import { notification } from "antd";
import publicAxios from "../../../config/pulic.axios";
import { Outlet, useNavigate } from "react-router";
import CheckLogin from "../../../components/confirm/CheckLogin";
import axios from "axios";

export default function Main() {
  const [allCompany, setAllCompany] = useState([]);
  const [allLiveJob, setLiveJob] = useState([]);
  const [allNewJob, setNewJob] = useState([]);
  const [allCandidate, setAllCandidate] = useState([]);
  const [salary, setSalary] = useState([]);
  const navigate = useNavigate();
  // check token

  const token = localStorage.getItem("token") || null;
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  const getAllCompany = async () => {
    try {
      const res = await publicAxios.get("/api/v2/companies/getAll");
      setAllCompany(res.data.data);
      const res1 = await publicAxios.get(
        `/api/v2/jobs/getJobsCompanyById/${res.data.data[0].id}`
      );
    } catch (error) {
      console.log(error);
    }
  };
  const getAllLiveJob = async () => {
    try {
      const res = await publicAxios.get("/api/v2/jobs/getLiveJobs");
      setLiveJob(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(allLiveJob)
  const getAllNewJob = async () => {
    try {
      const res = await publicAxios.get("/api/v2/jobs/getNewJobs");
      setNewJob(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllCandidate = async () => {
    try {
      const res = await publicAxios.get("api/v2/candidates/getAll");
      console.log(res.data.data);
      setAllCandidate(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCompany();
    getAllLiveJob();
    getAllNewJob();
    getAllCandidate();
  }, []);
  return (
    <>
      <CheckLogin isOpen={isOpen} close={open}></CheckLogin>

      <div className="main__container">
        <div className="main__introduce">
          <div className="main--searchJob">
            <div className="main--searchJob--left">
              <h1>
                {" "}
                Tìm kiếm công việc phù hợp với năng lực của bạn cùng chúng tôi
              </h1>
              <p className="main--searchJob--left__text--up">
                Khám phá danh sách top 30 IT hàng đầu Việt Nam.
                <br />
                Hàng ngàn công việc đang chờ bạn ứng tuyển.
              </p>
              <div className="main--searchJob--left__formSearch">
                <div className="main--searchJob--left__formSearch__input">
                  <div className="main--searchJob--left__formSearch__input--left">
                    <div className="main--searchJob--left__formSearch__input--left__iconSearch">
                      <img src={searchIcon} alt="" />
                    </div>
                    <input
                      type="text"
                      className="main--searchJob--left__formSearch__input--left__text"
                      name=""
                      id=""
                      placeholder="Ứng viên, công ty, việc làm..."
                    />
                  </div>
                  <div className="main--searchJob--left__formSearch__input--line"></div>
                  <div className="main--searchJob--left__formSearch__input--right">
                    <div className="main--searchJob--left__formSearch__input--right__iconLocation">
                      <img src={localIcon} alt="" />
                    </div>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Địa điểm"
                      className="main--searchJob--left__formSearch__input--right__text"
                    />
                  </div>
                </div>
                <div
                  className="main--searchJob--left__formSearch__button"
                  onClick={() => navigate("/search-all")}
                >
                  Tìm kiếm
                </div>
              </div>
              <p className="main--searchJob--left__text--down">
                Từ khóa: thực tập FE, thực tập BE, thực tập UI/UX...
              </p>
            </div>
            <div className="main--searchJob--right">
              <img src={imgSearch} alt="imgSearch" />
            </div>
          </div>
          <div className="main--showInformation">
            <div className="main--showInformation__liveJob">
              <div className="main--showInformation__liveJob--icon">
                <img src={briefcase} alt="" />
              </div>
              <div className="main--showInformation__liveJob--text">
                <p className="main--showInformation__liveJob--text__number">
                  <strong>{allLiveJob.length}</strong>
                </p>
                <p className="main--showInformation__liveJob--text__name">
                  Công việc đang tuyển
                </p>
              </div>
            </div>
            <div className="main--showInformation__companies">
              <div className="main--showInformation__companies--icon">
                <img src={buildings} alt="" />
              </div>
              <div className="main--showInformation__companies--text">
                <p className="main--showInformation__companies--text__number">
                  <strong>{allCompany.length}</strong>
                </p>
                <p className="main--showInformation__companies--text__name">
                  Công ty
                </p>
              </div>
            </div>
            <div className="main--showInformation__candicates">
              <div className="main--showInformation__candicates--icon">
                <img src={users} alt="" />
              </div>
              <div className="main--showInformation__candicates--text">
                <p className="main--showInformation__candicates--text__number">
                  <strong>{allCandidate.length}</strong>
                </p>
                <p className="main--showInformation__candicates--text__name">
                  Ứng viên
                </p>
              </div>
            </div>
            <div className="main--showInformation__newJobs">
              <div className="main--showInformation__newJobs--icon">
                <img src={briefcase} alt="" />
              </div>
              <div className="main--showInformation__newJobs--text">
                <p className="main--showInformation__newJobs--text__number">
                  <strong>{allNewJob.length}</strong>
                </p>
                <p className="main--showInformation__newJobs--text__name">
                  Công việc đã đăng
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="main__outStandingJob">
          <div className="main__outStandingJob--header">
            <span className="main__outStandingJob--header__title">
              Công việc nổi bật
            </span>
            <div
              className="main__outStandingJob--header__view"
              onClick={() => navigate("/candidate/job-list")}
            >
              <p>Xem thêm</p>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="main__outStandingJob--listJob">
            {token ? (
              <>
                {allLiveJob?.map((item) => (
                  <div
                    className="main__outStandingJob--listJob__item"
                    key={item.id}
                    onClick={() => navigate(`/candidate/jobdetail/${item.id}`)}
                  >
                    <div className="main__outStandingJob--listJob__item--top">
                      <span className="main__outStandingJob--listJob__item--top__name">
                        {item.title}
                      </span>
                      <div className="main__outStandingJob--listJob__item--top__salary">
                        <div className="main__outStandingJob--listJob__item--top__salary__text">
                          <p>{item?.types_jobs[0].typejob.name}</p>
                        </div>
                        <span className="main__outStandingJob--listJob__item--top__salary__price">
                          {item?.salary_jobs[0]?.salary.name}
                        </span>
                      </div>
                    </div>
                    <div className="main__outStandingJob--listJob__item--bottom">
                      <div className="main__outStandingJob--listJob__item--bottom--left">
                        <div className="main__outStandingJob--listJob__item--bottom__logo">
                          <img src={item?.company.logo} alt="" />
                        </div>
                        <div className="main__outStandingJob--listJob__item--bottom__nameLogo">
                          <p className="main__outStandingJob--listJob__item--bottom__nameLogo__text">
                            {item?.company.name}
                          </p>
                          <div className="main__outStandingJob--listJob__item--bottom__nameLogo__location">
                            <img src={MapPin} alt="" />
                            <p>{item?.address_company.address}</p>
                          </div>
                        </div>
                      </div>
                      <div className="main__outStandingJob--listJob__item--bottom__bookmark">
                        <img src={BookmarkSimple} alt="" />
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {allLiveJob?.map((item) => (
                  <div
                    className="main__outStandingJob--listJob__item"
                    key={item.id}
                    onClick={() => open()}
                  >
                    <div className="main__outStandingJob--listJob__item--top">
                      <span className="main__outStandingJob--listJob__item--top__name">
                        {item.title}
                      </span>
                      <div className="main__outStandingJob--listJob__item--top__salary">
                        <div className="main__outStandingJob--listJob__item--top__salary__text">
                          <p>{item?.types_jobs[0].typejob.name}</p>
                        </div>
                        <span className="main__outStandingJob--listJob__item--top__salary__price">
                          {item.salary}
                        </span>
                      </div>
                    </div>
                    <div className="main__outStandingJob--listJob__item--bottom">
                      <div className="main__outStandingJob--listJob__item--bottom--left">
                        <div className="main__outStandingJob--listJob__item--bottom__logo">
                          <img src={item?.company.logo} alt="" />
                        </div>
                        <div className="main__outStandingJob--listJob__item--bottom__nameLogo">
                          <p className="main__outStandingJob--listJob__item--bottom__nameLogo__text">
                            {item?.company.name}
                          </p>
                          <div className="main__outStandingJob--listJob__item--bottom__nameLogo__location">
                            <img src={MapPin} alt="" />
                            <p>{item?.address_company.address}</p>
                          </div>
                        </div>
                      </div>
                      <div className="main__outStandingJob--listJob__item--bottom__bookmark">
                        <img src={BookmarkSimple} alt="" />
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

        <div className="main__outStandingCandidate">
          <div className="main__outStandingCandidate--header">
            <span className="main__outStandingCandidate--header__title">
              Ứng viên nổi bật
            </span>
            <div className="main__outStandingCandidate--header__view">
              <p>Xem thêm</p>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="main__outStandingCandidate--listCandidate">
            {token ? (
              <>
                {allCandidate.map((item) => (
                  <div
                    className="main__outStandingCandidate--listCandidate__item"
                    onClick={() =>
                      navigate(`/candidate/candidate-outstanding/${item.id}`)
                    }
                    key={item.id}
                  >
                    <div className="main__outStandingCandidate--listCandidate__item__information">
                      <div className="main__outStandingCandidate--listCandidate__item__information--left">
                        <div className="main__outStandingCandidate--listCandidate__item__information--left__avatar">
                          <img src={item?.avatar} alt="" />
                        </div>
                        <div className="main__outStandingCandidate--listCandidate__item__information--left__name">
                          <div className="main__outStandingCandidate--listCandidate__item__information--left__name--top">
                            {item.name}
                          </div>
                          <div className="main__outStandingCandidate--listCandidate__item__information--left__name--bottom">
                            <div className="main__outStandingCandidate--listCandidate__item__information--left__name--bottom__left">
                              {item?.position}
                            </div>
                            <div className="main__outStandingCandidate--listCandidate__item__information--left__name--bottom__right">
                              Fresher
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="main__outStandingCandidate--listCandidate__item__information--right">
                        <img src={arrow} alt="" />
                      </div>
                    </div>
                    <div className="main__outStandingCandidate--listCandidate__item__technical">
                      <div className="main__outStandingCandidate--listCandidate__item__technical__title">
                        Technical in use:
                      </div>
                      <div className="main__outStandingCandidate--listCandidate__item__technical__list">
                        <div className="main__outStandingCandidate--listCandidate__item__technical__list__item">
                          ReactJS
                        </div>
                        <div className="main__outStandingCandidate--listCandidate__item__technical__list__item">
                          NodeJS
                        </div>
                      </div>
                    </div>
                    <div className="main__outStandingCandidate--listCandidate__item__language">
                      <div className="main__outStandingCandidate--listCandidate__item__language__title">
                        Foreign Language:
                      </div>
                      <div className="main__outStandingCandidate--listCandidate__item__language__list">
                        <div className="main__outStandingCandidate--listCandidate__item__language__list__item">
                          {item?.certificate_candidate[0].name}
                          {item?.certificate_candidate[0].info}
                        </div>
                      </div>
                    </div>
                    <div className="main__outStandingCandidate--listCandidate__item__local">
                      <img src={MapPin} alt="" />
                      <p>{item?.address}</p>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {allCandidate.map((item) => (
                  <div
                    className="main__outStandingCandidate--listCandidate__item"
                    onClick={() => open()}
                    key={item.id}
                  >
                    <div className="main__outStandingCandidate--listCandidate__item__information">
                      <div className="main__outStandingCandidate--listCandidate__item__information--left">
                        <div className="main__outStandingCandidate--listCandidate__item__information--left__avatar">
                          <img src={item?.avatar} alt="" />
                        </div>
                        <div className="main__outStandingCandidate--listCandidate__item__information--left__name">
                          <div className="main__outStandingCandidate--listCandidate__item__information--left__name--top">
                            {item.name}
                          </div>
                          <div className="main__outStandingCandidate--listCandidate__item__information--left__name--bottom">
                            <div className="main__outStandingCandidate--listCandidate__item__information--left__name--bottom__left">
                              {item?.position}
                            </div>
                            <div className="main__outStandingCandidate--listCandidate__item__information--left__name--bottom__right">
                              Fresher
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="main__outStandingCandidate--listCandidate__item__information--right">
                        <img src={arrow} alt="" />
                      </div>
                    </div>
                    <div className="main__outStandingCandidate--listCandidate__item__technical">
                      <div className="main__outStandingCandidate--listCandidate__item__technical__title">
                        Technical in use:
                      </div>
                      <div className="main__outStandingCandidate--listCandidate__item__technical__list">
                        <div className="main__outStandingCandidate--listCandidate__item__technical__list__item">
                          ReactJS
                        </div>
                        <div className="main__outStandingCandidate--listCandidate__item__technical__list__item">
                          NodeJS
                        </div>
                      </div>
                    </div>
                    <div className="main__outStandingCandidate--listCandidate__item__language">
                      <div className="main__outStandingCandidate--listCandidate__item__language__title">
                        Foreign Language:
                      </div>
                      <div className="main__outStandingCandidate--listCandidate__item__language__list">
                        <div className="main__outStandingCandidate--listCandidate__item__language__list__item">
                          {item?.certificate_candidate[0].name}
                          {item?.certificate_candidate[0].info}
                        </div>
                      </div>
                    </div>
                    <div className="main__outStandingCandidate--listCandidate__item__local">
                      <img src={MapPin} alt="" />
                      <p>{item?.address}</p>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

        <div className="main__outStandingCompany">
          <div className="main__outStandingCompany--header">
            <span className="main__outStandingCompany--header__title">
              Công ty nổi bật
            </span>
            <div className="main__outStandingCompany--header__view">
              <p>Xem thêm</p>
              <img src={arrow} alt="" />
            </div>
          </div>
          
          <div className="main__outStandingCompany--listCompany">
            {token ? (
              <>
                {allCompany.map((item) => (
                  <div
                    className="main__outStandingCompany--listCompany__item"
                    key={item.id}
                    onClick={() =>
                      navigate(`/candidate/infor-companybycandidate/${item.id}`)
                    }
                  >
                    <div className="main__outStandingCompany--listCompany__item__top">
                      <div className="main__outStandingCompany--listCompany__item__top--logo">
                        <img src={item?.logo} alt="" />
                      </div>
                      <div className="main__outStandingCompany--listCompany__item__top--name">
                        <div className="main__outStandingCompany--listCompany__item__top--name--top">
                          <span>{item.name}</span>
                          <div className="main__outStandingCompany--listCompany__item__top--name--top__featured">
                            {item?.typeCompany_id.name}
                          </div>
                        </div>
                        <div className="main__outStandingCompany--listCompany__item__top--name--bottom">
                          <img src={MapPin} alt="" />
                          <p className="main__outStandingCompany--listCompany__item__top--name--bottom__location">
                            {item?.address_company[0].address}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="main__outStandingCompany--listCompany__item__bottom">
                      Xem thông tin
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {allCompany.map((item) => (
                  <div
                    className="main__outStandingCompany--listCompany__item"
                    key={item.id}
                    onClick={() => open()}
                  >
                    <div className="main__outStandingCompany--listCompany__item__top">
                      <div className="main__outStandingCompany--listCompany__item__top--logo">
                        <img src={item?.logo} alt="" />
                      </div>
                      <div className="main__outStandingCompany--listCompany__item__top--name">
                        <div className="main__outStandingCompany--listCompany__item__top--name--top">
                          <span>{item.name}</span>
                          <div className="main__outStandingCompany--listCompany__item__top--name--top__featured">
                            {item?.typeCompany_id.name}
                          </div>
                        </div>
                        <div className="main__outStandingCompany--listCompany__item__top--name--bottom">
                          <img src={MapPin} alt="" />
                          <p className="main__outStandingCompany--listCompany__item__top--name--bottom__location">
                            {item?.address_company[0].address}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="main__outStandingCompany--listCompany__item__bottom">
                      Xem thông tin công ty
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

        <div className="main__comment">
          <div className="main__comment__title">
            <p>Clients Testimonial</p>
          </div>
          <div className="main__comment__allComment">
            <div className="main__comment__allComment__arrowLeft">
              <img src={arrowLeft} alt="" />
            </div>
            <div className="main__comment__allComment__midlle">
              <div className="main__comment__allComment__item">
                <img className="Rating" src={Rating} alt="" />
                <p className="main__comment__allComment__item__text">
                  “Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui.
                  Maecenas ac placerat metus, in faucibus est.”
                </p>
                <div className="main__comment__allComment__item__infor">
                  <div className="main__comment__allComment__item__infor__left">
                    <img className="avatar" src={avatar} alt="" />
                    <div className="main__comment__allComment__item__infor__left--name">
                      <p className="main__comment__allComment__item__infor__left--name--top">
                        Robert Fox
                      </p>
                      <p className="main__comment__allComment__item__infor__left--name--bottom">
                        UI/UX Designer
                      </p>
                    </div>
                  </div>
                  <img src={Quote} className="Quote" alt="" />
                </div>
              </div>
              <div className="main__comment__allComment__item">
                <img className="Rating" src={Rating} alt="" />
                <p className="main__comment__allComment__item__text">
                  “Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui.
                  Maecenas ac placerat metus, in faucibus est.”
                </p>
                <div className="main__comment__allComment__item__infor">
                  <div className="main__comment__allComment__item__infor__left">
                    <img className="avatar" src={avatar} alt="" />
                    <div className="main__comment__allComment__item__infor__left--name">
                      <p className="main__comment__allComment__item__infor__left--name--top">
                        Robert Fox
                      </p>
                      <p className="main__comment__allComment__item__infor__left--name--bottom">
                        UI/UX Designer
                      </p>
                    </div>
                  </div>
                  <img src={Quote} className="Quote" alt="" />
                </div>
              </div>
              <div className="main__comment__allComment__item">
                <img className="Rating" src={Rating} alt="" />
                <p className="main__comment__allComment__item__text">
                  “Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui.
                  Maecenas ac placerat metus, in faucibus est.”
                </p>
                <div className="main__comment__allComment__item__infor">
                  <div className="main__comment__allComment__item__infor__left">
                    <img className="avatar" src={avatar} alt="" />
                    <div className="main__comment__allComment__item__infor__left--name">
                      <p className="main__comment__allComment__item__infor__left--name--top">
                        Robert Fox
                      </p>
                      <p className="main__comment__allComment__item__infor__left--name--bottom">
                        UI/UX Designer
                      </p>
                    </div>
                  </div>
                  <img src={Quote} className="Quote" alt="" />
                </div>
              </div>
            </div>

            <div className="main__comment__allComment__arrowRight">
              <img src={arrow} alt="" />
            </div>
          </div>
          <div class="fui-roundedFull-pagination">
            <ul class="pagination-list">
              <li class="pagination-item btn-prev">
                <a href="#" class="pagination-link">
                  <svg
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.20711 0.792893C5.59763 1.18342 5.59763 1.81658 5.20711 2.20711L2.41421 5L5.20711 7.79289C5.59763 8.18342 5.59763 8.81658 5.20711 9.20711C4.81658 9.59763 4.18342 9.59763 3.79289 9.20711L0.292893 5.70711C-0.0976311 5.31658 -0.0976311 4.68342 0.292893 4.29289L3.79289 0.792893C4.18342 0.402369 4.81658 0.402369 5.20711 0.792893Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
              <li class="pagination-item">
                <a href="#" class="pagination-link">
                  1
                </a>
              </li>
              <li class="pagination-item">
                <a href="#" class="pagination-link selected">
                  2
                </a>
              </li>
              <li class="pagination-item">
                <a href="#" class="pagination-link">
                  3
                </a>
              </li>
              <li class="pagination-item">
                <a href="#" class="pagination-link">
                  4
                </a>
              </li>
              <li class="pagination-item">
                <a href="#" class="pagination-link">
                  5
                </a>
              </li>
              <li class="pagination-item btn-next">
                <a href="#" class="pagination-link">
                  <svg
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.792893 0.792893C0.402369 1.18342 0.402369 1.81658 0.792893 2.20711L3.58579 5L0.792893 7.79289C0.402369 8.18342 0.402369 8.81658 0.792893 9.20711C1.18342 9.59763 1.81658 9.59763 2.20711 9.20711L5.70711 5.70711C6.09763 5.31658 6.09763 4.68342 5.70711 4.29289L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792893 0.792893Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
