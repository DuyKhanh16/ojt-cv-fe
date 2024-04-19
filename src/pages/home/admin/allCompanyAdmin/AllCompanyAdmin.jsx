import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../../../components/headerAdmin/HeaderAdmin";
import "./AllCompanyAdmin.scss";
import AdminSearch from "../../../../components/adminSearch/AdminSearch";
import { useNavigate } from "react-router";
import publicAxios from "../../../../config/pulic.axios";
export default function AllCompanyAdmin() {
  const [allCompany, setAllCompany] = useState([]);
  const navigate = useNavigate();
  const getAllCompany = async () => {
    try {
      const res = await publicAxios.get("/api/v2/companies/getAll");
      console.log(res.data.data);
      setAllCompany(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCompany();
  }, []);


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
              <p>Điện thoại</p>
            </div>
            <div className="allCompanyAdmin__content__headerTable__active column">
              <p>Trạng thái</p>
            </div>
            <div className="allCompanyAdmin__content__headerTable__description column">
              <p>Thông tin chi tiết</p>
            </div>
          </div>
          <div className="allCompanyAdmin__content__bodyTable">
            {allCompany?.map((item, index) => {
              return (
                <div className="allCompanyAdmin__content__bodyTable__item" key={item?.id}>
                <div className="allCompanyAdmin__content__bodyTable__item__stt column">
                  <p>{index+1}</p>
                </div>
                <div className="allCompanyAdmin__content__bodyTable__item__nameCompany column">
                  <p>{item?.name}</p>
                </div>
                <div className="allCompanyAdmin__content__bodyTable__item__email column">
                  <p>{item?.phone}</p>
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
              )
              
            })}
            
          </div>
        </div>
      </div>
    </>
  );
}
