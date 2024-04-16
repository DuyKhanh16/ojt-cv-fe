import React from "react";
import "./MainBusiness.scss";
import HeaderCompany from "../../../../components/headerCompany/HeaderCompany";
import FormSearch from "../../../../components/formSearch/FormSearch";
import imgSearch from "../../../../assets/images/main/Software code testing-pana 1.png";
import searchIcon from "../../../../assets/images/main/fi_search.png";
import localIcon from "../../../../assets/images/main/fi_map-pin.png";
import briefcase from "../../../../assets/images/main/briefcase-duotone 1.png";
import buildings from "../../../../assets/images/main/buildings-duotone 1.png";
import users from "../../../../assets/images/main/users-duotone 1.png";
import arrow from "../../../../assets/images/main/fi_arrow-right.png";
import MapPin from "../../../../assets/images/main/MapPin.png";

export default function MainBusiness() {
  return (
    <>
      <div className="mainBusiness__container">
        <div className="mainBusiness__introduce">
          <div className="mainBusiness--searchJob">
            <div className="mainBusiness--searchJob--left">
              <h1>
                {" "}
                Tìm kiếm công việc phù hợp với năng lực của bạn cùng chúng tôi
              </h1>
              <p className="mainBusiness--searchJob--left__text--up">
                Aliquam vitae turpis in diam convallis finibus in at risus.
                Nullam <br />
                in scelerisque leo, eget sollicitudin velit bestibulum.
              </p>
              <div className="mainBusiness--searchJob--left__formSearch">
                <div className="mainBusiness--searchJob--left__formSearch__input">
                  <div className="mainBusiness--searchJob--left__formSearch__input--left">
                    <div className="mainBusiness--searchJob--left__formSearch__input--left__iconSearch">
                      <img src={searchIcon} alt="" />
                    </div>
                    <input
                      type="text"
                      className="mainBusiness--searchJob--left__formSearch__input--left__text"
                      name=""
                      id=""
                      placeholder="Job tittle, Keyword..."
                    />
                  </div>
                  <div className="mainBusiness--searchJob--left__formSearch__input--line"></div>
                  <div className="mainBusiness--searchJob--left__formSearch__input--right">
                    <div className="mainBusiness--searchJob--left__formSearch__input--right__iconLocation">
                      <img src={localIcon} alt="" />
                    </div>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Your Location"
                      className="mainBusiness--searchJob--left__formSearch__input--right__text"
                    />
                  </div>
                </div>
                <div className="mainBusiness--searchJob--left__formSearch__button">
                  Find Job
                </div>
              </div>
              <p className="mainBusiness--searchJob--left__text--down">
                Suggestion: Designer, Programing, Digital Marketing, Animation.
              </p>
            </div>
            <div className="mainBusiness--searchJob--right">
              <img src={imgSearch} alt="imgSearch" />
            </div>
          </div>
          <div className="mainBusiness--showInformation">
            <div className="mainBusiness--showInformation__liveJob">
              <div className="mainBusiness--showInformation__liveJob--icon">
                <img src={briefcase} alt="" />
              </div>
              <div className="mainBusiness--showInformation__liveJob--text">
                <p className="mainBusiness--showInformation__liveJob--text__number">
                  <strong>1,75,324</strong>
                </p>
                <p className="mainBusiness--showInformation__liveJob--text__name">
                  Live Jobs
                </p>
              </div>
            </div>
            <div className="mainBusiness--showInformation__companies">
              <div className="mainBusiness--showInformation__companies--icon">
                <img src={buildings} alt="" />
              </div>
              <div className="mainBusiness--showInformation__companies--text">
                <p className="mainBusiness--showInformation__companies--text__number">
                  <strong>97,354</strong>
                </p>
                <p className="mainBusiness--showInformation__companies--text__name">
                  Companies
                </p>
              </div>
            </div>
            <div className="mainBusiness--showInformation__candicates">
              <div className="mainBusiness--showInformation__candicates--icon">
                <img src={users} alt="" />
              </div>
              <div className="mainBusiness--showInformation__candicates--text">
                <p className="mainBusiness--showInformation__candicates--text__number">
                  <strong>38,47,154</strong>
                </p>
                <p className="mainBusiness--showInformation__candicates--text__name">
                  Candicates
                </p>
              </div>
            </div>
            <div className="mainBusiness--showInformation__newJobs">
              <div className="mainBusiness--showInformation__newJobs--icon">
                <img src={briefcase} alt="" />
              </div>
              <div className="mainBusiness--showInformation__newJobs--text">
                <p className="mainBusiness--showInformation__newJobs--text__number">
                  <strong>7,532</strong>
                </p>
                <p className="mainBusiness--showInformation__newJobs--text__name">
                  New Jobs
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mainBusiness__outStandingCandidate">
          <div className="mainBusiness__outStandingCandidate--header">
            <span className="mainBusiness__outStandingCandidate--header__title">
              Ứng viên nổi bật
            </span>
            <div className="mainBusiness__outStandingCandidate--header__view">
              <p>Xem thêm</p>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="mainBusiness__outStandingCandidate--listCandidate">
            <div className="mainBusiness__outStandingCandidate--listCandidate__item">
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__information">
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left">
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__avatar"></div>
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name">
                    <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--top">
                      Nguyen Van A
                    </div>
                    <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom">
                      <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom__left">
                        Front end
                      </div>
                      <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom__right">
                        Fresher
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--right">
                  <img src={arrow} alt="" />
                </div>
              </div>
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical">
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__title">
                  Technical in use:
                </div>
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list">
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list__item">
                    ReactJS
                  </div>
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list__item">
                    NodeJS
                  </div>
                </div>
              </div>
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__language">
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__title">
                  Foreign Language:
                </div>
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__list">
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__list__item">
                    N2
                  </div>
                </div>
              </div>
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__local">
                <img src={MapPin} alt="" />
                <p>Ha Noi, Viet Nam</p>
              </div>
            </div>
            <div className="mainBusiness__outStandingCandidate--listCandidate__item">
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__information">
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left">
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__avatar"></div>
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name">
                    <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--top">
                      Nguyen Van A
                    </div>
                    <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom">
                      <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom__left">
                        Front end
                      </div>
                      <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom__right">
                        Fresher
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--right">
                  <img src={arrow} alt="" />
                </div>
              </div>
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical">
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__title">
                  Technical in use:
                </div>
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list">
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list__item">
                    ReactJS
                  </div>
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list__item">
                    NodeJS
                  </div>
                </div>
              </div>
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__language">
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__title">
                  Foreign Language:
                </div>
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__list">
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__list__item">
                    N2
                  </div>
                </div>
              </div>
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__local">
                <img src={MapPin} alt="" />
                <p>Ha Noi, Viet Nam</p>
              </div>
            </div>
            <div className="mainBusiness__outStandingCandidate--listCandidate__item">
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__information">
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left">
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__avatar"></div>
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name">
                    <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--top">
                      Nguyen Van A
                    </div>
                    <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom">
                      <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom__left">
                        Front end
                      </div>
                      <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom__right">
                        Fresher
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--right">
                  <img src={arrow} alt="" />
                </div>
              </div>
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical">
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__title">
                  Technical in use:
                </div>
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list">
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list__item">
                    ReactJS
                  </div>
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list__item">
                    NodeJS
                  </div>
                </div>
              </div>
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__language">
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__title">
                  Foreign Language:
                </div>
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__list">
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__list__item">
                    N2
                  </div>
                </div>
              </div>
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__local">
                <img src={MapPin} alt="" />
                <p>Ha Noi, Viet Nam</p>
              </div>
            </div>
            <div className="mainBusiness__outStandingCandidate--listCandidate__item">
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__information">
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left">
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__avatar"></div>
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name">
                    <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--top">
                      Nguyen Van A
                    </div>
                    <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom">
                      <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom__left">
                        Front end
                      </div>
                      <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom__right">
                        Fresher
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--right">
                  <img src={arrow} alt="" />
                </div>
              </div>
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical">
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__title">
                  Technical in use:
                </div>
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list">
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list__item">
                    ReactJS
                  </div>
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list__item">
                    NodeJS
                  </div>
                </div>
              </div>
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__language">
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__title">
                  Foreign Language:
                </div>
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__list">
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__list__item">
                    N2
                  </div>
                </div>
              </div>
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__local">
                <img src={MapPin} alt="" />
                <p>Ha Noi, Viet Nam</p>
              </div>
            </div>
            <div className="mainBusiness__outStandingCandidate--listCandidate__item">
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__information">
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left">
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__avatar"></div>
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name">
                    <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--top">
                      Nguyen Van A
                    </div>
                    <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom">
                      <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom__left">
                        Front end
                      </div>
                      <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom__right">
                        Fresher
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--right">
                  <img src={arrow} alt="" />
                </div>
              </div>
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical">
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__title">
                  Technical in use:
                </div>
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list">
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list__item">
                    ReactJS
                  </div>
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list__item">
                    NodeJS
                  </div>
                </div>
              </div>
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__language">
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__title">
                  Foreign Language:
                </div>
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__list">
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__list__item">
                    N2
                  </div>
                </div>
              </div>
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__local">
                <img src={MapPin} alt="" />
                <p>Ha Noi, Viet Nam</p>
              </div>
            </div>
            <div className="mainBusiness__outStandingCandidate--listCandidate__item">
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__information">
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left">
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__avatar"></div>
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name">
                    <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--top">
                      Nguyen Van A
                    </div>
                    <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom">
                      <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom__left">
                        Front end
                      </div>
                      <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom__right">
                        Fresher
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--right">
                  <img src={arrow} alt="" />
                </div>
              </div>
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical">
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__title">
                  Technical in use:
                </div>
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list">
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list__item">
                    ReactJS
                  </div>
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list__item">
                    NodeJS
                  </div>
                </div>
              </div>
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__language">
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__title">
                  Foreign Language:
                </div>
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__list">
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__list__item">
                    N2
                  </div>
                </div>
              </div>
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__local">
                <img src={MapPin} alt="" />
                <p>Ha Noi, Viet Nam</p>
              </div>
            </div>
            <div className="mainBusiness__outStandingCandidate--listCandidate__item">
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__information">
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left">
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__avatar"></div>
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name">
                    <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--top">
                      Nguyen Van A
                    </div>
                    <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom">
                      <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom__left">
                        Front end
                      </div>
                      <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom__right">
                        Fresher
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--right">
                  <img src={arrow} alt="" />
                </div>
              </div>
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical">
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__title">
                  Technical in use:
                </div>
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list">
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list__item">
                    ReactJS
                  </div>
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list__item">
                    NodeJS
                  </div>
                </div>
              </div>
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__language">
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__title">
                  Foreign Language:
                </div>
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__list">
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__list__item">
                    N2
                  </div>
                </div>
              </div>
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__local">
                <img src={MapPin} alt="" />
                <p>Ha Noi, Viet Nam</p>
              </div>
            </div>
            <div className="mainBusiness__outStandingCandidate--listCandidate__item">
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__information">
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left">
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__avatar"></div>
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name">
                    <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--top">
                      Nguyen Van A
                    </div>
                    <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom">
                      <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom__left">
                        Front end
                      </div>
                      <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom__right">
                        Fresher
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--right">
                  <img src={arrow} alt="" />
                </div>
              </div>
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical">
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__title">
                  Technical in use:
                </div>
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list">
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list__item">
                    ReactJS
                  </div>
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list__item">
                    NodeJS
                  </div>
                </div>
              </div>
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__language">
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__title">
                  Foreign Language:
                </div>
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__list">
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__list__item">
                    N2
                  </div>
                </div>
              </div>
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__local">
                <img src={MapPin} alt="" />
                <p>Ha Noi, Viet Nam</p>
              </div>
            </div>
            <div className="mainBusiness__outStandingCandidate--listCandidate__item">
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__information">
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left">
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__avatar"></div>
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name">
                    <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--top">
                      Nguyen Van A
                    </div>
                    <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom">
                      <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom__left">
                        Front end
                      </div>
                      <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom__right">
                        Fresher
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--right">
                  <img src={arrow} alt="" />
                </div>
              </div>
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical">
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__title">
                  Technical in use:
                </div>
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list">
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list__item">
                    ReactJS
                  </div>
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list__item">
                    NodeJS
                  </div>
                </div>
              </div>
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__language">
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__title">
                  Foreign Language:
                </div>
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__list">
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__list__item">
                    N2
                  </div>
                </div>
              </div>
              <div className="mainBusiness__outStandingCandidate--listCandidate__item__local">
                <img src={MapPin} alt="" />
                <p>Ha Noi, Viet Nam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
