import React from "react";
import "./Cv3.scss";

export default function Cv3() {
  return (
    <div style={{ width: "70vw" }}>
      <div style={{ width: "100vw", height: "100px",backgroundColor:"BC2228" }} className="cv3_header"></div>
      <div className="cv3_body">
        <div className="cv3_body--info">
          <img
            className="cv3_body--info-photo"
            src="./src/assets/images/cv3/photo.jpg"
          ></img>
          <div style={{ marginTop: "30px" }}>
            <h2>Thông tin</h2>
            <div className="cv3_body--info-contact">
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
                className="cv3_body--info-contact--phone"
              >
                <img src="./src/assets/images/cv3/phone.svg.svg"></img>
                <p style={{ fontSize: "20px" }}>0852534765</p>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
                className="cv3_body--info-contact--phone"
              >
                <img src="./src/assets/images/cv3/mail.svg"></img>
                <p style={{ fontSize: "20px" }}>Phamquanghao@gmail.com</p>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
                className="cv3_body--info-contact--phone"
              >
                <img src="./src/assets/images/cv3/map-pin.svg"></img>
                <p style={{ fontSize: "20px" }}>Hà Nội</p>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
                className="cv3_body--info-contact--phone"
              >
                <img src="./src/assets/images/cv3/birthday.svg"></img>
                <p style={{ fontSize: "20px" }}>03/04/1999</p>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
                className="cv3_body--info-contact--phone"
              >
                <img src="./src/assets/images/cv3/mail.svg"></img>
                <p style={{ fontSize: "20px" }}>phamquanghao.github.com</p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "30px" }}>
            <h2>Học vấn</h2>
            <div className="cv3_body--info-contact">
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "black",
                    borderRadius: "50%",
                  }}
                ></div>
                <div style={{ fontSize: "22px" }}>
                  Học viện Đào tạo Rikkei Academy
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "16px",
                  paddingBottom: "10px",
                }}
                className="cv3_body--info-contact--phone"
              >
                <div style={{ marginLeft: "20px", marginTop: "10px" }}>
                  {" "}
                  Full Stack-JavaScript
                </div>
                <div style={{ marginLeft: "20px", marginTop: "10px" }}>
                  {" "}
                  09/2023 - 05/2024
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "30px" }}>
            <h2>Chứng Chỉ</h2>
            <div className="cv3_body--info-contact">
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    width: "14px",
                    height: "10px",
                    backgroundColor: "black",
                    borderRadius: "50%",
                    marginTop: "-30px",
                  }}
                ></div>
                <div style={{ fontSize: "22px" }}>
                  Fullstack developer javascript Rikkei Academy
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "30px" }}>
            <h2>Kỹ năng</h2>
            <div className="cv3_body--info-contact">
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    width: "14px",
                    height: "10px",
                    backgroundColor: "black",
                    borderRadius: "50%",
                    // marginTop: "-30px",
                  }}
                ></div>
                <div style={{ fontSize: "18px" }}>
                  <span style={{ fontSize: "22px" }}>Font-end :</span> Html,
                  Css, Javascript
                </div>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    width: "14px",
                    height: "10px",
                    backgroundColor: "black",
                    borderRadius: "50%",
                    // marginTop: "-30px",
                  }}
                ></div>
                <div style={{ fontSize: "18px" }}>
                  <span style={{ fontSize: "22px" }}>Back-end :</span> Nodejs,
                  Express, Mongodb
                </div>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    width: "14px",
                    height: "10px",
                    backgroundColor: "black",
                    borderRadius: "50%",
                    // marginTop: "-30px",
                  }}
                ></div>
                <div style={{ fontSize: "18px" }}>
                  <span style={{ fontSize: "22px" }}>Database :</span> Mysql,
                  Postgresql
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "30px" }}>
            <h2>Ngoại ngữ</h2>
            <div className="cv3_body--info-contact">
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    width: "14px",
                    height: "10px",
                    backgroundColor: "black",
                    borderRadius: "50%",
                    // marginTop: "-30px",
                  }}
                ></div>
                <div style={{ fontSize: "18px" }}>
                  <span style={{ fontSize: "22px" }}>Tiếng nhật :</span> N2
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "30px" }}>
            <h2>Kỹ Năng Mềm</h2>
            <div className="cv3_body--info-contact">
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    width: "14px",
                    height: "10px",
                    backgroundColor: "black",
                    borderRadius: "50%",
                    // marginTop: "-30px",
                  }}
                ></div>
                <div style={{ fontSize: "18px" }}>
                  <span style={{ fontSize: "22px" }}>Làm việc nhóm </span>
                </div>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    width: "14px",
                    height: "10px",
                    backgroundColor: "black",
                    borderRadius: "50%",
                    // marginTop: "-30px",
                  }}
                ></div>
                <div style={{ fontSize: "18px" }}>
                  <span style={{ fontSize: "22px" }}>Giao tiếp tốt</span>
                </div>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    width: "14px",
                    height: "10px",
                    backgroundColor: "black",
                    borderRadius: "50%",
                    // marginTop: "-30px",
                  }}
                ></div>
                <div style={{ fontSize: "18px" }}>
                  <span style={{ fontSize: "22px" }}>Tự học</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cv3_body--content">
          <div style={{ textAlign: "center" }}>
            <h1>Phạm Quang Hào</h1>
            <h3 style={{ marginTop: "5px", color: "gray" }}>
              SOFTWARE DEVELOPER
            </h3>
            <div
              style={{ marginTop: "30px", borderBottom: "1px solid black" }}
            ></div>
          </div>
          <div>
            <h2 style={{ marginTop: "20px" }}>Mục tiêu nghề nghiệp</h2>
            <p style={{ fontSize: "18px" }}>
              Mục tiêu ngắn hạn : Nắm vững ngôn ngữ JavaScript, thành thạo hơn
              về các thư viện. Tích luỹ kinh nghiệm với các hệ thống cơ sở dữ
              liệu. Trong vòng 1 năm tới mong muốn được trở thành junior backend
              và thi đỗ chứng chỉ TOEIC 500.
            </p>
            <p style={{ marginTop: "20px", fontSize: "18px" }}>
              Mục tiêu dài hạn : Trong vòng 1 - 2 năm trở thành một Developer
              xuất sắc của công ty. Thành thạo thêm các ngôn ngữ lập trình khác
              (Java).
            </p>
          </div>
          <div>
            <h2>Kinh nghiệm làm việc</h2>
            <div style={{ padding: "20px", borderLeft: "1px solid black" }}>
              <div>Doanh Nghiệp Regina Miracle International Viet Nam A</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "22px",
                }}
              >
                <div>Trợ lý sản xuất</div>
                <div> 2/2021 - 1/2022</div>
              </div>
              <div style={{ marginTop: "20px", display: "flex", gap: "30px" }}>
                <div
                  style={{
                    width: "15px",
                    height: "10px",
                    backgroundColor: "black",
                    borderRadius: "50%",
                  }}
                ></div>
                <div style={{ fontSize: "18px", marginTop: "-7px" }}>
                  Theo dõi quản lý đơn hàng , đảm bảo các đơn hàng được xuất đi
                  đúng ngày. Tính khối lượng nguyên vật liệu sử dụng và phân
                  phối đến các dây chuyền may. Báo cáo tiến độ sản xuất hàng
                  ngày.
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>Dự Án</h2>
            <div style={{ padding: "20px", borderLeft: "1px solid black" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "22px",
                }}
              >
                <div>Trang web bán thực phẩm(Cá nhân)</div>
                <div> 12/2023 - 1/2024 </div>
              </div>
              <div style={{ marginTop: "20px", display: "flex", gap: "30px" }}>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "black",
                    borderRadius: "50%",
                  }}
                ></div>
                <div style={{ fontSize: "22px", marginTop: "-15px" }}>
                  Nhiệm vụ :
                  <p>
                    {" "}
                    + Phân tích : Các chức năng chính của trang web, xây dựng cơ
                    sở dữ liệu,{" "}
                  </p>
                  <p>
                    {" "}
                    + Viết API : CRUD cơ sở dữ liệu, doanh thu, gửi mail cho
                    khách hàng...{" "}
                  </p>
                </div>
              </div>
              <div style={{ marginTop: "20px", display: "flex", gap: "30px" }}>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "black",
                    borderRadius: "50%",
                  }}
                ></div>
                <div style={{ fontSize: "22px", marginTop: "-15px" }}>
                  Các công nghệ :
                  <p> + Font-end : ReactJS , Tailiwnd , Bootstrap </p>
                  <p>
                    {" "}
                    + Back-end : Nestjs, Typeorm, Restful API, nodemailer, xlsx{" "}
                  </p>
                  <p> + Database : Mysql </p>
                </div>
              </div>
              <div style={{ marginTop: "20px", display: "flex", gap: "30px" }}>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "black",
                  borderRadius: "50%",
                }}
              ></div>
              <div style={{ fontSize: "22px", marginTop: "-15px" }}>
                Link demo :{" "} phamquanghao@gmail.com
               
              </div>
            </div>
            </div>
            <div style={{ padding: "20px", borderLeft: "1px solid black" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "22px",
              }}
            >
              <div>Trang web bán thực phẩm(Cá nhân)</div>
              <div> 12/2023 - 1/2024 </div>
            </div>
            <div style={{ marginTop: "20px", display: "flex", gap: "30px" }}>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "black",
                  borderRadius: "50%",
                }}
              ></div>
              <div style={{ fontSize: "22px", marginTop: "-15px" }}>
                Nhiệm vụ :
                <p>
                  {" "}
                  + Phân tích : Các chức năng chính của trang web, xây dựng cơ
                  sở dữ liệu,{" "}
                </p>
                <p>
                  {" "}
                  + Viết API : CRUD cơ sở dữ liệu, doanh thu, gửi mail cho
                  khách hàng...{" "}
                </p>
              </div>
            </div>
            <div style={{ marginTop: "20px", display: "flex", gap: "30px" }}>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "black",
                  borderRadius: "50%",
                }}
              ></div>
              <div style={{ fontSize: "22px", marginTop: "-15px" }}>
                Các công nghệ :
                <p> + Font-end : ReactJS , Tailiwnd , Bootstrap </p>
                <p>
                  {" "}
                  + Back-end : Nestjs, Typeorm, Restful API, nodemailer, xlsx{" "}
                </p>
                <p> + Database : Mysql </p>
              </div>
            </div>
            <div style={{ marginTop: "20px", display: "flex", gap: "30px" }}>
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: "black",
                borderRadius: "50%",
              }}
            ></div>
            <div style={{ fontSize: "22px", marginTop: "-15px" }}>
              Link demo :{" "} phamquanghao@gmail.com
             
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
