import React from "react";
import "./AboutUser.scss";
import "./formModal.scss";
export default function AboutUser({ isOpen, close }) {
  console.log(isOpen);
  return (
    <>
      <div style={{ display: isOpen ? "block" : "none" }}>
        <div className=" updateInforUser">
          <div className="updateInforUser__contain">
            <p>Giới thiệu về bản thân</p>
            <div className="updateInforUser__table aboutUser">
              <label htmlFor="">Mô tả bản thân</label>
              <input type="text" placeholder="Giới thiệu điểm mạnh bản thân" />
              <label htmlFor="">Kinh nghiệm bản thân</label>
              <textarea
                name=""
                id=""
                cols="45"
                rows="5"
                placeholder="Giới thiệu kinh nghiệm bản thân"
              ></textarea>
            </div>
            <div className="updateInforUser__button">
              <button>Cập nhật</button>
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
