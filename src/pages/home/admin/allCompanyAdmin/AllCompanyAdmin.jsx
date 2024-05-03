import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../../../components/headerAdmin/HeaderAdmin";
import "./AllCompanyAdmin.scss";
import AdminSearch from "../../../../components/adminSearch/AdminSearch";
import { useNavigate } from "react-router";
import publicAxios from "../../../../config/pulic.axios";
import { Switch, Modal } from "antd";
export default function AllCompanyAdmin() {
  window.scrollTo(0, 0);
  const [allCompany, setAllCompany] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listbrand, setListbrand] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [infoCompany, SetinfoCompany] = useState({
    title: "",
    phone: "",
    logo: "",
    size: "",
    typeCompany: "",
    address: "",
    email: "",
  });
  const role = JSON.parse(localStorage.getItem("role"))
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();

  const showModal = (item) => {
    // console.log(item)
    SetinfoCompany({
      title: item.name,
      phone: item.phone,
      logo: item.logo,
      email: item.email_company,
      size: item.size,
      address: item.address_company[0].address,
      typeCompany: item.typeCompany_id.name,
    });
    setListbrand(item.address_company);
    setIsModalOpen(true);
  };

  console.log(infoCompany);
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getAllCompany = async () => {
    try {
      const res = await publicAxios.get("/api/v2/companies/getAll");
      console.log(res.data.data);
      setAllCompany(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCompany();
    if(!token){
      navigate("/login");
    }
    if(role == 1){
      navigate("/candidate");
    }
    if(role == 2){
      navigate("/company");
    }
  }, []);

  // thay đôi trạng thái công ty
  // Hàm xử lý sự kiện thay đổi của Switch, nhận vào dữ liệu data và sự kiện event
  const handleChange = (data) => (checked) => {
    console.log("Data:", data); // In ra dữ liệu được truyền vào
    console.log("Switch checked:", checked); // In ra trạng thái của Switch

    // Thực hiện các xử lý khác tại đây nếu cần
    setIsChecked(checked); // Cập nhật trạng thái của Switch
  };

  return (
    <>
      <div className="allCompanyAdmin__formsearch">
        <Modal
          width={800}
          title="Thông tin Doanh nghiệp"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <div>Tên công ty :</div>
            <div style={{ fontWeight: "bold", fontSize: "18px" }}>
              {" "}
              {infoCompany.title}
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <div>Số điện thoại liên hệ :</div>
            <div style={{ fontWeight: "bold", fontSize: "16px" }}>
              {" "}
              {infoCompany.phone}
            </div>
          </div>
          <div style={{ marginBottom: "50px" }}>
            <div>Logo Công ty :</div>
            <div>
              {" "}
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  marginLeft: "200px",
                }}
                src={infoCompany.logo}
              ></img>
            </div>
          </div>
          <div style={{ marginBottom: "10px", display: "flex", gap: "10px" }}>
            <div>Địa chỉ :</div>
            <div style={{ fontWeight: "bold", fontSize: "18px" }}>
              {" "}
              {infoCompany.address}
            </div>
          </div>
          <div style={{ marginBottom: "10px", display: "flex", gap: "10px" }}>
            <div>Số lượng nhân viên :</div>
            <div style={{ fontWeight: "bold", fontSize: "18px" }}>
              {" "}
              {infoCompany.size} Người
            </div>
          </div>
          <div style={{ marginBottom: "10px", display: "flex", gap: "10px" }}>
            <div>Địa chi email :</div>
            <div style={{ fontWeight: "bold", fontSize: "18px" }}>
              {" "}
              {infoCompany.email}{" "}
            </div>
          </div>
          <div style={{ marginBottom: "10px", display: "flex", gap: "10px" }}>
            <div>Dạng công ty :</div>
            <div style={{ fontWeight: "bold", fontSize: "18px" }}>
              {" "}
              {infoCompany.typeCompany}
            </div>
          </div>
        </Modal>
        <AdminSearch></AdminSearch>
      </div>
      <div className="allCompanyAdmin__container">
        <div className="allCompanyAdmin__content">
          <div className="allCompanyAdmin__content__headerTable">
            <div className="allCompanyAdmin__content__headerTable__stt column">
              <p>STT</p>
            </div>
            <div className="allCompanyAdmin__content__headerTable__nameCompany column">
              <p>Tên công ty</p>
            </div>
            <div className="allCompanyAdmin__content__headerTable__email column">
              <p>Điện thoại</p>
            </div>
            <div className="allCompanyAdmin__content__headerTable__active column">
              <p>Trạng thái</p>
            </div>
            <div className="allCompanyAdmin__content__headerTable__description column">
              <p>Thông tin chi tiết</p>
            </div>
          </div>
          <div className="allCompanyAdmin__content__bodyTable">
            {allCompany?.map((item, index) => {
              return (
                <div
                  className="allCompanyAdmin__content__bodyTable__item"
                  key={item?.id}
                >
                  <div className="allCompanyAdmin__content__bodyTable__item__stt column">
                    <p>{index + 1}</p>
                  </div>
                  <div className="allCompanyAdmin__content__bodyTable__item__nameCompany column">
                    <p>{item?.name}</p>
                  </div>
                  <div className="allCompanyAdmin__content__bodyTable__item__email column">
                    <p>{item?.phone}</p>
                  </div>
                  <div className="allCompanyAdmin__content__bodyTable__item__active column">
                    <Switch
                      defaultChecked
                      // checked={item.status === 1 ? true : false}
                      onChange={handleChange(item.id)}
                    />
                  </div>
                  <div
                    onClick={() => showModal(item)}
                    className="allCompanyAdmin__content__bodyTable__item__description column"
                  >
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
