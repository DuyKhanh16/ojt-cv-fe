import React, { useEffect, useState } from "react";
import "./AddJob.scss";
import { useNavigate } from "react-router";
import privateAxios from "../../../../config/private.axios";
import axios from "axios";
import { Select, notification } from "antd";
export default function AddJob() {

  // window.scrollTo(0, 0);

  const navigate = useNavigate();

  const [infoCompany, SetInfoCompany] = useState();
  const [addressCompany, setAdressCompany] = useState([]);
  const [typeJob, setListTypeJob] = useState([]);
  const [LevelJob, setLevelJob] = useState([]);
  const [salary, setSalary] = useState([]);
  
  const [newJob, setNewJob] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    expire_at: "",
    address_company_id: "",
    typejob_id: "",
    leveljob_id: "",
  });
  
  
  const role = JSON.parse(localStorage.getItem("role"));
  const navigate = useNavigate();


  // lấy thông tin company
  const getInfo = () => {
    const res = privateAxios.get("api/v2/companies/getInfor");
    res.then((res) => {
      SetInfoCompany(res.data.data);
      setAdressCompany(res.data.data.address_company);
    });
  };

  console.log(infoCompany, "infoCompany");
  //  hàm lấy các type job
  const getTypeJob = () => {
    const res = axios.get("http://localhost:3000/api/v2/typejob/getall");
    res.then((res) => {
      setListTypeJob(res.data);
    });
  };
  //  hàm lấy các level job
  const levelJobs = () => {
    const res = axios.get("http://localhost:3000/api/v2/leveljob/getall");
    res.then((res) => {
      setLevelJob(res.data);
    });
  };

  // hàm lấy các salary
  const getlistSalary = () => {
    const res = axios.get("http://localhost:3000/api/v2/salary/getAll");
    res.then((res) => {
      setSalary(res.data);
    });
  };

  useEffect(() => {
    getInfo();
    getTypeJob();
    levelJobs();
    getlistSalary();
    if(role !== 2) {
      navigate("/candidate")
    }
  
  }, []);
  // hàm tạo job
  const handleSubmit = async () => {
    if(newJob.address_company_id === "" || newJob.typejob_id === "" || newJob.leveljob_id === "" || newJob.salary === "" || newJob.expire_at === "" || newJob.title === "" || newJob.description === "" || newJob.requirements === ""){
      notification.error({
        message: "Vui lòng điền đầy đủ thông tin",
        placement: "topRight",
        duration: 2,
      })
    }
    try {
      const res = await axios.post(
        `http://localhost:3000/api/v2/jobs/create/${infoCompany.id}`,
        newJob
      );
      notification.success({
        message: "Đã tạo job thành công",
        placement: "topRight",
        duration: 2,
      });
      setNewJob({
        title: "",
        description: "",
        requirements: "",
        salary: "",
        expire_at: "",
        address_company_id: "",
        typejob_id: "",
        leveljob_id: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="addJob__container">
        <div className="addJob__nav">
          <p className="addJob__nav__home" style={{ cursor: "pointer" }}>
            Trang chủ/
          </p>
          <p
            className="addJob__nav__inforCompany"
            onClick={() => navigate("/company/alljob")}
            style={{ cursor: "pointer", marginLeft: "10px" }}
          >
            Quản lý việc làm/{" "}
          </p>
          <p
            className="addJob__nav__addNewJob"
            style={{ cursor: "pointer", marginLeft: "10px" }}
          >
            Thêm việc làm mới
          </p>
        </div>
        <div className="addJob__body">
          <h4>Thêm việc làm mới</h4>
          <div className="addJob__body__form">
            <div className="addJob__body__form__nameJob">
              <label htmlFor="">Tên công việc</label>
              <br />
              <input
                onChange={(e) =>
                  setNewJob({ ...newJob, title: e.target.value })
                }
                value={newJob.title}
                name="title"
                type="Nhập tên công việc"
                className="addJob__body__form__nameJob--text"
                placeholder="Nhập tên việc"
              />
            </div>
            <div className="addJob__body__form__Fusion">
              <div className="addJob__body__form__time">
                <label htmlFor="">Địa điểm</label> <br />
                <select
                  onChange={(e) =>
                    setNewJob({ ...newJob, address_company_id: e.target.value })
                  }
                  value={newJob.address_company_id}
                  name="address_company_id"
                  id=""
                >
                  <option value="">Chọn</option>
                  {addressCompany.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.address}
                    </option>
                  ))}
                </select>
              </div>
              <div className="addJob__body__form__time">
                <label htmlFor="">Cấp bậc tuyển dụng</label> <br />
                <select
                  onChange={(e) =>
                    setNewJob({ ...newJob, leveljob_id: e.target.value })
                  }
                  value={newJob.leveljob_id}
                  name="leveljob_id"
                  id=""
                >
                  <option value="">Chọn</option>
                  {LevelJob.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="addJob__body__form__highInfor">
              <p>Thông tin nâng cao</p>
              <div className="addJob__body__form__highInfor__all">
                <div className="addJob__body__form__highInfor__salary">
                  <label htmlFor="">Mức lương</label>
                  <br />
                  <select
                    onChange={(e) =>
                      setNewJob({ ...newJob, salary: e.target.value })
                    }
                    id="salary"
                    value={newJob?.salary}
                  >
                    <option value="">Chọn</option>

                    {salary.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="addJob__body__form__highInfor__time">
                  <label htmlFor="">Thời hạn ứng tuyển</label>
                  <br />
                  <input
                    onChange={(e) =>
                      setNewJob({ ...newJob, expire_at: e.target.value })
                    }
                    value={newJob.expire_at}
                    name="expire_at"
                    type="date"
                    placeholder="ngày"
                  />
                </div>
                <div className="addJob__body__form__highInfor__level">
                  <label htmlFor="">Thời gian làm việc</label>
                  <br />
                  <select
                    onChange={(e) =>
                      setNewJob({ ...newJob, typejob_id: e.target.value })
                    }
                    value={newJob.typejob_id}
                    name="typejob_id"
                    id=""
                  >
                    <option value="">Chọn</option>
                    {typeJob.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="addJob__body__form__description">
              <label htmlFor="">Yêu cầu công việc</label>
              <br />
              <textarea
                onChange={(e) =>
                  setNewJob({ ...newJob, requirements: e.target.value })
                }
                value={newJob.requirements}
                name="requirements"
                id=""
                cols="20"
                rows="5"
                placeholder="Nhập Yêu Cầu"
              ></textarea>
            </div>
            <div className="addJob__body__form__description">
              <label htmlFor="">Mô tả công việc</label>
              <br />
              <textarea
                onChange={(e) =>
                  setNewJob({ ...newJob, description: e.target.value })
                }
                value={newJob.description}
                name="description"
                id=""
                cols="30"
                rows="10"
                placeholder="Nhập mô tả"
              ></textarea>
            </div>
            <div onClick={handleSubmit} className="addJob__body__form__button">
              Thêm mới
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
