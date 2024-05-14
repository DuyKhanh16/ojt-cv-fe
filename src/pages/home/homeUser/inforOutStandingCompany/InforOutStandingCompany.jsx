import React, { useEffect, useState } from "react";
import map from "../../../../assets/images/map.jpeg";
import "./InforOutStandingCompany.scss";
import privateAxios from "../../../../config/private.axios";
import { useNavigate, useParams } from "react-router";
import { notification } from "antd";
import publicAxios from "../../../../config/pulic.axios";

export default function InforOutStandingCompany() {
  const { id } = useParams();
  const [infoCompany, setInfoCompany] = useState({});
  const navigate1 = useNavigate();
  const role = JSON.parse(localStorage.getItem("role"));
  const [listflow,setListFlow]=React.useState([])
  const [checkFlow,setCheckFlow]=React.useState()
  const [flag, setflag] = useState(false);
  window.scrollTo(0, 0);
  // lấy thông tin company
  const getinfoCompany = async () => {
    const resutl = await privateAxios
      .get(`/api/v2/companies/getInfoCompanyById/${id}`)
      .then((resutl) => {
        setInfoCompany(resutl.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getIdcandidate= async ()=>{
  try {
    const res= await privateAxios.get("api/v2/account/id-auth")
    getflowerCompany(res.data.data)
    
  } catch (error) {
    console.log(error);
  }
  }
 const getflowerCompany= async(candidateId)=>{
    const res= await privateAxios.get(`api/v2/companies/flow-company?company_id=${id}`)
    setListFlow(res.data.data)
    setCheckFlow(res.data.data.findIndex((item)=>item.candidate.id===candidateId))
  }

     
  const flowCompany = async () =>{
    setCheckFlow(0)
    try {
      await privateAxios.post(`/api/v2/companies/flow/${id}`)
      notification.success({
        message: "Đã theo dõi công ty",
      });
      setflag(!flag)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getinfoCompany();
    if(role !== 1){
      navigate1("/company")
    }
    getIdcandidate()  
  }, [flag]);
 
  return (
    <>
      <div>
        <div className="user-ListJob-title">
          <p>
            <span>Trang chủ / Thông tin doanh nghiệp</span>{" "}
          </p>
        </div>
        <div
          className="user-companyView"
          style={{ marginBottom: "24px", width: "100vw", padding: "0 7vw" }}
        >
          <div className="user-companyView-info">
            <div className="user-companyView-info-company">
              <div className="user-companyView-info-company-logo">
                <img
                  style={{ borderRadius: "50%" }}
                  width={96}
                  height={96}
                  src={infoCompany?.logo}
                />
              </div>
              <div style={{ marginLeft: "24px" }}>
                <p className="user-companyView-info-company-name">
                  {/* name */}
                  {infoCompany?.name}
                </p>
                <p style={{ fontSize: "14px", color: "#5E6670" }}>
                  <span>
                    <i
                      style={{ color: "black", marginRight: "8px" }}
                      class="fa-solid fa-user"
                    ></i>{" "}
                    {/* số lượng nhân viên */}
                    {infoCompany?.size} Người
                  </span>{" "}
                  <span style={{ marginLeft: "32px" }}>
                    {" "}
                    <i
                      style={{ color: "red", marginRight: "8px" }}
                      class="fa-solid fa-heart"
                    ></i>{" "}
                    {listflow?.length} người theo dõi
                  </span>
                </p>
                <p style={{ marginLeft: "0px" }}>
                  <span
                    className="user-companyView-info-company-type"
                    style={{ textAlign: "center" }}
                  >
                    {/*   {companyDetail.typeCompany} */}
                    Outsource
                  </span>{" "}
                </p>
                <div
                  className="user-companyView-info-company-web"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginLeft: "0px",
                  }}
                >
                  {/* {companyDetail.web}  */}
                  <span class="material-symbols-outlined">language</span>
                  <a style={{ borderBottom: "1px solid black" }}>
                    {infoCompany?.website}
                  </a>
                </div>
              </div>
            </div>
            <div className="user-companyView-info-feature">
          {checkFlow != -1?<button>Đã Theo Dõi +</button>:  <button onClick={flowCompany}>Theo dõi</button>}
            </div>
          </div>
        </div>
        <div
          className="user-companyView-describeMap"
          style={{
            display: "flex",
            width: "1320px",
            margin: "0 auto",
            marginBottom: "100px",
          }}
        >
          <div className="user-companyView-describe">
            <p style={{ fontWeight: "500", fontSize: "18px", color: "black" }}>
              Mô tả về công ty{" "}
              <div
                className="bg-white p-5"
                // dangerouslySetInnerHTML={{ __html: text }}
              />
            </p>
            {infoCompany?.description}
            <p style={{ fontWeight: "500", fontSize: "18px", color: "black" }}>
              Chính sách
            </p>
            {infoCompany?.policy}
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#E7F0FA",
                marginTop: "10px",
              }}
            ></div>
          </div>
          <div className="user-companyView-orther">
            <div
              style={{ height: "auto" }}
              className="user-companyView-orther-local"
            >
              <div style={{ display: "flex" }}>
                <p
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                  className="user-companyView-orther-title"
                >
                  {" "}
                  <i class="fa-regular fa-compass"></i> Địa chỉ công ty
                </p>
              </div>
              {infoCompany?.address_company?.map((item) => {
                return (
                  <div
                    style={{ display: "flex", alignItems: "center" }}
                    className="container"
                    key={item.id}
                  >
                    <p
                      style={{ padding: "5px 0" }}
                      className="user-companyView-orther-address"
                    >
                      {item.address}
                    </p>
                  </div>
                );
              })}
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
                Chia sẻ thông tin công ty đến mọi người:
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
      </div>
    </>
  );
}
