import React from "react";
import FormSearch from "../../../../components/formSearch/FormSearch";
import "./Alljob.scss";
import HeaderCompany from "../../../../components/headerCompany/HeaderCompany";
import down from '../../../../assets/images/fromsearch/Vector.png'
export default function Alljob() {
  return (
    <>
      <HeaderCompany></HeaderCompany>
      <div className="alljob__formsearch">
        <FormSearch></FormSearch>
      </div>
      <div className="alljob__container">
        <div className="alljob__header">
          <p>Trang chủ</p>
          <p>/</p>
          <p>Quản lý việc làm</p>
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
          <div className="alljob__content__bodyTable">
            <div className="alljob__content__bodyTable__item">
              <div className="alljob__content__bodyTable__item__stt column">
                <p>1</p>
              </div>
              <div className="alljob__content__bodyTable__item__name column">
                <p>Fresher Java</p>
              </div>
              <div className="alljob__content__bodyTable__item__time column">
                <p>15/04/2024</p>
                <p>-</p>
                <p>15/05/2024</p>
              </div>
              <div className="alljob__content__bodyTable__item__active column">
                <label class="alljob__content__bodyTable__item__active__btn">
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
              <div className="alljob__content__bodyTable__item__description column">
                <p>Xem</p>
              </div>
              <div className="alljob__content__bodyTable__item__action column">
                <div className="alljob__content__bodyTable__item__action__delete btn">
                  <p>Xóa</p>
                </div>
                <div className="alljob__content__bodyTable__item__action__update btn">
                  <p>Sửa</p>
                </div>
              </div>
            </div>
            <div className="alljob__content__bodyTable__item">
              <div className="alljob__content__bodyTable__item__stt column">
                <p>2</p>
              </div>
              <div className="alljob__content__bodyTable__item__name column">
                <p>Fresher Java</p>
              </div>
              <div className="alljob__content__bodyTable__item__time column">
                <p>15/04/2024</p>
                <p>-</p>
                <p>15/05/2024</p>
              </div>
              <div className="alljob__content__bodyTable__item__active column">
                <label class="alljob__content__bodyTable__item__active__btn">
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
              <div className="alljob__content__bodyTable__item__description column">
                <p>Xem</p>
              </div>
              <div className="alljob__content__bodyTable__item__action column">
                <div className="alljob__content__bodyTable__item__action__delete btn">
                  <p>Xóa</p>
                </div>
                <div className="alljob__content__bodyTable__item__action__update btn">
                  <p>Sửa</p>
                </div>
              </div>
            </div>
            <div className="alljob__content__bodyTable__item">
              <div className="alljob__content__bodyTable__item__stt column">
                <p>3</p>
              </div>
              <div className="alljob__content__bodyTable__item__name column">
                <p>Fresher Java</p>
              </div>
              <div className="alljob__content__bodyTable__item__time column">
                <p>15/04/2024</p>
                <p>-</p>
                <p>15/05/2024</p>
              </div>
              <div className="alljob__content__bodyTable__item__active column">
                <label class="alljob__content__bodyTable__item__active__btn">
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
              <div className="alljob__content__bodyTable__item__description column">
                <p>Xem</p>
              </div>
              <div className="alljob__content__bodyTable__item__action column">
                <div className="alljob__content__bodyTable__item__action__delete btn">
                  <p>Xóa</p>
                </div>
                <div className="alljob__content__bodyTable__item__action__update btn">
                  <p>Sửa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
