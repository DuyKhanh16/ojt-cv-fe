import React from "react";
import "./cv4.scss";
export default function Cv4() {
  return (
    <div style={{ width: "100vw" }}>
    <div className="cv4_header">
      <div className="cv4_header--img">
        <img
          className="cv4_header--img-photo"
          src="./src/assets/images/cv3/photo.jpg"
        ></img>
      </div>
      <div className="cv4_header--info">
        <div>
          <h1 className="cv4_header--info-name">Phạm Quang Hào</h1>
          <h3 className="cv4_header--info-position">SOFTWARE DEVELOPER</h3>
        </div>
        <div className="cv4_header--info-contact-container">
          <div className="cv4_header--info-contact">
            <div
              style={{ marginTop: "30px" }}
              className="cv4_header--info-contact--phone"
            >
              <img
                className="cv4_header--info-contact--phone-logo"
                src="./src/assets/images/cv3/phone.svg.svg"
              ></img>
              <p>0852534765</p>
            </div>
            <div className="cv4_header--info-contact--email">
              <img
                src="./src/assets/images/cv3/mail.svg"
                className="cv4_header--info-contact--email-logo"
              ></img>
              <p>Phamquanghao@gmail.com</p>
            </div>
            <div className="cv4_header--info-contact--address">
              <img
                src="./src/assets/images/cv3/map-pin.svg"
                className="cv4_header--info-contact--address-logo"
              ></img>
              <p>Hà nội</p>
            </div>
          </div>
          <div className="cv4_header--info-social">
            <div
              style={{ marginTop: "30px" }}
              className="cv4_header--info-contact-birthday"
            >
              <img
                src="./src/assets/images/cv3/birthday.svg"
                className="cv4_header--info-contact-birthday-logo"
              ></img>
              <p>01/01/2000</p>
            </div>
            <div className="cv4_header--info-contact-linkgithub">
              <img
                src="./src/assets/images/cv3/mail.svg"
                className="cv4_header--info-contact-linkgithub-logo"
              ></img>
              <p>Phamquanghao.github.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="cv4_body">
      <div className="cv4_body-AboutMe">
        <div className="cv4_body-AboutMe-title"> About Me</div>
        <div className="cv4_body-AboutMe-content">
          <p>
            Bạn phải thật sự cẩn trọng trong cách trả lời của mình. Nếu không,
            bạn sẽ thất bại về vấn đề tri nhận các yêu cầu phản hồi thông
            điệp. Dù bạn cố tình hay vô tình (thiếu sự trải nghiệm), bạn cũng
            không nên khiến mình thiếu chuyên nghiệp.
          </p>
          <p>
            Tôi hy vọng với những gì mình chia sẻ, mình có thể may mắn trở
            thành một mảnh ghép của công ty.
          </p>
        </div>
      </div>
      <div className="cv4_body-Eduation">
        <div className="cv4_body-Eduation-title">Education</div>
        <div className="cv4_body-Eduation-content">
          <div className="cv4_body-Eduation-content-item1">
            <p className="cv4_body-Eduation-content-item1-title">
              Rikkei Academy - Học viện Đào tạo Công nghệ
            </p>
            <div className="cv4_body-Eduation-content-item1-info">
              <div className="cv4_body-Eduation-content-item1-time">
                10/2023 - 4/2024
              </div>
              <div className="cv4_body-Eduation-content-item1-line"></div>
              <div className="cv4_body-Eduation-content-item1-location">
                Full Stack JavaScript
              </div>
            </div>
          </div>
          <div
            style={{ marginTop: "40px" }}
            className="cv4_body-Eduation-content-item1"
          >
            <p className="cv4_body-Eduation-content-item1-title">
              Rikkei Academy - Học viện Đào tạo Công nghệ
            </p>
            <div className="cv4_body-Eduation-content-item1-info">
              <div className="cv4_body-Eduation-content-item1-time">
                10/2023 - 4/2024
              </div>
              <div className="cv4_body-Eduation-content-item1-line"></div>
              <div className="cv4_body-Eduation-content-item1-location">
                Full Stack JavaScript
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cv4_body-Skill">
        <div className="cv4_body-Skill-title"> Skill</div>
        <div className="cv4_body-Skill-content">
          <div className="cv4_body-Skill-content-item1">
            <div className="cv4_body-Skill-content-item1-Excellent">
              Excellent
            </div>
            <div className="cv4_body-Skill-content-item1-content">
              <div className="cv4_body-Skill-content-item1-content-item">
                Java
              </div>
              <div className="cv4_body-Skill-content-item1-content-item">
                Python
              </div>
              <div className="cv4_body-Skill-content-item1-content-item">
                RESTfuk APIS
              </div>
              <div className="cv4_body-Skill-content-item1-content-item">
                {" "}
                C#
              </div>
            </div>
          </div>
          <div
            style={{ marginTop: "50px" }}
            className="cv4_body-Skill-content-item2"
          >
            <div className="cv4_body-Skill-content-item2-Excellent">
              Intermediate
            </div>
            <div className="cv4_body-Skill-content-item2-content">
              <div className="cv4_body-Skill-content-item2-content-item">
                Java
              </div>
              <div className="cv4_body-Skill-content-item2-content-item">
                Python
              </div>
              <div className="cv4_body-Skill-content-item2-content-item">
                RESTfuk APIS
              </div>
              <div className="cv4_body-Skill-content-item2-content-item">
                {" "}
                C#
              </div>
            </div>
          </div>
          <div
            style={{ marginTop: "50px" }}
            className="cv4_body-Skill-content-item3"
          >
            <div className="cv4_body-Skill-content-item3-Excellent">
              Beginer
            </div>
            <div className="cv4_body-Skill-content-item3-content">
              <div className="cv4_body-Skill-content-item3-content-item">
                Java
              </div>
              <div className="cv4_body-Skill-content-item3-content-item">
                Python
              </div>
              <div className="cv4_body-Skill-content-item3-content-item">
                RESTfuk APIS
              </div>
              <div className="cv4_body-Skill-content-item3-content-item">
                {" "}
                C#
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cv4_body-work-Experience">
        <div className="cv4_body-work-Experience-title">Work Experience</div>
        <div className="cv4_body-work-Experience-content">
          <div className="cv4_body-work-Experience-content-time">
            {" "}
            06/2014-PRESENT
          </div>
          <div className="cv4_body-work-Experience-content-info">
            <div className="cv4_body-work-Experience-content-info-name">
              SOFTWARE DEVELOPER
            </div>
            <div className="cv4_body-work-Experience-content-info-line"></div>
            <div className="cv4_body-work-Experience-content-info-location">
              Zezo-Day Squard
            </div>
          </div>
          <div
            style={{ marginTop: "20px" }}
            className="cv4_body-work-Experience-content-detail"
          >
            <ul>
              <li>
                When I’m not busy with work, I’m an avid [Your
                Hobbies/Interests] enthusiast.
              </li>
              <li>
                I’m excited to connect with like-minded individuals who share
                a passion for [Shared Interest/Hobby].{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="cv4_body-project">
        <div className="cv4_body-project-title">Project</div>
        <div className="cv4_body-project-content">
          <div className="cv4_body-project-content-item">
            <div className="cv4_body-project-content-item-name">
              Secure Authentication System
            </div>
            <div className="cv4_body-project-content-item-line"></div>
            <div className="cv4_body-project-content-item-time">
              06/05/2014-05/06/2018
            </div>
          </div>
          <div className="cv4_body-project-content-item2">
            <div className="cv4_body-project-content-item-line"></div>
            <div className="cv4_body-project-content-item-title">
              <span style={{ fontWeight: "700", color: "black" }}>
                Project description :
              </span>{" "}
              I’m excited to connect with like-minded individuals who share a
              passion for [Shared Interest/Hobby].{" "}
            </div>
          </div>

          <div className="cv4_body-project-content-item3">
            <div style={{ fontWeight: "700", color: "black" ,padding: "10px"}} className="cv3_body-project-content-item-title">Responsive</div>
            <div>
              <ul>
                <li>Home page</li>
                <li>Admin</li>
                <li>Login</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
