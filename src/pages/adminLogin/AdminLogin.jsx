import React from "react";
import "../../utils/baseLogin&Register.scss";
import "./AdminLogin.scss";
import logo from "../../assets/images/userLogin/logo-rikkei2.png";
import adminRafiki from "../../assets/images/admin/Admin-rafiki 1.png";
import eye from "../../assets/images/userLogin/eye (1) 1.png";
export default function AdminLogin() {
  return (
    <>
      <div className="admin__login__container">
        {/* logo */}
        <div className="logo">
          <img src={logo} alt="rikkei" />
        </div>
        {/*end logo */}

        {/* main */}
        <div className="admin__login">
          <div className="admin__login__form">
            <div className="admin__login-form-content">
              <p>Admin CV Management</p>
            </div>
            <div className="admin__login-form-input">
              <div className="admin__login-input__email">
                <label htmlFor="">Email</label>
                <br />
                <input type="text" placeholder="abc@gmail.com" />
              </div>
              <div className="admin__login-input__password">
                <label htmlFor="">Mật khẩu</label>
                <br />
                <div className="admin__login-password-input-wrapper">
                  <input
                    className="admin__login-input__password--text"
                    type="password"
                    placeholder="nhập mật khẩu"
                  />
                  <span className="togglePasswordVisibility">
                    <img src={eye} alt="" />
                  </span>
                </div>
              </div>
              <div className="btn">Đăng nhập</div>
              <div className="admin__login-input__footer">
                <span className="admin__login-input__footer--forgot">
                  Quên mật khẩu
                </span>
                <div className="admin__login-input__footer--register">
                  <span className="admin__login-input__footer--register--text">
                    Bạn không có tài khoản?
                  </span>
                  <span className="admin__login-input__footer--register--Nav">
                    Tạo 1 tài khoản
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="image">
            <img src={adminRafiki} alt="investment" />
          </div>
        </div>
        {/* end main */}
      </div>
    </>
  );
}
