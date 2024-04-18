import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import logo from "../../../../assets/images/main/Software code testing-pana 1.png";
import privateAxios from "../../../../config/private.axios";

export default function UpdateInfoFistTime() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [infoCompany, SetInfoCompany] = useState();
  const [updateCompany, setUpdateCompany] = useState({
    name: "",
    phone: "",
    email: "",
    size: "",
    photo: "",
    link_facebook: "",
    website: "",
    description: "",
    typeCompany_id: "",
    policy: "",
  });

//   hàm lấy thông tin người dùng
  const getInfo = async () => {
    try {
      const res = await privateAxios.get(`api/v2/companies/getInfor`);
      setUpdateCompany({
        name: res.data.data.name,
        phone: res.data.data.phone,
        email: res.data.data.account_company_id.email,
        size: res.data.data.size,
        photo: res.data.data.logo,
        link_facebook: res.data.data.link_facebook,
        website: res.data.data.website,
        description: res.data.data.description,
        typeCompany_id: res.data.data.typeCompany_id.id,
        policy: res.data.data.policy,
      })
      SetInfoCompany(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);
  console.log(updateCompany, "infoCompany");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <div>
        <div style={{ alignItems: "center" }}>
          <img src={logo}></img>
          <h3>
            Chào mừng , Bạn hãy cập nhật thông tin cá nhân
            của mình
          </h3>
          <div className="user-companyView-info-feature">
            <button onClick={showModal}>Chỉnh sửa</button>
          </div>
        </div>
      </div>
    </div>
  );
}
