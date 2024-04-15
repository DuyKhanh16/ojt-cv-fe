import React from "react";
import "./InformationUser.scss";
import cv from "../../../../assets/images/informationUser/cv 1.png";
import emailicon from "../../../../assets/images/informationUser/emailicon.png";
import fbicon from "../../../../assets/images/informationUser/fbicon.png";
import heart from "../../../../assets/images/informationUser/heart.png";
import LinkSimple from "../../../../assets/images/informationUser/LinkSimple.png";
import location from "../../../../assets/images/informationUser/location.circle.png";
import logoFPT from "../../../../assets/images/informationUser/logoFPT.png";
import MapTrifold from "../../../../assets/images/informationUser/MapTrifold.png";
import Social from "../../../../assets/images/informationUser/Social icon.png";
import twicon from "../../../../assets/images/informationUser/twicon.png";
export default function InformationUser() {
  return (
    <>
      <div className="informationUser__container">
        <div className="informationUser__nav">
          <p className="informationUser__nav__home">Trang chủ /</p>
          <p className="informationUser__nav__candidate">Ứng viên nổi bật / </p>
          <p className="informationUser__nav__name">Nguyen Van A</p>
        </div>
        <div className="informationUser__body">
          <div className="informationUser-header">
            <div className="informationUser-header--left">
              <img src={logoFPT} alt="" />
              <div className="informationUser-header--left__infor">
                <p>Nguyen Van A</p>
                <div className="informationUser-header--left__infor__list">
                  <div className="informationUser-header--left__infor__list__itemLeft">
                    Front-end
                  </div>
                  <div className="informationUser-header--left__infor__list__itemRight">
                    Fresher
                  </div>
                </div>
              </div>
            </div>
            <div className="informationUser-header--right">
              <div className="informationUser-header--right__icon">
                <img src={heart} alt="" />
              </div>
              <div className="informationUser-header--right__button">
                Đặt lịch phỏng vấn
              </div>
            </div>
          </div>
          <div className="informationUser-content">
            <div className="informationUser-content--left">
              <div className="informationUser-content--left__aboutInfor">
                <p className="informationUser-content--left__aboutInfor__title">
                  <strong>Mô tả về bản thân</strong>
                </p>{" "}
                <p className="informationUser-content--left__aboutInfor__content">
                Velstar is a Shopify Plus agency, and we partner with brands to help them grow, we also do the same with our people!
                Here at Velstar, we don't just make websites, we create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level. From Platform Migration, User Experience & User Interface Design, to Digital Marketing, we have a proven track record in delivering outstanding eCommerce solutions and driving sales for our clients.The role will involve translating project specifications into clean, test-driven, easily maintainable code. You will work with the Project and Development teams as well as with the Technical Director, adhering closely to project plans and delivering work that meets functional & non-functional requirements. You will have the opportunity to create new, innovative, secure and scalable features for our clients on the Shopify platformWant to work with us? You're in good company!
                </p>
                <div className="responsive__btn">Xem thêm</div>
              </div>
              <br />
              <div className="informationUser-content--left__experience">
                <p className="informationUser-content--left__experience__title">
                  <strong>Kinh nghiệm làm việc</strong>
                </p>
                <br />
                <ul>
                  <li>
                    Great troubleshooting and analytical skills combined with
                    the desire to tackle challenges head-on
                  </li>
                  <li>
                    3+ years of experience in back-end development working
                    either with multiple smaller projects simultaneously or
                    large-scale applications
                  </li>
                  <li>
                    Experience with HTML, JavaScript, CSS, PHP, Symphony and/or
                    Laravel
                  </li>
                  <li>
                    Working regularly with APIs and Web Services (REST,
                    GrapthQL, SOAP, etc)
                  </li>
                  <li>
                    Have experience/awareness in Agile application development,
                    commercial off-the-shelf software, middleware, servers and
                    storage, and database management
                  </li>
                </ul>
                <div className="responsive__btn">Xem thêm</div>
              </div>
              <br />
              <div className="informationUser-content--left__future">
                <p className="informationUser-content--left__future__title">
                  <strong>Định hướng phát triển</strong>
                </p>{" "}
                <br />
                <ul>
                  <li>
                    Great troubleshooting and analytical skills combined with
                    the desire to tackle challenges head-on
                  </li>
                  <li>
                    3+ years of experience in back-end development working
                    either with multiple smaller projects simultaneously or
                    large-scale applications
                  </li>
                  <li>
                    Experience with HTML, JavaScript, CSS, PHP, Symphony and/or
                    Laravel
                  </li>
                  <li>
                    Working regularly with APIs and Web Services (REST,
                    GrapthQL, SOAP, etc)
                  </li>
                  <li>
                    Have experience/awareness in Agile application development,
                    commercial off-the-shelf software, middleware, servers and
                    storage, and database management
                  </li>
                </ul>
                <div className="responsive__btn">Xem thêm</div>

              </div>
            </div>
            <div className="informationUser-content--right">
              <div className="informationUser-content--right__address">
                <div className="informationUser-content--right__address--top">
                  <img src={location} alt="" />
                  <p>Địa chỉ cá nhân</p>
                </div>
                <div className="informationUser-content--right__address--bottom">
                  <p>
                    Đường D1, Khu Công Nghệ Cao, Phường Tân Phú, Quận 9, Thành
                    phố Hồ Chí Minh
                  </p>
                </div>
              </div>
              <div className="informationUser-content--right__skills">
                <div className="informationUser-content--right__skills--top">
                  <img src={MapTrifold} alt="" />
                  <p>Kĩ năng</p>
                </div>
                <ul>
                  <li className="li_skill_name">
                    <div className="informationUser-content--right__skills--name">
                      Technical:
                    </div>
                    <div className="informationUser-content--right__skills--item">
                      ReactJs
                    </div>
                    <div className="informationUser-content--right__skills--item">
                      NodeJs
                    </div>
                  </li>
                  <li className="li_skill_name">
                    <div className="informationUser-content--right__skills--name">
                      Language:
                    </div>
                    <div className="informationUser-content--right__skills--item">
                      N2
                    </div>
                    <div className="informationUser-content--right__skills--item">
                      Toeic 700
                    </div>
                  </li>
                </ul>
              </div>
              <div className="informationUser-content--right__linkInfor">
                <p className="informationUser-content--right__linkInfor__title">
                  <strong>Thông tin cá nhân</strong>
                </p>
                <div className="informationUser-content--right__linkInfor__listLink">
                  <div className="informationUser-content--right__linkInfor__listLink__item1">
                    <img src={LinkSimple} alt="" />
                    <p>Copy Links</p>
                  </div>
                  <div className="informationUser-content--right__linkInfor__listLink__item2">
                    <img src={Social} alt="" />
                  </div>
                  <div className="informationUser-content--right__linkInfor__listLink__item3">
                    <img src={fbicon} alt="" />
                  </div>
                  <div className="informationUser-content--right__linkInfor__listLink__item4">
                    <img src={twicon} alt="" />
                  </div>
                  <div className="informationUser-content--right__linkInfor__listLink__item5">
                    <img src={emailicon} alt="" />
                  </div>
                </div>
              </div>
              <div className="informationUser-content--right__gotoCV">
                <div className="informationUser-content--right__gotoCV--top">
                  <img src={cv} alt="" />
                  <p>Truy cập CV của A để xem thêm</p>
                </div>
                <div className="informationUser-content--right__gotoCV--bottom">
                  <div className="informationUser-content--right__gotoCV--btn">
                    Truy cập CV
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
