import React from 'react'
import "../../utils/baseLogin&Register.scss";
import "./CompanyLogin.scss";
import logo from "../../assets/images/userLogin/logo-rikkei2.png";
import eye from "../../assets/images/userLogin/eye (1) 1.png"
import office from '../../assets/images/companyLogin/At the office-amico 1.png'
export default function CompanyLogin() {
  return (
    <>
    {/* logo */}
    <div className="logo">
        <img src={logo} alt="rikkei" />
      </div>
      {/*end logo */}

      {/* main */}
      <div className="company__login">
        <div className="company__login__form">
          <div className="company__login-form-content">
            <p>
            Cùng Rikkei Education tiếp cận nguồn <br /> 
            nhân lực chất lượng cao 
            </p>
          </div>
          <div className="company__login-form-input">
            <div className="company__login-input__email">
              <label htmlFor="">Email</label>
              <br />
              <input type="text" placeholder="abc@gmail.com" />
            </div>
            <div className="company__login-input__password">
              <label htmlFor="">Mật khẩu</label>
              <br />
              <div className="company__login-password-input-wrapper">
                <input
                  className="company__login-input__password--text"
                  type="password"
                  placeholder="nhập mật khẩu"
                />
                <span className="togglePasswordVisibility">
                  <img src={eye} alt="" />
                </span>
              </div>
            </div>
            <div className="btn">Đăng nhập</div>
            <div className="company__login-input__footer">
              <span className="company__login-input__footer--forgot">Quên mật khẩu</span>
              <div className="company__login-input__footer--register">
                <span className="company__login-input__footer--text">Bạn không có tài khoản?</span>
                <span className="company__login-input__footer--register--Nav">
                  Tạo 1 tài khoản
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="image">
          <img src={office} alt="investment" />
        </div>
      </div>
      {/* end main */}
    </>
  )
}
