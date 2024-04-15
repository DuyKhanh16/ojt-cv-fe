import React from "react";
import HeaderAdmin from "../../../../components/headerAdmin/HeaderAdmin";
import "./AllCompanyAdmin.scss";
import AdminSearch from "../../../../components/adminSearch/AdminSearch";
export default function AllCompanyAdmin() {
  return (
    <>
      <div className="allCompanyAdmin__formsearch">
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
              <p>Email</p>
            </div>
            <div className="allCompanyAdmin__content__headerTable__active column">
              <p>Trạng thái</p>
            </div>
            <div className="allCompanyAdmin__content__headerTable__description column">
              <p>Thông tin chi tiết</p>
            </div>
          </div>
          <div className="allCompanyAdmin__content__bodyTable">
            <div className="allCompanyAdmin__content__bodyTable__item">
              <div className="allCompanyAdmin__content__bodyTable__item__stt column">
                <p>1</p>
              </div>
              <div className="allCompanyAdmin__content__bodyTable__item__nameCompany column">
                <p>Rikkei</p>
              </div>
              <div className="allCompanyAdmin__content__bodyTable__item__email column">
                <p>rikkei@gmail.com</p>
              </div>
              <div className="allCompanyAdmin__content__bodyTable__item__active column">
                <label class="allCompanyAdmin__content__bodyTable__item__active__btn">
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
              <div className="allCompanyAdmin__content__bodyTable__item__description column">
                <p>Xem</p>
              </div>
            </div>
            <div className="allCompanyAdmin__content__bodyTable__item">
              <div className="allCompanyAdmin__content__bodyTable__item__stt column">
                <p>2</p>
              </div>
              <div className="allCompanyAdmin__content__bodyTable__item__nameCompany column">
                <p>Rikkei</p>
              </div>
              <div className="allCompanyAdmin__content__bodyTable__item__email column">
                <p>rikkei@gmail.com</p>
              </div>
              <div className="allCompanyAdmin__content__bodyTable__item__active column">
                <label class="allCompanyAdmin__content__bodyTable__item__active__btn">
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
              <div className="allCompanyAdmin__content__bodyTable__item__description column">
                <p>Xem</p>
              </div>
            </div>
            <div className="allCompanyAdmin__content__bodyTable__item">
              <div className="allCompanyAdmin__content__bodyTable__item__stt column">
                <p>3</p>
              </div>
              <div className="allCompanyAdmin__content__bodyTable__item__nameCompany column">
                <p>Rikkei</p>
              </div>
              <div className="allCompanyAdmin__content__bodyTable__item__email column">
                <p>rikkei@gmail.com</p>
              </div>
              <div className="allCompanyAdmin__content__bodyTable__item__active column">
                <label class="allCompanyAdmin__content__bodyTable__item__active__btn">
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
              <div className="allCompanyAdmin__content__bodyTable__item__description column">
                <p>Xem</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}
