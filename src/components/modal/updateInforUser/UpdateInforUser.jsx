import React, { memo, useEffect, useState } from "react";
import "./formModal.scss";
import "./UpdateInforUser.scss";
import logo from "../../../assets/images/main/logo.png";
import sua from "../../../assets/images/main/sualogo.png";
import deletea from "../../../assets/images/main/delete.png";
import privateAxios from "../../../config/private.axios";
import { message, notification } from "antd";
import axios from "axios";
function UpdateInforUser({ isOpen, close }) {
  const [user, setUser] = useState({});
  const [flag, setFlag] = useState(0);
  const [preview, setPreview] = useState("");
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [userUpdate, setUserUpdate] = useState({
    name: "",
    birthday: "",
    gender: "",
    phone: "",
    address: "",
    position: "",
    link_git: "",
    avatar: "",
  });
  const getUser = () => {
    privateAxios
      .get("api/v2/candidates/getInfor")
      .then((res) => {
        setUser(res.data.data);
        setUserUpdate({
          name: res.data.data.name,
          address: res.data.data.address,
          phone: res.data.data.phone,
          gender: res.data.data.gender,
          link_git: res.data.data.link_git,
          birthday: res.data.data.birthday,
          position: res.data.data.position,
          avatar: res.data.data.avatar,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const getChange = (e) => {
    setUserUpdate({ ...userUpdate, [e.target.name]: e.target.value });
  };
  const handleAddMedia = (event) => {
    setSelectedMedia(event.target.files[0]);
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      setPreview(event.target?.result);
    };
    reader.readAsDataURL(file);
  };
  const updateInfor = async () => {
    console.log(selectedMedia);
    if (selectedMedia) {
      const formData = new FormData();
      formData.append("file", selectedMedia);
      formData.append("upload_preset", "my-project-md3");
      const [uploadMedia] = await Promise.all([
        axios.post(
          "https://api.cloudinary.com/v1_1/dzprh8cvv/image/upload",
          formData
        ),
      ]);
      const media = uploadMedia.data.secure_url;
      console.log(media);
      await privateAxios
        .patch(`/api/v2/candidates/updateInfoCandidate`, {
          ...userUpdate,
          avatar: media,
        })
        .then((res) => {
          setUserUpdate(res);
          notification.success({
            message: "Cập nhật thông tin thành công",
          });
          setFlag(flag + 1);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      close();
    } else {
      await privateAxios
        .patch(`/api/v2/candidates/updateInfoCandidate`, userUpdate)
        .then((res) => {
          setUserUpdate(res);
          notification.success({
            message: "Cập nhật thông tin thành công",
          });
          setFlag(flag + 1);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      close();
    }
  };
  useEffect(() => {
    getUser();
  }, [flag]);
  const closeModal = () => {
    setPreview("");
    close();
  };
  return (
    <>
      <div style={{ display: isOpen ? "block" : "none" }}>
        <div className="format1 updateInforUser">
          <div className="updateInforUser__contain">
            <p>Cập nhật thông tin cá nhân</p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <img
                src={
                  preview
                    ? preview
                    : userUpdate.avatar
                    ? userUpdate.avatar
                    : logo
                }
                alt=""
                width={100}
              />
            </div>
            <div style={{ display: "flex", gap: "50px" }}>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "transparent",
                  border: "none",
                  fontSize: "20px",
                  color: "black",
                }}
              >
                <label
                  htmlFor="file"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    backgroundColor: "transparent",
                    border: "none",
                    fontSize: "20px",
                    color: "black",
                  }}
                >
                  <img src={sua} alt="" width={20} />
                  cập nhật
                </label>
                <input
                  type="file"
                  onChange={handleAddMedia}
                  id="file"
                  style={{ display: "none" }}
                />
              </button>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "transparent",
                  border: "none",
                  fontSize: "20px",
                  color: "black",
                }}
              >
                <img src={deletea} alt="" width={20} />
                Xoá
              </button>
            </div>

            <div className="updateInforUser__table aboutUser inforUserUpdate">
              <div className="inforUserItem">
                <label htmlFor="">Họ và tên </label>
                <input
                  onChange={getChange}
                  value={userUpdate?.name}
                  name="name"
                  type="text"
                  placeholder="ABCde"
                />
              </div>
              <div className="inforUserItem">
                <label htmlFor="">Chuyên môn </label>
                <input
                  onChange={getChange}
                  value={userUpdate?.position}
                  name="position"
                  type="text"
                  placeholder="ABCde"
                />
              </div>
              <div className="inforUserItem">
                <label htmlFor="">Địa chỉ </label>
                <input
                  onChange={getChange}
                  value={userUpdate?.address}
                  name="address"
                  type="text"
                  placeholder="ABCde"
                />
              </div>
              <div className="inforUserItem">
                <label htmlFor="">SĐT </label>
                <input
                  onChange={getChange}
                  value={userUpdate?.phone}
                  name="phone"
                  type="text"
                  placeholder="ABCde"
                />
              </div>
              <div className="inforUserItem">
                <label htmlFor="">DOB </label>
                <input
                  onChange={getChange}
                  value={userUpdate?.birthday}
                  name="birthday"
                  type="date"
                  placeholder="ABCde"
                />
              </div>
              <div className="inforUserItem">
                <label htmlFor="">Giới tính </label>
                <input
                  onChange={getChange}
                  value={userUpdate?.gender}
                  name="gender"
                  type="text"
                  placeholder="ABCde"
                />
              </div>
              <div className="inforUserItem">
                <label htmlFor="">Trang github </label>
                <input
                  onChange={getChange}
                  value={userUpdate?.link_git}
                  name="link_git"
                  type="text"
                  placeholder="ABCde"
                />
              </div>
            </div>
            <div className="updateInforUser__button">
              <button onClick={updateInfor}>Cập nhật</button>
              <button
                className="updateInforUser__button__cancel"
                onClick={closeModal}
              >
                Hủy Bỏ
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default memo(UpdateInforUser);
