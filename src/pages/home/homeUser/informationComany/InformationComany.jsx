import React from "react";
import Header from "../../../../components/header/Header";
import Footer from "../../../../components/footer/Footer";
import FormSearch from "../../../../components/formSearch/FormSearch";
import map from "../../../../assets/images/map.jpeg";
import axios from "axios";
import "./infomationCompany.scss";

export default function InformationComany() {
  window.scrollTo(0, 0);

  const [ListCity, setListCity] = React.useState([]);
  const [ListJob, setListJob] = React.useState([
    {
      Id: 1,
      title: "Fresher Java Developer",
      type: "Full-time",
      salary: "2000$",
      location: "HCM, TP. HCM",
      logo: "https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_1280.png",
      companyName: "Google",
    },
    {
      Id: 2,
      title: "Fresher Java Developer",
      type: "Full-time",
      salary: "2000$",
      location: "HCM, TP. HCM",
      logo: "https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_1280.png",
      companyName: "Google",
    },
    {
      Id: 3,
      title: "Fresher Java Developer",
      type: "Full-time",
      salary: "2000$",
      location: "HCM, TP. HCM",
      logo: "https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_1280.png",
      companyName: "Google",
    },
    {
      Id: 4,
      title: "Fresher Java Developer",
      type: "Full-time",
      salary: "2000$",
      location: "HCM, TP. HCM",
      logo: "https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_1280.png",
      companyName: "Google",
    },
    {
      Id: 5,
      title: "Fresher Java Developer",
      type: "Full-time",
      salary: "2000$",
      location: "HCM, TP. HCM",
      logo: "https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_1280.png",
      companyName: "Google",
    },
  ]);

  const [ListCompany, setListCompany] = React.useState([
    {
      id: 1,
      nameCompany: "Google",
      local: "HCM, TP. HCM",
      logo: "https://i.pinimg.com/736x/ce/92/9f/ce929f8db35bc80957623d42e8d8cf3c.jpg",
    },
    {
      id: 2,
      nameCompany: "Google",
      local: "HCM, TP. HCM",
      logo: "https://i.pinimg.com/736x/ce/92/9f/ce929f8db35bc80957623d42e8d8cf3c.jpg",
    },
    {
      id: 3,
      nameCompany: "Google",
      local: "HCM, TP. HCM",
      logo: "https://i.pinimg.com/736x/ce/92/9f/ce929f8db35bc80957623d42e8d8cf3c.jpg",
    },
    {
      id: 4,
      nameCompany: "Google",
      local: "HCM, TP. HCM",
      logo: "https://i.pinimg.com/736x/ce/92/9f/ce929f8db35bc80957623d42e8d8cf3c.jpg",
    },
    {
      id: 5,
      nameCompany: "Google",
      local: "HCM, TP. HCM",
      logo: "https://i.pinimg.com/736x/ce/92/9f/ce929f8db35bc80957623d42e8d8cf3c.jpg",
    },
    {
      id: 6,
      nameCompany: "Google",
      local: "HCM, TP. HCM",
      logo: "https://i.pinimg.com/736x/ce/92/9f/ce929f8db35bc80957623d42e8d8cf3c.jpg",
    },
  ]);

  const [companyDetail, setCompanyDetail] = React.useState({
    nameCompany: "FPT Software",
    address:
      "Đường D1, Khu Công Nghệ Cao, Phường Tân Phú, Quận 9, Thành phố Hồ Chí Minh",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/FPT_Software_Logo.png",
    describe: [
      "Velstar is a Shopify Plus agency, and we partner with brands to help them grow, we also do the same with our people!",
      "Here at Velstar, we don't just make websites, we create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level. From Platform Migration, User Experience & User Interface Design, to Digital Marketing, we have a proven track record in delivering outstanding eCommerce solutions and driving sales for our clients.",
      "The role will involve translating project specifications into clean, test-driven, easily maintainable code. You will work with the Project and Development teams as well as with the Technical Director, adhering closely to project plans and delivering work that meets functional & non-functional requirements. You will have the opportunity to create new, innovative, secure and scalable features for our clients on the Shopify platform",
      "Want to work with us? You're in good company!",
    ],
    policy: [
      "Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on",
      "3+ years of experience in back-end development working either with multiple smaller projects simultaneously or large-scale applications",
      "Experience with HTML, JavaScript, CSS, PHP, Symphony and/or Laravel",
      "Working regularly with APIs and Web Services (REST, GrapthQL, SOAP, etc)",
      "Have experience/awareness in Agile application development, commercial off-the-shelf software, middleware, servers and storage, and database management.",
      "Familiarity with version control and project management systems (e.g., Github, Jira)",
      "Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on",
      "Ambitious and hungry to grow your career in a fast-growing agency",
    ],
    web: "https://fptsoftware.com/",
    typeCompany: "OutSource",
  });
  async function getListCity() {
    try {
      const result = await axios.get("https://vapi.vnappmob.com/api/province/");
      setListCity(result.data.results);
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    getListCity();
  }, []);
  return (
    <>
      <div>
        <div className="user-ListJob-title">
          <p>
            <span>Trang chủ / Thông tin doanh nghiệp /</span>{" "}
            {companyDetail.nameCompany}{" "}
          </p>
        </div>
        <div className="user-companyView">
          <div className="user-companyView-info">
            <div className="user-companyView-info-company">
              <div className="user-companyView-info-company-logo">
                <img width={96} src={companyDetail.logo} />
              </div>
              <div style={{ marginLeft: "24px" }}>
                <p className="user-companyView-info-company-name">
                  {companyDetail.nameCompany}
                </p>
                <p style={{ marginLeft: "24px" }}>
                  <span className="user-companyView-info-company-type">
                    {companyDetail.typeCompany}
                  </span>{" "}
                  <span className="user-companyView-info-company-verified">
                    verified
                  </span>
                </p>
                <p className="user-companyView-info-company-web">
                  <i style={{ color: "#BC2228" }} class="fa-solid fa-link"></i>{" "}
                  {companyDetail.web}
                </p>
              </div>
            </div>
            <div className="user-companyView-info-feature">
              <p className="user-companyView-info-feature-like">
                <i class="fa-regular fa-heart"></i>
              </p>
              <button>Theo dõi công ty</button>
            </div>
          </div>
        </div>
        <div
          className="user-companyView-describeMap"
          style={{ display: "flex", width: "1320px", margin: "0 auto" }}
        >
          <div className="user-companyView-describe">
            <p style={{ fontWeight: "500", fontSize: "18px", color: "black" }}>
              Mô tả về công ty
            </p>
            {companyDetail.describe.map((item, index) => {
              return (
                <p style={{ marginBottom: "16px" }} key={index}>
                  {item}
                </p>
              );
            })}
            <p style={{ fontWeight: "500", fontSize: "18px", color: "black" }}>
              Chính sách
            </p>
            {companyDetail.policy.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </div>
          <div className="user-companyView-orther">
            <div className="user-companyView-orther-local">
              <p className="user-companyView-orther-title">
                {" "}
                <i class="fa-regular fa-compass"></i> Địa chỉ công ty
              </p>
              <p className="user-companyView-orther-address">
                {companyDetail.address}
              </p>
            </div>
            <div className="user-companyView-orther-map">
              <p>
                <i class="fa-regular fa-map"></i> Xem trên Maps
              </p>
              <img src={map} alt="" />
            </div>
            <div
              className="user-companyView-orther-social-container"
              style={{
                padding: "32px",
                width: "100%",
                height: "140px",
                border: "2px solid #E7F0FA",
                borderRadius: "8px",
              }}
            >
              <p
                style={{
                  fontWeight: "500",
                  height: "28px",
                  fontSize: "18px",
                  color: "black",
                }}
              >
                chia sẻ thông tin công ty đến mọi người:
              </p>
              <div className="user-companyView-orther-social">
                <p style={{ width: "150px", height: "40px" }}>
                  <i class="fa-solid fa-link"></i> Coppy links
                </p>
                <p>
                  <i class="fa-brands fa-linkedin"></i>
                </p>
                <p>
                  <i class="fa-brands fa-square-facebook"></i>
                </p>
                <p>
                  <i class="fa-brands fa-twitter"></i>
                </p>
                <p>
                  <i class="fa-regular fa-envelope"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <p
          style={{
            fontWeight: "500",
            fontSize: "18px",
            color: "black",
            marginLeft: "60px",
            marginBottom: "16px",
          }}
        >
          Việc công ty đang mở
        </p>
        <div className="user-companyView-findJob">
          <div className="user-companyView-findJob-input">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search Job ..." />
          </div>
          <div
            style={{
              width: "1px",
              backgroundColor: "rgba(128, 128, 128, 0.314)",
            }}
          ></div>
          <div className="user-companyView-findJob-local">
            <i class="fa-solid fa-location-dot"></i>
            <select>
              <option>Vị trí</option>
              {ListCity.map((city) => (
                <option key={city.province_id} value={city.province_id}>
                  {city.province_name}
                </option>
              ))}
            </select>
          </div>
          <div className="user-companyView-findJob-filter">
            <i class="fa-solid fa-arrow-up-short-wide"></i>
            <p>Filters</p>
          </div>
          <button className="user-companyView-findJob-btn">Find Job</button>
        </div>
      </div>
      <div
        className="user-ListJob-container"
        style={{ width: "760px", marginleft: "60px" }}
      >
        {ListJob.map((job) => {
          return (
            <div key={job.Id} className="user-ListJob-job">
              <p className="user-ListJob-job-title">{job.title}</p>
              <div className="user-ListJob-job-typeSalary">
                <p className="typeJob">{job.type}</p>
                <p>Salay:{job.salary}</p>
              </div>
              <div className="user-ListJob-job-info">
                <div className="user-ListJob-job-infoCompany">
                  <div className="user-ListJob-job-info-logo">
                    <img width={48} src={job.logo} alt="logo" />
                  </div>
                  <div className="user-ListJob-job-info-company">
                    <p>{job.companyName}</p>
                    <p className="user-ListJob-job-info-location">
                      <i class="fa-solid fa-location-dot"></i> {job.location}
                    </p>
                  </div>
                </div>
                <i
                  style={{ marginTop: "20px" }}
                  class="fa-solid fa-bookmark"
                ></i>
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "rgba(128, 128, 128, 0.314)",
          marginBottom: "100px",
        }}
      ></div>
      <p
        style={{
          fontWeight: "400",
          fontSize: "40px",
          color: "#18191C",
          marginLeft: "60px",
          marginBottom: "50px",
        }}
      >
        Công ty cùng lĩnh vực
      </p>
      <div className="user-ListCompany" style={{ marginBottom: "100px" }}>
        {ListCompany.map((item, index) => {
          return (
            <div key={index} className="user-ListCompany-company">
              <div className="user-ListCompany-company-info">
                <img width={56} src={item.logo} alt="" />
                <div className="user-ListCompany-company-info-name">
                  <p className="user-ListCompany-company-info-nameCompany">
                    {item.nameCompany} <span className="feature">Featured</span>
                  </p>
                  <p>
                    <span>
                      <i class="fa-solid fa-location-dot"></i>
                    </span>{" "}
                    {item.local}
                  </p>
                </div>
              </div>
              <div className="user-ListCompany-company-open">
                <p>Open Position(3)</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
