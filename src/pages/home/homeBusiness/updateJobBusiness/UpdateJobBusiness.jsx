import React, { useEffect, useState } from "react";
import "./UpdateJobBusiness.scss";
import { Modal, notification } from "antd";
import "../../../../components/confirm/Confirm";
import time1 from "../../../../assets/images/JobDetails/CalendarBlank.png";
import time2 from "../../../../assets/images/JobDetails/Timer.png";
import Stack from "../../../../assets/images/JobDetails/Stack.png";
import Stack1 from "../../../../assets/images/JobDetails/Social button.png";
import Stack2 from "../../../../assets/images/JobDetails/Social button (1).png";
import Stack3 from "../../../../assets/images/JobDetails/Social button (2).png";
import Stack4 from "../../../../assets/images/JobDetails/Social button (3).png";
import Stack5 from "../../../../assets/images/JobDetails/Social button (4).png";
import MapTrifold from "../../../../assets/images/JobDetails/MapTrifold.png";
import Rectangle from "../../../../assets/images/JobDetails/Rectangle 43.png";
import arrowright from "../../../../assets/images/JobDetails/arrow.right.png";
import MapPin from "../../../../assets/images/JobDetails/MapPin.png";
import privateAxios from "../../../../config/private.axios";
import { useNavigate, useParams } from "react-router";
import { info } from "sass";
import axios from "axios";
// const { confirm } = Modal;

export default function UpdateJobBusiness() {
  window.scrollTo(0, 0);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [infoCompany, setInfoCompany] = useState();
  const [typeJob, setListTypeJob] = useState([]);
  const [LevelJob, setLevelJob] = useState([]);
  const [job, setJob] = useState([]);
  const [typeJob1, setTypeJob1] = useState([]);
  const [salary, setSalary] = useState([]);
  const [salary1, setSalary1] = useState([]);
  const [listAdress, setListAdress] = useState([]);
  const [levelJob1, setLevelJob1] = useState([]);
  const [allUserApply, setAllUserApply] = useState([]);
  const [address, setAddress] = useState("");
  const [flag, setFlag] = useState(false);
  const [updatejobs, setUpdatejob] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    expire_at: "",
    address_company_id: "",
    typejob_id: "",
    leveljob_id: "",
    created_at: "",
  });

  // chuyển trang
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id) 
  // ham lấy jobs details
  
  const getJobsDetails = () => {
    const res = privateAxios.get(`api/v2/jobs/detail/${id}`);
    res.then((res) => {
      const jobdetail = res.data.data;
      // console.log(jobdetail)
      // setUpdatejob(res.data.data);
      setJob(res.data.data);
      setSalary1(res.data.data.salary_jobs);
      setAddress(res.data.data.address_company.address);
      setLevelJob1(res.data.data.levers_jobs);
      setTypeJob1(res.data.data.types_jobs);
      setUpdatejob({
        title: jobdetail.title,
        description: jobdetail.description,
        requirements: jobdetail.requirements,
        salary: jobdetail.salary,
        expire_at: jobdetail.expire_at,
        address_company_id: jobdetail.address_company.id,
        typejob_id: jobdetail.types_jobs[0].typejob.id,
        leveljob_id: jobdetail.levers_jobs[0].leveljob.id,        
        created_at: jobdetail.created_at
        ,
      })
    });
  };
  // hafm laasy thong tin company
  const getinfo = () => {
    const res = privateAxios.get("api/v2/companies/getInfor");
    res.then((res) => {
      setInfoCompany(res.data.data);
      setListAdress(res.data.data.address_company);
    });
  };

  // hàm lấy các user apply vào công việc này
  const getalluserapply = () => {
    const res = privateAxios.get(`api/v2/jobs/getCandidatesbyIdJob/${id}`);
    res.then((res) => {
      setAllUserApply(res.data.data);
    });
  }
  // console.log(allUserApply,"123")
  // hàm lấy  các mức lương
const getlistSalary = () => {
  const res = axios.get("http://localhost:3000/api/v2/salary/getAll");
  res.then((res) => {
    setSalary(res.data);
  });
};

console.log(salary1,"123")
  // haàm lấy thời gian làm việc
  const getTypeJobs = () => {
    const res = privateAxios.get("api/v2/typejob/getall");
    res.then((res) => {
      setListTypeJob(res.data);
    });
  };
  // hàm lấy level job
  const getLevelJobs = () => {
    const res = privateAxios.get("api/v2/leveljob/getall");
    res.then((res) => {
      setLevelJob(res.data);
    });
  };

  useEffect(() => {
    getinfo();
    getTypeJobs();
    getLevelJobs();
    getJobsDetails();
    getlistSalary();
  }, [flag]);

// console.log(listAdress,"1")


  // modal 1
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk =async () => {
    // console.log(id,updatejobs)
    const updatejobsNew = {
      title: updatejobs.title,
      description: updatejobs.description,
      requirements: updatejobs.requirements,
      salary: updatejobs.salary,
      expire_at: updatejobs.expire_at,
      address_company_id: updatejobs.address_company_id,
      typejob_id: updatejobs.typejob_id,
      leveljob_id: updatejobs.leveljob_id,
      created_at: updatejobs.created_at,
    }
    try {
      const res = await privateAxios.patch(`api/v2/jobs/edit/${id}`, updatejobsNew);
      notification.success({
        message: "Đã cập nhật thành công",
        duration: 2,
      });
      setFlag(!flag)
    } catch (error) {
      console.log(error)
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // modal 2
  const showModal1 = () => {
    setIsModalOpen1(true);
  };

  const handleOk1 = async () => {
    try {
      // viết api xoá truyền id công việc, khi xoá xong quay trở về trang alljob của company
      const res = await privateAxios.delete(`api/v2/jobs/delete/${id}`);
      notification.success({
        message: "Đã xóa thành công",
        duration: 2,
      });
      navigate("/company/alljob");
    } catch (error) {
      console.log(error);
    }
    setIsModalOpen1(false);
  };

  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };

  const requirementsWithBreaks = job?.requirements?.split('\n')
  // console.log(job.description)
  const description = job?.description?.split('\n')
  // console.log(description)
  
    
  return (
    <div>
      <Modal
        title="Bạn có muốn xoá công việc này không"
        open={isModalOpen1}
        onOk={handleOk1}
        onCancel={handleCancel1}
      ></Modal>
      <div className="job__detail--container">
        <div className="job__detail--title" style={{ color: "#767F8C" }}>
          <p>Trang chủ / </p> <p>Việc làm / </p> <p>Graphics Designer /</p>{" "}
          <p style={{ color: "#18191C" }}>Job A Details</p>{" "}
        </div>
        <div className="job__detail--content">
          <div className="job__detail--company">
            <div className="job__detail--company--Logo">
              <div className="job__detail--company--Logo1">
                <img
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                  src={infoCompany?.logo}
                ></img>
              </div>
              <div className="job__detail--company--Logo--name">
                <h2>{job.title}</h2>
                <div className="job__detail--company--Logo--name--address">
                  <div className="adress">{infoCompany?.name}</div>
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
                    {typeJob1[0]?.typejob.name}
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
              <button
                onClick={() => setIsModalOpen1(true)}
                className="job__detail--company--apply--delete"
              >
                Xoá
              </button>
              <button
                onClick={showModal}
                className="job__detail--company--apply--apply"
              >
                Cập nhật thông tin
              </button>
                // modal
              <Modal
                title="Cập nhật thông tin công việc"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={700}
                okButtonProps={{
                  className: "customOkButton", // Sử dụng lớp CSS tùy chỉnh
                }}
                cancelButtonProps={{
                  className: "customCancelBtn", // Áp dụng class CSS tùy chỉnh cho nút Cancel
                }}
              >
                <p style={{ fontWeight: "bold", marginBottom: "10px",marginTop: "30px" }}>
                  Tên công việc
                </p>
                <input
                onChange={(e) => setUpdatejob({ ...updatejobs, title: e.target.value })}
                name="title"
                value={updatejobs.title}
                // value={updatejobs.title}
                  style={{
                    width: "100%",
                    height: "40px",
                    marginBottom: "20px",
                    border: "1px solid #E7F0FA",
                  }}
                ></input>
                <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
                  Thời gian làm việc
                </p>
                <select 
                onChange={(e) => setUpdatejob({ ...updatejobs, typejob_id: e.target.value })}
                value={updatejobs.typejob_id}
                name="typejob_id"
                style={{ width: "100%", height: "40px",border: "1px solid #E7F0FA", borderRadius: "5px" }}>
                  <option>{updatejobs.name}</option>
                 {typeJob.map((item) => (
                   <option key={item.id} value={item.id}>{item.name}</option>
                 ))}
                </select>
                
                <p style={{ fontWeight: "bold", marginBottom: "10px",marginTop: "20px" }}>
                  Mức lương
                </p>
                <select
                onChange={(e) => setUpdatejob({ ...updatejobs, salary: e.target.value })}
                value={updatejobs.salary}
                name="salary"
                style={{ width: "100%", height: "40px",border: "1px solid #E7F0FA", borderRadius: "5px" }}
                  // onChange={(e) => setNewJob({ ...newJob, salary: e.target.value })}
                    id="salary"
                    
                  >
                    <option value="">Chọn</option>
                   {salary.map((item) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                  </select>
                  <p style={{ fontWeight: "bold", marginBottom: "10px",marginTop: "20px" }}>Địa chỉ tuyển dụng</p>
                  <select
                  onChange={(e) => setUpdatejob({ ...updatejobs, address_company_id: e.target.value })}
                  style={{ width: "100%", height: "40px",border: "1px solid #E7F0FA", borderRadius: "5px" }}
                   name="address_company_id">
                    <option value="">Chọn</option>
                    {listAdress.map((item) => (
                      <option value={item.id}>{item.address}</option>
                    ))}
                  </select>
                <p style={{ fontWeight: "bold", marginBottom: "10px",marginTop: "20px" }}>
                  Cấp độ chuyên môn
                </p>
               <select 
               onChange={(e) => setUpdatejob({ ...updatejobs, leveljob_id: e.target.value })}
               name="leveljob_id"
               value={updatejobs.leveljob_id}
                 style={{ width: "100%", height: "40px",border: "1px solid #E7F0FA", borderRadius: "5px" }}>
               <option>Intern</option>
              
              {LevelJob.map((item) => (
                <option value={item.id}>{item.name}</option>
              ))}
               </select>
                <p style={{ fontWeight: "bold", marginBottom: "10px",marginTop: "20px" }}>
                  Mô Tả Công việc
                </p>
                <textarea
                onChange={(e) => setUpdatejob({ ...updatejobs, description: e.target.value })}
                value={updatejobs.description}
                name="description"
                  type="area"
                  style={{
                    width: "100%",
                    height: "200px",
                    marginBottom: "20px",
                  }}
                ></textarea>
                <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
                  Yêu cầu công việc
                </p>
                <textarea
                onChange={(e) => setUpdatejob({ ...updatejobs, requirements: e.target.value })}
                value={updatejobs.requirements}
                name="requirement"
                  type="area"
                  style={{
                    width: "100%",
                    height: "200px",
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
                    <input 
                    onChange={(e) => setUpdatejob({ ...updatejobs, created_at: e.target.value })}
                    value={updatejobs?.created_at.split('T')[0]}
                    style={{border: "none"}}
                    type="date"></input>
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
                    <input 
                    onChange={
                      (e) => setUpdatejob({ ...updatejobs, expire_at: e.target.value })
                    }
                    value={updatejobs.expire_at}
                    style={{border: "none"}}
                    type="date"></input>
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
              <h2>Mô tả công việc</h2>
              <ul style={{ marginTop: "20px" }}>
                      {description?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
              </ul>
              <h2 style={{ marginTop: "20px", marginBottom: "20px" }}>Yêu cầu của công ty</h2>
              <ul>
                {
                  requirementsWithBreaks?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
         
              </ul>
            
              
            </div>
            <div className="job__detail--description-2">
              <div className="job__detail--description--details">
                <div style={{ textAlign: "center" }}>
                  <h3 style={{ marginBottom: "10px" }}>Salary (Usd)</h3>
                  <p style={{ color: "#0BA02C", fontSize: "18px" }}>
                      {salary1[0]?.salary.name}
                  </p>
                  <p style={{ color: "gray", fontSize: "14px" }}>
                    Montch Salary
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
                  <img style={{ marginLeft: "160px" }} src={MapTrifold}></img>
                  <h3>Job Location</h3>
                  <p style={{ color: "gray", fontSize: "14px" }}>
                  {address }
                  </p>
                </div>
              </div>
              <div className="job__detail--description--overview">
                <div className="line1">
                  <h3 style={{ marginBottom: "10px" }}>Job Overview</h3>
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <div className="item">
                      <img style={{ marginRight: "10px" }} src={time1}></img>
                      <p style={{ color: "gray", fontSize: "18px" }}>
                        Job Posted
                      </p>
                      <span>{job?.created_at?.toString().split('T')[0]}</span>
                    </div>
                    <div className="item">
                      <img style={{ marginRight: "10px" }} src={time2}></img>
                      <p style={{ color: "gray", fontSize: "18px" }}>
                        Job Expire in
                      </p>
                      <span>{job?.expire_at}</span>
                    </div>
                    <div className="item">
                      <img style={{ marginRight: "10px" }} src={Stack}></img>
                      <p style={{ color: "gray", fontSize: "18px" }}>
                        level job
                      </p>
                      <span>{levelJob1[0]?.leveljob.name}</span>
                    </div>
                  </div>
                </div>
                <div className="line2"></div>
              </div>
              <div className="job__detail--description--Share">
                <div className="line1">
                  <h3 style={{ marginBottom: "10px" }}>Share thit Job :</h3>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <img src={Stack1}></img>
                    <img src={Stack2}></img>
                    <img src={Stack3}></img>
                    <img src={Stack4}></img>
                    <img src={Stack5}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="job__detail--Relatedjob">
          <h1> {allUserApply.length} Hồ sơ ứng tuyển </h1>
          <div className="job__detail--Relatedjob--content">
         
           
           
           {allUserApply.map((item,index) => (
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
           ))}
          </div>
        </div>
      </div>
    </div>
  );
}
