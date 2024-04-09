import React from "react";
import "./AddJob.scss";
export default function AddJob() {
  return (
    <>
      <div className="addJob__container">
        <div className="addJob__nav">
          <p className="addJob__nav__home">Trang chủ /</p>
          <p className="addJob__nav__inforCompany">Thông tin doanh nghiệp / </p>
          <p className="addJob__nav__myCompany">Doanh nghiệp của tôi /</p>
          <p className="addJob__nav__addNewJob">Thêm việc làm mới</p>
        </div>
        <div className="addJob__body">
          <h4>Thêm việc làm mới</h4>
          <div className="addJob__body__form">
            <div className="addJob__body__form__nameJob">
              <label htmlFor="">Tên công việc</label>
              <br />
              <input
                type="Nhập tên công việc"
                className="addJob__body__form__nameJob--text"
                placeholder="Nhập tên việc"
              />
            </div>
            <div className="addJob__body__form__Fusion">
              <div className="addJob__body__form__location">
                <label htmlFor="">Địa điểm</label> <br />
                <input type="text" placeholder="Hà Nội" />
              </div>
              <div className="addJob__body__form__time">
                <label htmlFor="">Thời gian</label> <br />
                <select name="" id="">
                  <option value="">Chọn</option>
                  <option value="">Part-time</option>
                  <option value="">Full-time</option>
                </select>
              </div>
            </div>
            <div className="addJob__body__form__highInfor">
              <p>Thông tin nâng cao</p>
              <div className="addJob__body__form__highInfor__all">
                <div className="addJob__body__form__highInfor__salary">
                  <label htmlFor="">Mức lương</label><br />
                  <input type="text" placeholder="$200- $1000" />
                </div>
                <div className="addJob__body__form__highInfor__time">
                  <label htmlFor="">Thời hạn ứng tuyển</label><br />
                  <input type="date" placeholder="ngày" />
                </div>
                <div className="addJob__body__form__highInfor__level">
                  <label htmlFor="">Cấp độ</label><br />
                  <select name="" id="">
                    <option value="">Chọn</option>
                    <option value="">Fresher</option>
                    <option value="">Junior</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="addJob__body__form__description">
              <label htmlFor="">Mô tả công việc</label>
              <br />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Nhập mô tả"
              ></textarea>
            </div>
            <div className="addJob__body__form__button">Thêm mới</div>
          </div>
        </div>
      </div>
    </>
  );
}
