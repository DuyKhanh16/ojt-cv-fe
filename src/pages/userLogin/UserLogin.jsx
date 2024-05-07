import React, { useState } from "react";
import "../../utils/baseLogin&Register.scss";
import "./UserLogin.scss";
import logo from "../../assets/images/userLogin/logo-rikkei2.png";
import investment from "../../assets/images/userLogin/Investment data-rafiki 1.png";
import eye from "../../assets/images/userLogin/eye (1) 1.png";
import { Await, Link, useNavigate } from "react-router-dom";
import publicAxios from "../../config/pulic.axios";
import { notification } from "antd";
import ForgetPassword from "../../components/modal/forgetPassword/ForgetPassword";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../config/firebase";
import privateAxios from "../../config/private.axios";
import {Login,LoginByGoogle} from "../../apis/auth/auth"
export default function UserLogin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [passwordShown, setPasswordShown] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Hàm kiểm tra email hợp lệ
  const isEmailValid = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  // Hàm toggle hiển thị mật khẩu
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };
  // hàm validate
  const validate = () => {
    let tempErrors = {};
    tempErrors.email = user.email
      ? isEmailValid(user.email)
        ? ""
        : "Email không hợp lệ"
      : "Email không được để trống";

    tempErrors.password = user.password
      ? user.password.length >= 6
        ? ""
        : "Mật khẩu phải có ít nhất 6 ký tự"
      : "Mật khẩu không được để trống";

    setErrors(tempErrors);
    // Kiểm tra xem có lỗi nào không
    return Object.values(tempErrors).every((x) => x === "");
  };

  //dang nhap bang gg

  //Lấy đối tượng auth từ Firebase

  //Tạo một provider cho đăng nhập bằng Google

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userGoogle = {
        name: user.displayName,
        email: user.email,
        password: user.uid
        
      };
     LoginByGoogle(userGoogle)
      .then((response) => { 
        if (response.data.role === 1 && response.data.status === 1) {
          localStorage.setItem("token", JSON.stringify(response.data.token));
          localStorage.setItem("role", JSON.stringify(response.data.role));
          navigate("/candidate");
          notification.success({
            message: response.message,
          });
        } else if (response.data.role === 1 && response.data.status === 0) {
          notification.error({
            message: "Tài khoản của bạn đang bị khoá",
          });
        }

        if (response.data.role === 2) {
          localStorage.setItem("token", JSON.stringify(response.data.token));
          localStorage.setItem("role", JSON.stringify(response.data.role));
          navigate("/company");
          notification.success({
            message: response.message,
          });
        }
      })
    } catch (error) {
      return error;
    }
  };


  // het dang nhap bang gg
  // đăng nhập
  const handlelogin = async () => {
    if (validate()) {
      try {
        const response = await Login(user)
        if (response.data.data.role === 0) {
          localStorage.setItem("token", JSON.stringify(response.data.data.token));
          localStorage.setItem("role", JSON.stringify(response.data.data.role));
          notification.success({
            message: response.data.message,
          });
          navigate("/admin");
        }

        if (response.data.data.role === 1 && response.data.data.status === 1) {
          localStorage.setItem("token", JSON.stringify(response.data.data.token));
          localStorage.setItem("role", JSON.stringify(response.data.data.role));
          navigate("/candidate");

          notification.success({
            message: response.data.message,
          });
        } else if (response.data.data.role === 1 && response.data.data.status === 0) {
          notification.error({
            message: "Tài khoản của bạn đang bị khoá",
          });
        }

        if (response.data.data.role === 2) {
          localStorage.setItem("token", JSON.stringify(response.data.data.token));
          localStorage.setItem("role", JSON.stringify(response.data.data.role));
          navigate("/company");

          notification.success({
            message: response.data.message,
          });
        }
      } catch (error) {
        console.log(error);
        notification.error({
          message: "Đăng nhập thất bại",
        });
      }
    }
  };
  const close = () => {
    setOpen(false);
  }
  return (
    <>
      <ForgetPassword isOpen={open} close={close} />
      <div className="user__login__container">
        {/* logo */}
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="rikkei" />
        </div>
        {/*end logo */}

        {/* main */}
        <div className="user__login">
          <div className="user__login__form">
            <div className="user__login-form-content">
              <p>
                Cùng Rikkei Education xây dựng hồ sơ nổi bật và nhận được các cơ
                hội sự nghiệp lý tưởng
              </p>
            </div>
            <div className="user__login-form-input">
              <div className="user__login-input__email">
                <label htmlFor="">Email</label>
                <br />
                <input
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  value={user.email}
                  name="email"
                  type="text"
                  placeholder="Nhập email"
                />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
              <div className="user__login-input__password">
                <label htmlFor="">Mật khẩu</label>
                <br />
                <div className="user__login-password-input-wrapper">
                  <input
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    value={user.password}
                    name="password"
                    className="user__login-input__password--text"
                    type={passwordShown ? "text" : "password"}
                    placeholder="Nhập mật khẩu"
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="togglePasswordVisibility"
                  >
                    <img src={eye} alt="" />
                  </span>
                  {errors.password && (
                    <div className="error">{errors.password}</div>
                  )}
                </div>
              </div>
              <div onClick={handlelogin} className="btn">
                Đăng nhập
              </div>
              <div className="user__login-input__or">
                <div className="user__login-input__or--line">

                </div>
                <div className="user__login-input__or--text">
                  Hoặc
                </div>
                <div className="user__login-input__or--line">

                </div>

              </div>
              <div className="user__login-input__loginByGg" 
                onClick={signInWithGoogle}
              >
                    <img src={"https://itviec.com/assets/google_logo-af373a5e64715e7d4fcdea711f96995f7fd7a49725b3dd8910d4749b74742cb2.svg"} alt="" />
                    <p>Đăng nhập bằng Google</p>
              </div>
              <div className="user__login-input__footer">
                <span className="user__login-input__footer--forgot" onClick={() => setOpen(true)}>
                  Quên mật khẩu
                </span>
                <div className="user__login-input__footer--context">
                  <span className="user__login-input__footer--text">
                    Bạn không có tài khoản ?
                  </span>
                  <Link
                    to={"/user-register"}
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    <span className="user__login-input__footer--Nav">
                      Tạo tài khoản Học viên
                    </span>
                  </Link>
                  <span style={{ marginLeft: "10px" }}>Hoặc</span>
                  <Link
                    to={"/company-register"}
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    <span
                      style={{ marginLeft: "10px" }}
                      className="user__login-input__footer--Nav"
                    >
                      Tạo 1 tài khoản Công ty
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
