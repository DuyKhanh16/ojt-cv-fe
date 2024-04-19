import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../../../components/headerAdmin/HeaderAdmin";
import "./AllJobAdmin.scss";
import AdminSearch from "../../../../components/adminSearch/AdminSearch";
import { useNavigate } from "react-router";
import publicAxios from "../../../../config/pulic.axios";
export default function AllJobAdmin() {
  const [allNewJob, setNewJob] = useState([]);
  const navigate = useNavigate();

  const getAllNewJob = async () => {
    try {
      const res = await publicAxios.get("/api/v2/jobs/getNewJobs");
      setNewJob(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(allNewJob);
  useEffect(() => {
    getAllNewJob();
  }, []);
  return (
    <>
      <div className="allJobAdmin__formsearch">
        <AdminSearch></AdminSearch>
      </div>
      <div className="allJobAdmin__container">
        <div className="allJobAdmin__content">
          <div className="allJobAdmin__content__headerTable">
            <div className="allJobAdmin__content__headerTable__stt column">
              <p>STT</p>
            </div>
            <div className="allJobAdmin__content__headerTable__namejob column">
              <p>Tên công việc </p>
            </div>
            <div className="allJobAdmin__content__headerTable__nameCompany column">
              <p>Công ty</p>
            </div>
            <div className="allJobAdmin__content__headerTable__time column">
              <p>Thời hạn</p>
            </div>
            <div className="allJobAdmin__content__headerTable__salary column">
              <p>Khoảng lương</p>
            </div>
            <div className="allJobAdmin__content__headerTable__active column">
              <p>Trạng thái</p>
            </div>
            <div className="allJobAdmin__content__headerTable__description column">
              <p>Chi tiết thông tin</p>
            </div>
          </div>
          <div className="allJobAdmin__content__bodyTable">
            {allNewJob.map((item,index) => {
              return (
                <div className="allJobAdmin__content__bodyTable__item" key={item?.id}>
                  <div className="allJobAdmin__content__headerTable__stt column">
                    <p>{index+1}</p>
                  </div>
                  <div className="allJobAdmin__content__headerTable__namejob column">
                    <p>{item?.title} </p>
                  </div>
                  <div className="allJobAdmin__content__headerTable__nameCompany column">
                    <p>{item?.company.name}</p>
                  </div>

                  <div className="allJobAdmin__content__headerTable__time column">
                    <span class="material-symbols-outlined">
                      calendar_month
                    </span>
                    <p>{item?.expire_at}</p>
                  </div>
                  <div className="allJobAdmin__content__headerTable__salary column">
                    <div className="allJobAdmin__content__headerTable__salary__start ">
                      {item?.salary}
                    </div>
                    
                  </div>
                  <div className="allJobAdmin__content__headerTable__active column">
                    <label class="allJobAdmin__content__bodyTable__item__active__btn">
                      <input
                        type="checkbox"
                        id="toggle-input"
                        class="toggle-input"
                      />
                      <div class="toggle-bar">
                        <div class="toggle-spin"></div>
                      </div>
                    </label>
                  </div>
                  <div className="allJobAdmin__content__headerTable__description column">
                    <p>Truy cập</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
