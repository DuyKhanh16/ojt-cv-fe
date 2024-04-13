import React from "react";
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
export default function Main() {
  return (
    <>
      <Header></Header>
      <FormSearch></FormSearch>
      <div className="main__container">
        <div className="main__introduce">
          <div className="main--searchJob">
            <div className="main--searchJob--left">
              <h1>
                {" "}
                Tìm kiếm công việc phù hợp với năng lực của bạn cùng chúng tôi
              </h1>
              <p className="main--searchJob--left__text--up">
                Aliquam vitae turpis in diam convallis finibus in at risus.
                Nullam <br />
                in scelerisque leo, eget sollicitudin velit bestibulum.
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
                      placeholder="Job tittle, Keyword..."
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
                      placeholder="Your Location"
                      className="main--searchJob--left__formSearch__input--right__text"
                    />
                  </div>
                </div>
                <div className="main--searchJob--left__formSearch__button">
                  Find Job
                </div>
              </div>
              <p className="main--searchJob--left__text--down">
                Suggestion: Designer, Programing, Digital Marketing, Animation.
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
                  <strong>1,75,324</strong>
                </p>
                <p className="main--showInformation__liveJob--text__name">
                  Live Jobs
                </p>
              </div>
            </div>
            <div className="main--showInformation__companies">
              <div className="main--showInformation__companies--icon">
                <img src={buildings} alt="" />
              </div>
              <div className="main--showInformation__companies--text">
                <p className="main--showInformation__companies--text__number">
                  <strong>97,354</strong>
                </p>
                <p className="main--showInformation__companies--text__name">
                  Companies
                </p>
              </div>
            </div>
            <div className="main--showInformation__candicates">
              <div className="main--showInformation__candicates--icon">
                <img src={users} alt="" />
              </div>
              <div className="main--showInformation__candicates--text">
                <p className="main--showInformation__candicates--text__number">
                  <strong>38,47,154</strong>
                </p>
                <p className="main--showInformation__candicates--text__name">
                  Candicates
                </p>
              </div>
            </div>
            <div className="main--showInformation__newJobs">
              <div className="main--showInformation__newJobs--icon">
                <img src={briefcase} alt="" />
              </div>
              <div className="main--showInformation__newJobs--text">
                <p className="main--showInformation__newJobs--text__number">
                  <strong>7,532</strong>
                </p>
                <p className="main--showInformation__newJobs--text__name">
                  New Jobs
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
            <div className="main__outStandingJob--header__view">
              <p>Xem thêm</p>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="main__outStandingJob--listJob">
            <div className="main__outStandingJob--listJob__item">
              <div className="main__outStandingJob--listJob__item--top">
                <span className="main__outStandingJob--listJob__item--top__name">
                  Techical Support Specialist
                </span>
                <div className="main__outStandingJob--listJob__item--top__salary">
                  <div className="main__outStandingJob--listJob__item--top__salary__text">
                    <p>Part-time</p>
                  </div>
                  <span className="main__outStandingJob--listJob__item--top__salary__price">
                    Salary: $20,000 - $25,000
                  </span>
                </div>
              </div>
              <div className="main__outStandingJob--listJob__item--bottom">
                <div className="main__outStandingJob--listJob__item--bottom--left">
                  <div className="main__outStandingJob--listJob__item--bottom__logo">
                    <img src={LogoG} alt="" />
                  </div>
                  <div className="main__outStandingJob--listJob__item--bottom__nameLogo">
                    <p className="main__outStandingJob--listJob__item--bottom__nameLogo__text">
                      Google Inc.
                    </p>
                    <div className="main__outStandingJob--listJob__item--bottom__nameLogo__location">
                      <img src={MapPin} alt="" />
                      <p>Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
                <div className="main__outStandingJob--listJob__item--bottom__bookmark">
                  <img src={BookmarkSimple} alt="" />
                </div>
              </div>
            </div>
            <div className="main__outStandingJob--listJob__item">
              <div className="main__outStandingJob--listJob__item--top">
                <span className="main__outStandingJob--listJob__item--top__name">
                  Techical Support Specialist
                </span>
                <div className="main__outStandingJob--listJob__item--top__salary">
                  <div className="main__outStandingJob--listJob__item--top__salary__text">
                    <p>Part-time</p>
                  </div>
                  <span className="main__outStandingJob--listJob__item--top__salary__price">
                    Salary: $20,000 - $25,000
                  </span>
                </div>
              </div>
              <div className="main__outStandingJob--listJob__item--bottom">
                <div className="main__outStandingJob--listJob__item--bottom--left">
                  <div className="main__outStandingJob--listJob__item--bottom__logo">
                    <img src={LogoG} alt="" />
                  </div>
                  <div className="main__outStandingJob--listJob__item--bottom__nameLogo">
                    <p className="main__outStandingJob--listJob__item--bottom__nameLogo__text">
                      Google Inc.
                    </p>
                    <div className="main__outStandingJob--listJob__item--bottom__nameLogo__location">
                      <img src={MapPin} alt="" />
                      <p>Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
                <div className="main__outStandingJob--listJob__item--bottom__bookmark">
                  <img src={BookmarkSimple} alt="" />
                </div>
              </div>
            </div>
            <div className="main__outStandingJob--listJob__item">
              <div className="main__outStandingJob--listJob__item--top">
                <span className="main__outStandingJob--listJob__item--top__name">
                  Techical Support Specialist
                </span>
                <div className="main__outStandingJob--listJob__item--top__salary">
                  <div className="main__outStandingJob--listJob__item--top__salary__text">
                    <p>Part-time</p>
                  </div>
                  <span className="main__outStandingJob--listJob__item--top__salary__price">
                    Salary: $20,000 - $25,000
                  </span>
                </div>
              </div>
              <div className="main__outStandingJob--listJob__item--bottom">
                <div className="main__outStandingJob--listJob__item--bottom--left">
                  <div className="main__outStandingJob--listJob__item--bottom__logo">
                    <img src={LogoG} alt="" />
                  </div>
                  <div className="main__outStandingJob--listJob__item--bottom__nameLogo">
                    <p className="main__outStandingJob--listJob__item--bottom__nameLogo__text">
                      Google Inc.
                    </p>
                    <div className="main__outStandingJob--listJob__item--bottom__nameLogo__location">
                      <img src={MapPin} alt="" />
                      <p>Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
                <div className="main__outStandingJob--listJob__item--bottom__bookmark">
                  <img src={BookmarkSimple} alt="" />
                </div>
              </div>
            </div>
            <div className="main__outStandingJob--listJob__item">
              <div className="main__outStandingJob--listJob__item--top">
                <span className="main__outStandingJob--listJob__item--top__name">
                  Techical Support Specialist
                </span>
                <div className="main__outStandingJob--listJob__item--top__salary">
                  <div className="main__outStandingJob--listJob__item--top__salary__text">
                    <p>Part-time</p>
                  </div>
                  <span className="main__outStandingJob--listJob__item--top__salary__price">
                    Salary: $20,000 - $25,000
                  </span>
                </div>
              </div>
              <div className="main__outStandingJob--listJob__item--bottom">
                <div className="main__outStandingJob--listJob__item--bottom--left">
                  <div className="main__outStandingJob--listJob__item--bottom__logo">
                    <img src={LogoG} alt="" />
                  </div>
                  <div className="main__outStandingJob--listJob__item--bottom__nameLogo">
                    <p className="main__outStandingJob--listJob__item--bottom__nameLogo__text">
                      Google Inc.
                    </p>
                    <div className="main__outStandingJob--listJob__item--bottom__nameLogo__location">
                      <img src={MapPin} alt="" />
                      <p>Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
                <div className="main__outStandingJob--listJob__item--bottom__bookmark">
                  <img src={BookmarkSimple} alt="" />
                </div>
              </div>
            </div>
            <div className="main__outStandingJob--listJob__item">
              <div className="main__outStandingJob--listJob__item--top">
                <span className="main__outStandingJob--listJob__item--top__name">
                  Techical Support Specialist
                </span>
                <div className="main__outStandingJob--listJob__item--top__salary">
                  <div className="main__outStandingJob--listJob__item--top__salary__text">
                    <p>Part-time</p>
                  </div>
                  <span className="main__outStandingJob--listJob__item--top__salary__price">
                    Salary: $20,000 - $25,000
                  </span>
                </div>
              </div>
              <div className="main__outStandingJob--listJob__item--bottom">
                <div className="main__outStandingJob--listJob__item--bottom--left">
                  <div className="main__outStandingJob--listJob__item--bottom__logo">
                    <img src={LogoG} alt="" />
                  </div>
                  <div className="main__outStandingJob--listJob__item--bottom__nameLogo">
                    <p className="main__outStandingJob--listJob__item--bottom__nameLogo__text">
                      Google Inc.
                    </p>
                    <div className="main__outStandingJob--listJob__item--bottom__nameLogo__location">
                      <img src={MapPin} alt="" />
                      <p>Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
                <div className="main__outStandingJob--listJob__item--bottom__bookmark">
                  <img src={BookmarkSimple} alt="" />
                </div>
              </div>
            </div>
            <div className="main__outStandingJob--listJob__item">
              <div className="main__outStandingJob--listJob__item--top">
                <span className="main__outStandingJob--listJob__item--top__name">
                  Techical Support Specialist
                </span>
                <div className="main__outStandingJob--listJob__item--top__salary">
                  <div className="main__outStandingJob--listJob__item--top__salary__text">
                    <p>Part-time</p>
                  </div>
                  <span className="main__outStandingJob--listJob__item--top__salary__price">
                    Salary: $20,000 - $25,000
                  </span>
                </div>
              </div>
              <div className="main__outStandingJob--listJob__item--bottom">
                <div className="main__outStandingJob--listJob__item--bottom--left">
                  <div className="main__outStandingJob--listJob__item--bottom__logo">
                    <img src={LogoG} alt="" />
                  </div>
                  <div className="main__outStandingJob--listJob__item--bottom__nameLogo">
                    <p className="main__outStandingJob--listJob__item--bottom__nameLogo__text">
                      Google Inc.
                    </p>
                    <div className="main__outStandingJob--listJob__item--bottom__nameLogo__location">
                      <img src={MapPin} alt="" />
                      <p>Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
                <div className="main__outStandingJob--listJob__item--bottom__bookmark">
                  <img src={BookmarkSimple} alt="" />
                </div>
              </div>
            </div>
            <div className="main__outStandingJob--listJob__item">
              <div className="main__outStandingJob--listJob__item--top">
                <span className="main__outStandingJob--listJob__item--top__name">
                  Techical Support Specialist
                </span>
                <div className="main__outStandingJob--listJob__item--top__salary">
                  <div className="main__outStandingJob--listJob__item--top__salary__text">
                    <p>Part-time</p>
                  </div>
                  <span className="main__outStandingJob--listJob__item--top__salary__price">
                    Salary: $20,000 - $25,000
                  </span>
                </div>
              </div>
              <div className="main__outStandingJob--listJob__item--bottom">
                <div className="main__outStandingJob--listJob__item--bottom--left">
                  <div className="main__outStandingJob--listJob__item--bottom__logo">
                    <img src={LogoG} alt="" />
                  </div>
                  <div className="main__outStandingJob--listJob__item--bottom__nameLogo">
                    <p className="main__outStandingJob--listJob__item--bottom__nameLogo__text">
                      Google Inc.
                    </p>
                    <div className="main__outStandingJob--listJob__item--bottom__nameLogo__location">
                      <img src={MapPin} alt="" />
                      <p>Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
                <div className="main__outStandingJob--listJob__item--bottom__bookmark">
                  <img src={BookmarkSimple} alt="" />
                </div>
              </div>
            </div>
            <div className="main__outStandingJob--listJob__item">
              <div className="main__outStandingJob--listJob__item--top">
                <span className="main__outStandingJob--listJob__item--top__name">
                  Techical Support Specialist
                </span>
                <div className="main__outStandingJob--listJob__item--top__salary">
                  <div className="main__outStandingJob--listJob__item--top__salary__text">
                    <p>Part-time</p>
                  </div>
                  <span className="main__outStandingJob--listJob__item--top__salary__price">
                    Salary: $20,000 - $25,000
                  </span>
                </div>
              </div>
              <div className="main__outStandingJob--listJob__item--bottom">
                <div className="main__outStandingJob--listJob__item--bottom--left">
                  <div className="main__outStandingJob--listJob__item--bottom__logo">
                    <img src={LogoG} alt="" />
                  </div>
                  <div className="main__outStandingJob--listJob__item--bottom__nameLogo">
                    <p className="main__outStandingJob--listJob__item--bottom__nameLogo__text">
                      Google Inc.
                    </p>
                    <div className="main__outStandingJob--listJob__item--bottom__nameLogo__location">
                      <img src={MapPin} alt="" />
                      <p>Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
                <div className="main__outStandingJob--listJob__item--bottom__bookmark">
                  <img src={BookmarkSimple} alt="" />
                </div>
              </div>
            </div>
            <div className="main__outStandingJob--listJob__item">
              <div className="main__outStandingJob--listJob__item--top">
                <span className="main__outStandingJob--listJob__item--top__name">
                  Techical Support Specialist
                </span>
                <div className="main__outStandingJob--listJob__item--top__salary">
                  <div className="main__outStandingJob--listJob__item--top__salary__text">
                    <p>Part-time</p>
                  </div>
                  <span className="main__outStandingJob--listJob__item--top__salary__price">
                    Salary: $20,000 - $25,000
                  </span>
                </div>
              </div>
              <div className="main__outStandingJob--listJob__item--bottom">
                <div className="main__outStandingJob--listJob__item--bottom--left">
                  <div className="main__outStandingJob--listJob__item--bottom__logo">
                    <img src={LogoG} alt="" />
                  </div>
                  <div className="main__outStandingJob--listJob__item--bottom__nameLogo">
                    <p className="main__outStandingJob--listJob__item--bottom__nameLogo__text">
                      Google Inc.
                    </p>
                    <div className="main__outStandingJob--listJob__item--bottom__nameLogo__location">
                      <img src={MapPin} alt="" />
                      <p>Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
                <div className="main__outStandingJob--listJob__item--bottom__bookmark">
                  <img src={BookmarkSimple} alt="" />
                </div>
              </div>
            </div>
            <div className="main__outStandingJob--listJob__item">
              <div className="main__outStandingJob--listJob__item--top">
                <span className="main__outStandingJob--listJob__item--top__name">
                  Techical Support Specialist
                </span>
                <div className="main__outStandingJob--listJob__item--top__salary">
                  <div className="main__outStandingJob--listJob__item--top__salary__text">
                    <p>Part-time</p>
                  </div>
                  <span className="main__outStandingJob--listJob__item--top__salary__price">
                    Salary: $20,000 - $25,000
                  </span>
                </div>
              </div>
              <div className="main__outStandingJob--listJob__item--bottom">
                <div className="main__outStandingJob--listJob__item--bottom--left">
                  <div className="main__outStandingJob--listJob__item--bottom__logo">
                    <img src={LogoG} alt="" />
                  </div>
                  <div className="main__outStandingJob--listJob__item--bottom__nameLogo">
                    <p className="main__outStandingJob--listJob__item--bottom__nameLogo__text">
                      Google Inc.
                    </p>
                    <div className="main__outStandingJob--listJob__item--bottom__nameLogo__location">
                      <img src={MapPin} alt="" />
                      <p>Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
                <div className="main__outStandingJob--listJob__item--bottom__bookmark">
                  <img src={BookmarkSimple} alt="" />
                </div>
              </div>
            </div>
            <div className="main__outStandingJob--listJob__item">
              <div className="main__outStandingJob--listJob__item--top">
                <span className="main__outStandingJob--listJob__item--top__name">
                  Techical Support Specialist
                </span>
                <div className="main__outStandingJob--listJob__item--top__salary">
                  <div className="main__outStandingJob--listJob__item--top__salary__text">
                    <p>Part-time</p>
                  </div>
                  <span className="main__outStandingJob--listJob__item--top__salary__price">
                    Salary: $20,000 - $25,000
                  </span>
                </div>
              </div>
              <div className="main__outStandingJob--listJob__item--bottom">
                <div className="main__outStandingJob--listJob__item--bottom--left">
                  <div className="main__outStandingJob--listJob__item--bottom__logo">
                    <img src={LogoG} alt="" />
                  </div>
                  <div className="main__outStandingJob--listJob__item--bottom__nameLogo">
                    <p className="main__outStandingJob--listJob__item--bottom__nameLogo__text">
                      Google Inc.
                    </p>
                    <div className="main__outStandingJob--listJob__item--bottom__nameLogo__location">
                      <img src={MapPin} alt="" />
                      <p>Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
                <div className="main__outStandingJob--listJob__item--bottom__bookmark">
                  <img src={BookmarkSimple} alt="" />
                </div>
              </div>
            </div>
            <div className="main__outStandingJob--listJob__item">
              <div className="main__outStandingJob--listJob__item--top">
                <span className="main__outStandingJob--listJob__item--top__name">
                  Techical Support Specialist
                </span>
                <div className="main__outStandingJob--listJob__item--top__salary">
                  <div className="main__outStandingJob--listJob__item--top__salary__text">
                    <p>Part-time</p>
                  </div>
                  <span className="main__outStandingJob--listJob__item--top__salary__price">
                    Salary: $20,000 - $25,000
                  </span>
                </div>
              </div>
              <div className="main__outStandingJob--listJob__item--bottom">
                <div className="main__outStandingJob--listJob__item--bottom--left">
                  <div className="main__outStandingJob--listJob__item--bottom__logo">
                    <img src={LogoG} alt="" />
                  </div>
                  <div className="main__outStandingJob--listJob__item--bottom__nameLogo">
                    <p className="main__outStandingJob--listJob__item--bottom__nameLogo__text">
                      Google Inc.
                    </p>
                    <div className="main__outStandingJob--listJob__item--bottom__nameLogo__location">
                      <img src={MapPin} alt="" />
                      <p>Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
                <div className="main__outStandingJob--listJob__item--bottom__bookmark">
                  <img src={BookmarkSimple} alt="" />
                </div>
              </div>
            </div>
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
            <div className="main__outStandingCandidate--listCandidate__item">
              <div className="main__outStandingCandidate--listCandidate__item__information">
                <div className="main__outStandingCandidate--listCandidate__item__information--left">
                  <div className="main__outStandingCandidate--listCandidate__item__information--left__avatar"></div>
                  <div className="main__outStandingCandidate--listCandidate__item__information--left__name">
                    <div className="main__outStandingCandidate--listCandidate__item__information--left__name--top">
                      Nguyen Van A
                    </div>
                    <div className="main__outStandingCandidate--listCandidate__item__information--left__name--bottom">
                      <div className="main__outStandingCandidate--listCandidate__item__information--left__name--bottom__left">
                        Front end
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
                    N2
                  </div>
                </div>
              </div>
              <div className="main__outStandingCandidate--listCandidate__item__local">
                <img src={MapPin} alt="" />
                <p>Ha Noi, Viet Nam</p>
              </div>
            </div>
            <div className="main__outStandingCandidate--listCandidate__item">
              <div className="main__outStandingCandidate--listCandidate__item__information">
                <div className="main__outStandingCandidate--listCandidate__item__information--left">
                  <div className="main__outStandingCandidate--listCandidate__item__information--left__avatar"></div>
                  <div className="main__outStandingCandidate--listCandidate__item__information--left__name">
                    <div className="main__outStandingCandidate--listCandidate__item__information--left__name--top">
                      Nguyen Van A
                    </div>
                    <div className="main__outStandingCandidate--listCandidate__item__information--left__name--bottom">
                      <div className="main__outStandingCandidate--listCandidate__item__information--left__name--bottom__left">
                        Front end
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
                    N2
                  </div>
                </div>
              </div>
              <div className="main__outStandingCandidate--listCandidate__item__local">
                <img src={MapPin} alt="" />
                <p>Ha Noi, Viet Nam</p>
              </div>
            </div>
            <div className="main__outStandingCandidate--listCandidate__item">
              <div className="main__outStandingCandidate--listCandidate__item__information">
                <div className="main__outStandingCandidate--listCandidate__item__information--left">
                  <div className="main__outStandingCandidate--listCandidate__item__information--left__avatar"></div>
                  <div className="main__outStandingCandidate--listCandidate__item__information--left__name">
                    <div className="main__outStandingCandidate--listCandidate__item__information--left__name--top">
                      Nguyen Van A
                    </div>
                    <div className="main__outStandingCandidate--listCandidate__item__information--left__name--bottom">
                      <div className="main__outStandingCandidate--listCandidate__item__information--left__name--bottom__left">
                        Front end
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
                    N2
                  </div>
                </div>
              </div>
              <div className="main__outStandingCandidate--listCandidate__item__local">
                <img src={MapPin} alt="" />
                <p>Ha Noi, Viet Nam</p>
              </div>
            </div>
            <div className="main__outStandingCandidate--listCandidate__item">
              <div className="main__outStandingCandidate--listCandidate__item__information">
                <div className="main__outStandingCandidate--listCandidate__item__information--left">
                  <div className="main__outStandingCandidate--listCandidate__item__information--left__avatar"></div>
                  <div className="main__outStandingCandidate--listCandidate__item__information--left__name">
                    <div className="main__outStandingCandidate--listCandidate__item__information--left__name--top">
                      Nguyen Van A
                    </div>
                    <div className="main__outStandingCandidate--listCandidate__item__information--left__name--bottom">
                      <div className="main__outStandingCandidate--listCandidate__item__information--left__name--bottom__left">
                        Front end
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
                    N2
                  </div>
                </div>
              </div>
              <div className="main__outStandingCandidate--listCandidate__item__local">
                <img src={MapPin} alt="" />
                <p>Ha Noi, Viet Nam</p>
              </div>
            </div>
            <div className="main__outStandingCandidate--listCandidate__item">
              <div className="main__outStandingCandidate--listCandidate__item__information">
                <div className="main__outStandingCandidate--listCandidate__item__information--left">
                  <div className="main__outStandingCandidate--listCandidate__item__information--left__avatar"></div>
                  <div className="main__outStandingCandidate--listCandidate__item__information--left__name">
                    <div className="main__outStandingCandidate--listCandidate__item__information--left__name--top">
                      Nguyen Van A
                    </div>
                    <div className="main__outStandingCandidate--listCandidate__item__information--left__name--bottom">
                      <div className="main__outStandingCandidate--listCandidate__item__information--left__name--bottom__left">
                        Front end
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
                    N2
                  </div>
                </div>
              </div>
              <div className="main__outStandingCandidate--listCandidate__item__local">
                <img src={MapPin} alt="" />
                <p>Ha Noi, Viet Nam</p>
              </div>
            </div>
            <div className="main__outStandingCandidate--listCandidate__item">
              <div className="main__outStandingCandidate--listCandidate__item__information">
                <div className="main__outStandingCandidate--listCandidate__item__information--left">
                  <div className="main__outStandingCandidate--listCandidate__item__information--left__avatar"></div>
                  <div className="main__outStandingCandidate--listCandidate__item__information--left__name">
                    <div className="main__outStandingCandidate--listCandidate__item__information--left__name--top">
                      Nguyen Van A
                    </div>
                    <div className="main__outStandingCandidate--listCandidate__item__information--left__name--bottom">
                      <div className="main__outStandingCandidate--listCandidate__item__information--left__name--bottom__left">
                        Front end
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
                    N2
                  </div>
                </div>
              </div>
              <div className="main__outStandingCandidate--listCandidate__item__local">
                <img src={MapPin} alt="" />
                <p>Ha Noi, Viet Nam</p>
              </div>
            </div>
            <div className="main__outStandingCandidate--listCandidate__item">
              <div className="main__outStandingCandidate--listCandidate__item__information">
                <div className="main__outStandingCandidate--listCandidate__item__information--left">
                  <div className="main__outStandingCandidate--listCandidate__item__information--left__avatar"></div>
                  <div className="main__outStandingCandidate--listCandidate__item__information--left__name">
                    <div className="main__outStandingCandidate--listCandidate__item__information--left__name--top">
                      Nguyen Van A
                    </div>
                    <div className="main__outStandingCandidate--listCandidate__item__information--left__name--bottom">
                      <div className="main__outStandingCandidate--listCandidate__item__information--left__name--bottom__left">
                        Front end
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
                    N2
                  </div>
                </div>
              </div>
              <div className="main__outStandingCandidate--listCandidate__item__local">
                <img src={MapPin} alt="" />
                <p>Ha Noi, Viet Nam</p>
              </div>
            </div>
            <div className="main__outStandingCandidate--listCandidate__item">
              <div className="main__outStandingCandidate--listCandidate__item__information">
                <div className="main__outStandingCandidate--listCandidate__item__information--left">
                  <div className="main__outStandingCandidate--listCandidate__item__information--left__avatar"></div>
                  <div className="main__outStandingCandidate--listCandidate__item__information--left__name">
                    <div className="main__outStandingCandidate--listCandidate__item__information--left__name--top">
                      Nguyen Van A
                    </div>
                    <div className="main__outStandingCandidate--listCandidate__item__information--left__name--bottom">
                      <div className="main__outStandingCandidate--listCandidate__item__information--left__name--bottom__left">
                        Front end
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
                    N2
                  </div>
                </div>
              </div>
              <div className="main__outStandingCandidate--listCandidate__item__local">
                <img src={MapPin} alt="" />
                <p>Ha Noi, Viet Nam</p>
              </div>
            </div>
            <div className="main__outStandingCandidate--listCandidate__item">
              <div className="main__outStandingCandidate--listCandidate__item__information">
                <div className="main__outStandingCandidate--listCandidate__item__information--left">
                  <div className="main__outStandingCandidate--listCandidate__item__information--left__avatar"></div>
                  <div className="main__outStandingCandidate--listCandidate__item__information--left__name">
                    <div className="main__outStandingCandidate--listCandidate__item__information--left__name--top">
                      Nguyen Van A
                    </div>
                    <div className="main__outStandingCandidate--listCandidate__item__information--left__name--bottom">
                      <div className="main__outStandingCandidate--listCandidate__item__information--left__name--bottom__left">
                        Front end
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
                    N2
                  </div>
                </div>
              </div>
              <div className="main__outStandingCandidate--listCandidate__item__local">
                <img src={MapPin} alt="" />
                <p>Ha Noi, Viet Nam</p>
              </div>
            </div>
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
            <div className="main__outStandingCompany--listCompany__item">
              <div className="main__outStandingCompany--listCompany__item__top">
                <div className="main__outStandingCompany--listCompany__item__top--logo">
                  <img src={global} alt="" />
                </div>
                <div className="main__outStandingCompany--listCompany__item__top--name">
                  <div className="main__outStandingCompany--listCompany__item__top--name--top">
                    <span>Dribbble</span>
                    <div className="main__outStandingCompany--listCompany__item__top--name--top__featured">
                      Featured
                    </div>
                  </div>
                  <div className="main__outStandingCompany--listCompany__item__top--name--bottom">
                    <img src={MapPin} alt="" />
                    <p className="main__outStandingCompany--listCompany__item__top--name--bottom__location">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
              <div className="main__outStandingCompany--listCompany__item__bottom">
                Open Position (3)
              </div>
            </div>
            <div className="main__outStandingCompany--listCompany__item">
              <div className="main__outStandingCompany--listCompany__item__top">
                <div className="main__outStandingCompany--listCompany__item__top--logo">
                  <img src={global} alt="" />
                </div>
                <div className="main__outStandingCompany--listCompany__item__top--name">
                  <div className="main__outStandingCompany--listCompany__item__top--name--top">
                    <span>Dribbble</span>
                    <div className="main__outStandingCompany--listCompany__item__top--name--top__featured">
                      Featured
                    </div>
                  </div>
                  <div className="main__outStandingCompany--listCompany__item__top--name--bottom">
                    <img src={MapPin} alt="" />
                    <p className="main__outStandingCompany--listCompany__item__top--name--bottom__location">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
              <div className="main__outStandingCompany--listCompany__item__bottom">
                Open Position (3)
              </div>
            </div>
            <div className="main__outStandingCompany--listCompany__item">
              <div className="main__outStandingCompany--listCompany__item__top">
                <div className="main__outStandingCompany--listCompany__item__top--logo">
                  <img src={global} alt="" />
                </div>
                <div className="main__outStandingCompany--listCompany__item__top--name">
                  <div className="main__outStandingCompany--listCompany__item__top--name--top">
                    <span>Dribbble</span>
                    <div className="main__outStandingCompany--listCompany__item__top--name--top__featured">
                      Featured
                    </div>
                  </div>
                  <div className="main__outStandingCompany--listCompany__item__top--name--bottom">
                    <img src={MapPin} alt="" />
                    <p className="main__outStandingCompany--listCompany__item__top--name--bottom__location">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
              <div className="main__outStandingCompany--listCompany__item__bottom">
                Open Position (3)
              </div>
            </div>
            <div className="main__outStandingCompany--listCompany__item">
              <div className="main__outStandingCompany--listCompany__item__top">
                <div className="main__outStandingCompany--listCompany__item__top--logo">
                  <img src={global} alt="" />
                </div>
                <div className="main__outStandingCompany--listCompany__item__top--name">
                  <div className="main__outStandingCompany--listCompany__item__top--name--top">
                    <span>Dribbble</span>
                    <div className="main__outStandingCompany--listCompany__item__top--name--top__featured">
                      Featured
                    </div>
                  </div>
                  <div className="main__outStandingCompany--listCompany__item__top--name--bottom">
                    <img src={MapPin} alt="" />
                    <p className="main__outStandingCompany--listCompany__item__top--name--bottom__location">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
              <div className="main__outStandingCompany--listCompany__item__bottom">
                Open Position (3)
              </div>
            </div>
            <div className="main__outStandingCompany--listCompany__item">
              <div className="main__outStandingCompany--listCompany__item__top">
                <div className="main__outStandingCompany--listCompany__item__top--logo">
                  <img src={global} alt="" />
                </div>
                <div className="main__outStandingCompany--listCompany__item__top--name">
                  <div className="main__outStandingCompany--listCompany__item__top--name--top">
                    <span>Dribbble</span>
                    <div className="main__outStandingCompany--listCompany__item__top--name--top__featured">
                      Featured
                    </div>
                  </div>
                  <div className="main__outStandingCompany--listCompany__item__top--name--bottom">
                    <img src={MapPin} alt="" />
                    <p className="main__outStandingCompany--listCompany__item__top--name--bottom__location">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
              <div className="main__outStandingCompany--listCompany__item__bottom">
                Open Position (3)
              </div>
            </div>
            <div className="main__outStandingCompany--listCompany__item">
              <div className="main__outStandingCompany--listCompany__item__top">
                <div className="main__outStandingCompany--listCompany__item__top--logo">
                  <img src={global} alt="" />
                </div>
                <div className="main__outStandingCompany--listCompany__item__top--name">
                  <div className="main__outStandingCompany--listCompany__item__top--name--top">
                    <span>Dribbble</span>
                    <div className="main__outStandingCompany--listCompany__item__top--name--top__featured">
                      Featured
                    </div>
                  </div>
                  <div className="main__outStandingCompany--listCompany__item__top--name--bottom">
                    <img src={MapPin} alt="" />
                    <p className="main__outStandingCompany--listCompany__item__top--name--bottom__location">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
              <div className="main__outStandingCompany--listCompany__item__bottom">
                Open Position (3)
              </div>
            </div>
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
      <Footer></Footer>
    </>
  );
}
