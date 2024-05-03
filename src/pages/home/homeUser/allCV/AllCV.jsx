import React, { useEffect, useRef } from "react";
import "./AllCV.scss";
import cv1img from "../../../../assets/images/cv/Screenshot 2024-04-18 001050.png";
import cv2img from "../../../../assets/images/cv/Screenshot 2024-04-18 001006.png";
import cv3img from "../../../../assets/images/cv/cv3.png";
import cv4img from "../../../../assets/images/cv/cv4.png";
import CV2 from "../../../../components/cv/cv2/CV2";
import CV1 from "../../../../components/cv/cv1/CV1";
import CV3 from "../../../../components/cv/cv3/Cv3";
import CV4 from "../../../../components/cv/cv4/Cv4";
import { useNavigate } from "react-router";
import privateAxios from "../../../../config/private.axios";
import { useReactToPrint } from "react-to-print";
import { notification } from "antd";
import { candidateGetAllInformation } from "../../../../apis/candidates";
export default function AllCV() {
  window.scrollTo(0, 0);

  const [cv1, setCv1] = React.useState(true);
  const [cv2, setCv2] = React.useState(false);
  const [cv3, setCv3] = React.useState(false);
  const [cv4, setCv4] = React.useState(false);
  const [infor, setInfor] = React.useState({});
  const role = JSON.parse(localStorage.getItem("role"));
  const navigate = useNavigate();

  const choose = (index) => {
    const ar = document
      .getElementsByClassName("allCV__content--left__list__item")
      [index].classList.add("cv1");
    for (let i = 0; i < 4; i++) {
      if (i !== index) {
        document
          .getElementsByClassName("allCV__content--left__list__item")
          [i].classList.remove("cv1");
      }
      if (i == index) {
        if (index == 0) {
          setCv1(true);
          setCv2(false);
          setCv3(false);
          setCv4(false);
        }
        if (index == 1) {
          setCv1(false);
          setCv2(true);
          setCv3(false);
          setCv4(false);
        }
        if (index == 2) {
          setCv1(false);
          setCv2(false);
          setCv3(true);
          setCv4(false);
        }
        if (index == 3) {
          setCv1(false);
          setCv2(false);
          setCv3(false);
          setCv4(true);
        }
      }
    }
  };
  const getInforCV = async () => {
    await 
      candidateGetAllInformation()
      .then((res) => {
        setInfor(res.data);
      })
      .catch((error) => {
        return error;
      });
  };
  const pdf = useRef();
  const exportCV = useReactToPrint({
    content: () => pdf.current,
    documentTitle: "CV",
    onAfterPrint: () =>
      notification.success({ message: "Xuất file thành công" }),
  });
  useEffect(() => {
    getInforCV();
    if (role !== 1) {
      navigate("/company");
    }
  }, []);
  return (
    <>
      <div className="allCV__container">
        <div className="allCV__header">
          <div className="allCV__header--left">
            <span class="material-symbols-outlined">chevron_left</span>
            <p onClick={() => navigate("/candidate/inforcv")}>
              Trở lại cập nhật hồ sơ
            </p>
          </div>
          <div className="allCV__header--mid">
            <p>
              <strong>Mẫu CV</strong>
            </p>
          </div>
          <div className="allCV__header--right">
            <p className="allCV__header--right_EN">EN</p>
            <div className="allCV__header--right_line"></div>
            <p className="allCV__header--right_VI">VI</p>
          </div>
        </div>
        <div className="allCV__content">
          <div className="allCV__content--left">
            <div className="allCV__content--left__list">
              <div
                className="allCV__content--left__list__item cv1"
                onClick={() => choose(0)}
              >
                <div className="allCV__content--left__item--img">
                  <img src={cv1img} alt="" />
                </div>

                <div className="allCV__content--left__item--choose cvnone">
                  <span class="material-symbols-outlined">done</span>
                </div>

                <span>Mẫu 1</span>
              </div>
              <div
                className="allCV__content--left__list__item "
                onClick={() => choose(1)}
              >
                <div className="allCV__content--left__item--img">
                  <img src={cv2img} alt="" />
                </div>

                <div className="allCV__content--left__item--choose cvnone">
                  <span class="material-symbols-outlined">done</span>
                </div>
                <span>Mẫu 2</span>
              </div>
              <div
                className="allCV__content--left__list__item "
                onClick={() => choose(2)}
              >
                <div className="allCV__content--left__item--img">
                  <img src={cv3img} alt="" />
                </div>

                <div className="allCV__content--left__item--choose cvnone">
                  <span class="material-symbols-outlined">done</span>
                </div>
                <span>Mẫu 3</span>
              </div>
              <div
                className="allCV__content--left__list__item "
                onClick={() => choose(3)}
              >
                <div className="allCV__content--left__item--img">
                  <img src={cv4img} alt="" />
                </div>

                <div className="allCV__content--left__item--choose cvnone">
                  <span class="material-symbols-outlined">done</span>
                </div>
                <span>Mẫu 4</span>
              </div>
            </div>
          </div>
          <div className="allCV__content--right">
            <div ref={pdf}>
              <div style={{ display: cv1 ? "block" : "none" }}>
                <CV1 item={infor}></CV1>
              </div>
              <div style={{ display: cv2 ? "block" : "none" }}>
                <CV2 item={infor}></CV2>
              </div>
              <div style={{ display: cv3 ? "block" : "none" }}>
                <CV3></CV3>
              </div>
              <div style={{ display: cv4 ? "block" : "none" }}>
                <CV4></CV4>
              </div>
            </div>

            <div className="allCV__content--right__export">
              <div className="allCV__content--right__export--context">
                Upgrade profile to "Excellent" to unlock Download CV
              </div>
              <div
                className="allCV__content--right__export--btn"
                onClick={exportCV}
              >
                <span class="material-symbols-outlined">download</span>
                <div className="allCV__content--right__export--btn__text">
                  Download CV
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
