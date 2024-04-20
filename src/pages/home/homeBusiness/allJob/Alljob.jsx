import React, { useEffect, useState } from "react";
import FormSearch from "../../../../components/formSearch/FormSearch";
import "./Alljob.scss";
import HeaderCompany from "../../../../components/headerCompany/HeaderCompany";
import down from "../../../../assets/images/fromsearch/Vector.png";
import { useNavigate } from "react-router";
import privateAxios from "../../../../config/private.axios";
import { notification,Switch } from "antd";
import axios from "axios";
// import { Switch } from 'antd';
export default function Alljob() {
  const navigate = useNavigate();
  const [allJobs, setAllJobs] = useState([]);
  const [infoCompany, SetInfoCompany] = useState();
  const [flag,setflag] = useState(false)

  // get info company
  const getInfo = () => {
    const res = privateAxios.get("api/v2/companies/getInfor");
    res.then((res) => {
      SetInfoCompany(res.data.data);
    });
  };

  const getallJobsCompany = () => {
    const res1 = privateAxios.get("api/v2/jobs/getJobsForCompany");
    res1.then((res) => {
      setAllJobs(res.data.data, "data");
      // setAllJobs(res.data.data);
    });
  };

  useEffect(() => {
    getInfo();getallJobsCompany();
  }, [flag]);
  console.log(allJobs); 

  // hàm get all job của company

  // hàm thay đổi trạng thái công việc

  const handleUpdateStatus = async (item) => {
    console.log(item.status)
    if(item.status===1){
      console.log("đã ăn vào")
      try {
        const res = await axios.patch(`http://localhost:3000/api/v2/jobs/updatestatus/${item.id}?status=0`);
        notification.success({ message: "Đã thay đổi trang thái" });
        setflag(!flag)
        // return
      } catch (error) {
        console.log(error);
      }
    }
    if(item.status===0){
      console.log("đã ăn vào111111111")

      try {
        const res = await axios.patch(`http://localhost:3000/api/v2/jobs/updatestatus/${item.id}?status=1`);
        notification.success({ message: "Đã thay đổi trang thái" });
        setflag(!flag)

        // return      

      } catch (error) {
        console.log(error);
      }
    }
   
  };

  // hàm xoá công việc

  const handleDelete = async (id) => {
    console.log(id);
  if(confirm("Bạn có muốn xóa")){
    try {
      const res = await privateAxios.delete(`api/v2/jobs/delete/${id}`);
      notification.success({ message: "Đã xóa thành công" });
    } catch (error) {
      console.log(error);
    }
  }
  };

  return (
    <>
      <div className="alljob__container">
        <div className="alljob__header">
          <p style={{ cursor: "pointer" }}>Trang chủ /</p>

          <p>Quản lý việc làm</p>
        </div>
        <div
          className="alljob__addjob"
          onClick={() => navigate("/company/addnewjob")}
        >
          Thêm việc làm mới
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
              <p>Trạng thái</p>
              <img src={down} alt="" />
            </div>
            <div className="alljob__content__headerTable__description column">
              <p>Thông tin chi tiết</p>
            </div>
            <div className="alljob__content__headerTable__action column">
              <p>Hành động</p>
            </div>
          </div>
         {allJobs.map((item,index) =>
           (
            <div className="alljob__content__bodyTable">
            <div className="alljob__content__bodyTable__item">
              <div className="alljob__content__bodyTable__item__stt column">
                <p>{index+1}</p>
              </div>
              <div className="alljob__content__bodyTable__item__name column">
                <p>{item.title}</p>
              </div>
              <div style={{width:"500px"}} className="alljob__content__bodyTable__item__time column">
                <p>{item.created_at}</p>
                <p>-</p>
                <p>{item.expire_at}</p>
              </div>
              <div className="alljob__content__bodyTable__item__active column">
                <label class="alljob__content__bodyTable__item__active__btn">
                  <input
                    // onClick={() => handleUpdateStatus(item)}
                    // checked={item.status === 1 ? true : false}
                    style={{}}
                    type="checkbox"
                    id="toggle-input"
                    class="toggle-input"
                  />
                  <div class="toggle-bar">
                    <div onClick={() => handleUpdateStatus(item)} class="toggle-spin"></div>
                  </div>
                </label>
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
                <div className="alljob__content__bodyTable__item__action__delete btn">
                  <p onClick={()=>handleDelete(item.id)}>Xóa</p>
                </div>
              
              </div>
            </div>
          </div>
          )
        )}
        </div>
      </div>
    </>
  );
}
