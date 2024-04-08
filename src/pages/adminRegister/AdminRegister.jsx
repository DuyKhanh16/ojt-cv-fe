import React from "react";
import "../../utils/baseLogin&Register.scss";
import "./AdminRegister.scss";
import logo from "../../assets/images/userLogin/logo-rikkei2.png";
import adminRafiki from "../../assets/images/admin/Admin-rafiki 1.png";
import eye from "../../assets/images/userLogin/eye (1) 1.png";
export default function AdminRegister() {
  return (
    <>
      {/* logo */}
      <div className="logo">
        <img src={logo} alt="rikkei" />
      </div>
      {/*end logo */}

      {/* main */}
      <div className="admin__register">
        <div className="admin__register__form">
          <div className="admin__register-form--content">
            <p>Admin CV Management</p>
          </div>
          <div className="admin__register-form--input">
            <div className="admin__register-input__name">
              <label htmlFor="">Họ tên</label>
              <br />
              <input type="text" placeholder="Nhập họ tên" />
            </div>
            <div className="admin__register-input__email">
              <label htmlFor="">Email</label>
              <br />
              <input type="text" placeholder="abc@gmail.com" />
            </div>
            <div className="admin__register-input__password">
              <label htmlFor="">Mật khẩu</label>
              <br />
              <div className="admin__register-password-input-wrapper">
                <input
                  className="input__password--text"
                  type="password"
                  placeholder="nhập mật khẩu"
                />
                <span className="togglePasswordVisibility">
                  <img src={eye} alt="" />
                </span>
              </div>
            </div>
            <div className="admin__register-input__confirmPassword">
              <label htmlFor="">Xác nhận mật khẩu</label>
              <br />
              <div className="admin__register-password-input-wrapper">
                <input
                  className="admin__register-input__confirmPassword--text"
                  type="password"
                  placeholder="nhập lại mật khẩu"
                />
                <span className="togglePasswordVisibility">
                  <img src={eye} alt="" />
                </span>
              </div>
            </div>
            <div className="btn">Đăng ký</div>
            <div className="admin__register-input__footer">
              <span className="admin__register-input__footer--forgot">
                Chính sách của chúng tôi
              </span>
              <div className="admin__register-input__footer--register">
                <span className="admin__register-input__footer--register--text">Bạn đã có tài khoản?</span>
                <span className="admin__register-input__footer--register--Nav">
                  Đăng nhập ngay
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
    </>
  );
}
