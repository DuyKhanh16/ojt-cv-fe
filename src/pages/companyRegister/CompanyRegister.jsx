import React, { useEffect, useState } from "react";
import "../../utils/baseLogin&Register.scss";
import "./CompanyRegister.scss";
import logo from "../../assets/images/userLogin/logo-rikkei2.png";
import eye from "../../assets/images/userLogin/eye (1) 1.png";
import { Link, useNavigate } from "react-router-dom";
import publicAxios from "../../config/pulic.axios";
import { notification } from "antd";
import axios from "axios";
export default function () {
  const [NewCompany, setNewCompany] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
  });
  // tỉnh
  const [dataCity, setDataCity] = useState([]);
  const [dataDistrict, setDataDistrict] = useState([]);
  const [dataWard, setDataWard] = useState([]);
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [address, setAddress] = useState("");

  const [errors, setErrors] = useState({});
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const navigate = useNavigate();

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
  // console.log(city, district, ward,"các dữ liệu");

  // Hàm kiểm tra email hợp lệ
  const isEmailValid = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  // hàm kiểm tra số điện thoại vn
  const isVietnamesePhoneNumberValid = (phone) => {
    const vnPhoneRegex = /^(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
    return vnPhoneRegex.test(phone);
  };
  // Hàm toggle hiển thị mật khẩu
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  // Hàm toggle hiển thị xác nhận mật khẩu
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
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

  // hàm đăng ký
  const handleRegister = async () => {
    if (validate()) {
      try {
        // console.log(NewCompany, "11111");
        const newCompany = {
          name: NewCompany.name,
          email: NewCompany.email,
          password: NewCompany.password,
          phone: NewCompany.phone,
          address: `${address}-${ward}-${district}-${city}`,
        }
        console.log(newCompany,"123123");
        const res = await publicAxios.post(
          "/api/v2/auth/register-company",
          newCompany
        );
        notification.success(
          {
            message: "Đăng ký thành công",
          },
          1000
        );
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  //
  return (
    <>
      <div className="company__register__container">
        {/* logo */}
        <div className="logo">
          <img src={logo} alt="rikkei" />
        </div>
        {/*end logo */}

        {/* main */}
        <div className="company__register">
          <div className="company__register__form--left">
            <div className="company__register-form-content">
              <p>Đăng kí để có thể tiếp cận nguồn nhân lực chất lượng cao</p>
            </div>
            <div className="company__register-form-input">
              <div className="company__register-infor__Account">
                <p>Thông tin tài khoản</p>
              </div>
              <div className="company__register-input__email">
                <label htmlFor="">Email</label>
                <br />
                <input
                  onChange={(e) =>
                    setNewCompany({ ...NewCompany, email: e.target.value })
                  }
                  name="email"
                  value={NewCompany.email}
                  type="text"
                  placeholder="Nhập email"
                />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
              <div className="company__register-input__password">
                <label htmlFor="">Mật khẩu</label>
                <br />
                <div className="company__register-input__password-wrapper">
                  <input
                    onChange={(e) =>
                      setNewCompany({ ...NewCompany, password: e.target.value })
                    }
                    name="password"
                    value={NewCompany.password}
                    className="company__register-input__password--text"
                    type={passwordShown ? "text" : "password"}
                    placeholder="Nhập mật khẩu"
                  />
                  <span
                    className="togglePasswordVisibility"
                    onClick={togglePasswordVisibility}
                  >
                    <img src={eye} alt="" />
                  </span>
                </div>
                {errors.password && (
                  <div className="error">{errors.password}</div>
                )}
              </div>
              <div className="company__register-input__confirmPassword">
                <label htmlFor="">Xác nhận mật khẩu</label>
                <br />
                <div className="company__register-confirmPassword-input-wrapper">
                  <input
                    onChange={(e) =>
                      setNewCompany({
                        ...NewCompany,
                        confirmPassword: e.target.value,
                      })
                    }
                    name="confirmPassword"
                    value={NewCompany.confirmPassword}
                    className="company__register-input__confirmPassword--text"
                    type={confirmPasswordShown ? "text" : "password"}
                    placeholder="Nhập lại mật khẩu"
                  />
                  <span
                    className="togglePasswordVisibility"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    <img src={eye} alt="" />
                  </span>
                </div>
                {errors.confirmPassword && (
                  <div className="error">{errors.confirmPassword}</div>
                )}
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="company__register__form--right">
            <div className="company__register-form-input">
              <div className="company__register-infor__company">
                <p>Thông tin doanh nghiệp</p>
              </div>
              <div className="company__register-input__company">
                <label htmlFor="">Công ty</label>
                <br />
                <input
                  name="name"
                  value={NewCompany.name}
                  onChange={(e) =>
                    setNewCompany({
                      ...NewCompany,
                      name: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Tên công ty"
                />
                {errors.name && <div className="error">{errors.name}</div>}
              </div>
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
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  {" "}
                  {errors.city && <div className="error">{errors.city}</div>}
                  {errors.district && (
                    <div className="error">{errors.district}</div>
                  )}
                  {errors.ward && <div className="error">{errors.ward}</div>}
                </div>
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
              <div className="company__register-input__phone">
                <label htmlFor="">Số điện thoại liên hệ</label>
                <br />
                <input
                  name="phone"
                  value={NewCompany.phone}
                  onChange={(e) =>
                    setNewCompany({ ...NewCompany, phone: e.target.value })
                  }
                  type="text"
                  placeholder="Nhập số điện thoại"
                />
                {errors.phone && <div className="error">{errors.phone}</div>}
              </div>
            </div>
          </div>
        </div>
        <div onClick={handleRegister} className="btn btn--registerCompany">
          Đăng ký
        </div>
        <div className=" company__register-input__footer">
          <span className="company__register-input__footer--forgot">
            Chính sách của chúng tôi
          </span>
          <div className="company__register-input__footer--register">
            <span className="company__register-input__footer--text">
              Bạn đã có tài khoản ?
            </span>
            <Link to={"/login"}>
              <span className="company__register-input__footer--register--Nav">
                Đăng nhập ngay
              </span>
            </Link>
          </div>
        </div>

        {/* end main */}
      </div>
    </>
  );
}
