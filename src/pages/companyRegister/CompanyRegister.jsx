import React from "react";
import "../../utils/baseLogin&Register.scss";
import "./CompanyRegister.scss";
import logo from "../../assets/images/userLogin/logo-rikkei2.png";
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
      <div className="company__register">
        <div className="company__register__form--left">
          <div className="company__register-form-content">
            <p>
            Đăng kí để có thể tiếp cận nguồn <br />
            nhân lực chất lượng cao 
            </p>
          </div>
          <div className="company__register-form-input">
            <div className="company__register-infor__Account">
              <p>Thông tin tài khoản</p>
            </div>
            <div className="company__register-input__name">
              <label htmlFor="">Họ tên</label>
              <br />
              <input type="text" placeholder="Nhập họ tên" />
            </div>
            <div className="company__register-input__email">
              <label htmlFor="">Email</label>
              <br />
              <input type="text" placeholder="abc@gmail.com" />
            </div>
            <div className="company__register-input__password" >
              <label htmlFor="">Mật khẩu</label>
              <br />
              <div className="company__register-input__password-wrapper">
                <input
                  className="company__register-input__password--text"
                  type="password"
                  placeholder="*************"
                />
                <span className="togglePasswordVisibility">
                  <img src={eye} alt="" />
                </span>
              </div>
            </div>
            <div className="company__register-input__confirmPassword">
              <label htmlFor="">Xác nhận mật khẩu</label>
              <br />
              <div className="company__register-confirmPassword-input-wrapper">
                <input
                  className="company__register-input__confirmPassword--text"
                  type="text"
                  placeholder="*************"
                />
                <span className="togglePasswordVisibility">
                  <img src={eye} alt="" />
                </span>
              </div>
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
              <input type="text" placeholder="Tên công ty" />
            </div>
            <div className="company__register-input__address">
              <label htmlFor="">Địa điểm làm việc</label>
              <br />
              <input type="text" placeholder="quận/huyện" />
            </div>
            <div className="company__register-input__phone">
              <label htmlFor="">Số điện thoại liên hệ</label>
              <br />
              <input type="text" placeholder="12334444" />
            </div>
            <div className="company__register-input__emailCompany">
              <label htmlFor="">Email công ty</label>
              <br />
              <input type="text" placeholder="company@gmail.com" />
            </div>
          </div>
        </div>
      </div>
      <div className="btn btn--registerCompany">Đăng ký</div>
      <div className=" company__register-input__footer">
              <span className="company__register-input__footer--forgot">
                Chính sách của chúng tôi
              </span>
              <div className="company__register-input__footer--register">
                <span  className="company__register-input__footer--text">Bạn đã có tài khoản?</span>
                <span className="company__register-input__footer--register--Nav">
                  Đăng nhập ngay
                </span>
              </div>
      </div>
      
      {/* end main */}
    </>
  );
}
