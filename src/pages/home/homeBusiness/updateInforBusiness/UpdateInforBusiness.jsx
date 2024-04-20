import React, { useEffect, useState } from "react";
import Header from "../../../../components/header/Header";
import FormSearch from "../../../../components/formSearch/FormSearch";
import Footer from "../../../../components/footer/Footer";
import map from "../../../../assets/images/map.jpeg";
import "./updateInfoBusinis.scss";
import { Button, Modal, notification } from "antd";
import Mappin from "../../../../assets/images/main/MapPin.png";
import BookmarkSimple from "../../../../assets/images/main/BookmarkSimple.png";
import arowright from "../../../../assets/images/main/fi_arrow-right.png";
import axios from "axios";
import privateAxios from "../../../../config/private.axios";
import publicAxios from "../../../../config/pulic.axios";
// import CkEditorComponent from "../../../../config/CkEditorComponent";
import logo from "../../../../assets/images/main/Software code testing-pana 1.png";
import { useNavigate } from "react-router";

export default function UpdateInforBusiness() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [flag, SetFlag] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [preview, setPreview] = useState(undefined);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [errors, setErrors] = useState({});
  const [listjobs, setListJobs] = useState([]);

  // api tỉnh

  // tỉnh
  const [dataCity, setDataCity] = useState([]);
  const [dataDistrict, setDataDistrict] = useState([]);
  const [dataWard, setDataWard] = useState([]);
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [address, setAddress] = useState("");
  // console.log(address)

  const [infoCompany, setInfoCompany] = useState({});
  const [listBrand, setListBrand] = useState([]);
  const [listTypeCompany, setListTypeCompany] = useState([]);
  const [typecompany, Settycompany] = useState("");
  const [updateCompany, setUpdateCompany] = useState({
    name: "",
    phone: "",
    email: "",
    size: "",
    photo: "",
    link_facebook: "",
    website: "",
    description: "",
    typeCompany_id: "",
    policy: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    name: "",
    phone: "",
    email: "",
    size: "",
    photo: "",
    link_facebook: "",
    website: "",
    description: "",
    typeCompany_id: "",
    policy: "",
  });
 
  const navigate = useNavigate();
  // lấy thông tin company
  const getinfoCompany = () => {
    const res2 = privateAxios.get("api/v2/companies/getInfor");
    res2.then((res) => {
      console.log(res);
      setInfoCompany(res.data.data);
      setListBrand(res.data.data.address_company);
      Settycompany(companyData.typeCompany_id.name);

      const companyData = res.data.data;
      // console.log(companyData.address_company,"dữ liệu");
      setUpdateCompany({
        // Giữ lại các giá trị hiện tại của updateCompany
        name: companyData.name,
        size: companyData.size,
        link_facebook: companyData.link_facebook,
        website: companyData.website,
        description: companyData?.description,
        email: companyData.account_company_id.email,
        phone: companyData.phone,
        photo: companyData.logo,
        typeCompany_id: companyData.typeCompany_id.id,
        policy: companyData.policy,
      });

      // console.log(listBrand,"2")
    });
  };

  // lấy các jobs của công ty
  const getJobsForCompany = () => {
    const res = privateAxios.get("api/v2/jobs/getJobsForCompany");
    res.then((res) => {
      setListJobs(res.data.data);
    });
  }
  //  lấy các type company
  const getTypeCompany = () => {
    const res = publicAxios.get("api/v2/typecompany/all");
    res.then((res) => {
      setListTypeCompany(res.data.data);
    });
  };

  useEffect(() => {
    getinfoCompany();
    getTypeCompany();
    getJobsForCompany();
  }, [flag]);

  console.log(listjobs, "123123");

  // api thành phố
  const handleGetDataCity = async () => {
    let data = await axios.get(`https://vapi.vnappmob.com/api/province/`);
    // console.log(data.data.results);
    setDataCity(data.data.results);
  };
  useEffect(() => {
    handleGetDataCity();
  }, []);
  const handleCity = async (e) => {
    let idCity = e.target.value;

    const nameCity = dataCity.find((item) => item.province_name === idCity);

    const numberCity = nameCity.province_id;
    let data = await axios.get(
      `https://vapi.vnappmob.com/api/province/district/${numberCity}`
    );
    setCity(nameCity.province_name);
    setDataDistrict(data.data.results);
  };
  const handleDistrict = async (e) => {
    let idDistrict = e.target.value;
    const nameDistrict = dataDistrict.find(
      (item) => item.district_name == idDistrict
    );
    const districtsName = +nameDistrict.district_id;
    let data = await axios.get(
      `https://vapi.vnappmob.com/api/province/ward/${districtsName}`
    );
    setDistrict(nameDistrict.district_name);
    setDataWard(data.data.results);
  };

  // phần thêm ảnh
  const handleAddMedia = (event) => {
    setSelectedMedia(event.target.files[0]);
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      setPreview(event.target?.result);
    };
    reader.readAsDataURL(file);
  };
  // viêt các hàm
  //  hàm validate thêm địa chỉ công ty

  // modal 1
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    const errors = {};
    let hasError = false;
    if (!updateCompany.name.trim()) {
      errors.name = "Tên doanh nghiệp không được để trống";
      hasError = true;
    }
    if (!updateCompany.email.trim()) {
      errors.email = "Email không được để trống";
      hasError = true;
    }
    if (!updateCompany.phone.trim()) {
      errors.phone = "Số điện thoại không được để trống";
      hasError = true;
    }
    // if (updateCompany.size.trim() === "") {
    //   errors.size = "Số lượng nhân viên không được để trống";
    //   hasError = true;
    // } else if (!/^\d+$/.test(updateCompany.size.trim())) {
    //   errors.size = "Số lượng nhân viên chỉ được nhập số";
    //   hasError = true;
    // }

    // Nếu có lỗi, cập nhật state để hiển thị thông báo lỗi
    if (hasError) {
      setErrorMessages(errors);
      return;
    }

    if (selectedMedia) {
      const formData = new FormData();
      formData.append("file", selectedMedia);
      formData.append("upload_preset", "my-project-md3");
      const [uploadMedia] = await Promise.all([
        axios.post(
          "https://api.cloudinary.com/v1_1/dzprh8cvv/image/upload",
          formData
        ),
      ]);
      const media = uploadMedia.data.secure_url;
      const updateCompany1 = {
        ...updateCompany,
        photo: media,
      };
      // console.log(media)
      // console.log(updateCompany1)
      try {
        const res = await axios.patch(
          `http://localhost:3000/api/v2/companies/update-info/${infoCompany.id}`,
          updateCompany1
        );
        notification.success({
          message: "Cập nhật thành công",
          duration: 2,
        });
        let hasError = false;
        setIsModalOpen(false);

        SetFlag(!flag);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await axios.patch(
          `http://localhost:3000/api/v2/companies/update-info/${infoCompany.id}`,
          updateCompany
        );
        notification.success({
          message: "Cập nhật thành công",
          duration: 2,
        });
        let hasError = false;
        setIsModalOpen(false);

        SetFlag(!flag);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // modal 2
  const showModal2 = (item) => {
    setIsModalOpen2(true);
  };

  const handleOk2 = async () => {
    // console.log(address);
    if (address === "") {
      notification.error({
        message: "Hãy điền đủ thông tin",
        duration: 2,
      });
      return;
    }
    try {
      const newAdress = {
        address: `${address} - ${ward} - ${district} - ${city}`,
      };
      const res = await axios.post(
        `http://localhost:3000/api/v2/companies/create-address/${infoCompany.id}`,
        newAdress
      );
      notification.success({
        message: "Thêm Địa chỉ thành công",
        duration: 2,
      });
      setIsModalOpen2(false);
      setCity("");
      setDistrict("");
      setWard("");
      setAddress("");
      SetFlag(!flag);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

  // xoá 1 địa chỉ  chi nhánh công ty
  const handleDelete = async (item) => {
    if (listBrand.length === 1) {
      notification.error({
        message: "Địa điểm đang được sử dụng, vui lòng chọn địa điểm khác",
      });
      return;
    } else {
      try {
        await axios.delete(
          `http://localhost:3000/api/v2/companies/delete-address-company/${item.id}`
        );
        SetFlag(!flag);
        notification.success({
          message: "Đã xóa địa chỉ thành công",
          placement: "topRight",
          duration: 2,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  console.log(infoCompany);
  return (
    <>
      <div
        style={{
          display:
            infoCompany?.logo == null ||
              infoCompany.website == null ||
              infoCompany.description == null ||
              infoCompany.size == null
              ? "block"
              : "none",
        }}
      >
        <div style={{ alignItems: "center", display: "flex" }}>
          <div style={{ marginRight: "20px", width: "50vw" }}>
            {" "}
            <img
              style={{ width: "100%", marginRight: "20px" }}
              src={logo}
            ></img>
          </div>
          <div
            style={{ textAlign: "center", width: "50vw", marginRight: "20px" }}
            className="user-companyView-info-feature"
          >
            <h4>
              Chào mừng {infoCompany?.name} đã đến với RikeiEdu, Bạn hãy cập
              nhật thông tin doanh nghiệp của mình !
            </h4>
            <button
              style={{
                marginRight: "20px",
                backgroundColor: "red",
                border: "none",
                width: "300px",
                height: "60px",
                borderRadius: "5px",
                fontSize: "20px",
                color: "white",
                marginTop: "40px",
              }}
              onClick={showModal}
            >
              Cập nhật
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          display:
            infoCompany?.logo == null ||
              infoCompany.website == null ||
              infoCompany.description == null ||
              infoCompany.size == null
              ? "none"
              : "block",
        }}
      >
        <div className="user-ListJob-title">
          <p>
            <span>Trang chủ / Thông tin doanh nghiệp /</span> Doanh nghiệp của
            tôi{" "}
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
                    100 người theo dõi
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
              <button onClick={showModal}>Chỉnh sửa</button>
            </div>
          </div>
          {/* modal thêm dia chỉ */}
          <Modal
            onOk={handleOk2}
            onCancel={handleCancel2}
            title="Thêm địa chỉ công ty"
            open={isModalOpen2}
            width={600}
          >
            <div className="company__register-input__address">
              <label htmlFor="">Địa chỉ công ty</label>
              <br />
              <div style={{ display: "flex", gap: "10px" }}>
                <select
                  style={{
                    width: "10vw",
                    fontSize: "14px",
                    border: "1px solid #E7F0FA",
                    borderRadius: "5px",
                  }}
                  onChange={handleCity}
                  name=""
                  id=""
                >
                  <option value="">Chọn thành phố</option>
                  {dataCity.map((item, index) => (
                    <option key={index} value={item.code}>
                      {item.province_name}
                    </option>
                  ))}
                </select>
                <select
                  style={{
                    width: "10vw",
                    fontSize: "14px",
                    height: "40px",
                    border: "1px solid #E7F0FA",
                    borderRadius: "5px",
                  }}
                  onChange={handleDistrict}
                  name=""
                  id=""
                >
                  <option>Chọn Quận/Huyện</option>
                  {dataDistrict.map((item, index) => (
                    <option key={index} value={item.code}>
                      {item.district_name}
                    </option>
                  ))}
                </select>
                <select
                  style={{
                    width: "10vw",
                    fontSize: "14px",
                    border: "1px solid #E7F0FA",
                    borderRadius: "5px",
                  }}
                  onChange={(e) => setWard(e.target.value)}
                  name=""
                  id=""
                >
                  <option value="">Chọn Phường/Xã</option>
                  {dataWard.map((item, index) => (
                    <option key={index}>{item.ward_name}</option>
                  ))}
                </select>
                {errors.city && <div className="error">{errors.city}</div>}
                {errors.district && (
                  <div className="error">{errors.district}</div>
                )}
                {errors.ward && <div className="error">{errors.ward}</div>}
              </div>
              <div style={{ marginTop: "20px" }}>
                <label style={{ fontSize: "14px" }}>Địa chỉ chi tiết</label>
                <br></br>
                <input
                  onChange={(e) => setAddress(e.target.value)}
                  style={{
                    width: "100%",
                    height: "40px",
                    border: "1px solid #E7F0FA",
                    borderRadius: "5px",
                  }}
                  type="text"
                ></input>
                {errors.address && (
                  <div className="error">{errors.address}</div>
                )}
              </div>
            </div>
          </Modal>
          {/* modal cập nhật thông tin company */}
          <Modal
            className="modal-updateInforUser"
            title="Chỉnh sửa Thông Tin Doanh Nghiệp"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            width={800}
          >
            <p>Tên doanh nghiệp</p>
            <input
              onChange={(e) =>
                setUpdateCompany({ ...updateCompany, name: e.target.value })
              }
              name="name"
              value={updateCompany.name}
              type="text"
            ></input>
            {errorMessages.name && (
              <p style={{ color: "red" }}>{errorMessages.name}</p>
            )}

            <div
              style={{
                display: "flex",
                width: "100%",
              }}
            >
              <div>
                {" "}
                <p>Ảnh đại diện</p>
                <div style={{ display: "flex" }}>
                  <input
                    style={{
                      width: "20%",
                      border: "none",
                      height: "100px",
                      padding: "0 10px",
                      borderRadius: "5px",
                      color: "white",
                    }}
                    className="input-choose-file"
                    onChange={handleAddMedia}
                    type="file"
                  ></input>
                  <img src={preview ? preview : updateCompany.photo}></img>
                </div>
              </div>
              <div style={{ width: "60%", marginLeft: "-150px" }}>
                <div>
                  <p>Email</p>{" "}
                  <input
                    onChange={(e) =>
                      setUpdateCompany({
                        ...updateCompany,
                        email: e.target.value,
                      })
                    }
                    value={updateCompany.email}
                    name="email"
                    type="text"
                  ></input>
                  {errorMessages.email && (
                    <p style={{ color: "red" }}>{errorMessages.email}</p>
                  )}
                </div>
                <div>
                  <p>Số điện thoại</p>{" "}
                  <input
                    onChange={(e) =>
                      setUpdateCompany({
                        ...updateCompany,
                        phone: e.target.value,
                      })
                    }
                    value={updateCompany.phone}
                    name="phone"
                    type="text"
                  ></input>
                  {errorMessages.phone && (
                    <p style={{ color: "red" }}>{errorMessages.phone}</p>
                  )}
                </div>
              </div>
            </div>
            <div>
              <p>Link Facebook</p>
              <input
                onChange={(e) =>
                  setUpdateCompany({
                    ...updateCompany,
                    link_facebook: e.target.value,
                  })
                }
                value={updateCompany.link_facebook}
                name="link_facebook"
                type="text"
              ></input>
              <p>Link Website</p>
              <input
                onChange={(e) =>
                  setUpdateCompany({
                    ...updateCompany,
                    website: e.target.value,
                  })
                }
                value={updateCompany.website}
                name="website"
                type="text"
              ></input>
            </div>
            <div style={{ display: "flex", gap: "75px" }}>
              <div style={{ width: "45%" }}>
                <p>Type Company</p>{" "}
                <select
                  onChange={(e) =>
                    setUpdateCompany({
                      ...updateCompany,
                      typeCompany_id: e.target.value,
                    })
                  }
                  value={updateCompany.typeCompany_id}
                  style={{
                    width: "100%",
                    height: "40px",
                    borderRadius: "5px",
                  }}
                  type="text"
                >
                  <option>Mời Bạn chọn</option>
                  {listTypeCompany.map((item, index) => (
                    <option value={item.id} key={index}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div style={{ width: "45%" }}>
                <p>Số lượng nhân viên</p>
                <input
                  onChange={(e) =>
                    setUpdateCompany({ ...updateCompany, size: e.target.value })
                  }
                  value={updateCompany.size}
                  name="size"
                ></input>
                {errorMessages.size && (
                  <p style={{ color: "red" }}>{errorMessages.size}</p>
                )}
              </div>
            </div>
            <p>Mô tả Doanh nghiệp</p>
            <textarea
              onChange={(e) =>
                setUpdateCompany({
                  ...updateCompany,
                  description: e.target.value,
                })
              }
              value={updateCompany.description}
              name="description"
              type="text"
            ></textarea>
            <p>Chính sách</p>
            <textarea
              onChange={(e) =>
                setUpdateCompany({ ...updateCompany, policy: e.target.value })
              }
              value={updateCompany.policy}
              name="policy"
              type="text"
            ></textarea>
          </Modal>
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
              <span>
                <i
                  style={{ color: "red", marginLeft: "8px" }}
                  class="fa-regular fa-pen-to-square"
                ></i>
              </span>
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
                <div
                  onClick={showModal2}
                  style={{
                    marginLeft: "0px",
                    cursor: "pointer",
                    color: "blue",
                    fontSize: "16px",
                    paddingRight: "10px",
                  }}
                >
                  <i style={{ color: "#BC2228" }} class="fa-solid fa-plus"></i>
                </div>
              </div>
              {listBrand.map((item) => (
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  className="container"
                  onMouseEnter={() => setShowIcons(true)}
                  onMouseLeave={() => setShowIcons(false)}
                >
                  <p
                    style={{ padding: "5px 0" }}
                    className="user-companyView-orther-address"
                  >
                    {item.address}
                  </p>

                  {showIcons && (
                    <>
                      <i
                        onClick={() => handleDelete(item)}
                        style={{
                          color: "red",
                          fontSize: "16px",
                          paddingRight: "20px",
                        }}
                        className="far fa-trash-alt"
                      ></i>
                      <i
                        onClick={() => showModal2(item)}
                        style={{ color: "red", fontSize: "16px" }}
                        className="far fa-pen-to-square"
                      ></i>
                    </>
                  )}
                </div>
              ))}
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
          <div style={{ borderTop: "1px solid #E7F0FA",padding:"32px"}}>
          <div style={{fontSize:"28px",fontWeight:"500",paddingLeft:"32px"}}>Các job của công ty</div>
          <div style={{
          display: "flex",flexWrap: "wrap",gap: "20px",
           height: "auto", padding: "32px" }}>
           
            {listjobs.map((item) =>
              <div
              onClick={() => navigate(`/company/updatejob/${item.id}`)}
                style={{
                  width: "400px",
                  height: "auto",
                  border: "2px solid #E7F0FA",
                  borderRadius: "8px",
                  padding: "12px",
                  fontSize: "14px"
                }}
                className="main__outStandingJob--listJob__item"
  
              >
                <div style={{ display: "flex", gap: "10px" }}>
                  <div>
                    <img
                      style={{ width: "100px", height: "100px" }}
                      src={item.company.logo}></img></div>
                  <div>
                    <div style={{ fontWeight: "500", fontSize: "16px" }}>{item.title}</div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <div> Công ty {item.company.name}</div>
                      <div> <img src={arowright}></img></div>
                    </div>
                    <div> Thời gian : {item.types_jobs[0].typejob.name}</div>
  
                    <div style={{ display: "flex", gap: "10px", }}>
                      <img
                        style={{ width: "20px", height: "20px" }}
                        src={Mappin}></img>
                      <div>{item.address_company.address}</div>
                    </div>
                  </div>
                </div>
  
              </div>
            )}
          </div>
          </div>
      </div>
    </>
  );
}
