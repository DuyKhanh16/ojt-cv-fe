import React from "react";
import "./AllUserAdmin.scss";
import AdminSearch from "../../../../components/adminSearch/AdminSearch";
export default function AllUserAdmin() {
  return (
    <>
      <div className="allUserAdmin__container">
        <div className="allUserAdmin__header">
          <AdminSearch/>
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
            <div className="allUserAdmin__content__headerTable__active column">
              <p>Trạng thái</p>
            </div>
            <div className="allUserAdmin__content__headerTable__description column">
              <p>Thông tin chi tiết</p>
            </div>
          </div>
          <div className="allUserAdmin__content__bodyTable">
            <div className="allUserAdmin__content__bodyTable__item">
              <div className="allUserAdmin__content__bodyTable__item__stt column">
                <p>1</p>
              </div>
              <div className="allUserAdmin__content__bodyTable__item__name column">
                <p>Trần Văn Hoàng</p>
              </div>
              <div className="allUserAdmin__content__bodyTable__item__email column">
                <p>abc@gmail.com</p>
              </div>
              <div className="allUserAdmin__content__bodyTable__item__active column">
                <label class="allUserAdmin__content__bodyTable__item__active__btn">
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
              <div className="allUserAdmin__content__bodyTable__item__description column">
                <p>Xem</p>
              </div>
            </div>
            <div className="allUserAdmin__content__bodyTable__item">
              <div className="allUserAdmin__content__bodyTable__item__stt column">
                <p>2</p>
              </div>
              <div className="allUserAdmin__content__bodyTable__item__name column">
                <p>Trần Văn Hoàng</p>
              </div>
              <div className="allUserAdmin__content__bodyTable__item__email column">
                <p>abc@gmail.com</p>
              </div>
              <div className="allUserAdmin__content__bodyTable__item__active column">
                <label class="allUserAdmin__content__bodyTable__item__active__btn">
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
              <div className="allUserAdmin__content__bodyTable__item__description column">
                <p>Xem</p>
              </div>
            </div>
            <div className="allUserAdmin__content__bodyTable__item">
              <div className="allUserAdmin__content__bodyTable__item__stt column">
                <p>3</p>
              </div>
              <div className="allUserAdmin__content__bodyTable__item__name column">
                <p>Trần Văn Hoàng</p>
              </div>
              <div className="allUserAdmin__content__bodyTable__item__email column">
                <p>abc@gmail.com</p>
              </div>
              <div className="allUserAdmin__content__bodyTable__item__active column">
                <label class="allUserAdmin__content__bodyTable__item__active__btn">
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
              <div className="allUserAdmin__content__bodyTable__item__description column">
                <p>Xem</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
