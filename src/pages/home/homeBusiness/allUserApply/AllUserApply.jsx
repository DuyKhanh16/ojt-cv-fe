import React, { useEffect, useState } from "react";
import FormSearch from "../../../../components/formSearch/FormSearch";
import "./AllUserApply.scss";
import HeaderCompany from "../../../../components/headerCompany/HeaderCompany";
import Footer from "../../../../components/footer/Footer";
import privateAxios from "../../../../config/private.axios";
export default function AllUserApply() {

  const [allJob, setAllJob] = useState([]);
  const [allUserApply, setAllUserApply] = useState([]);
  const [imgCV, setImgCV] = useState("");

  useEffect(() => {
    const getAllJob = privateAxios.get("api/v2/jobs/getJobsForCompany")
    getAllJob.then((res) => {
      setAllJob(res.data.data)
    })
    const getCandidates = privateAxios.get("api/v2/jobs/getCandidatesApplying")
    getCandidates.then((res) => {
      setAllUserApply(res.data.data)
    })
  },[])
  const findCandidate = async(id)=>{
    console.log(id)

    const res = await privateAxios.get(`api/v2/jobs/getCandidatesbyIdJob/${id}`)
    console.log(res.data.data)
    setAllUserApply(res.data.data)
  }
  const displayCV = (link)=>{
    console.log(link)
    setImgCV(link)
  }
  return (
    <>
      <div className="detail_CV" style={{ visibility:imgCV ? "visible" : "hidden" }}>
          <img src={imgCV} alt="" />
          <button onClick={() => setImgCV("")}>Close</button>
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

              {
                allJob.map((item, index) => {
                  return (
                    <div className="allJobApply__content__bodyTable__item" key={index} onClick={()=>findCandidate(item.id)}>
                      <p>{item?.title}</p>
                      <p>{item?.expire_at}</p>
                    </div>
                  )
                })
              }
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
              <div className="allUserApply__content__headerTable__description column">
                <p>Thông tin CV</p>
              </div>
            </div>

            <div className="allUserApply__content__bodyTable">
              {
                allUserApply.map((item, index) => {
                  return <div className="allUserApply__content__bodyTable__item">
                  <div className="allUserApply__content__bodyTable__item__stt column">
                    <p>{index + 1}</p>
                  </div>
                  <div className="allUserApply__content__bodyTable__item__name column">
                    <p>{item?.job_candidates[0].candidate_id?.name}</p>
                  </div>
                 
                  <div className="allUserApply__content__bodyTable__item__job column">
                    <p>{item?.title}</p>
                  </div>
                  <div className="allUserApply__content__bodyTable__item__active column">
                    <div className="allUserApply__content__bodyTable__item__active__btn">
                      Chờ xác nhận
                    </div>
                  </div>
                  <div className="allUserApply__content__bodyTable__item__description column" onClick={() => displayCV(item.job_candidates[0].cv_url)}>
                    <p>Xem Chi tiết</p>
                  </div>
                </div>
                })
              }
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
