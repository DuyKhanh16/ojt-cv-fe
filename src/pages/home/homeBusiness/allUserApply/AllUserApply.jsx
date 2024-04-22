import React, { useEffect, useState } from "react";
import FormSearch from "../../../../components/formSearch/FormSearch";
import "./AllUserApply.scss";
import HeaderCompany from "../../../../components/headerCompany/HeaderCompany";
import Footer from "../../../../components/footer/Footer";
import privateAxios from "../../../../config/private.axios";
import { Button, Modal, notification } from "antd";

export default function AllUserApply() {
  window.scrollTo(0, 0);

  const [allJob, setAllJob] = useState([]);
  const [allUserApply, setAllUserApply] = useState([]);
  const [imgCV, setImgCV] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [idApply, setIdApply] = useState("");
  const [flag, setFlag] = useState(true);
  const [interviewDay, setInterviewDay] = useState("");
  useEffect(() => {
    const getAllJob = privateAxios.get("api/v2/jobs/getJobsForCompany");
    getAllJob.then((res) => {
      setAllJob(res.data.data);
    });
  }, [flag]);
  const findCandidate = async (id) => {
    const res = await privateAxios.get(
      `api/v2/jobs/getCandidatesbyIdJob/${id}`
    );
    console.log(res);
    setAllUserApply(res.data.data);
  };
  const displayCV = (link) => {
    setImgCV(link);
  };
  const handleOk = (id) => {
    setIdApply(id);
    setIsModalOpen(true);
  };

  const handleCancel = async () => {
    setIsModalOpen(false);
  };

  const handleShow = () => {
    setIsModalOpen2(true);
  };
  const handleOff = () => {
    setIsModalOpen2(false);
  };

  const hiddenPDF = () => {
    setImgCV("");
  };
  const cancelCandidate = async () => {
    const check = confirm("Bạn có muốn hủy ứng tuyển này?");
    if (!check) {
      setIsModalOpen(false);
      return;
    }
    try {
      const res = await privateAxios.post(
        `api/v2/jobs/cancelCandidate/${idApply}`
      );
      setIsModalOpen(false);
      notification.success({
        message: res.data.message,
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const uploadInterview = async () => {
    const check = confirm("Bạn có muốn đặt lịch phỏng vấn cho ứng tuyển này?");
    if (!check) {
      setIsModalOpen2(false);
      return;
    }
    try {
      const res = await privateAxios.post(
        `api/v2/jobs/update-interview-date/${idApply}`,
        { interview_day: interviewDay }
      );
      setIsModalOpen2(false);
      setIsModalOpen(false);
      notification.success({
        message: res.data.message,
      });
      setFlag(!flag);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        className="detail_CV"
        style={{ visibility: imgCV != "" ? "visible" : "hidden" }}
      >
        <iframe src={imgCV} style={{ width: "100%", height: "100%" }}></iframe>
        <button onClick={hiddenPDF}>Close</button>
      </div>
      <div className="allUserApply__container">
        <div className="allUserApply__header">
          <p>Trang chủ</p>
          <p>/</p>
          <p>Quản lý ứng viên</p>
        </div>
        <div className="allUserApply__container">
          <div className="allJobApply__content">
            <div className="allJobApply__content__headerTable">
              <div className="allUserApply__content__headerTable__description column">
                <p style={{ color: "#767F8C" }}>Job đăng tuyển</p>
              </div>
            </div>

            <div className="allJobApply__content__bodyTable">
              {allJob.map((item, index) => {
                return (
                  <div
                    className="allJobApply__content__bodyTable__item"
                    key={index}
                    onClick={() => findCandidate(item.id)}
                  >
                    <p>{item?.title}</p>
                    <p>{item?.expire_at}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="allUserApply__content">
            <div className="allUserApply__content__headerTable">
              <div className="allUserApply__content__headerTable__stt column">
                <p>STT</p>
              </div>
              <div className="allUserApply__content__headerTable__name column">
                <p>Họ và tên</p>
              </div>

              <div className="allUserApply__content__headerTable__job column">
                <p>Công việc ứng tuyển</p>
              </div>
              <div className="allUserApply__content__headerTable__active column">
                <p>Trạng thái</p>
              </div>
              <div className="allUserApply__content__headerTable__active column">
                <p>Lịch phỏng vấn</p>
              </div>
              <div className="allUserApply__content__headerTable__description column">
                <p>Thông tin CV</p>
              </div>
            </div>

            <div className="allUserApply__content__bodyTable">
              {allUserApply.map((item, index) => {
                return (
                  <div
                    className="allUserApply__content__bodyTable__item"
                    key={index}
                  >
                    <div className="allUserApply__content__bodyTable__item__stt column">
                      <p>{index + 1}</p>
                    </div>
                    <div className="allUserApply__content__bodyTable__item__name column">
                      <p>{item?.candidate_id?.name}</p>
                    </div>

                    <div className="allUserApply__content__bodyTable__item__job column">
                      <p>{item?.job_id?.title}</p>
                    </div>
                    <div className="allUserApply__content__bodyTable__item__active column">
                      {item?.status != 1 ? (
                        <div
                          className="allUserApply__content__bodyTable__item__active__btn"
                          style={{
                            opacity: 0.7,
                            cursor: "not-allowed",
                            backgroundColor: `${
                              item?.status == 0 ? "black" : "green"
                            }`,
                          }}
                        >
                          {item?.status == 0 ? "Đã Từ Chối" : "Đã Gửi Lịch PV"}
                        </div>
                      ) : (
                        <div
                          className="allUserApply__content__bodyTable__item__active__btn"
                          onClick={() => handleOk(item.id)}
                        >
                          Chờ xác nhận
                        </div>
                      )}
                    </div>
                    <div className="allUserApply__content__bodyTable__item__job column">
                      <p>
                        {item.interview_day == null
                          ? `${
                              item?.status == 0 ? "Đã Từ Chối" : "Chưa có lịch"
                            }`
                          : `${item.interview_day}`}
                      </p>
                    </div>
                    <div
                      className="allUserApply__content__bodyTable__item__description column"
                      onClick={() => displayCV(item.cv_url)}
                    >
                      <p style={{ cursor: "pointer" }}>Xem Chi tiết</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Modal
        className="modal-updateInforUser"
        title="Xác Nhận Ứng Viên"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={450}
        style={{ padding: "20px", textAlign: "center" }}
      >
        <div style={{ height: "100px", paddingTop: "30px" }}>
          <Button
            type="primary"
            style={{
              width: "150px",
              height: "40px",
              backgroundColor: "red",
              margin: "10px",
            }}
            onClick={cancelCandidate}
          >
            Từ chối ứng viên
          </Button>
          <Button
            type="primary"
            style={{ width: "150px", height: "40px", backgroundColor: "green" }}
            onClick={handleShow}
          >
            Chấp nhận ứng viên
          </Button>
        </div>
      </Modal>

      <Modal
        className="modal-updateInforUser"
        title="Chọn Lịch Hẹn Phỏng Vấn"
        open={isModalOpen2}
        onOk={handleShow}
        onCancel={handleOff}
        width={450}
        footer={null}
        style={{ padding: "20px", textAlign: "center" }}
      >
        <div style={{ height: "100px", paddingTop: "30px" }}>
          <input
            type="date"
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setInterviewDay(e.target.value)}
          />
          <Button
            type="primary"
            style={{ margin: "10px", backgroundColor: "red" }}
            onClick={uploadInterview}
          >
            Gửi Lịch PV
          </Button>
        </div>
      </Modal>
    </>
  );
}
