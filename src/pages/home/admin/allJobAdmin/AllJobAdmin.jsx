import React from "react";
import HeaderAdmin from "../../../../components/headerAdmin/HeaderAdmin";
import FormSearch from "../../../../components/formSearch/FormSearch";
import "./AllJobAdmin.scss";
export default function AllJobAdmin() {
  return (
    <>
      <HeaderAdmin></HeaderAdmin>
      <div className="allJobAdmin__formsearch">
        <FormSearch></FormSearch>
      </div>
      <div className="allJobAdmin__container">
        <div className="allJobAdmin__header">
          <p>Trang chủ</p>
          <p>/</p>
          <p>Quản lý việc làm</p>
        </div>
        <div className="allJobAdmin__content">
          <div className="allJobAdmin__content__headerTable">
            <div className="allJobAdmin__content__headerTable__stt column">
              <p>STT</p>
            </div>
            <div className="allJobAdmin__content__headerTable__namejob column">
              <p>Tên công việc </p>
            </div>
            <div className="allJobAdmin__content__headerTable__nameCompany column">
              <p>Công ty</p>
            </div>
            <div className="allJobAdmin__content__headerTable__email column">
              <p>Email liên hệ</p>
            </div>
            <div className="allJobAdmin__content__headerTable__time column">
              <p>Thời hạn ứng tuyển</p>
            </div>
            <div className="allJobAdmin__content__headerTable__salary column">
              <p>Khoảng lương</p>
            </div>
            <div className="allJobAdmin__content__headerTable__active column">
              <p>Trạng thái</p>
            </div>
            <div className="allJobAdmin__content__headerTable__description column">
              <p>Chi tiết thông tin</p>
            </div>
          </div>
          <div className="allJobAdmin__content__bodyTable">
            <div className="allJobAdmin__content__bodyTable__item">
              <div className="allJobAdmin__content__headerTable__stt column">
                <p>1</p>
              </div>
              <div className="allJobAdmin__content__headerTable__namejob column">
                <p>Full-stack Developer </p>
              </div>
              <div className="allJobAdmin__content__headerTable__nameCompany column">
                <p>Rikkei Soft</p>
              </div>
              <div className="allJobAdmin__content__headerTable__email column">
                <p>Rikkei@gmail.com</p>
              </div>
              <div className="allJobAdmin__content__headerTable__time column">
                <span class="material-symbols-outlined">calendar_month</span>
                <p>12/12/2022</p>
              </div>
              <div className="allJobAdmin__content__headerTable__salary column">
                <div className="allJobAdmin__content__headerTable__salary__start ">
                  $2000
                </div>
                <span>-</span>
                <div className="allJobAdmin__content__headerTable__salary__end ">
                  $4000
                </div>
              </div>
              <div className="allJobAdmin__content__headerTable__active column">
                <label class="allJobAdmin__content__bodyTable__item__active__btn">
                  <input
                    type="checkbox"
                    id="toggle-input"
                    class="toggle-input"
                  />
                  <div class="toggle-bar">
                    <div class="toggle-spin"></div>
                  </div>
                </label>
              </div>
              <div className="allJobAdmin__content__headerTable__description column">
                <p>Truy cập</p>
              </div>
            </div>
            <div className="allJobAdmin__content__bodyTable__item">
              <div className="allJobAdmin__content__headerTable__stt column">
                <p>2</p>
              </div>
              <div className="allJobAdmin__content__headerTable__namejob column">
                <p>Full-stack Developer </p>
              </div>
              <div className="allJobAdmin__content__headerTable__nameCompany column">
                <p>Rikkei Soft</p>
              </div>
              <div className="allJobAdmin__content__headerTable__email column">
                <p>Rikkei@gmail.com</p>
              </div>
              <div className="allJobAdmin__content__headerTable__time column">
                <span class="material-symbols-outlined">calendar_month</span>
                <p>12/12/2022</p>
              </div>
              <div className="allJobAdmin__content__headerTable__salary column">
                <div className="allJobAdmin__content__headerTable__salary__start ">
                  $2000
                </div>
                <span>-</span>
                <div className="allJobAdmin__content__headerTable__salary__end ">
                  $4000
                </div>
              </div>
              <div className="allJobAdmin__content__headerTable__active column">
                <label class="allJobAdmin__content__bodyTable__item__active__btn">
                  <input
                    type="checkbox"
                    id="toggle-input"
                    class="toggle-input"
                  />
                  <div class="toggle-bar">
                    <div class="toggle-spin"></div>
                  </div>
                </label>
              </div>
              <div className="allJobAdmin__content__headerTable__description column">
                <p>Truy cập</p>
              </div>
            </div>
            <div className="allJobAdmin__content__bodyTable__item">
              <div className="allJobAdmin__content__headerTable__stt column">
                <p>3</p>
              </div>
              <div className="allJobAdmin__content__headerTable__namejob column">
                <p>Full-stack Developer </p>
              </div>
              <div className="allJobAdmin__content__headerTable__nameCompany column">
                <p>Rikkei Soft</p>
              </div>
              <div className="allJobAdmin__content__headerTable__email column">
                <p>Rikkei@gmail.com</p>
              </div>
              <div className="allJobAdmin__content__headerTable__time column">
                <span class="material-symbols-outlined">calendar_month</span>
                <p>12/12/2022</p>
              </div>
              <div className="allJobAdmin__content__headerTable__salary column">
                <div className="allJobAdmin__content__headerTable__salary__start ">
                  $2000
                </div>
                <span>-</span>
                <div className="allJobAdmin__content__headerTable__salary__end ">
                  $4000
                </div>
              </div>
              <div className="allJobAdmin__content__headerTable__active column">
                <label class="allJobAdmin__content__bodyTable__item__active__btn">
                  <input
                    type="checkbox"
                    id="toggle-input"
                    class="toggle-input"
                  />
                  <div class="toggle-bar">
                    <div class="toggle-spin"></div>
                  </div>
                </label>
              </div>
              <div className="allJobAdmin__content__headerTable__description column">
                <p>Truy cập</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
