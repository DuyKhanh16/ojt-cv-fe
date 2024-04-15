import React, { useState } from "react";
import "../../utils/baseLogin&Register.scss";
import "./UserRegister.scss";
import logo from "../../assets/images/userLogin/logo-rikkei2.png";
import investment from "../../assets/images/userLogin/Investment data-rafiki 1.png";
import eye from "../../assets/images/userLogin/eye (1) 1.png";
import { Link, useNavigate } from "react-router-dom";
import publicAxios from "../../config/pulic.axios";
import { notification } from "antd";


export default function () {
  const [NewUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const navigate = useNavigate();
  // Hàm kiểm tra email hợp lệ
  const isEmailValid = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
   // Hàm toggle hiển thị mật khẩu
   const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  // Hàm toggle hiển thị xác nhận mật khẩu
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  // Hàm validate các trường
  const validate = () => {
    let tempErrors = {};
    tempErrors.name = NewUser.name ? "" : "Tên không được để trống";

    tempErrors.email = NewUser.email
      ? isEmailValid(NewUser.email)
        ? ""
        : "Email không hợp lệ"
      : "Email không được để trống";

    tempErrors.password = NewUser.password
      ? NewUser.password.length >= 6
        ? ""
        : "Mật khẩu phải có ít nhất 6 ký tự"
      : "Mật khẩu không được để trống";

    tempErrors.confirmPassword = NewUser.confirmPassword
      ? NewUser.password === NewUser.confirmPassword
        ? ""
        : "Mật khẩu xác nhận không khớp"
      : "Mật khẩu xác nhận không được để trống";

    setErrors(tempErrors);

    // Kiểm tra xem có lỗi nào không
    return Object.values(tempErrors).every((x) => x === "");
  };
  // HÀM ĐĂNG KÝ
  const addNewUser = async () => {
    if (validate()) {
      console.log(NewUser, "1");
      try {
        const res = await publicAxios.post("/api/v2/auth/register-candidate", NewUser);
        console.log(res.data.message);
        notification.success({
          message: res.data.message,
          duration: 2,
        })
        // navigate("/login")
      } catch (error) {
        console.log(error);
        notification.error({
          message: "Email đã tồn tại",
          duration: 2,
        });
      }
    }
  };
  // console.log(NewUser,"11111")
  return (
    <>
      <div className="user__register__container">
        {/* logo */}
        <div className="logo">
          <img src={logo} alt="rikkei" />
        </div>
        {/*end logo */}

        {/* main */}
        <div className="user__register">
          <div className="user__register__form">
            <div className="user__register-form-content">
              <p>
                Cùng Rikkei Education xây dựng hồ sơ nổi bật và nhận được các cơ
                hội sự nghiệp lý tưởng
              </p>
            </div>
            {/*  */}
            <div className="user__register-form-input">
              <div className="user__register-input__name">
                <label htmlFor="">Họ tên</label>
                <br />
                <input
                  onChange={(e) =>
                    setNewUser({ ...NewUser, name: e.target.value })
                  }
                  value={NewUser.name}
                  name="name"
                  type="text"
                  placeholder="Nhập họ tên"
                />
              </div>
              {errors.name && <div className="error">{errors.name}</div>}

              <div className="user__register-input__email">
                <label htmlFor="">Email</label>
                <br />
                <input
                  onChange={(e) =>
                    setNewUser({ ...NewUser, email: e.target.value })
                  }
                  value={NewUser.email}
                  name="email"
                  type="text"
                  placeholder="abc@gmail.com"
                />
              </div>
              {errors.email && <div className="error">{errors.email}</div>}

              <div className="user__register-input__password">
                <label htmlFor="">Mật khẩu</label>
                <br />
                <div className="user__register-password-input-wrapper">
                  <input
                    onChange={(e) =>
                      setNewUser({ ...NewUser, password: e.target.value })
                    }
                    name="password"
                    value={NewUser.password}
                    className="user__register-input__password--text"
                    type={passwordShown ? 'text' : 'password'}
                    placeholder="*************"
                  />
                  <span className="togglePasswordVisibility" onClick={togglePasswordVisibility}>
  
                    <img src={eye} alt="" />
                  </span>
                </div>
                {errors.password && (
                  <div className="error">{errors.password}</div>
                )}
              </div>
              <div className="user__register-input__confirmPassword">
                <label htmlFor="">Xác nhận mật khẩu</label>
                <br />
                <div className="user__register-password-input-wrapper">
                  <input
                    onChange={(e) =>
                      setNewUser({
                        ...NewUser,
                        confirmPassword: e.target.value,
                      })
                    }
                    name="confirmPassword"
                    value={NewUser.confirmPassword}
                    className="user__register-input__confirmPassword--text"
                    type={confirmPasswordShown ? 'text' : 'password'}
                    placeholder="*************"
                  />
                  <span className="togglePasswordVisibility" onClick={toggleConfirmPasswordVisibility}>
                  <img src={eye} alt="" />
                  </span>
                </div>
                {errors.confirmPassword && (
                  <div className="error">{errors.confirmPassword}</div>
                )}
              </div>
              <div onClick={addNewUser} className="btn">
                Đăng ký
              </div>
              <div className="user__register-input__footer">
                <span className="user__register-input__footer--forgot">
                  Chính sách của chúng tôi
                </span>
                <div className="user__register-input__footer--context">
                  <span className="user__register-input__footer--text">
                    Bạn đã có tài khoản?
                  </span>
                  <Link to={"/login"}>
                    <span className="user__register-input__footer--Nav">
                      Đăng nhập ngay
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="image">
            <img src={investment} alt="investment" />
          </div>
        </div>
        {/* end main */}
      </div>
    </>
  );
}
