import React, { useEffect, useState } from "react";
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
import publicAxios from "../../../../config/pulic.axios";
import { useNavigate } from "react-router";

export default function MainBusiness() {
  window.scrollTo(0, 0);

  const [allCompany, setAllCompany] = useState([]);
  const [allLiveJob, setLiveJob] = useState([]);
  const [allNewJob, setNewJob] = useState([]);
  const [allCandidate, setAllCandidate] = useState([]);
  const navigate = useNavigate();
  const getAllCompany = async () => {
    try {
      const res = await publicAxios.get("/api/v2/companies/getAll");
      console.log(res.data.data);
      setAllCompany(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllLiveJob = async () => {
    try {
      const res = await publicAxios.get("/api/v2/jobs/getLiveJobs");
      console.log(res.data.data);
      setLiveJob(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
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
      const res = await publicAxios.get("/api/v2/candidates/getAll");
      console.log(res.data.data);
      setAllCandidate(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(allCandidate);
  useEffect(() => {
    getAllCompany();
    getAllLiveJob();
    getAllNewJob();
    getAllCandidate();
  }, []);
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
                Khám phá danh sách top 30 IT hàng đầu Việt Nam.
                <br />
                Hàng ngàn công việc đang chờ bạn ứng tuyển.
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
                      placeholder="Ứng viên, công ty, việc làm..."
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
                <div className="mainBusiness--searchJob--left__formSearch__button"  onClick={() => navigate("/search-all")}>
                  Tìm kiếm
                </div>
              </div>
              <p className="mainBusiness--searchJob--left__text--down">
                Từ khóa: thực tập FE, thực tập BE, thực tập UI/UX...
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
                  <strong>{allLiveJob.length}</strong>
                </p>
                <p className="mainBusiness--showInformation__liveJob--text__name">
                  Công việc đang tuyển
                </p>
              </div>
            </div>
            <div className="mainBusiness--showInformation__companies">
              <div className="mainBusiness--showInformation__companies--icon">
                <img src={buildings} alt="" />
              </div>
              <div className="mainBusiness--showInformation__companies--text">
                <p className="mainBusiness--showInformation__companies--text__number">
                  <strong>{allCompany.length}</strong>
                </p>
                <p className="mainBusiness--showInformation__companies--text__name">
                  Công ty
                </p>
              </div>
            </div>
            <div className="mainBusiness--showInformation__candicates">
              <div className="mainBusiness--showInformation__candicates--icon">
                <img src={users} alt="" />
              </div>
              <div className="mainBusiness--showInformation__candicates--text">
                <p className="mainBusiness--showInformation__candicates--text__number">
                  <strong>{allCandidate.length}</strong>
                </p>
                <p className="mainBusiness--showInformation__candicates--text__name">
                  Ứng viên
                </p>
              </div>
            </div>
            <div className="mainBusiness--showInformation__newJobs">
              <div className="mainBusiness--showInformation__newJobs--icon">
                <img src={briefcase} alt="" />
              </div>
              <div className="mainBusiness--showInformation__newJobs--text">
                <p className="mainBusiness--showInformation__newJobs--text__number">
                  <strong>{allNewJob.length}</strong>
                </p>
                <p className="mainBusiness--showInformation__newJobs--text__name">
                  Công việc đã đăng
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
              {allCandidate.map((item) => (
              <div
                className="mainBusiness__outStandingCandidate--listCandidate__item"
                onClick={()=> navigate(`candidate-outstanding-bybussiness/${item.id}`)}
                key={item.id}
              >
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__information">
                  <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left">
                    <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__avatar">
                      <img src={item?.avatar} alt="" />
                    </div>
                    <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name">
                      <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--top">
                        {item.name}
                      </div>
                      <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom">
                        <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom__left">
                          {item?.position}
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
                      {item?.certificate_candidate[0].name}
                      {item?.certificate_candidate[0].info}
                    </div>
                  </div>
                </div>
                <div className="mainBusiness__outStandingCandidate--listCandidate__item__local">
                  <img src={MapPin} alt="" />
                  <p>{item?.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
