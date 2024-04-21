import React, { memo, useEffect, useState } from "react";
import "./formModal.scss";
import "./UpdateInforUser.scss";
import logo from "../../../assets/images/main/logo.png";
import sua from "../../../assets/images/main/sualogo.png";
import deletea from "../../../assets/images/main/delete.png";
import privateAxios from "../../../config/private.axios";
import { message, notification } from "antd";
import axios from "axios";
function UpdateInforUser({ isOpen, close }) {
  const [user, setUser] = useState({});
  const [flag, setFlag] = useState(0);
  const [preview, setPreview] = useState("");
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [errors, setErrors] = useState({});
  const [userUpdate, setUserUpdate] = useState({
    name: "",
    birthday: "",
    gender: "",
    phone: "",
    address: "",
    position: "",
    link_git: "",
    avatar: "",
  });

  // tỉnh
  const [dataCity, setDataCity] = useState([]);
  const [dataDistrict, setDataDistrict] = useState([]);
  const [dataWard, setDataWard] = useState([]);
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [address, setAddress] = useState("");

  // api thành phố
  const handleGetDataCity = async () => {
    let data = await axios.get(`https://vapi.vnappmob.com/api/province/`);
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
  // het api thanh pho
  const getUser = () => {
    privateAxios
      .get("api/v2/candidates/getInfor")
      .then((res) => {
        setUser(res.data.data);
        setUserUpdate({
          name: res.data.data.name,
          address:  `${address}-${ward}-${district}-${city}`,
          phone: res.data.data.phone,
          gender: res.data.data.gender,
          link_git: res.data.data.link_git,
          birthday: res.data.data.birthday,
          position: res.data.data.position,
          avatar: res.data.data.avatar,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const getChange = (e) => {
    setUserUpdate({ ...userUpdate, [e.target.name]: e.target.value });
  };
  const handleAddMedia = (event) => {
    setSelectedMedia(event.target.files[0]);
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      setPreview(event.target?.result);
    };
    reader.readAsDataURL(file);
  };
  const updateInfor = async () => {
    console.log(selectedMedia);
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
      console.log(media);
      await privateAxios
        .patch(`/api/v2/candidates/updateInfoCandidate`, {
          ...userUpdate,
          avatar: media,
        })
        .then((res) => {
          setUserUpdate(res);
          notification.success({
            message: "Cập nhật thông tin thành công",
          });
          setFlag(flag + 1);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      close();
    } else {
      await privateAxios
        .patch(`/api/v2/candidates/updateInfoCandidate`, userUpdate)
        .then((res) => {
          setUserUpdate(res);
          notification.success({
            message: "Cập nhật thông tin thành công",
          });
          setFlag(flag + 1);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      close();
    }
  };
  useEffect(() => {
    getUser();
  }, [flag]);
  const closeModal = () => {
    setPreview("");
    close();
  };
  //  hàm validate các trường
  const validate = () => {
    let tempErrors = {};
    // tempErrors.name = NewCompany.name ? "" : "Tên không được để trống";

    tempErrors.email = NewCompany.email
      ? isEmailValid(NewCompany.email)
        ? ""
        : "Email không hợp lệ"
      : "Email không được để trống";

    tempErrors.password = NewCompany.password
      ? NewCompany.password.length >= 6
        ? ""
        : "Mật khẩu phải có ít nhất 6 ký tự"
      : "Mật khẩu không được để trống";

    tempErrors.confirmPassword = NewCompany.confirmPassword
      ? NewCompany.password === NewCompany.confirmPassword
        ? ""
        : "Mật khẩu xác nhận không khớp"
      : "Mật khẩu xác nhận không được để trống";

    tempErrors.phone = NewCompany.phone
      ? isVietnamesePhoneNumberValid(NewCompany.phone)
        ? ""
        : "Số điện thoại không hợp lệ"
      : "Số điện thoại không được để trống";

    tempErrors.city = city ? "" : "Bạn chưa nhập Thành Phố";

    tempErrors.district = district ? "" : "Bạn chưa nhập Quận hoặc Huyện";

    tempErrors.ward = ward ? "" : "Bạn chưa Nhập Phường Xã";

    tempErrors.name = NewCompany.name ? "" : "Không được để trống";

    tempErrors.address = address ? "" : "Không được để trống";

    // tempErrors.emailCompany = NewCompany.emailCompany
    //   ? isEmailValid(NewCompany.emailCompany)
    //     ? ""
    //     : "Email không hợp lệ"
    //   : "Email không là này";

    setErrors(tempErrors);
    // Kiểm tra xem có lỗi nào không
    return Object.values(tempErrors).every((x) => x === "");
  };
  return (
    <>
      <div style={{ display: isOpen ? "block" : "none" }}>
        <div className="format1 updateInforUser">
          <div className="updateInforUser__contain">
            <p>Cập nhật thông tin cá nhân</p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <img
                src={
                  preview
                    ? preview
                    : userUpdate.avatar
                    ? userUpdate.avatar
                    : logo
                }
                alt=""
                width={100}
              />
            </div>
            <div style={{ display: "flex", gap: "50px" }}>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "transparent",
                  border: "none",
                  fontSize: "20px",
                  color: "black",
                }}
              >
                <label
                  htmlFor="file"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    backgroundColor: "transparent",
                    border: "none",
                    fontSize: "20px",
                    color: "black",
                  }}
                >
                  <img src={sua} alt="" width={20} />
                  cập nhật
                </label>
                <input
                  type="file"
                  onChange={handleAddMedia}
                  id="file"
                  style={{ display: "none" }}
                />
              </button>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "transparent",
                  border: "none",
                  fontSize: "20px",
                  color: "black",
                }}
              >
                <img src={deletea} alt="" width={20} />
                Xoá
              </button>
            </div>

            <div className="updateInforUser__table aboutUser inforUserUpdate">
              <div className="inforUserItem">
                <label htmlFor="">Họ và tên </label>
                <input
                  onChange={getChange}
                  value={userUpdate?.name}
                  name="name"
                  type="text"
                  placeholder="ABCde"
                />
              </div>
              <div className="inforUserItem">
                <label htmlFor="">Chuyên môn </label>
                <input
                  onChange={getChange}
                  value={userUpdate?.position}
                  name="position"
                  type="text"
                  placeholder="ABCde"
                />
              </div>
              <div className="inforUserItem">
                <label htmlFor="">Địa chỉ </label>
                {/* <input
                  onChange={getChange}
                  value={userUpdate?.address}
                  name="address"
                  type="text"
                  placeholder="ABCde"
                /> */}
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
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  {" "}
                  {errors.city && <div className="error">{errors.city}</div>}
                  {errors.district && (
                    <div className="error">{errors.district}</div>
                  )}
                  {errors.ward && <div className="error">{errors.ward}</div>}
                </div>
                <div>
                <label>Địa chỉ chi tiết</label>
                <br></br>
                <input
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  placeholder="Địa chỉ chi tiết"
                />
                {errors.address && <div className="error">{errors.address}</div>}
              </div>
              </div>
              <div className="inforUserItem">
                <label htmlFor="">SĐT </label>
                <input
                  onChange={getChange}
                  value={userUpdate?.phone}
                  name="phone"
                  type="text"
                  placeholder="ABCde"
                />
              </div>
              <div className="inforUserItem">
                <label htmlFor="">DOB </label>
                <input
                  onChange={getChange}
                  value={userUpdate?.birthday}
                  name="birthday"
                  type="date"
                  placeholder="ABCde"
                />
              </div>
              <div className="inforUserItem">
                <label htmlFor="">Giới tính </label>
                <input
                  onChange={getChange}
                  value={userUpdate?.gender}
                  name="gender"
                  type="text"
                  placeholder="ABCde"
                />
              </div>
              <div className="inforUserItem">
                <label htmlFor="">Trang github </label>
                <input
                  onChange={getChange}
                  value={userUpdate?.link_git}
                  name="link_git"
                  type="text"
                  placeholder="ABCde"
                />
              </div>
            </div>
            <div className="updateInforUser__button">
              <button onClick={updateInfor}>Cập nhật</button>
              <button
                className="updateInforUser__button__cancel"
                onClick={closeModal}
              >
                Hủy Bỏ
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default memo(UpdateInforUser);
