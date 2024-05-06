import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../../../components/headerAdmin/HeaderAdmin";
import "./AllJobAdmin.scss";
import AdminSearch from "../../../../components/adminSearch/AdminSearch";
import { useNavigate } from "react-router";
import publicAxios from "../../../../config/pulic.axios";
import { Switch, Modal, notification } from 'antd';
import { Pagination } from "antd";
import axios from "axios";


export default function AllJobAdmin() {
  window.scrollTo(0, 0);
  const [allNewJob, setNewJob] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flag, setflag] = useState(false);  
  const [isChecked, setIsChecked] = useState(false);
  const [name,setName] = useState()
  const [salary,setSalary] = useState()
  const [status,Setstatus] = useState()
  
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
  const role = JSON.parse(localStorage.getItem("role"));
  const token1 = JSON.parse(localStorage.getItem("token"));

  const showModal = (item) => {
    console.log(item);
    setInfoJob({
      name: item.title,
      salary: item.salary_jobs[0].salary.name,
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
 

  const getAllNewJob = async () => {
    try {
      const res = await publicAxios.get(`/api/v2/jobs/getJobsforadmin?name=${name}&salary=${salary}&status=${status}`);
      setNewJob(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log()
  useEffect(() => {
    getAllNewJob();
    if(!token1){
      navigate("/login");
    }
    if(role == 1){
      navigate("/candidate");
    }
    if(role == 2){
      navigate("/company");
    }
  }, [flag]);

    //    // phân trang
    // const [currentPage, setCurrentPage] = useState(1);
    // const itemsPerPage = 6;
    // const endIndex = currentPage * itemsPerPage;
    // const startIndex = endIndex - itemsPerPage;
    // const currentListJOBS = allNewJob.slice(startIndex, endIndex);
  
    // const onPageChange = (page) => {
    //   setCurrentPage(page);
    // };

    // 
    const handlefilteJobs = (e) => {
      Setstatus(e.target.value);
      setflag(!flag);
    };
    const handlefilteJobsalary = (e) =>{
      setSalary(e.target.value);
      setflag(!flag);
    }
    console.log(allNewJob)
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
            <div className="allJobAdmin__content__headerTable__nameCompany column">
              <p>Logo</p>
            </div>
            <div className="allJobAdmin__content__headerTable__time column">
              <p>Thời hạn</p>
            </div>
            <div className="allJobAdmin__content__headerTable__salary column">
            <select
            //  onAbort={{}}
            onChange={handlefilteJobsalary}
            style={{
              border: "none",
              backgroundColor: "#F7F7F7",
              fontSize: "16px",
            }}
          >
            <option>Khoảng lương</option>
            <option onChange={()=>setSalary()}>Tất cả</option>

            <option value={1}>Từ 2 - 4 Triệu</option>
            <option value={2}>Từ 4 - 6 Triệu</option>
            <option value={3}>Từ 5 - 10 Triệu</option>
            <option value={4}>Từ 10 - 15 Triệu</option>
            <option value={5}>Từ 15 - 20 Triệu</option>
            <option value={6}>Thỏa thuận</option>
          </select>
            </div>
            <div className="allJobAdmin__content__headerTable__active column">
            <select
            //  onAbort={{}}
            onChange={handlefilteJobs}
            style={{
              border: "none",
              backgroundColor: "#F7F7F7",
              fontSize: "16px",
            }}
          >
            <option>Trạng thái</option>
            <option onChange={()=>Setstatus()}>Tất cả</option>

            <option value={1}>Đang tuyển dụng</option>
            <option value={0}>Dừng tuyển</option>
          </select>
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
                  <div
                   className="allJobAdmin__content__headerTable__nameCompany column">
                    <p>{item?.company.name}</p>
                  </div>
                  <div 
                  style={{display:"flex",alignItems:"center",justifyContent:"center"}}
                  className="allJobAdmin__content__headerTable__namejob column">
                  <img src={item?.company.logo} style={{width:"50px",height:"50px"}}></img>
                </div>
                  <div className="allJobAdmin__content__headerTable__time column">
                    <span class="material-symbols-outlined">
                      calendar_month
                    </span>
                    <p>{item?.expire_at}</p>
                  </div>
                  <div className="allJobAdmin__content__headerTable__salary column">
                    <div className="allJobAdmin__content__headerTable__salary__start ">
                      {item?.salary_jobs[0].salary.name}
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
