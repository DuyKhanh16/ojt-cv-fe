import React from "react";
import FormSearch from "../../../../components/formSearch/FormSearch";
import "./AllUserApply.scss";
import HeaderCompany from "../../../../components/headerCompany/HeaderCompany";
export default function AllUserApply() {
  return (
    <>
      <HeaderCompany></HeaderCompany>
      <div className="allUserApply__formsearch">
      <FormSearch></FormSearch>
      </div>
      <div className="allUserApply__container">
        <div className="allUserApply__header">
          <p>Trang chủ</p>
          <p>/</p>
          <p>Quản lý ứng viên</p>
        </div>
        <div className="allUserApply__content">
          <div className="allUserApply__content__headerTable">
            <div className="allUserApply__content__headerTable__stt column">
              <p>STT</p>
            </div>
            <div className="allUserApply__content__headerTable__name column">
              <p>Họ và tên</p>
            </div>
            <div className="allUserApply__content__headerTable__email column">
              <p>Email</p>
            </div>
            <div className="allUserApply__content__headerTable__job column">
              <p>Công việc ứng tuyển</p>
            </div>
            <div className="allUserApply__content__headerTable__active column">
              <p>Trạng thái</p>
            </div>
            <div className="allUserApply__content__headerTable__description column">
              <p>Thông tin CV</p>
            </div>
          </div>
          <div className="allUserApply__content__bodyTable">
            <div className="allUserApply__content__bodyTable__item">
              <div className="allUserApply__content__bodyTable__item__stt column">
                <p>1</p>
              </div>
              <div className="allUserApply__content__bodyTable__item__name column">
                <p>Trần Văn Hoàng</p>
              </div>
              <div className="allUserApply__content__bodyTable__item__email column">
                <p>abc@gmail.com</p>
              </div>
              <div className="allUserApply__content__bodyTable__item__job column">
                <p>Fresher Java</p>
              </div>
              <div className="allUserApply__content__bodyTable__item__active column">
                <div className="allUserApply__content__bodyTable__item__active__btn">
                    Chờ xác nhận
                </div>
              </div>
              <div className="allUserApply__content__bodyTable__item__description column">
                <p>Hoang_Fresher_JV_CV</p>
              </div>
            </div>
            <div className="allUserApply__content__bodyTable__item">
              <div className="allUserApply__content__bodyTable__item__stt column">
                <p>2</p>
              </div>
              <div className="allUserApply__content__bodyTable__item__name column">
                <p>Trần Văn Hoàng</p>
              </div>
              <div className="allUserApply__content__bodyTable__item__email column">
                <p>abc@gmail.com</p>
              </div>
              <div className="allUserApply__content__bodyTable__item__job column">
                <p>Fresher Java</p>
              </div>
              <div className="allUserApply__content__bodyTable__item__active column">
                <div className="allUserApply__content__bodyTable__item__active__btn">
                    Chờ xác nhận
                </div>
              </div>
              <div className="allUserApply__content__bodyTable__item__description column">
                <p>Hoang_Fresher_JV_CV</p>
              </div>
            </div>
            <div className="allUserApply__content__bodyTable__item">
              <div className="allUserApply__content__bodyTable__item__stt column">
                <p>3</p>
              </div>
              <div className="allUserApply__content__bodyTable__item__name column">
                <p>Trần Văn Hoàng</p>
              </div>
              <div className="allUserApply__content__bodyTable__item__email column">
                <p>abc@gmail.com</p>
              </div>
              <div className="allUserApply__content__bodyTable__item__job column">
                <p>Fresher Java</p>
              </div>
              <div className="allUserApply__content__bodyTable__item__active column">
                <div className="allUserApply__content__bodyTable__item__active__btn btngreen">
                    Đã xác nhận
                </div>
              </div>
              <div className="allUserApply__content__bodyTable__item__description column">
                <p>Hoang_Fresher_JV_CV</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}
