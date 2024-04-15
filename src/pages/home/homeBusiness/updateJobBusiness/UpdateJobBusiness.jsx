import React, { useState } from "react";
import Header from "../../../../components/header/Header";
import FormSearch from "../../../../components/formSearch/FormSearch";
import "./UpdateJobBusiness.scss";
import Footer from "../../../../components/footer/Footer";
import { Modal } from "antd";
import "../../../../components/confirm/Confirm";

// const { confirm } = Modal;

export default function UpdateJobBusiness() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Header></Header>
      <FormSearch></FormSearch>
      <div className="job__detail--container">
        <div className="job__detail--title" style={{ color: "#767F8C" }}>
          <p>Trang chủ / </p> <p>Việc làm / </p> <p>Graphics Designer /</p>{" "}
          <p style={{ color: "#18191C" }}>Job A Details</p>{" "}
        </div>
        <div className="job__detail--content">
          <div className="job__detail--company">
            <div className="job__detail--company--Logo">
              <div className="job__detail--company--Logo1">
                <img src="./src/assets/images/jobDetails/Rectangle 43.png"></img>
              </div>
              <div className="job__detail--company--Logo--name">
                <h2>Senior Ux Designer</h2>
                <div className="job__detail--company--Logo--name--address">
                  <div className="adress">at FPT Software</div>
                  <div
                    className="content"
                    style={{
                      fontSize: "18px",
                      backgroundColor: "#0BA02C",
                      width: "98px",
                      // padding: "4px, 12px, 4px, 12px",
                      textAlign: "center",
                      color: "white",
                      borderRadius: "3px",
                      height: "28px",
                    }}
                  >
                    Full-Time
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#E05151",
                      backgroundColor: "#FFEDED",
                      width: "83px",
                      height: "28px",
                      // textAlign:"center",
                      borderRadius: "40px",
                      padding: "3px 14px 3px 14px",
                    }}
                  >
                    Featured
                  </div>
                </div>
              </div>
            </div>
            <div className="job__detail--company--apply">
              <button className="job__detail--company--apply--delete">
                Xoá
              </button>
              <button
                onClick={showModal}
                className="job__detail--company--apply--apply"
              >
                Cập nhật thông tin
              </button>

              <Modal
                title="Cập nhật thông tin công việc"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okButtonProps={{
                  className: "customOkButton", // Sử dụng lớp CSS tùy chỉnh
                }}
                cancelButtonProps={{
                  className: "customCancelBtn", // Áp dụng class CSS tùy chỉnh cho nút Cancel
                }}
              >
                <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
                  Tên công việc
                </p>
                <input
                  style={{
                    width: "100%",
                    height: "40px",
                    marginBottom: "20px",
                  }}
                ></input>
                <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
                  Thời gian làm việc
                </p>
                <input
                  style={{
                    width: "100%",
                    height: "40px",
                    marginBottom: "20px",
                  }}
                ></input>
                <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
                  Tên công việc
                </p>
                <input
                  style={{
                    width: "100%",
                    height: "40px",
                    marginBottom: "20px",
                  }}
                ></input>
                <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
                  Mức lương
                </p>
                <input
                  style={{
                    width: "100%",
                    height: "40px",
                    marginBottom: "20px",
                  }}
                ></input>
                <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
                  Mô Tả Công việc
                </p>
                <textarea
                  type="area"
                  style={{
                    width: "100%",
                    height: "40px",
                    marginBottom: "20px",
                  }}
                ></textarea>
                <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
                  Yêu cầu công việc
                </p>
                <textarea
                  type="area"
                  style={{
                    width: "100%",
                    height: "40px",
                    marginBottom: "20px",
                  }}
                ></textarea>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <div style={{ color: "#BC2228", marginTop: "20px" }}>
                    Thời gian ứng tuyển :
                  </div>
                  <div>
                    {" "}
                    <p style={{ color: "#BC2228" }}>Start Date</p>
                    <p>7/9/2024</p>
                    <div
                      style={{
                        width: "100%",
                        height: "1px",
                        backgroundColor: "#BC2228",
                        marginTop: "10px",
                      }}
                    ></div>
                  </div>
                  <div style={{ color: "#BC2228", marginTop: "20px" }}>to</div>
                  <div>
                    {" "}
                    <p style={{ color: "#BC2228" }}>End Date</p>
                    <p>7/9/2024</p>
                    <div
                      style={{
                        width: "100%",
                        height: "1px",
                        backgroundColor: "#BC2228",
                        marginTop: "10px",
                      }}
                    ></div>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
          <div className="job__detail--description">
            <div className="job__detail--description--title">
              <h2>Job Description</h2>
              <p>
                {" "}
                Nhưng, cố nhân từng nói, cuộc đời chỉ cần một người khiến ta
                ngưỡng mộ, để cả đời noi gương, cả đời thương mến. Vậy là quá đủ
                rồi”.
              </p>
              <p>
                GIÁO DỤC Những bài văn điểm 10 chấn động mạng Quyên Quyên Chủ
                nhật, 26/10/2014 09:37 (GMT+7)Những bài văn viết về người thầy
                cũ đã nghỉ hưu, người bố làm nghề xe ôm hay người mẹ đơn thân
                thần tảo nuôi con… đã lấy được nước mắt của người đọc. Bài văn
                về thầy giáo cũ gây xúc động Ngày 16/10, Vũ Phương Thảo (lớp
                10A1, THPT Định Hóa) được biết đến với bài văn điểm 10 về người
                thầy có những cảm xúc trong sáng, chân thành. Trong bài văn,
                Thảo viết: “Máy quay dường như đang chậm lại, từng cảnh từng nét
                hiện lên rõ ràng. Tôi thấy thầy đang lụi hụi trồng rau, chăm sóc
                con chó lông trắng đen già khụ, thấy cả chúng tôi ngày đó, trong
                những ngày vất vả nhưng yên bình. Tôi nghĩ, có lẽ đó là những
                ngày hạnh phúc và vui vẻ nhất tôi từng có. Sau này, khi bước đi
                trên đường đời chông gai, có thể sẽ chẳng còn ai chỉ bảo, dạy dỗ
                tôi tận tình như thầy đã từng, có thể sẽ chẳng có ai lo tôi liệu
                có ngủ đủ giấc, liệu có stress khi nhồi nhét quá nhiều. Nhưng,
                cố nhân từng nói, cuộc đời chỉ cần một người khiến ta ngưỡng mộ,
                để cả đời noi gương, cả đời thương mến. Vậy là quá đủ rồi”.
              </p>
              <p>
                Trong bài văn, Thảo viết: “Máy quay dường như đang chậm lại,
                từng cảnh từng nét hiện lên rõ ràng. Tôi thấy thầy đang lụi hụi
                trồng rau, chăm sóc con chó lông trắng đen già khụ, thấy cả
                chúng tôi ngày đó, trong những ngày vất vả nhưng yên bình. Tôi
                nghĩ, có lẽ đó là những ngày hạnh phúc và vui vẻ nhất tôi từng
                có. Sau này, khi bước đi trên đường đời chông gai, có thể sẽ
                chẳng còn ai chỉ bảo, dạy dỗ tôi tận tình như thầy đã từng, có
                thể sẽ chẳng có ai lo tôi liệu có ngủ đủ giấc, liệu có stress
                khi nhồi nhét quá nhiều. Nhưng, cố nhân từng nói, cuộc đời chỉ
                cần một người khiến ta ngưỡng mộ, để cả đời noi gương, cả đời
                thương mến. Vậy là quá đủ rồi”.
              </p>
              <h2>Requirements</h2>
              <ul>
                <li>
                  {" "}
                  Trong bài văn, Thảo viết: “Máy quay dường như đang chậm lại,
                  từng cảnh từng nét hiện lên rõ ràng. Tôi thấy thầy đang lụi
                  hụi trồng rau, chăm sóc con chó lông trắng đen già khụ, thấy
                  cả chúng tôi ngày đó,{" "}
                </li>
                <li>
                  Trong bài văn, Thảo viết: “Máy quay dường như đang chậm lại,
                  từng cảnh từng nét hiện lên rõ ràng.
                </li>
                <li>
                  trong những ngày vất vả nhưng yên bình. Tôi nghĩ, có lẽ đó là
                  những ngày hạnh phúc và vui vẻ nhất tôi từng có. Sau này, khi
                  bước đi trên đường đời chông gai, có thể sẽ chẳng còn ai chỉ
                  bảo, dạy dỗ tôi tận tình như thầy đã từng, có thể sẽ chẳng có
                  ai lo tôi{" "}
                </li>
                <li>
                  Nhưng, cố nhân từng nói, cuộc đời chỉ cần một người khiến ta
                  ngưỡng mộ, để cả đời noi gương, cả đời thương mến. Vậy là quá
                  đủ rồi”.
                </li>
              </ul>
              <h2>Desirable</h2>
              <ul>
                <li>
                  {" "}
                  Trong bài văn, Thảo viết: “Máy quay dường như đang chậm lại,
                  từng cảnh từng nét hiện lên rõ ràng. Tôi thấy thầy đang lụi
                  hụi trồng rau, chăm sóc con chó lông trắng đen già khụ, thấy
                  cả chúng tôi ngày đó,{" "}
                </li>
                <li>
                  Trong bài văn, Thảo viết: “Máy quay dường như đang chậm lại,
                  từng cảnh từng nét hiện lên rõ ràng.
                </li>
                <li>
                  trong những ngày vất vả nhưng yên bình. Tôi nghĩ, có lẽ đó là
                  những ngày hạnh phúc và vui vẻ nhất tôi từng có. Sau này, khi
                  bước đi trên đường đời chông gai, có thể sẽ chẳng còn ai chỉ
                  bảo, dạy dỗ tôi tận tình như thầy đã từng, có thể sẽ chẳng có
                  ai lo tôi{" "}
                </li>
              </ul>
              <h2>Benefits</h2>
              <ul>
                <li>
                  {" "}
                  Trong bài văn, Thảo viết: “Máy quay dường như đang chậm lại,
                  từng cảnh từng nét hiện lên rõ ràng. Tôi thấy thầy đang lụi
                  hụi trồng rau, chăm sóc con chó lông trắng đen già khụ, thấy
                  cả chúng tôi ngày đó,{" "}
                </li>
                <li>
                  Trong bài văn, Thảo viết: “Máy quay dường như đang chậm lại,
                  từng cảnh từng nét hiện lên rõ ràng.
                </li>
                <li>
                  trong những ngày vất vả nhưng yên bình. Tôi nghĩ, có lẽ đó là
                  những ngày hạnh phúc và vui vẻ nhất tôi từng có. Sau này, khi
                  bước đi trên đường đời chông gai, có thể sẽ chẳng còn ai chỉ
                  bảo, dạy dỗ tôi tận tình như thầy đã từng, có thể sẽ chẳng có
                  ai lo tôi{" "}
                </li>
                <li>
                  Trong bài văn, Thảo viết: “Máy quay dường như đang chậm lại,
                  từng cảnh từng nét hiện lên rõ ràng.
                </li>
                <li>
                  Trong bài văn, Thảo viết: “Máy quay dường như đang chậm lại,
                  từng cảnh từng nét hiện lên rõ ràng.
                </li>
                <li>
                  Trong bài văn, Thảo viết: “Máy quay dường như đang chậm lại,
                  từng cảnh từng nét hiện lên rõ ràng.
                </li>
                <li>
                  Trong bài văn, Thảo viết: “Máy quay dường như đang chậm lại,
                  từng cảnh từng nét hiện lên rõ ràng.
                </li>
              </ul>
            </div>
            <div>
              <div className="job__detail--description--details">
                <div style={{ textAlign: "center" }}>
                  <h3 style={{ marginBottom: "10px" }}>Salary (Usd)</h3>
                  <p style={{ color: "#0BA02C", fontSize: "18px" }}>
                    $10,000 - $15,000
                  </p>
                  <p style={{ color: "gray", fontSize: "14px" }}>
                    Yearly Salary
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "#E7F0FA",
                    height: "96px",
                    width: "2px",
                  }}
                ></div>
                <div style={{ textAlign: "center" }}>
                  <img
                    style={{ marginLeft: "40px" }}
                    src="./src/assets/images/jobDetails/MapTrifold.png"
                  ></img>
                  <h3>Job Location</h3>
                  <p style={{ color: "gray", fontSize: "14px" }}>
                    Hồ Chí Minh, Vietnam
                  </p>
                </div>
              </div>
              <div className="job__detail--description--overview">
                <div className="line1">
                  <h3 style={{ marginBottom: "10px" }}>Job Overview</h3>
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <div className="item">
                      <img
                        style={{ marginRight: "10px" }}
                        src="./src/assets/images/jobDetails/CalendarBlank.png"
                      ></img>
                      <p style={{ color: "gray", fontSize: "18px" }}>
                        Job Posted
                      </p>
                      <span>14 Jun, 2021</span>
                    </div>
                    <div className="item">
                      <img
                        style={{ marginRight: "10px" }}
                        src="./src/assets/images/jobDetails/Timer.png"
                      ></img>
                      <p style={{ color: "gray", fontSize: "18px" }}>
                        Job Posted
                      </p>
                      <span>14 Jun, 2021</span>
                    </div>
                    <div className="item">
                      <img
                        style={{ marginRight: "10px" }}
                        src="./src/assets/images/jobDetails/Stack.png"
                      ></img>
                      <p style={{ color: "gray", fontSize: "18px" }}>
                        Job Posted
                      </p>
                      <span>14 Jun, 2021</span>
                    </div>
                    <div className="item">
                      <img
                        style={{ marginRight: "10px" }}
                        src="./src/assets/images/jobDetails/Wallet.png"
                      ></img>
                      <p style={{ color: "gray", fontSize: "18px" }}>
                        Job Posted
                      </p>
                      <span>14 Jun, 2021</span>
                    </div>
                    <div className="item">
                      <img
                        style={{ marginRight: "10px" }}
                        src="./src/assets/images/jobDetails/briefcase.png"
                      ></img>
                      <p style={{ color: "gray", fontSize: "18px" }}>
                        Job Posted
                      </p>
                      <span>14 Jun, 2021</span>
                    </div>
                  </div>
                </div>
                <div className="line2"></div>
              </div>
              <div className="job__detail--description--Share">
                <div className="line1">
                  <h3 style={{ marginBottom: "10px" }}>Share thit Job :</h3>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <img src="./src/assets/images/jobDetails/Social button.png"></img>
                    <img src="./src/assets/images/jobDetails/Social button (1).png"></img>
                    <img src="./src/assets/images/jobDetails/Social button (2).png"></img>
                    <img src="./src/assets/images/jobDetails/Social button (3).png"></img>
                    <img src="./src/assets/images/jobDetails/Social button (4).png"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="job__detail--Relatedjob">
          <h1>Applied Candidates</h1>
          <div className="job__detail--Relatedjob--content">
            <div className="job__detail--Relatedjob--content--item">
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div>
                    <img src="./src/assets/images/jobDetails/Rectangle 43.png"></img>
                  </div>
                  <div style={{ marginLeft: "10px", marginTop: "20px" }}>
                    <h2>Nguyen van A</h2>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <div
                        style={{
                          backgroundColor: "#0BA02C",
                          width: "98px",
                          height: "28px",
                          // textAlign: "center",
                          padding: "3px 15px 3px 18px",
                          color: "white",
                          borderRadius: "3px",
                        }}
                      >
                        Front-end
                      </div>
                      <div
                        style={{
                          width: "75px",
                          height: "28px",
                          backgroundColor: "#E7F0FA",
                          borderRadius: "40px",
                          padding: "3px 15px 3px 18px",
                          color: "#0A65CC",
                        }}
                      >
                        Fresher
                      </div>
                    </div>
                  </div>
                </div>
                <div className="img">
                  <img
                    className="img"
                    src="./src/assets/images/jobDetails/arrow.right.png"
                  ></img>
                </div>
              </div>

              <div
                className="Technical-skills"
                style={{
                  marginTop: "20px",
                  display: "flex",
                  gap: "10px",
                  fontSize: "16px",
                }}
              >
                Technical skills :
                <div
                  className="skill"
                  style={{
                    backgroundColor: "#E7F6EA",
                    width: "70px",
                    height: "20px",
                    padding: "0px 8px 1px 12px",
                    color: "#0BA02C",
                    borderRadius: "3px",
                    fontSize: "14px",
                  }}
                >
                  ReactJS
                </div>
                <div
                  style={{
                    backgroundColor: "#E7F6EA",
                    width: "70px",
                    height: "20px",
                    padding: "0px 8px 1px 12px",
                    color: "#0BA02C",
                    borderRadius: "3px",
                    fontSize: "14px",
                  }}
                >
                  NODEJS
                </div>
              </div>
              <div
                className="language"
                style={{
                  marginTop: "20px",
                  display: "flex",
                  gap: "10px",
                  fontSize: "16px",
                }}
              >
                Foregin language :
                <div
                  style={{
                    backgroundColor: "#FCE1D1",
                    width: "AUTO",
                    height: "20px",
                    padding: "0px 8px 1px 12px",
                    color: "#F16A1B",
                    borderRadius: "3px",
                    fontSize: "14px",
                  }}
                >
                  N2
                </div>
              </div>
              <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                <img
                  style={{ width: "20px", height: "20px" }}
                  src="./src/assets/images/jobDetails/MapPin.png"
                ></img>
                <div style={{ fontSize: "16px" }}>Hà Nội, Việt Nam</div>
              </div>
            </div>
            <div className="job__detail--Relatedjob--content--item">
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div>
                    <img src="./src/assets/images/jobDetails/Rectangle 43.png"></img>
                  </div>
                  <div style={{ marginLeft: "10px", marginTop: "20px" }}>
                    <h2>Nguyen van A</h2>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <div
                        style={{
                          backgroundColor: "#0BA02C",
                          width: "98px",
                          height: "28px",
                          // textAlign: "center",
                          padding: "3px 15px 3px 18px",
                          color: "white",
                          borderRadius: "3px",
                        }}
                      >
                        Front-end
                      </div>
                      <div
                        style={{
                          width: "75px",
                          height: "28px",
                          backgroundColor: "#E7F0FA",
                          borderRadius: "40px",
                          padding: "3px 15px 3px 18px",
                          color: "#0A65CC",
                        }}
                      >
                        Fresher
                      </div>
                    </div>
                  </div>
                </div>
                <div className="img">
                  <img
                    className="img"
                    src="./src/assets/images/jobDetails/arrow.right.png"
                  ></img>
                </div>
              </div>

              <div
                className="Technical-skills"
                style={{
                  marginTop: "20px",
                  display: "flex",
                  gap: "10px",
                  fontSize: "16px",
                }}
              >
                Technical skills :
                <div
                  className="skill"
                  style={{
                    backgroundColor: "#E7F6EA",
                    width: "70px",
                    height: "20px",
                    padding: "0px 8px 1px 12px",
                    color: "#0BA02C",
                    borderRadius: "3px",
                    fontSize: "14px",
                  }}
                >
                  ReactJS
                </div>
                <div
                  style={{
                    backgroundColor: "#E7F6EA",
                    width: "70px",
                    height: "20px",
                    padding: "0px 8px 1px 12px",
                    color: "#0BA02C",
                    borderRadius: "3px",
                    fontSize: "14px",
                  }}
                >
                  NODEJS
                </div>
              </div>
              <div
                className="language"
                style={{
                  marginTop: "20px",
                  display: "flex",
                  gap: "10px",
                  fontSize: "16px",
                }}
              >
                Foregin language :
                <div
                  style={{
                    backgroundColor: "#FCE1D1",
                    width: "AUTO",
                    height: "20px",
                    padding: "0px 8px 1px 12px",
                    color: "#F16A1B",
                    borderRadius: "3px",
                    fontSize: "14px",
                  }}
                >
                  N2
                </div>
              </div>
              <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                <img
                  style={{ width: "20px", height: "20px" }}
                  src="./src/assets/images/jobDetails/MapPin.png"
                ></img>
                <div style={{ fontSize: "16px" }}>Hà Nội, Việt Nam</div>
              </div>
            </div>
            <div className="job__detail--Relatedjob--content--item">
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div>
                    <img src="./src/assets/images/jobDetails/Rectangle 43.png"></img>
                  </div>
                  <div style={{ marginLeft: "10px", marginTop: "20px" }}>
                    <h2>Nguyen van A</h2>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <div
                        style={{
                          backgroundColor: "#0BA02C",
                          width: "98px",
                          height: "28px",
                          // textAlign: "center",
                          padding: "3px 15px 3px 18px",
                          color: "white",
                          borderRadius: "3px",
                        }}
                      >
                        Front-end
                      </div>
                      <div
                        style={{
                          width: "75px",
                          height: "28px",
                          backgroundColor: "#E7F0FA",
                          borderRadius: "40px",
                          padding: "3px 15px 3px 18px",
                          color: "#0A65CC",
                        }}
                      >
                        Fresher
                      </div>
                    </div>
                  </div>
                </div>
                <div className="img">
                  <img
                    className="img"
                    src="./src/assets/images/jobDetails/arrow.right.png"
                  ></img>
                </div>
              </div>

              <div
                className="Technical-skills"
                style={{
                  marginTop: "20px",
                  display: "flex",
                  gap: "10px",
                  fontSize: "16px",
                }}
              >
                Technical skills :
                <div
                  className="skill"
                  style={{
                    backgroundColor: "#E7F6EA",
                    width: "70px",
                    height: "20px",
                    padding: "0px 8px 1px 12px",
                    color: "#0BA02C",
                    borderRadius: "3px",
                    fontSize: "14px",
                  }}
                >
                  ReactJS
                </div>
                <div
                  style={{
                    backgroundColor: "#E7F6EA",
                    width: "70px",
                    height: "20px",
                    padding: "0px 8px 1px 12px",
                    color: "#0BA02C",
                    borderRadius: "3px",
                    fontSize: "14px",
                  }}
                >
                  NODEJS
                </div>
              </div>
              <div
                className="language"
                style={{
                  marginTop: "20px",
                  display: "flex",
                  gap: "10px",
                  fontSize: "16px",
                }}
              >
                Foregin language :
                <div
                  style={{
                    backgroundColor: "#FCE1D1",
                    width: "AUTO",
                    height: "20px",
                    padding: "0px 8px 1px 12px",
                    color: "#F16A1B",
                    borderRadius: "3px",
                    fontSize: "14px",
                  }}
                >
                  N2
                </div>
              </div>
              <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                <img
                  style={{ width: "20px", height: "20px" }}
                  src="./src/assets/images/jobDetails/MapPin.png"
                ></img>
                <div style={{ fontSize: "16px" }}>Hà Nội, Việt Nam</div>
              </div>
            </div>
            <div className="job__detail--Relatedjob--content--item">
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div>
                    <img src="./src/assets/images/jobDetails/Rectangle 43.png"></img>
                  </div>
                  <div style={{ marginLeft: "10px", marginTop: "20px" }}>
                    <h2>Nguyen van A</h2>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <div
                        style={{
                          backgroundColor: "#0BA02C",
                          width: "98px",
                          height: "28px",
                          // textAlign: "center",
                          padding: "3px 15px 3px 18px",
                          color: "white",
                          borderRadius: "3px",
                        }}
                      >
                        Front-end
                      </div>
                      <div
                        style={{
                          width: "75px",
                          height: "28px",
                          backgroundColor: "#E7F0FA",
                          borderRadius: "40px",
                          padding: "3px 15px 3px 18px",
                          color: "#0A65CC",
                        }}
                      >
                        Fresher
                      </div>
                    </div>
                  </div>
                </div>
                <div className="img">
                  <img
                    className="img"
                    src="./src/assets/images/jobDetails/arrow.right.png"
                  ></img>
                </div>
              </div>

              <div
                className="Technical-skills"
                style={{
                  marginTop: "20px",
                  display: "flex",
                  gap: "10px",
                  fontSize: "16px",
                }}
              >
                Technical skills :
                <div
                  className="skill"
                  style={{
                    backgroundColor: "#E7F6EA",
                    width: "70px",
                    height: "20px",
                    padding: "0px 8px 1px 12px",
                    color: "#0BA02C",
                    borderRadius: "3px",
                    fontSize: "14px",
                  }}
                >
                  ReactJS
                </div>
                <div
                  style={{
                    backgroundColor: "#E7F6EA",
                    width: "70px",
                    height: "20px",
                    padding: "0px 8px 1px 12px",
                    color: "#0BA02C",
                    borderRadius: "3px",
                    fontSize: "14px",
                  }}
                >
                  NODEJS
                </div>
              </div>
              <div
                className="language"
                style={{
                  marginTop: "20px",
                  display: "flex",
                  gap: "10px",
                  fontSize: "16px",
                }}
              >
                Foregin language :
                <div
                  style={{
                    backgroundColor: "#FCE1D1",
                    width: "AUTO",
                    height: "20px",
                    padding: "0px 8px 1px 12px",
                    color: "#F16A1B",
                    borderRadius: "3px",
                    fontSize: "14px",
                  }}
                >
                  N2
                </div>
              </div>
              <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                <img
                  style={{ width: "20px", height: "20px" }}
                  src="./src/assets/images/jobDetails/MapPin.png"
                ></img>
                <div style={{ fontSize: "16px" }}>Hà Nội, Việt Nam</div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
