import React from 'react'
import "../../utils/baseLogin&Register.scss";
import "./UserRegister.scss";
import logo from "../../assets/images/userLogin/logo-rikkei2.png";
import investment from "../../assets/images/userLogin/Investment data-rafiki 1.png";
import eye from "../../assets/images/userLogin/eye (1) 1.png";
export default function () {
  return (
    <>
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
              Cùng Rikkei Education xây dựng hồ <br />
              sơ nổi bật và nhận được các cơ hội <br />
              sự nghiệp lý tưởng
            </p>
          </div>
          <div className="user__register-form-input">
            <div className="user__register-input__name">
              <label htmlFor="">Họ tên</label>
              <br />
              <input type="text" placeholder="Nhập họ tên" />
            </div>
            <div className="user__register-input__email">
              <label htmlFor="">Email</label>
              <br />
              <input type="text" placeholder="abc@gmail.com" />
            </div>
            <div className="user__register-input__password">
              <label htmlFor="">Mật khẩu</label>
              <br />
              <div className="user__register-password-input-wrapper">
                <input
                  className="user__register-input__password--text"
                  type="text"
                  placeholder="*************"
                />
                <span className="togglePasswordVisibility">
                  <img src={eye} alt="" />
                </span>
              </div>
            </div>
            <div className="user__register-input__confirmPassword">
              <label htmlFor="">Xác nhận mật khẩu</label>
              <br />
              <div className="user__register-password-input-wrapper">
                <input
                  className="user__register-input__confirmPassword--text"
                  type="text"
                  placeholder="*************"
                />
                <span className="togglePasswordVisibility">
                  <img src={eye} alt="" />
                </span>
              </div>
            </div>
            <div className="btn">Đăng ký</div>
            <div className="user__register-input__footer">
              <span className="user__register-input__footer--forgot">Chính sách của chúng tôi</span>
              <div className="user__register-input__footer--context">
                <span className="user__register-input__footer--text">Bạn đã có tài khoản?</span>
                <span className="user__register-input__footer--Nav">
                  Đăng nhập ngay
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
  )
}
