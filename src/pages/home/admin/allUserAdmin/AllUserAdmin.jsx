import React, { useEffect, useState } from "react";
import "./AllUserAdmin.scss";
import AdminSearch from "../../../../components/adminSearch/AdminSearch";
import { useNavigate } from "react-router";
import publicAxios from "../../../../config/pulic.axios";
import {Button, Switch, Modal, notification } from "antd";
export default function AllUserAdmin() {
  window.scrollTo(0, 0);
  const [allCandidate, setAllCandidate] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [infoUser, setInfoUser] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    avatar: "",
    address: "",
    certificate: "",
  });
  const navigate = useNavigate();
  const role = JSON.parse(localStorage.getItem("role"));
  const token1 = JSON.parse(localStorage.getItem("token"));

  const getAllCandidate = async () => {
    try {
      const res = await publicAxios.get("/api/v2/candidates/getAll");
      // console.log(res.data.data);
      setAllCandidate(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(allCandidate);
  useEffect(() => {
    getAllCandidate();
    if(!token1){
      navigate("/login");
    }
    if(role == 1){
      navigate("/candidate");
    }
    if(role == 2){
      navigate("/company");
    }
  }, []);

  // modal
  const showModal = (item) => {
    // console.log(item)
    setInfoUser({
      name: item.name,
      email: item.account_candidate_id.email,
      phone: item.phone,
      position: item.position,
      address: item.address,
      certificate: item.certificate_candidate[0].name,
      avatar: item.avatar,
    });
    setIsModalOpen(true);
  };
  console.log(infoUser);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // THAY ĐỔI TRẠNG THÁI HỌC VIÊN
  const BandorUnBanUser = async (item) => {
    try {
      const res = await publicAxios.patch(`api/v2/account/update/${item.id}`, {
        status: !item.status,
      });
      notification.success({
        message: "Thay đổi trang thái thành công",
        placement: "bottomRight",
        duration: 2,
      });
      console.log(res.data);
      getAllCandidate();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <div className="allUserAdmin__container">
        <Modal
          width={700}
          title="Thông tin chi tiết"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div
            style={{
              display: "flex",
              paddingTop: "20px",
              fontFamily: "sans-serif",
            }}
          >
            <div style={{ width: "40%" }}>
              <div style={{ width: "100%" }}>
                <img
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                  src={infoUser.avatar}
                ></img>
              </div>
            </div>
            <div style={{ width: "60%" }}>
              <div style={{ display: "flex" }}>
                <span style={{ marginRight: "10px", fontWeight: "bold" }}>
                  Họ và tên :
                </span>
                <div> {infoUser.name}</div>
              </div>
              <div style={{ display: "flex", paddingTop: "10px" }}>
                <span style={{ marginRight: "10px", fontWeight: "bold" }}>
                  Email :
                </span>
                <div> {infoUser.email}</div>
              </div>{" "}
              <div style={{ display: "flex", paddingTop: "10px" }}>
                <span style={{ marginRight: "10px", fontWeight: "bold" }}>
                  Số điện thoại :
                </span>
                <div> {infoUser.phone}</div>
              </div>{" "}
              <div style={{ display: "flex", paddingTop: "10px" }}>
                <span style={{ marginRight: "10px", fontWeight: "bold" }}>
                  Địa chỉ :
                </span>
                <div> {infoUser.address}</div>
              </div>{" "}
              <div style={{ display: "flex", paddingTop: "10px" }}>
                <span style={{ marginRight: "10px", fontWeight: "bold" }}>
                  Kỹ năng :
                </span>
                <div> {infoUser.position}</div>
              </div>
              <div style={{ display: "flex", paddingTop: "10px" }}>
                <span style={{ marginRight: "10px", fontWeight: "bold" }}>
                  Ngoại ngữ:
                </span>
                <div> {infoUser.certificate}-Toiec600</div>
              </div>
            </div>
          </div>
        </Modal>
        <div className="allUserAdmin__header">
          <AdminSearch />
        </div>
        <div className="allUserAdmin__content">
          <div className="allUserAdmin__content__headerTable">
            <div className="allUserAdmin__content__headerTable__stt column">
              <p>STT</p>
            </div>
            <div className="allUserAdmin__content__headerTable__name column">
              <p>Họ và tên</p>
            </div>
            <div className="allUserAdmin__content__headerTable__email column">
              <p>Email</p>
            </div>
            {/* <div className="allUserAdmin__content__headerTable__active column">
              <p>Trạng thái</p>
            </div> */}
            <div className="allUserAdmin__content__headerTable__active column">
              <p>Khóa đăng nhập</p>
            </div>
            <div className="allUserAdmin__content__headerTable__description column">
              <p>Thông tin chi tiết</p>
            </div>
          </div>
          <div className="allUserAdmin__content__bodyTable">
            {allCandidate.map((item, index) => {
              return (
                <div
                  className="allUserAdmin__content__bodyTable__item"
                  key={item.id}
                >
                  <div className="allUserAdmin__content__bodyTable__item__stt column">
                    <p>{index + 1}</p>
                  </div>
                  <div className="allUserAdmin__content__bodyTable__item__name column">
                    <p>{item.name}</p>
                  </div>
                  <div className="allUserAdmin__content__bodyTable__item__email column">
                    <p>{item.account_candidate_id.email}</p>
                  </div>
                  {/* <div className="allUserAdmin__content__bodyTable__item__active column">
                    {item.account_candidate_id.status ? (
                      <p style={{ color: "green" }}>Hoạt động</p>
                    ) : (
                      <p style={{ color: "gray" }}>Không hoạt động</p>
                    )}
                  </div> */}
                  <div className="allUserAdmin__content__bodyTable__item__description column">
                    {item.account_candidate_id.status ? (
                      <p
                        onClick={() =>
                          BandorUnBanUser(item.account_candidate_id)
                        }
                      >
                         <Switch style={{backgroundColor:"green",color:"White"}}
                      defaultChecked
                      checked={item.account_candidate_id.status  === 1 ? true : false}
                    />
                      </p>
                    ) : (
                      <p
                        onClick={() =>
                          BandorUnBanUser(item.account_candidate_id)
                        }
                      >
                        <Switch 
                      defaultChecked
                      checked={item.account_candidate_id.status  === 1 ? true : false}
                    />
                      </p>
                    )}
                  </div>

                  <div
                    onClick={() => showModal(item)}
                    className="allUserAdmin__content__bodyTable__item__description column"
                  >
                   <Button style={{backgroundColor:"Red",color:"White"}}>Chi tiết</Button>
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
