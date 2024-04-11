import React from 'react'
import "./CV2.scss";
import avatar from "../../../assets/images/cv/ACg8ocILX9TfOIrNEplYDawUBSv1Rpw3rLnuugZCNRefPEMyjM6NXIV4=s96-c.jpg";
import phonew from "../../../assets/images/cv/phonew.svg";
import emailw from "../../../assets/images/cv/mailw.svg";
import bdw from "../../../assets/images/cv/bdw.svg";
import mapw from "../../../assets/images/cv/mapw.svg";
export default function CV2() {
  return (
    <div className="CV2__container">
        <div className="CV2__header">
          <div className="CV2__header--left">
            <p className="CV2__header--left__name">
              <strong>TRẦN VĂN HOÀNG</strong>
            </p>
            <p className="CV2__header--left__job">developer</p>
          </div>
          <div className="CV2__header--right">
            <div className="CV2__header--right__avatar">
              <img src={avatar} alt="" />
            </div>
          </div>
        </div>
        <div className="CV2__content">
          <div className="CV2__content--left">
            <div className="CV2__content--left__yourInfor">
              <p className="CV2__content--left__yourInfor__title title">
                Thông tin cá nhân
              </p>
              <div className="CV2__content--left__yourInfor--phone">
              <span class="material-symbols-outlined" >
                call
                </span>
                <p>Thêm số điện thoại</p>
              </div>
              <div className="CV2__content--left__yourInfor--email">
              <span class="material-symbols-outlined">
                    mail
                    </span>
                <p>hoangbaohs22@gmail.com</p>
              </div>
              <div className="CV2__content--left__yourInfor--date">
              <span class="material-symbols-outlined">
                calendar_month
                </span>
                <p>Thêm ngày sinh</p>
              </div>
              <div className="CV2__content--left__yourInfor--address">
              <span class="material-symbols-outlined">
                location_on
                </span>
                <p>Thêm nơi ở hiện tại</p>
              </div>
            </div>
            <div className="CV2__content--left__education">
              <p className="CV2__content--left__education__title title">
                Học vấn
              </p>
              <div className="CV2__content--left__education--item">
                <p className="CV2__content--left__education--item__school">
                  Đại học Bách Khoa Hà Nội
                </p>
                <p className="CV2__content--left__education--item__job">
                  Công nghệ thông tin
                </p>
                <p className="CV2__content--left__education--item__time">
                  9/2019-10/2023
                </p>
              </div>
              <div className="CV2__content--left__education--item">
                <p className="CV2__content--left__education--item__school">
                  Rikkei Academy
                </p>
                <p className="CV2__content--left__education--item__job">
                  JavaScript
                </p>
                <p className="CV2__content--left__education--item__time">
                  9/2024-10/2024
                </p>
              </div>
            </div>
            <div className="CV2__content--left__skill">
              <p className="CV2__content--left__skill__title title">Kĩ năng</p>
              <div className="CV2__content--left__skill__item">
                <p className="CV2__content--left__skill__item__level">
                  Trung bình
                </p>
                <div className="CV2__content--left__skill__item__nameSkill">
                  Java Script
                </div>
              </div>
            </div>
            <div className="CV2__content--left__certificate">
              <p className="CV2__content--left__certificate__title title">
                Chứng chỉ
              </p>
              <div className="CV2__content--left__certificate--item">
                <p className="CV2__content--left__certificate--item__name">
                  Toeic 750
                </p>
                <p className="CV2__content--left__certificate--item__address">
                  Hà Nội
                </p>
                <p className="CV2__content--left__certificate--item__time">
                  9/2024-10/2028
                </p>
              </div>
            </div>
          </div>
          <div className="CV2__content--line"></div>
          <div className="CV2__content--right">
            <div className="CV2__content--right__introduce">
              <p className="CV2__content--right__introduce__title title">
                Giới thiệu thông tin
              </p>
              <div className="CV2__content--right__introduce__content">
              Xin chào, tôi là Hòa, năm nay tôi 26 tuổi. Tôi đã có kinh nghiệm làm tại công ty ABC và làm freelancer cho nhiều dự án về game, du lịch, bất động sản, chứng khoán… Điều tôi đang tìm kiếm đó là môi trường làm việc ổn định, chuyên nghiệp để phát huy hết khả năng của mình.
              </div>
            </div>
            <div className="CV2__content--right__experience">
              <p className="CV2__content--right__experience__title title">
                Kinh nghiệm làm việc
              </p>
              <div className="CV2__content--right__experience--item">
                <div className="CV2__content--right__experience--item__role">
                    <p className="CV2__content--right__experience--item__role__title">
                    Fresher
                    </p>
                    <p className="CV2__content--right__experience--item__role__time">
                    9/2023- 8/2024    
                    </p>
                </div>
                <p className="CV2__content--right__experience--item__company">
                    RikkeiSOFT
                </p>
                <p className="CV2__content--right__experience--item__discription">
                  Tối ưu hóa trang E-Learning
                </p>
              </div>
            </div>
            <div className="CV2__content--right__project">
              <p className="CV2__content--right__project__title title">Dự án cá nhân</p>
              <div className="CV2__content--right__project--item">
                <div className="CV2__content--right__project--item__nameProject">
                    <p className="CV2__content--right__project--item__nameProject__title">
                    Shoppe
                    </p>
                    <p className="CV2__content--right__project--item__nameProject__time">
                    9/2023- 8/2024    
                    </p>
                </div>
                <p className="CV2__content--right__project--item__discription">
                  Trang web shoppe
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
  )
}
