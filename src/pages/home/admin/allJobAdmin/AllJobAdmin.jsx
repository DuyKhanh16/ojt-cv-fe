import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../../../components/headerAdmin/HeaderAdmin";
import "./AllJobAdmin.scss";
import AdminSearch from "../../../../components/adminSearch/AdminSearch";
import { useNavigate } from "react-router";
import publicAxios from "../../../../config/pulic.axios";
import { Switch, Modal, notification } from 'antd';
import axios from "axios";

export default function AllJobAdmin() {
  window.scrollTo(0, 0);
  const [allNewJob, setNewJob] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flag, setflag] = useState(false);  
  const [isChecked, setIsChecked] = useState(false);
  const [infoJob, setInfoJob] = useState({
    name: "",
    description: "",
    salary: "",
    address: "",
    typejob_id: "",
    requirements: "",
    created_at: "",
    expire_at: "",
    nameCompany: "",
  });
  const navigate = useNavigate();

  const showModal = (item) => {
    console.log(item);
    setInfoJob({
      name: item.title,
      salary: item.salary,
      address: item.address_company.address,
      typejob_id: item.types_jobs[0].typejob.name,
      requirements: item.requirements,
      description: item.description,
      created_at: item.created_at,
      expire_at: item.expire_at,
      nameCompany: item.company.name,
    });
    setIsModalOpen(true);
  };
  // console.log(infoJob);
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
 const onChange =  async (checked, event, job) => {
    console.log(checked, event, job);
    setIsChecked(checked);
    const id = job.id;  
    try {
      const res = await axios.patch(`http://localhost:3000/api/v2/jobs/updatestatus/${id}?status=${checked ? 0 : 1}`, )
      console.log(res);
      notification.success({ message: "Đã thay đổi trạng thái", placement: 'bottomRight', duration: 2 });
      setflag(!flag);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllNewJob = async () => {
    try {
      const res = await publicAxios.get("/api/v2/jobs/getJobsforadmin");
      setNewJob(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(allNewJob);
  useEffect(() => {
    getAllNewJob();
  }, [flag]);
  console.log(allNewJob);
  return (
    <>
      <div className="allJobAdmin__formsearch">
        <Modal
          title="Thông tin công việc"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}>
          <div style={{ display: "flex" ,marginTop:"10px",marginBottom:"10px"}}>
            <div>Tên công ty  </div>
            <div>: </div>
            <div style={{ marginLeft: "10px", fontWeight:"bold" }}>{infoJob.nameCompany}</div>
          </div>
          <div style={{ display: "flex" ,marginTop:"10px",marginBottom:"10px"}}>
            <div>Tên Jobs </div>
            <div>: </div>
            <div style={{ marginLeft: "10px",fontWeight:"bold" }}>{infoJob.name}</div>
          </div>
          <div style={{ display: "flex" ,marginTop:"10px",marginBottom:"10px"}}>
            <div>Mô tả </div>
            <div>: </div>
            </div>
            <div style={{ fontWeight:"bold" }}>{infoJob.description}</div>
          <div style={{ display: "flex" ,marginTop:"10px",marginBottom:"10px"}}>
            <div>Yêu cầu công việc </div>
            <div>: </div>
          </div>
          <div style={{ fontWeight:"bold" }}>{infoJob.requirements}</div>

          <div style={{ display: "flex" ,marginTop:"10px",marginBottom:"10px"}}>
            <div>Mức lương </div>
            <div>: </div>
            <div style={{ fontWeight:"bold",marginLeft: "10px", }}>{infoJob.salary}</div>
          </div>
          <div style={{ display: "flex" ,marginTop:"10px",marginBottom:"10px"}}>
            <div>Địa chỉ </div>
            <div>: </div>
            </div>
            <div style={{ fontWeight:"bold" }}>{infoJob.address}</div>
          <div style={{ display: "flex" ,marginTop:"10px",marginBottom:"10px"}} >
            <div>Thời gian làm việc </div>
            <div>: </div>
            <div style={{ fontWeight:"bold",marginLeft: "10px",  }}>{infoJob.typejob_id}</div>
          </div>
          <div style={{ display: "flex" ,marginTop:"10px",marginBottom:"10px",alignItems:"center",justifyContent:"space-between"}}>
            <div style={{marginRight:"10px"}}>Thời gian tuyển dụng :</div>
            <div style={{ marginLeft: "10px",borderBottom:"1px solid red",paddingBottom:"5px" }}>
              <div>Ngày bắt đầu </div>
              <div> {infoJob.created_at.toString().slice(0, 10)}</div>
            </div>
            <div>to</div>
            <div style={{ marginLeft: "10px",borderBottom:"1px solid red",paddingBottom:"5px" }}>
              <div>Ngày kết thúc </div>
              <div> {infoJob.expire_at}</div>
            </div>
           
          </div>
          

        </Modal>
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
            {allNewJob.map((item, index) => {
              return (
                <div className="allJobAdmin__content__bodyTable__item" key={item?.id}>
                  <div className="allJobAdmin__content__headerTable__stt column">
                    <p>{index + 1}</p>
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
                    {item.status === 1 ? (
                      <div style={{ color: "green",fontSize:"12px" }}>Đang tuyển dụng</div> 
                    ) : (
                      <div style={{ color: "red",fontSize:"12px" }}>Dừng tuyển</div>
                    )}
                  </div>
                  <div
                    onClick={() => showModal(item)}
                    className="allJobAdmin__content__headerTable__description column">
                    <p>Xem</p>
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
