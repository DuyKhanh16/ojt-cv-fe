import React from "react";
import "./CV1.scss";
import avatar from "../../../assets/images/cv/ACg8ocILX9TfOIrNEplYDawUBSv1Rpw3rLnuugZCNRefPEMyjM6NXIV4=s96-c.jpg";
import phoneicon from "../../../assets/images/cv/phone.svg";
import emailicon from "../../../assets/images/cv/email.svg";
import dateicon from "../../../assets/images/cv/date.svg";
import addressicon from "../../../assets/images/cv/address.svg";

export default function CV1() {
  return (
    <>
      <div className="CV1__container">
        <div className="CV1__header">
          <div className="CV1__header--left">
            <p className="CV1__header--left__name">
              <strong>TRẦN VĂN HOÀNG</strong>
            </p>
            <p className="CV1__header--left__job">developer</p>
          </div>
          <div className="CV1__header--right">
            <div className="CV1__header--right__avatar">
              <img src={avatar} alt="" />
            </div>
          </div>
        </div>
        <div className="CV1__content">
          <div className="CV1__content--left">
            <div className="CV1__content--left__yourInfor">
              <p className="CV1__content--left__yourInfor__title title">
                Thông tin cá nhân
              </p>
              <div className="CV1__content--left__yourInfor--phone">
                <img src={phoneicon} alt="" />
                <p>Thêm số điện thoại liên lạc</p>
              </div>
              <div className="CV1__content--left__yourInfor--email">
                <img src={emailicon} alt="" />
                <p>hoangbaohs22@gmail.com</p>
              </div>
              <div className="CV1__content--left__yourInfor--date">
                <img src={dateicon} alt="" />
                <p>Thêm ngày sinh</p>
              </div>
              <div className="CV1__content--left__yourInfor--address">
                <img src={addressicon} alt="" />
                <p>Thêm nơi ở hiện tại</p>
              </div>
            </div>
            <div className="CV1__content--left__education">
              <p className="CV1__content--left__education__title title">
                Học vấn
              </p>
              <div className="CV1__content--left__education--item">
                <p className="CV1__content--left__education--item__school">
                  Đại học Bách Khoa Hà Nội
                </p>
                <p className="CV1__content--left__education--item__job">
                  Công nghệ thông tin
                </p>
                <p className="CV1__content--left__education--item__time">
                  9/2019-10/2023
                </p>
              </div>
              <div className="CV1__content--left__education--item">
                <p className="CV1__content--left__education--item__school">
                  Rikkei Academy
                </p>
                <p className="CV1__content--left__education--item__job">
                  JavaScript
                </p>
                <p className="CV1__content--left__education--item__time">
                  9/2024-10/2024
                </p>
              </div>
            </div>
            <div className="CV1__content--left__skill">
              <p className="CV1__content--left__skill__title title">Kĩ năng</p>
              <div className="CV1__content--left__skill__item">
                <p className="CV1__content--left__skill__item__level">
                  Trung bình
                </p>
                <div className="CV1__content--left__skill__item__nameSkill">
                  Java Script
                </div>
              </div>
            </div>
            <div className="CV1__content--left__certificate">
              <p className="CV1__content--left__certificate__title title">
                Chứng chỉ
              </p>
              <div className="CV1__content--left__certificate--item">
                <p className="CV1__content--left__certificate--item__name">
                  Toeic 750
                </p>
                <p className="CV1__content--left__certificate--item__address">
                  Hà Nội
                </p>
                <p className="CV1__content--left__certificate--item__time">
                  9/2024-10/2028
                </p>
              </div>
            </div>
          </div>
          <div className="CV1__content--line"></div>
          <div className="CV1__content--right">
            <div className="CV1__content--right__introduce">
              <p className="CV1__content--right__introduce__title title">
                Giới thiệu thông tin
              </p>
              <div className="CV1__content--right__introduce__content">
              Xin chào, tôi là Hòa, năm nay tôi 26 tuổi. Tôi đã có kinh nghiệm làm tại công ty ABC và làm freelancer cho nhiều dự án về game, du lịch, bất động sản, chứng khoán… Điều tôi đang tìm kiếm đó là môi trường làm việc ổn định, chuyên nghiệp để phát huy hết khả năng của mình.
              </div>
            </div>
            <div className="CV1__content--right__experience">
              <p className="CV1__content--right__experience__title title">
                Kinh nghiệm làm việc
              </p>
              <div className="CV1__content--right__experience--item">
                <div className="CV1__content--right__experience--item__role">
                    <p className="CV1__content--right__experience--item__role__title">
                    Fresher
                    </p>
                    <p className="CV1__content--right__experience--item__role__time">
                    9/2023- 8/2024    
                    </p>
                </div>
                <p className="CV1__content--right__experience--item__company">
                    RikkeiSOFT
                </p>
                <p className="CV1__content--right__experience--item__discription">
                  Tối ưu hóa trang E-Learning
                </p>
              </div>
            </div>
            <div className="CV1__content--right__project">
              <p className="CV1__content--right__project__title title">Dự án cá nhân</p>
              <div className="CV1__content--right__project--item">
                <div className="CV1__content--right__project--item__nameProject">
                    <p className="CV1__content--right__project--item__nameProject__title">
                    Shoppe
                    </p>
                    <p className="CV1__content--right__project--item__nameProject__time">
                    9/2023- 8/2024    
                    </p>
                </div>
                <p className="CV1__content--right__project--item__discription">
                  Trang web shoppe
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
