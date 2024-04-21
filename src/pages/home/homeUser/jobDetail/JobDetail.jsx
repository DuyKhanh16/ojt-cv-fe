import React, { useEffect } from "react";
import Header from "../../../../components/header/Header";
import FormSearch from "../../../../components/formSearch/FormSearch";
import Footer from "../../../../components/footer/Footer";
// import Bookmark from "../../../../assets/images/jobDetail/BookmarkSimple.png";
import bookmark from "../../../../assets/images/JobDetails/BookmarkSimple.png";
import arrow from "../../../../assets/images/JobDetails/fi_arrow-right.png";
import avatar from "../../../../assets/images/JobDetails/Rectangle 43.png";
import MapTrifold from "../../../../assets/images/JobDetails/MapTrifold.png";
import CalendarBlank from "../../../../assets/images/JobDetails/CalendarBlank.png";
import Socialbutton from "../../../../assets/images/JobDetails/Social button.png";
import Socialbutton1 from "../../../../assets/images/JobDetails/Social button (1).png";
import Socialbutton2 from "../../../../assets/images/JobDetails/Social button (2).png";
import Socialbutton3 from "../../../../assets/images/JobDetails/Social button (3).png";
import Socialbutton4 from "../../../../assets/images/JobDetails/Social button (4).png";
import Logo from "../../../../assets/images/JobDetails/Employers Logo.png";
import mapin from "../../../../assets/images/JobDetails/MapPin.png";
import arowRight from "../../../../assets/images/JobDetails/arrow.right.png";
import "./JobDetail.scss";
import { useNavigate, useParams } from "react-router";
import privateAxios from "../../../../config/private.axios";
import { NavLink } from "react-router-dom";
import ApplyJob from "../applyJob/ApplyJob";
import { notification } from "antd";

export default function JobDetail() {
  const { id } = useParams();

  const [isOpen, setIsOpen] = React.useState(false);
  const [infor, setInfor] = React.useState({});
  const [company, setCompany] = React.useState({});
  const [position, setPosition] = React.useState("");

  const navigate = useNavigate();
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
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(id);
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
                  <div style={{display:"flex", gap:"10px", paddingTop:"5px"}}>
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
                  <h3 style={{ marginBottom: "10px" }}>Mức lương (đồng)</h3>
                  <p style={{ color: "#0BA02C", fontSize: "18px" }}>
                    {infor?.salary}
                  </p>
                  <p style={{ color: "gray", fontSize: "14px" }}>Một tháng</p>
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
                      gap: "10px",
                      marginLeft: "70px",
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
              <div className="job__detail--description--Share1" style={{marginTop:"30px"}}>
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
        <div className="job__detail--Relatedjob1">
          <h1>Related job</h1>
          <div className="job__detail--Relatedjob--content1">
            <div className="job__detail--Relatedjob--content--item1">
              <div>
                <h3 style={{ marginBottom: "10px" }}>Techical Suport</h3>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div
                    style={{
                      color: "gray",
                      backgroundColor: "#E7F6EA",
                      width: "80px",
                      height: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "3px",
                    }}
                  >
                    Part-Time
                  </div>
                  <div>Salary : $10k - $15k</div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <div style={{ display: "flex", gap: "10px" }}>
                  <img src={Logo}></img>
                  <div>
                    <p>Google Lnc</p>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        marginTop: "10px",
                      }}
                    >
                      <img src={mapin}></img>
                      <p style={{ color: "gray" }}>Hồ CHÍ MINH</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={arowRight}></img>
                </div>
              </div>
            </div>
            <div className="job__detail--Relatedjob--content--item1">
              <div>
                <h3 style={{ marginBottom: "10px" }}>Techical Suport</h3>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div
                    style={{
                      color: "gray",
                      backgroundColor: "#E7F6EA",
                      width: "80px",
                      height: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "3px",
                    }}
                  >
                    Part-Time
                  </div>
                  <div>Salary : $10k - $15k</div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <div style={{ display: "flex", gap: "10px" }}>
                  <img src={Logo}></img>
                  <div>
                    <p>Google Lnc</p>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        marginTop: "10px",
                      }}
                    >
                      <img src={mapin}></img>
                      <p style={{ color: "gray" }}>Hồ CHÍ MINH</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={arowRight}></img>
                </div>
              </div>
            </div>
            <div className="job__detail--Relatedjob--content--item1">
              <div>
                <h3 style={{ marginBottom: "10px" }}>Techical Suport</h3>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div
                    style={{
                      color: "gray",
                      backgroundColor: "#E7F6EA",
                      width: "80px",
                      height: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "3px",
                    }}
                  >
                    Part-Time
                  </div>
                  <div>Salary : $10k - $15k</div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <div style={{ display: "flex", gap: "10px" }}>
                  <img src={Logo}></img>
                  <div>
                    <p>Google Lnc</p>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        marginTop: "10px",
                      }}
                    >
                      <img src={mapin}></img>
                      <p style={{ color: "gray" }}>Hồ CHÍ MINH</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={arowRight}></img>
                </div>
              </div>
            </div>
            <div className="job__detail--Relatedjob--content--item1">
              <div>
                <h3 style={{ marginBottom: "10px" }}>Techical Suport</h3>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div
                    style={{
                      color: "gray",
                      backgroundColor: "#E7F6EA",
                      width: "80px",
                      height: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "3px",
                    }}
                  >
                    Part-Time
                  </div>
                  <div>Salary : $10k - $15k</div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <div style={{ display: "flex", gap: "10px" }}>
                  <img src={Logo}></img>
                  <div>
                    <p>Google Lnc</p>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        marginTop: "10px",
                      }}
                    >
                      <img src={mapin}></img>
                      <p style={{ color: "gray" }}>Hồ CHÍ MINH</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={arowRight}></img>
                </div>
              </div>
            </div>
            <div className="job__detail--Relatedjob--content--item1">
              <div>
                <h3 style={{ marginBottom: "10px" }}>Techical Suport</h3>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div
                    style={{
                      color: "gray",
                      backgroundColor: "#E7F6EA",
                      width: "80px",
                      height: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "3px",
                    }}
                  >
                    Part-Time
                  </div>
                  <div>Salary : $10k - $15k</div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <div style={{ display: "flex", gap: "10px" }}>
                  <img src={Logo}></img>
                  <div>
                    <p>Google Lnc</p>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        marginTop: "10px",
                      }}
                    >
                      <img src={mapin}></img>
                      <p style={{ color: "gray" }}>Hồ CHÍ MINH</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={arowRight}></img>
                </div>
              </div>
            </div>
            <div className="job__detail--Relatedjob--content--item1">
              <div>
                <h3 style={{ marginBottom: "10px" }}>Techical Suport</h3>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div
                    style={{
                      color: "gray",
                      backgroundColor: "#E7F6EA",
                      width: "80px",
                      height: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "3px",
                    }}
                  >
                    Part-Time
                  </div>
                  <div>Salary : $10k - $15k</div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <div style={{ display: "flex", gap: "10px" }}>
                  <img src={Logo}></img>
                  <div>
                    <p>Google Lnc</p>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        marginTop: "10px",
                      }}
                    >
                      <img src={mapin}></img>
                      <p style={{ color: "gray" }}>Hồ CHÍ MINH</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={arowRight}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div style={{display:}}>
      </div> */}
    </div>
  );
}
