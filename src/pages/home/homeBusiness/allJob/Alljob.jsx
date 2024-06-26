import React, { useEffect, useState } from "react";
import FormSearch from "../../../../components/formSearch/FormSearch";
import "./Alljob.scss";
import HeaderCompany from "../../../../components/headerCompany/HeaderCompany";
import down from "../../../../assets/images/fromsearch/Vector.png";
import { useNavigate, useParams } from "react-router";
import privateAxios from "../../../../config/private.axios";
import { notification, Switch } from "antd";
import axios from "axios";
// import {getJobsForCompany,getInforCompany} from "../../../../apis/jobs/index"
import { getInforCompany, getalljobsCompanys, searchJobs } from "../../../../apis/company/index"
import { updateStatusOn, updateStatusOff, deleteJobs } from "../../../../apis/jobs/index"
export default function Alljob() {
  window.scrollTo(0, 0);

  const [allJobs, setAllJobs] = useState([]);
  const [infoCompany, SetInfoCompany] = useState();
  const [status, setStatus] = useState();
  const [flag, setflag] = useState(false);
  const [key, setKey] = useState("");
  const id = useParams();
  const role = JSON.parse(localStorage.getItem("role"))
  const navigate = useNavigate();

  // get info company
  const getInfo = () => {
    const res = getInforCompany()
    res.then((res) => {
      SetInfoCompany(res.data);
    });
  };
  // console.log(infoCompany)
  const getallJobsCompany = async () => {
    try {
      const res = await getalljobsCompanys(status);
      setAllJobs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(allJobs)
  useEffect(() => {
    getInfo();
    getallJobsCompany();
    if (role !== 2) {
      navigate("/candidate")
    }

  }, [flag]);

  const addjobs = () => {
    // console.log(infoCompany)
    if (infoCompany?.logo === null ||
       infoCompany?.website == null ||
      infoCompany?.description == null ||
      infoCompany?.size == null) {
        notification.error({
          message: "Bạn cần nhập đầy đủ thông tin doanh nghiệp của mình mới thêm được việc",
        })
        return
      }
      navigate("/company/addnewjob")
  }

    // hàm thay đổi trạng thái công việc

    const handleUpdateStatus = async (item) => {
      // console.log(item)
      if (item.status === 1) {
        console.log("đã ăn vào");
        try {
          const res = await updateStatusOn(item.id);
          notification.success({ message: "Đã thay đổi trang thái" });
          setflag(!flag);
        } catch (error) {
          console.log(error);
        }
      }
      if (item.status === 0) {
        try {
          const res = await updateStatusOff(item.id);
          notification.success({ message: "Đã thay đổi trang thái" });
          setflag(!flag);
        } catch (error) {
          console.log(error);
        }
      }
    };

    // hàm xoá công việc

    const handleDelete = async (id) => {
      if (confirm("Bạn có muốn xóa")) {
        try {
          const res = await deleteJobs(id);
          notification.success({ message: "Đã xóa thành công" });
          getallJobsCompany();
          setflag(!flag)
        } catch (error) {
          console.log(error);
        }
      }
    };

    // thay đổi trạng thái filter
    const handlefilteJobs = (e) => {
      setStatus(e.target.value);
      setflag(!flag);
    };

    // hàm tim kiếm
    const handleSearch = () => {
      const res = searchJobs(key);
      res.then((res) => {
        setAllJobs(res.data);
        setKey("");
      });
    };

    // console.log(status)
    return (
      <>
        <div className="alljob__container">
          <div className="alljob__header">
            <p style={{ cursor: "pointer" }}>Trang chủ /</p>

            <p>Quản lý việc làm</p>
          </div>
          <div style={{ display: "flex" }}>
            {" "}
            <div
              className="alljob__addjob"
              onClick={addjobs}
            // onClick={() => navigate("/company/addnewjob")}
            >
              Thêm việc làm mới
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginLeft: "300px",
                paddingTop: "20px",
              }}
            >
              <input
                onChange={(e) => setKey(e.target.value)}
                style={{
                  width: "500px",
                  border: "1px solid gray",
                  padding: "10px",
                  borderRadius: "10px",
                  height: "40px",
                  fontSize: "14px",
                }}
                placeholder="Tìm kiếm tên công việc ..."
              ></input>
              <div
                onClick={handleSearch}
                style={{ cursor: "pointer", marginTop: "0px" }}
                className="alljob__addjob"
              >
                Tìm kiếm
              </div>
            </div>
          </div>

          <div className="alljob__content">
            <div className="alljob__content__headerTable">
              <div className="alljob__content__headerTable__stt column">
                <p>STT</p>
              </div>
              <div className="alljob__content__headerTable__name column">
                <p>Tên công việc</p>
              </div>
              <div className="alljob__content__headerTable__time column">
                <p>Thời gian ứng tuyển</p>
              </div>
              <div className="alljob__content__headerTable__active column">
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
                  <option value={2}>
                    <p>Tất cả</p>
                  </option>
                  <option value={1}>Đang tuyển dụng</option>
                  <option value={0}>Dừng tuyển</option>
                </select>
              </div>
              <div className="alljob__content__headerTable__description column">
                <p>Thông tin chi tiết</p>
              </div>
              <div className="alljob__content__headerTable__action column">
                <p>Hành động</p>
              </div>
            </div>
            {allJobs.map((item, index) => (
              <div className="alljob__content__bodyTable">
                <div className="alljob__content__bodyTable__item">
                  <div className="alljob__content__bodyTable__item__stt column">
                    <p>{index + 1}</p>
                  </div>
                  <div className="alljob__content__bodyTable__item__name column">
                    <p>{item?.title}</p>
                  </div>
                  <div
                    style={{ width: "auto" }}
                    className="alljob__content__bodyTable__item__time column"
                  >
                    <p>{item?.created_at.toString().slice(0, 10)}</p>
                    <p>-</p>
                    <p>{item?.expire_at}</p>
                  </div>
                  <div
                    className="alljob__content__bodyTable__item__active column"
                    onClick={() => handleUpdateStatus(item)}
                  >
                    <p>{item?.status ? "Đang tuyển dụng" : "Dừng tuyển"}</p>
                  </div>
                  <div
                    className="alljob__content__bodyTable__item__description column"
                    onClick={() => navigate("/company/updatejob/" + item.id)}
                  >
                    <div className="alljob__content__bodyTable__item__description__showbtn">
                      <p>Xem</p>
                    </div>
                  </div>
                  <div className="alljob__content__bodyTable__item__action column">
                    <div
                      onClick={() => handleDelete(item?.id)}
                      className="alljob__content__bodyTable__item__action__delete btn"
                    >
                      <p>Xóa</p>
                    </div>
                    {item.status ? (
                      <div
                        onClick={() => handleUpdateStatus(item)}
                        style={{ backgroundColor: "brown", color: "white", borderRadius: "5px", width: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}
                        className="alljob__content__bodyTable__item__action__delete btn"
                      >
                        <p>Dừng tuyển dụng</p>
                      </div>
                    ) : (
                      <div
                        onClick={() => handleUpdateStatus(item)}
                        style={{ backgroundColor: "green", color: "white", borderRadius: "5px", width: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}
                        className="alljob__content__bodyTable__item__action__delete btn"
                      >
                        <p>Bật tuyển dụng</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
