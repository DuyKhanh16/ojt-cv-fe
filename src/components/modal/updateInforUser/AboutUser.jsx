import React, { useState, memo, useEffect } from "react";
import "./AboutUser.scss";
import "./formModal.scss";
import privateAxios from "../../../config/private.axios";
import { notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { candidateAsync } from "../../../redux/reduce/candidateReduce";
import { updateAboutMe } from "../../../apis/candidates";
function AboutUser({ isOpen, close, item }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.candidate.data);
  useEffect(() => {
    dispatch(candidateAsync());
  }, [dispatch]);
  console.log(user);
  const [aboutUser, setAboutUser] = useState({
    aboutMe: user?.aboutme,
  });
  const getChange = (e) => {
    setAboutUser({ ...aboutUser, [e.target.name]: e.target.value });
  };
  const handleUpdate = async () => {
    await updateAboutMe(aboutUser)
      .then((res) => {
        close();
        notification.success({
          message: "Thêm thông tin thành công",
        });
      })
      .catch((error) => {
        return error;
      });
  };
  return (
    <>
      <div style={{ display: isOpen ? "block" : "none" }}>
        <div className=" updateInforUser">
          <div className="updateInforUser__contain">
            <p>Giới thiệu về bản thân</p>
            <div className="updateInforUser__table aboutUser">
              <label htmlFor="">Mô tả bản thân</label>
              <textarea
                value={aboutUser.aboutMe || ""}
                onChange={getChange}
                name="aboutMe"
                id=""
                cols="45"
                rows="5"
                placeholder="Giới thiệu kinh nghiệm bản thân"
              ></textarea>
            </div>
            <div className="updateInforUser__button">
              <button onClick={handleUpdate}>Cập nhật</button>
              <button
                className="updateInforUser__button__cancel"
                onClick={() => close()}
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
export default memo(AboutUser);
