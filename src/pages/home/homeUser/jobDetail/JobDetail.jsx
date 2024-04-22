import React, { useEffect, useState } from "react";
import arrow from "../../../../assets/images/JobDetails/fi_arrow-right.png";
import MapTrifold from "../../../../assets/images/JobDetails/MapTrifold.png";
import CalendarBlank from "../../../../assets/images/JobDetails/CalendarBlank.png";
import Socialbutton from "../../../../assets/images/JobDetails/Social button.png";
import Socialbutton1 from "../../../../assets/images/JobDetails/Social button (1).png";
import Socialbutton2 from "../../../../assets/images/JobDetails/Social button (2).png";
import Socialbutton3 from "../../../../assets/images/JobDetails/Social button (3).png";
import BookmarkSimple from "../../../../assets/images/main/BookmarkSimple.png";
import MapPin from "../../../../assets/images/main/MapPin.png";
import Socialbutton4 from "../../../../assets/images/JobDetails/Social button (4).png";
import "./JobDetail.scss";
import { useNavigate, useParams } from "react-router";
import privateAxios from "../../../../config/private.axios";
import ApplyJob from "../applyJob/ApplyJob";
import { notification } from "antd";
import publicAxios from "../../../../config/pulic.axios";

export default function JobDetail() {
  const { id } = useParams();

  const [isOpen, setIsOpen] = React.useState(false);
  const [infor, setInfor] = React.useState({});
  const [company, setCompany] = React.useState({});
  const [position, setPosition] = React.useState("");
  const [allLiveJob, setLiveJob] = useState([]);
  const [salary, setSalary] = useState([]);
  const navigate = useNavigate();

  window.scrollTo(0, 0);
  // lay het thong tin cua jobdetail
  const inforJobDetail = async () => {
    await privateAxios
      .get(`/api/v2/jobs/detail/${id}`)
      .then((res) => {
        console.log(res.data.data);
        setInfor(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    const result = privateAxios.get(`/api/v2/jobs/detail/${id}`);
    result
      .then((res) => {
        console.log(res.data.data);
        setInfor(res.data.data);
        setSalary(res.data.data.salary_jobs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getAllLiveJob = async () => {
    try {
      const res = await publicAxios.get("/api/v2/jobs/getLiveJobs");
      console.log("23", res.data.data);
      setLiveJob(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const close = (message, status) => {
    setIsOpen(false);
    setTimeout(() => {
      if (status) {
        notification.success({
          message: message,
        });
      } else {
        notification.error({
          message: message,
        });
      }
    }, 500);
  };
  useEffect(() => {
    getAllLiveJob();
  }, []);
  console.log(infor)
  console.log(salary)
  return (
    <div>
      <div
        className="job__detail--apply"
        style={{ visibility: isOpen ? "visible" : "hidden" }}
      >
        <button
          className="job__detail--apply__button"
          onClick={() => setIsOpen(false)}
        >
          <span class="material-symbols-outlined">arrow_back</span>
          Quay lại
        </button>
        <ApplyJob
          company={infor?.company}
          position={infor?.title}
          id={id}
          close={close}
        ></ApplyJob>
      </div>

      <div className="job__detail--container1">
        <div className="job__detail--title1" style={{ color: "#767F8C" }}>
          <p>Trang chủ / </p> <p>Việc làm / </p>
          <p style={{ color: "#18191C" }}>{infor?.title}</p>{" "}
        </div>
        <div className="job__detail--content1">
          <div className="job__detail--company1">
            <div className="job__detail--company--Logo1">
              <div
                className="job__detail--company--Logo11"
                style={{ width: "100px", height: "100px" }}
              >
                <img
                  style={{ width: "100%", height: "100%", borderRadius: "5px" }}
                  src={infor?.company?.logo}
                ></img>
              </div>
              <div className="job__detail--company--Logo--name1">
                <h2>{infor?.company?.name}</h2>
                <div className="job__detail--company--Logo--name--address1">
                  <div className="adress">
                    tại {infor?.address_company?.address}
                  </div>
                  <div
                    style={{ display: "flex", gap: "10px", paddingTop: "5px" }}
                  >
                    <div
                      className="hinhthuc1"
                      style={{
                        fontSize: "18px",
                        backgroundColor: "#0BA02C",
                        width: "98px",
                        textAlign: "center",
                        color: "white",
                        borderRadius: "3px",
                        height: "28px",
                      }}
                    >
                      {infor?.title ? infor.levers_jobs[0].leveljob.name : ""}
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#E05151",
                        backgroundColor: "#FFEDED",
                        width: "83px",
                        height: "28px",
                        // textAlign:"center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "40px",
                        padding: "3px 10x 3px 10px",
                      }}
                    >
                      {infor.title ? infor.types_jobs[0].typejob.name : ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="job__detail--company--apply1">
              <button className="job__detail--company--apply--bookmark1">
                <span
                  class="material-symbols-outlined"
                  style={{ color: "rgba(188, 34, 40, 1)", fontWeight: "800" }}
                >
                  bookmark
                </span>
              </button>
              <button
                className="job__detail--company--apply--apply11"
                onClick={() => setIsOpen(true)}
              >
                <p>Ứng tuyển </p>
                <img src={arrow}></img>
              </button>
            </div>
          </div>
          <div className="job__detail--description1">
            <div className="job__detail--description--title1">
              <h2>Mô tả công việc</h2>
              <p>{infor?.description}</p>
              <h2>Yêu cầu</h2>
              <p>{infor?.requirements}</p>
            </div>
            <div>
              <div className="job__detail--description--details1">
                <div style={{ textAlign: "center" }}>
                  <h3 style={{ marginBottom: "10px" }}>Mức lương</h3>
                  <p style={{ color: "#0BA02C", fontSize: "18px" }}>
                    {salary[0]?.salary?.name}
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "#E7F0FA",
                    height: "96px",
                    width: "2px",
                  }}
                ></div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      // marginLeft: "70px",
                    }}
                  >
                    <img
                      style={{ marginLeft: "0px", marginBottom: "10px" }}
                      src={MapTrifold}
                    ></img>
                    <h3>Địa chỉ làm việc</h3>
                  </div>

                  <p style={{ color: "gray", fontSize: "14px" }}>
                    {infor?.address_company?.address}
                  </p>
                </div>
              </div>
              <div className="job__detail--description--overview1">
                <div className="line1">
                  <h3 style={{ marginBottom: "10px" }}>Thời gian</h3>
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <div
                      style={{
                        width: "146px",
                        height: "70px",
                        marginBottom: "35px",
                      }}
                    >
                      <img
                        style={{ marginRight: "10px", marginBottom: "10px" }}
                        src={CalendarBlank}
                      ></img>
                      <p style={{ color: "gray", fontSize: "18px" }}>
                        Khởi tạo
                      </p>
                      <div class="date">{infor?.created_at}</div>
                    </div>
                    <div style={{ width: "146px", height: "70px" }}>
                      <img
                        style={{ marginRight: "10px", marginBottom: "10px" }}
                        src={CalendarBlank}
                      ></img>
                      <p style={{ color: "gray", fontSize: "18px" }}>
                        Kết thúc
                      </p>
                      <div class="date">{infor?.expire_at}</div>
                    </div>
                  </div>
                </div>
                <div className="line2"></div>
              </div>
              <div
                className="job__detail--description--Share1"
                style={{ marginTop: "30px" }}
              >
                <div className="line1">
                  <h3 style={{ marginBottom: "10px" }}>Chia sẻ công việc :</h3>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <img src={Socialbutton}></img>
                    <img src={Socialbutton1}></img>
                    <img src={Socialbutton2}></img>
                    <img src={Socialbutton3}></img>
                    <img src={Socialbutton4}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="job__detail__outStandingJob">
          <div className="job__detail__outStandingJob--header">
            <span className="job__detail__outStandingJob--header__title">
              Công việc liên quan
            </span>
          </div>
          <div className="job__detail__outStandingJob--listJob">
            {allLiveJob?.map((item) => (
              <div
                className="job__detail__outStandingJob--listJob__item"
                key={item.id}
                onClick={() => navigate(`/candidate/jobdetail/${item.id}`)}
              >
                <div className="job__detail__outStandingJob--listJob__item--top">
                  <span className="job__detail__outStandingJob--listJob__item--top__name">
                    {item.title}
                  </span>
                  <div className="job__detail__outStandingJob--listJob__item--top__salary">
                    <div className="job__detail__outStandingJob--listJob__item--top__salary__text">
                      <p>{item?.types_jobs[0].typejob.name}</p>
                    </div>
                    <span className="job__detail__outStandingJob--listJob__item--top__salary__price">
                      {item.salary}
                    </span>
                  </div>
                </div>
                <div className="job__detail__outStandingJob--listJob__item--bottom">
                  <div className="job__detail__outStandingJob--listJob__item--bottom--left">
                    <div className="job__detail__outStandingJob--listJob__item--bottom__logo">
                      <img src={item?.company.logo} alt="" />
                    </div>
                    <div className="job__detail__outStandingJob--listJob__item--bottom__nameLogo">
                      <p className="job__detail__outStandingJob--listJob__item--bottom__nameLogo__text">
                        {item?.company.name}
                      </p>
                      <div className="job__detail__outStandingJob--listJob__item--bottom__nameLogo__location">
                        <img src={MapPin} alt="" />
                        <p>{item?.address_company.address}</p>
                      </div>
                    </div>
                  </div>
                  <div className="job__detail__outStandingJob--listJob__item--bottom__bookmark">
                    <img src={BookmarkSimple} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div style={{display:}}>
      </div> */}
    </div>
  );
}
