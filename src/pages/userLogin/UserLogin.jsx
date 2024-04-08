import React from "react";
import "../../utils/baseLogin&Register.scss";
import "./UserLogin.scss";
import logo from "../../assets/images/userLogin/logo-rikkei2.png";
import investment from "../../assets/images/userLogin/Investment data-rafiki 1.png";
import eye from "../../assets/images/userLogin/eye (1) 1.png";
export default function UserLogin() {
  return (
    <>
      {/* logo */}
      <div className="logo">
        <img src={logo} alt="rikkei" />
      </div>
      {/*end logo */}

      {/* main */}
      <div className="user__login">
        <div className="user__login__form">
          <div className="user__login-form-content">
            <p>
              Cùng Rikkei Education xây dựng hồ <br />
              sơ nổi bật và nhận được các cơ hội <br />
              sự nghiệp lý tưởng
            </p>

          </div>
          <div className="user__login-form-input">
            <div className="user__login-input__email">
              <label htmlFor="">Email</label>
              <br />
              <input type="text" placeholder="abc@gmail.com" />
            </div>
            <div className="user__login-input__password">
              <label htmlFor="">Mật khẩu</label>
              <br />
              <div className="user__login-password-input-wrapper">
                <input
                  className="user__login-input__password--text"
                  type="password"
                  placeholder="nhập mật khẩu"
                />
                <span className="togglePasswordVisibility">
                  <img src={eye} alt="" />
                </span>
              </div>
            </div>
            <div className="btn">Đăng nhập</div>
            <div className="user__login-input__footer">
              <span className="user__login-input__footer--forgot">Quên mật khẩu</span>
              <div className="user__login-input__footer--context">
                <span className="user__login-input__footer--text">Bạn không có tài khoản?</span>
                <span className="user__login-input__footer--Nav">
                  Tạo 1 tài khoản
                </span>
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
    </>
  );
}
